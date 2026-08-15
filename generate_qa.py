import os
import json
from google import genai

client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])

with open('system/progress_tracker.json', 'r') as f:
    tracker = json.load(f)

std = tracker['std']
subject = tracker['subject']
marks = tracker['current_marks']
chapter = tracker['current_chapter']

print(f"Generating {marks} Marks questions for Std {std} {subject} Chapter {chapter}...", flush=True)

# નવો પ્રોમ્પ્ટ: ૧૦ થી વધુ પ્રશ્નો બનાવવા માટેની સૂચના ઉમેરી છે
prompt = f"""
તમે ગુજરાત બોર્ડ (GSEB) ના એક્સપર્ટ શિક્ષક છો. 
તમારે 2024 પછીના નવા ઘટાડેલા NCERT સિલેબસ મુજબ ધોરણ {std}, વિષય: {subject}, પ્રકરણ: {chapter} માંથી {marks} ગુણના પ્રશ્નો બનાવવાના છે.

પ્રશ્નોના લેવલ અને માર્ક્સ માટેના ખાસ નિયમો (SMART WORK & MAX QUESTIONS):
1. પ્રશ્નોની સંખ્યા: ઓછામાં ઓછા 10 પ્રશ્નો બનાવવા. પરંતુ જો આ પ્રકરણ મોટું હોય અને તેમાં વધુ અગત્યના પ્રશ્નો પૂછાઈ શકતા હોય, તો 10 થી વધુ (જેટલા શક્ય હોય તેટલા મેક્સિમમ) પ્રશ્નો બનાવવાની પૂરી કોશિશ કરવી.
2. લંબાઈ અને કાઠિન્ય: પ્રશ્નોનું લેવલ બોર્ડના પેપરો અને ગાલા અસાઇનમેન્ટ મુજબનું રાખવું.
3. સ્માર્ટ વર્ક: જો આ પ્રકરણમાંથી {marks} ગુણનો મોટો પ્રશ્ન ન બની શકતો હોય, તો 2 નાના પ્રશ્નોને (i) અને (ii) તરીકે ભેગા કરીને એક મોટો પ્રશ્ન બનાવવો.

કડક નિયમો (STRICT RULES):
- આઉટપુટમાં કોઈ પણ પ્રકારનો વેરીએબલ (var, let, const) બનાવવાનો નથી.
- કોઈ પણ પ્રકારની કોમેન્ટ (// કે /** */) લખવાની નથી.
- માત્ર ને માત્ર નીચે આપેલા JSON Object ફોર્મેટમાં જ ડેટા આપવો.

ફોર્મેટ (આ જ માળખું વાપરવું):
{{
  "chapterName": "પ્રકરણ {chapter}",
  "chapterTitle": "અહીં પ્રકરણનું સાચું નામ લખવું (દા.ત. વાસ્તવિક સંખ્યાઓ)",
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

# ડેટા જનરેટ કરવો
for m in valid_models[:3]:
    try:
        # flush=True થી આ મેસેજ તરત જ લાઈવ દેખાશે (Pending status)
        print(f"⏳ Pending: {m} મોડલ દ્વારા ડેટા બની રહ્યો છે, કૃપા કરીને રાહ જુઓ...", flush=True)
        
        response = client.models.generate_content(
            model=m,
            contents=prompt,
        )
        
        raw_output = response.text.strip()
        
        if "{" in raw_output and "}" in raw_output:
            raw_output = raw_output[raw_output.find("{") : raw_output.rfind("}") + 1]
            
        output_data = raw_output.strip()
        
        # આ મેસેજ ડેટા બની ગયા પછી જ દેખાશે
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
        f.write(f'"{chapter}": ' + output_data + '\n')
    else:
        f.write(f',\n"{chapter}": ' + output_data + '\n')

# ટ્રેકર અપડેટ કરવું
tracker['current_chapter'] += 1 
with open('system/progress_tracker.json', 'w') as f:
    json.dump(tracker, f, indent=4)

print("Task Completed Successfully! Saved for NJ Classes.", flush=True)

