import os
import json
from google import genai

client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])

with open('system/progress_tracker.json', 'r') as f:
    tracker = json.load(f)

# --- બંને વિષયોના નવા ઘટાડેલા સિલેબસ (NCERT 2024+) નું લિસ્ટ ---
std10_maths_chapters = {
    1: "વાસ્તવિક સંખ્યાઓ", 2: "બહુપદીઓ", 3: "દ્વિચલ સુરેખ સમીકરણયુગ્મ", 4: "દ્વિઘાત સમીકરણ",
    5: "સમાંતર શ્રેણી", 6: "ત્રિકોણ", 7: "યામ ભૂમિતિ", 8: "ત્રિકોણમિતિનો પરિચય",
    9: "ત્રિકોણમિતિનો ઉપયોગ", 10: "વર્તુળ", 11: "વર્તુળ સંબંધિત ક્ષેત્રફળ", 12: "પૃષ્ઠફળ અને ઘનફળ",
    13: "આંકડાશાસ્ત્ર", 14: "સંભાવના"
}

std10_science_chapters = {
    1: "રાસાયણિક પ્રક્રિયાઓ અને સમીકરણો", 2: "ઍસિડ, બેઇઝ અને ક્ષાર", 3: "ધાતુઓ અને અધાતુઓ",
    4: "કાર્બન અને તેનાં સંયોજનો", 5: "જૈવિક ક્રિયાઓ", 6: "નિયંત્રણ અને સંકલન",
    7: "સજીવો કેવી રીતે પ્રજનન કરે છે?", 8: "આનુવંશિકતા", 9: "પ્રકાશ - પરાવર્તન અને વક્રીભવન",
    10: "માનવ આંખ અને રંગબેરંગી દુનિયા", 11: "વિદ્યુત", 12: "વિદ્યુતપ્રવાહની ચુંબકીય અસરો",
    13: "આપણું પર્યાવરણ"
}

subject = tracker['subject']
chapter_num = tracker['current_chapter']
marks = tracker['current_marks']

# વિષય પ્રમાણે બ્લુપ્રિન્ટ અને પ્રકરણ નક્કી કરવા
if subject.lower() == "maths":
    max_chapters = len(std10_maths_chapters)
    chapter_name = std10_maths_chapters.get(chapter_num, "અન્ય પ્રકરણ")
    blueprint = {
        1: [2], 2: [2, 3], 3: [2, 3, 4], 4: [2, 3, 4], 5: [2, 3, 4], 6: [2, 3, 4],
        7: [2, 3], 8: [2, 3, 4], 9: [3, 4], 10: [2, 3, 4], 11: [2, 3], 12: [3, 4], 
        13: [2, 3, 4], 14: [2, 3]
    }
    subject_rules = "- સ્માર્ટ વર્ક: 2 નાના પ્રશ્નો ભેગા કરી મોટા પ્રશ્નો બનાવવા."
else:
    max_chapters = len(std10_science_chapters)
    chapter_name = std10_science_chapters.get(chapter_num, "અન્ય પ્રકરણ")
    # વિજ્ઞાનમાં કોઈ બ્લુપ્રિન્ટ મર્યાદા નથી, બધામાં 4, 3, 2 માર્ક્સ ચાલશે
    blueprint = {i: [2, 3, 4] for i in range(1, max_chapters + 1)}
    subject_rules = "- આ વિજ્ઞાનનો વિષય છે. આકૃતિ વાળા અને મુદ્દાસર જવાબો આપવા."

# --- ઓટો-સ્કીપ લોજીક (જો માર્ક્સ બ્લુપ્રિન્ટમાં ન હોય તો) ---
found_valid_chapter = False
while tracker['current_marks'] >= 2 and not found_valid_chapter:
    current_ch = tracker['current_chapter']
    current_mk = tracker['current_marks']
    
    if current_mk in blueprint.get(current_ch, [2, 3, 4]):
        found_valid_chapter = True
    else:
        print(f"⏭️ સ્કીપિંગ: પ્રકરણ {current_ch} માંથી {current_mk} ગુણના પ્રશ્નો પૂછાતા નથી.", flush=True)
        tracker['current_chapter'] += 1
        if tracker['current_chapter'] > max_chapters:
            tracker['current_chapter'] = 1
            tracker['current_marks'] -= 1

std = tracker['std']
marks = tracker['current_marks']
chapter_num = tracker['current_chapter']
chapter_name = (std10_maths_chapters if subject.lower() == "maths" else std10_science_chapters).get(chapter_num, "અન્ય")

print(f"Generating {marks} Marks questions for Std {std} {subject} Chapter {chapter_num} ({chapter_name})...", flush=True)

# નવો પ્રોમ્પ્ટ: મેક્સિમમ પ્રશ્નો અને નો-રીપીટેશન લોજીક સાથે
prompt = f"""
તમે ગુજરાત બોર્ડ (GSEB) ના એક્સપર્ટ શિક્ષક છો. 
તમારે 2024 પછીના નવા ઘટાડેલા NCERT સિલેબસ મુજબ ધોરણ {std}, વિષય: {subject}, પ્રકરણ: {chapter_num} ({chapter_name}) માંથી {marks} ગુણના પ્રશ્નો બનાવવાના છે.

પ્રશ્નોની સંખ્યા અને લેવલ માટેના કડક નિયમો (STRICT QUALITY CONTROL):
1. સંખ્યા (મેક્સિમમ): માત્ર 10 પર અટકવું નહિ. આ પ્રકરણમાંથી {marks} ગુણના જેટલા પણ વધુમાં વધુ પ્રશ્નો બની શકતા હોય (15, 20 કે તેથી વધુ), તે બધા જ બનાવવા. કોઈ અગત્યનો પ્રશ્ન છૂટવો ન જોઈએ.
2. નો-રીપીટેશન અને લેવલ: {marks} ગુણના પ્રશ્નોની લંબાઈ બરાબર {marks} ગુણ જેટલી જ હોવી જોઈએ. જો 4 ગુણ હોય તો માત્ર મોટા અને વિસ્તૃત પ્રશ્નો જ લેવા. આ પ્રશ્નો ભવિષ્યમાં 3 કે 2 ગુણમાં રીપીટ ન થવા જોઈએ. માર્ક્સ પ્રમાણે જ પ્રશ્નોનું સિલેક્શન કરવું.
3. ક્રમ અને પસંદગી: 
   - સૌથી પહેલા: અગાઉ બોર્ડની પરીક્ષામાં પૂછાયેલા મોસ્ટ IMP પ્રશ્નો (વર્ષના ઉલ્લેખ સાથે).
   - ત્યારબાદ: પૂછાવાની સૌથી વધુ શક્યતા ધરાવતા નવા અને લોજીકલ પ્રશ્નો.
{subject_rules}

કડક નિયમો (STRICT FORMATTING):
- આઉટપુટમાં કોઈ પણ પ્રકારનો વેરીએબલ (var, let, const) બનાવવાનો નથી.
- માત્ર ને માત્ર નીચે આપેલા JSON Object ફોર્મેટમાં જ ડેટા આપવો.

ફોર્મેટ (આ જ માળખું વાપરવું):
{{
  "chapterName": "પ્રકરણ {chapter_num}",
  "chapterTitle": "{chapter_name}",
  "qa_list": [
    {{
      "questionNumber": "પ્રશ્ન 1",
      "marks": {marks},
      "question": "અહીં પ્રશ્ન લખવો...",
      "answer": "<div style='background-color:#f0f8ff; padding:15px; border-left:5px solid #16a085; border-radius:8px;'><p><strong>ઉકેલ:</strong></p><p>અહીં સંપૂર્ણ ઉકેલના સ્ટેપ્સ લખવા (જરૂર પડે ત્યાં આકૃતિ માટે SVG વાપરવું).</p><hr><p style='color:#d32f2f; font-weight:bold;'>💡 નિતેશ સરની શોર્ટકટ ટ્રીક: અહીં શોર્ટકટ ટ્રીક લખવી...</p><p style='color:#64748b; font-size:14px;'><strong>Reference:</strong> GSEB Board / NJ Classes IMP</p></div>"
    }}
  ]
}}
"""

print("Searching for live text models from your API account...", flush=True)
valid_models = []
try:
    for model in client.models.list():
        if hasattr(model, 'supported_actions') and "generateContent" in model.supported_actions:
            name = model.name.lower()
            invalid_words = ['video', 'audio', 'tts', 'vision', 'image', 'exp', 'learnlm', 'embedding', 'aqa']
            if not any(word in name for word in invalid_words):
                valid_models.append(model.name)
except Exception as e:
    print(f"Error fetching models: {e}", flush=True)

if not valid_models:
    print("Error: No valid text models found in this account.", flush=True)
    exit(1)

valid_models.sort(key=lambda x: ('flash' not in x.lower(), x))
output_data = ""

for m in valid_models[:3]:
    try:
        print(f"⏳ Pending: {m} મોડલ દ્વારા ડેટા બની રહ્યો છે...", flush=True)
        response = client.models.generate_content(model=m, contents=prompt)
        raw_output = response.text.strip()
        
        if "{" in raw_output and "}" in raw_output:
            raw_output = raw_output[raw_output.find("{") : raw_output.rfind("}") + 1]
            
        output_data = raw_output.strip()
        print(f"✅ Success! ડેટા સફળતાપૂર્વક બની ગયો છે.", flush=True)
        break
    except Exception as e:
        print(f"❌ Failed with {m}. Error: {e}", flush=True)

if not output_data:
    print("Error: બધી જ ટ્રાય ફેલ ગઈ છે.", flush=True)
    exit(1)

# ડેટા સેવ કરવો
folder_path = f"Std{std}/{subject}"
os.makedirs(folder_path, exist_ok=True)
file_path = f"{folder_path}/{subject}_{marks}_Marks.js"

mode = 'a' if os.path.exists(file_path) else 'w'
with open(file_path, mode, encoding='utf-8') as f:
    if mode == 'w':
        f.write(f"var Std{std}_{subject}_{marks}Marks = {{\n")
        f.write(f'"{chapter_num}": ' + output_data + '\n')
    else:
        f.write(f',\n"{chapter_num}": ' + output_data + '\n')

# ---------------------------------------------------------
# નવો ઉમેરો: ગણિત પૂરું થતાં વિજ્ઞાન શરૂ કરવાનું માસ્ટર લોજીક
# ---------------------------------------------------------
tracker['current_chapter'] += 1 
if tracker['current_chapter'] > max_chapters:
    tracker['current_chapter'] = 1
    tracker['current_marks'] -= 1

# જો ગણિતના 2 માર્કના બધા ચેપ્ટર પૂરા થાય, તો વિજ્ઞાન 4 માર્કથી ચાલુ કરો
if tracker['subject'].lower() == "maths" and tracker['current_marks'] < 2:
    print("🎉 ગણિત વિષય પૂરો થયો છે! હવે વિજ્ઞાન વિષય શરૂ થશે...", flush=True)
    tracker['subject'] = "Science"
    tracker['current_marks'] = 4
    tracker['current_chapter'] = 1

# જો વિજ્ઞાનના પણ 2 માર્કના બધા ચેપ્ટર પૂરા થાય, તો ઓટોમેશન પૂરું!
if tracker['subject'].lower() == "science" and tracker['current_marks'] < 2:
    print("🎉 વિજ્ઞાન વિષય પણ પૂરો થયો છે! ઓટોમેશન પૂર્ણ થયું.", flush=True)
    tracker['status'] = "completed"

with open('system/progress_tracker.json', 'w') as f:
    json.dump(tracker, f, indent=4)

print("Task Completed Successfully!", flush=True)
