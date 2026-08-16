import os
import json
from google import genai

client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])

with open('system/progress_tracker.json', 'r') as f:
    tracker = json.load(f)

std10_maths_chapters = {
    1: "વાસ્તવિક સંખ્યાઓ",
    2: "બહુપદીઓ",
    3: "દ્વિચલ સુરેખ સમીકરણયુગ્મ",
    4: "દ્વિઘાત સમીકરણ",
    5: "સમાંતર શ્રેણી",
    6: "ત્રિકોણ",
    7: "યામ ભૂમિતિ",
    8: "ત્રિકોણમિતિનો પરિચય",
    9: "ત્રિકોણમિતિનો ઉપયોગ",
    10: "વર્તુળ",
    11: "વર્તુળ સંબંધિત ક્ષેત્રફળ",
    12: "પૃષ્ઠફળ અને ઘનફળ",
    13: "આંકડાશાસ્ત્ર",
    14: "સંભાવના"
}

# ---------------------------------------------------------
# નવો ઉમેરો: બોર્ડની બ્લુપ્રિન્ટ (કયા પ્રકરણમાંથી કેટલા ગુણના પ્રશ્નો પૂછાય છે)
# (તમે તમારી અનુકૂળતા મુજબ આમાં ફેરફાર કરી શકો છો)
# ---------------------------------------------------------
blueprint = {
    1: [2],                # પ્રકરણ 1 માંથી માત્ર 2 ગુણના
    2: [2, 3],             # પ્રકરણ 2 માંથી 2 અને 3 ગુણના
    3: [2, 3, 4],
    4: [2, 3, 4],
    5: [2, 3, 4],
    6: [2, 3, 4],          # પ્રમેય વગેરે
    7: [2, 3],
    8: [2, 3, 4],
    9: [3, 4],
    10: [2, 3, 4],         # પ્રમેય વગેરે
    11: [2, 3],
    12: [3, 4],
    13: [2, 3, 4],
    14: [2, 3, 4]             # સંભાવનામાંથી 4 ગુણના ન પૂછાય 
}

# --- ઓટો-સ્કીપ લોજીક ---
found_valid_chapter = False
while tracker['current_marks'] >= 1 and not found_valid_chapter:
    current_ch = tracker['current_chapter']
    current_mk = tracker['current_marks']
    
    # જો આ ચેપ્ટરમાંથી આ માર્કના પ્રશ્નો પૂછાતા હોય તો લૂપ તોડી નાખો
    if current_mk in blueprint.get(current_ch, [1, 2, 3, 4]):
        found_valid_chapter = True
    else:
        # નહિ તો સ્કીપ કરો અને આગળ વધો
        print(f"⏭️ સ્કીપિંગ: પ્રકરણ {current_ch} માંથી {current_mk} ગુણના પ્રશ્નો પૂછાતા નથી.", flush=True)
        tracker['current_chapter'] += 1
        
        if tracker['current_chapter'] > len(std10_maths_chapters):
            tracker['current_chapter'] = 1
            tracker['current_marks'] -= 1

if tracker['current_marks'] < 1:
    print("બધા જ માર્ક્સ અને પ્રકરણો પૂરા થઈ ગયા છે!")
    tracker['status'] = "completed"
    with open('system/progress_tracker.json', 'w') as f:
        json.dump(tracker, f, indent=4)
    exit(0)

# ફાઇનલ નક્કી થયેલા માર્ક્સ અને ચેપ્ટર
std = tracker['std']
subject = tracker['subject']
marks = tracker['current_marks']
chapter_num = tracker['current_chapter']
chapter_name = std10_maths_chapters.get(chapter_num, "અન્ય પ્રકરણ")

print(f"Generating {marks} Marks questions for Std {std} {subject} Chapter {chapter_num} ({chapter_name})...", flush=True)

# પ્રોમ્પ્ટમાં લેવલ મેન્ટેન કરવા માટેની કડક સૂચના
prompt = f"""
તમે ગુજરાત બોર્ડ (GSEB) ના એક્સપર્ટ શિક્ષક છો. 
તમારે 2024 પછીના નવા ઘટાડેલા NCERT સિલેબસ મુજબ ધોરણ {std}, વિષય: {subject}, પ્રકરણ: {chapter_num} ({chapter_name}) માંથી {marks} ગુણના પ્રશ્નો બનાવવાના છે.

ખાસ નોંધ (STRICT QUALITY CONTROL):
1. લેવલ અને લંબાઈ: પ્રશ્નોનું લેવલ બરાબર {marks} ગુણને અનુરૂપ જ હોવું જોઈએ. જો {marks} ગુણ 4 હોય, તો માત્ર લાંબા દાખલા, પ્રમેય કે કઠિન પ્રશ્નો જ લેવા. જો 3 ગુણ હોય, તો મધ્યમ લંબાઈના દાખલા લેવા. પ્રશ્નોનું લેવલ મિક્સ ન થવું જોઈએ જેથી ડેટાબેઝમાં એક સરખા પ્રશ્નો રીપીટ ન થાય.
2. પ્રશ્નોની સંખ્યા: ઓછામાં ઓછા 10 પ્રશ્નો બનાવવા. જો આ પ્રકરણ મોટું હોય તો 10 થી વધુ (મેક્સિમમ) પ્રશ્નો બનાવવાની પૂરી કોશિશ કરવી.
3. સ્માર્ટ વર્ક: જો {marks} ગુણનો મોટો પ્રશ્ન સીધો ન બની શકતો હોય, તો 2 નાના પ્રશ્નોને (i) અને (ii) તરીકે ભેગા કરીને એક મોટો પ્રશ્ન બનાવવો.

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

# ટ્રેકર અપડેટ કરવું (આગળ વધારવું)
tracker['current_chapter'] += 1 
if tracker['current_chapter'] > len(std10_maths_chapters):
    tracker['current_chapter'] = 1
    tracker['current_marks'] -= 1

with open('system/progress_tracker.json', 'w') as f:
    json.dump(tracker, f, indent=4)

print("Task Completed Successfully! Blueprint Logic Applied.", flush=True)
