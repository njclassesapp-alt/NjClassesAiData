import os
import json
from google import genai

client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])

with open('system/progress_tracker.json', 'r') as f:
    tracker = json.load(f)

std = tracker['std']
subject = tracker['subject']
marks = tracker['current_marks']
chapter_num = tracker['current_chapter']

# ધોરણ 10 ગણિતના નવા ઘટાડેલા સિલેબસ (NCERT 2024+) નું લિસ્ટ
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

chapter_name = ""
max_chapters = len(std10_maths_chapters) # કુલ 14 ચેપ્ટર

if int(std) == 10 and subject.lower() == "maths":
    chapter_name = std10_maths_chapters.get(chapter_num, "અન્ય પ્રકરણ")

print(f"Generating {marks} Marks questions for Std {std} {subject} Chapter {chapter_num} ({chapter_name})...", flush=True)

prompt = f"""
તમે ગુજરાત બોર્ડ (GSEB) ના એક્સપર્ટ શિક્ષક છો. 
તમારે 2024 પછીના નવા ઘટાડેલા NCERT સિલેબસ મુજબ ધોરણ {std}, વિષય: {subject}, પ્રકરણ: {chapter_num} ({chapter_name}) માંથી {marks} ગુણના પ્રશ્નો બનાવવાના છે.

ખાસ નોંધ: પ્રશ્નો ફક્ત અને ફક્ત '{chapter_name}' (પ્રકરણ {chapter_num}) ના નવા સિલેબસ આધારિત જ હોવા જોઈએ. ભૂલથી પણ જૂના સિલેબસના પ્રકરણના પ્રશ્નો મિક્સ કરવા નહિ.

પ્રશ્નોના લેવલ અને માર્ક્સ માટેના ખાસ નિયમો (SMART WORK & MAX QUESTIONS):
1. પ્રશ્નોની સંખ્યા: ઓછામાં ઓછા 10 પ્રશ્નો બનાવવા. જો આ પ્રકરણ મોટું હોય તો 10 થી વધુ (મેક્સિમમ) પ્રશ્નો બનાવવાની પૂરી કોશિશ કરવી.
2. લંબાઈ અને કાઠિન્ય: પ્રશ્નોનું લેવલ બોર્ડના પેપરો અને ગાલા અસાઇનમેન્ટ મુજબનું રાખવું. {marks} ગુણના પ્રશ્નની લંબાઈ અને ગણતરી બરાબર {marks} ગુણ જેટલી જ હોવી જોઈએ.
3. સ્માર્ટ વર્ક: જો આ પ્રકરણમાંથી {marks} ગુણનો મોટો પ્રશ્ન ન બની શકતો હોય, તો 2 નાના પ્રશ્નોને (i) અને (ii) તરીકે ભેગા કરીને એક મોટો પ્રશ્ન બનાવવો.

કડક નિયમો (STRICT RULES):
- આઉટપુટમાં કોઈ પણ પ્રકારનો વેરીએબલ (var, let, const) બનાવવાનો નથી.
- કોઈ પણ પ્રકારની કોમેન્ટ (// કે /** */) લખવાની નથી.
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

ફક્ત આ જ ફોર્મેટમાં ડેટા આપવો. શરૂઆતમાં કે અંતમાં કોઈ વધારાનું લખાણ ન હોવું જોઈએ.
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
        print(f"⏳ Pending: {m} મોડલ દ્વારા ડેટા બની રહ્યો છે, કૃપા કરીને રાહ જુઓ...", flush=True)
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
# નવો ઉમેરો: સ્માર્ટ લૂપ સિસ્ટમ (માર્ક્સ અને ચેપ્ટર ઓટોમેટિક રીસેટ)
# ---------------------------------------------------------
tracker['current_chapter'] += 1 

if tracker['current_chapter'] > max_chapters:  # જો 14 મુ ચેપ્ટર પૂરું થઈ જાય તો
    tracker['current_chapter'] = 1             # પાછું ચેપ્ટર 1 કરી દો
    tracker['current_marks'] -= 1              # માર્ક્સ 1 ઘટાડી દો (દા.ત. 4 ના 3)
    
    if tracker['current_marks'] < 1:           # જો 1 માર્કના પણ પૂરા થઈ જાય તો
        tracker['status'] = "completed"        # આખો વિષય પૂરો!

with open('system/progress_tracker.json', 'w') as f:
    json.dump(tracker, f, indent=4)

print("Task Completed Successfully! Saved for NJ Classes.", flush=True)
