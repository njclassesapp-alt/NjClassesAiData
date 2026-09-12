import os
import json
import time
from google import genai

client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])

with open('system/progress_tracker.json', 'r', encoding='utf-8') as f:
    tracker = json.load(f)

if tracker.get('status') == "completed":
    print("🎉 ધોરણ 10 ના તમામ ભાષા વિષયોનો ડેટાબેઝ તૈયાર થઈ ગયો છે!", flush=True)
    exit(0)

# ધોરણ ૧૦ ગુજરાતી માધ્યમ ભાષાઓનો સિલેબસ
languages_syllabus = [
    {
        "folder": "Gujarati_FL",
        "name": "Gujarati",
        "guj_name": "ગુજરાતી (પ્રથમ ભાષા)",
        "chapters": 24,
        "special_instructions": "ગુજરાતી પ્રથમ ભાષા મુજબ કર્તા-કૃતિ-સાહિત્યપ્રકાર, કાવ્યપંક્તિનો ભાવાર્થ અને શુદ્ધ જોડણીનું ખાસ ધ્યાન રાખવું."
    },
    {
        "folder": "English_SL",
        "name": "English",
        "guj_name": "અંગ્રેજી (Second Language)",
        "chapters": 10,
        "special_instructions": "GSEB English SL મુજબ પ્રશ્નો અંગ્રેજીમાં અને જરૂર પડે ત્યાં ગુજરાતી સમજૂતી/ગ્લોસરી સાથે આપવા. Comprehension અને Short Notes બોર્ડ પેપર સ્ટાઇલ મુજબ રાખવી."
    },
    {
        "folder": "Hindi_SL",
        "name": "Hindi",
        "guj_name": "હિન્દી (દ્વિતીય ભાષા)",
        "chapters": 23,
        "special_instructions": "રાષ્ટ્રભાષા હિન્દીના વ્યાકરણ, કહાવતેં, મુહાવરે અને પાઠ્યપુસ્તકના પ્રશ્નો શુદ્ધ દેવનાગરી લિપિમાં આપવા."
    },
    {
        "folder": "Sanskrit_SL",
        "name": "Sanskrit",
        "guj_name": "સંસ્કૃત (દ્વિતીય ભાષા)",
        "chapters": 20,
        "special_instructions": "સંસ્કૃત પ્રશ્નોના ઉત્તરો (સંસ્કૃત અને ગુજરાતી બંને માધ્યમમાં પૂછાતા પ્રશ્નો), શ્લોક પૂર્તિ અને સંધિ-સમાસ બોર્ડ મુજબ આપવા."
    }
]

# પ્રશ્નોના ૩ કેટેગરી મોડ્યુલ
content_modules = [
    {
        "id": "Short_QA",
        "name": "હેતુલક્ષી અને ટૂંક જવાબી પ્રશ્નો (1 અને 2 ગુણ)",
        "target_count": 25,
        "desc": "કર્તા-કૃતિ, ૧ વાક્યના ઉત્તરો, ખાલી જગ્યા અને ૨ ગુણના ટૂંકા પ્રશ્નો-જવાબો."
    },
    {
        "id": "Long_QA",
        "name": "મુદ્દાસર અને સવિસ્તર ઉત્તરો (3 અને 4 ગુણ)",
        "target_count": 10,
        "desc": "સવિસ્તર પ્રશ્નો, વિચાર વિસ્તાર/ભાવાર્થ, સંદર્ભ સમજૂતી અને પાત્રાલેખન."
    },
    {
        "id": "Chapter_Grammar",
        "name": "પ્રકરણ આધારિત વ્યાકરણ અને શબ્દભંડોળ",
        "target_count": 30,
        "desc": "સમાનાર્થી, વિરોધી, જોડણી, રૂઢિપ્રયોગો, શબ્દસમૂહ માટે એક શબ્દ અને સંધિ."
    }
]

sub_idx = tracker['current_subject_index']
type_idx = tracker['current_type_index']
ch_num = tracker['current_chapter']

current_lang = languages_syllabus[sub_idx]
current_module = content_modules[type_idx]
max_chapters = current_lang["chapters"]

print(f"Generating {current_module['name']} for Std 10 {current_lang['guj_name']} Chapter {ch_num}...", flush=True)

prompt = f"""
તમે ગુજરાત માધ્યમિક શિક્ષણ બોર્ડ (GSEB) ધોરણ 10 ના વિષય નિષ્ણાત શિક્ષક છો.
માધ્યમ: ગુજરાતી માધ્યમ.
વિષય: {current_lang['guj_name']}
પ્રકરણ ક્રમાંક: {ch_num}

કાર્ય: આ પ્રકરણ માટે '{current_module['name']}' તૈયાર કરો.
વિગત: {current_module['desc']}
વિશેષ સૂચના: {current_lang['special_instructions']}

કડક ગુણવત્તા નિયમો (STRICT GUIDELINES):
1. શુદ્ધતા (ZERO MIXING): સામગ્રી માત્ર અને માત્ર ધોરણ 10 ના વિષય '{current_lang['guj_name']}' ના પ્રકરણ {ch_num} આધારિત જ હોવી જોઈએ.
2. સંખ્યા લક્ષ્યાંક: ઓછામાં ઓછા {current_module['target_count']} ઉત્કૃષ્ટ પ્રશ્નો/મુદ્દાઓ બનાવવા. જો પ્રકરણ નાનું હોય તો ગુણવત્તા જાળવીને મહત્તમ શક્ય પ્રશ્નો લેવા.
3. બોર્ડ પેપર સ્ટાઈલ: GSEB બોર્ડની નવીનતમ બ્લુપ્રિન્ટ મુજબના જ પ્રશ્નો રાખવા.
4. દરેક ઉત્તરમાં સમજૂતી સાથે '💡 નિતેશ સરની શોર્ટકટ ટ્રીક (NJ Classes)' ફરજિયાત સામેલ કરવી.

આઉટપુટ ફોર્મેટ (STRICT JSON OBJECT ONLY):
{{
  "chapterNumber": {ch_num},
  "chapterTitle": "પ્રકરણનું સાચું નામ",
  "contentType": "{current_module['name']}",
  "qa_list": [
    {{
      "questionNumber": "પ્રશ્ન 1",
      "question": "અહીં પ્રશ્ન અથવા વ્યાકરણનો પ્રશ્ન લખવો...",
      "answer": "<div style='background-color:#f0f8ff; padding:15px; border-left:5px solid #16a085; border-radius:8px;'><p><strong>ઉત્તર:</strong> અહીં આદર્શ ઉત્તર લખવો.</p><hr><p style='color:#d32f2f; font-weight:bold;'>💡 નિતેશ સરની શોર્ટકટ ટ્રીક: અહીં યાદ રાખવાની સહેલી રીત લખવી...</p></div>"
    }}
  ]
}}
"""

print("Checking available models...", flush=True)
valid_models = []
try:
    for model in client.models.list():
        if hasattr(model, 'supported_actions') and "generateContent" in model.supported_actions:
            name = model.name.lower()
            invalid_words = ['video', 'audio', 'tts', 'vision', 'image', 'exp', 'learnlm', 'embedding', 'aqa', '2.5-flash']
            if not any(word in name for word in invalid_words):
                valid_models.append(model.name)
except Exception as e:
    print(f"Model scan note: {e}", flush=True)

if not valid_models:
    valid_models = ["models/gemini-3-flash-preview"]

valid_models.sort(key=lambda x: ('flash' not in x.lower(), x))
print(f"Active Models: {valid_models}", flush=True)

output_data = ""

for m in valid_models[:3]:
    print(f"⏳ Processing with model: {m}...", flush=True)
    success = False
    
    # 503 સર્વર લોડ સામે ઓટોમેટિક રીટ્રાય
    for attempt in range(1, 4):
        try:
            response = client.models.generate_content(model=m, contents=prompt)
            raw_output = response.text.strip()
            
            if "{" in raw_output and "}" in raw_output:
                raw_output = raw_output[raw_output.find("{") : raw_output.rfind("}") + 1]
                
            output_data = raw_output.strip()
            print(f"✅ Success! ડેટા સફળતાપૂર્વક જનરેટ થયો.", flush=True)
            success = True
            break
        except Exception as e:
            err_msg = str(e)
            print(f"⚠️ પ્રયાસ {attempt}/3 માં એરર ({m}): {err_msg}", flush=True)
            if "NOT_FOUND" in err_msg or "no longer available" in err_msg:
                break
            time.sleep(6)
            
    if success:
        break

if not output_data:
    print("Error: ડેટા જનરેટ કરવામાં નિષ્ફળતા મળી.", flush=True)
    exit(1)

# ફાઈલ સેવિંગ લોજિક: Std10/Languages/Gujarati_FL/Gujarati_FL_Short_QA.js
folder_path = f"Std10/Languages/{current_lang['folder']}"
os.makedirs(folder_path, exist_ok=True)

mod_id = current_module['id']
file_path = f"{folder_path}/{current_lang['folder']}_{mod_id}.js"

mode = 'a' if os.path.exists(file_path) else 'w'
with open(file_path, mode, encoding='utf-8') as f:
    if mode == 'w':
        f.write(f"var Std10_{current_lang['folder']}_{mod_id} = {{\n")
        f.write(f'"{ch_num}": ' + output_data + '\n')
    else:
        f.write(f',\n"{ch_num}": ' + output_data + '\n')

# ટ્રાન્ઝિશન લોજિક: પ્રકરણ -> મોડ્યુલ પ્રકાર -> વિષય
tracker['current_chapter'] += 1

if tracker['current_chapter'] > max_chapters:
    tracker['current_chapter'] = 1
    tracker['current_type_index'] += 1
    
    if tracker['current_type_index'] >= len(content_modules):
        tracker['current_type_index'] = 0
        tracker['current_subject_index'] += 1
        
        if tracker['current_subject_index'] >= len(languages_syllabus):
            tracker['status'] = "completed"
            tracker['current_subject_index'] -= 1

with open('system/progress_tracker.json', 'w', encoding='utf-8') as f:
    json.dump(tracker, f, indent=4)

print("Task Completed Successfully! State updated.", flush=True)
