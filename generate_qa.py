import os
import json
from google import genai

# 1. નવી Google GenAI સિસ્ટમનું સેટઅપ
client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])

# 2. ટ્રેકર ફાઈલ વાંચવી 
with open('system/progress_tracker.json', 'r') as f:
    tracker = json.load(f)

std = tracker['std']
subject = tracker['subject']
marks = tracker['current_marks']
chapter = tracker['current_chapter']

print(f"Generating {marks} Marks questions for Std {std} {subject} Chapter {chapter}...")

# 3. કડક નિયમો સાથેનો AI પ્રોમ્પ્ટ
prompt = f"""
તમે ગુજરાત બોર્ડ (GSEB) ના એક્સપર્ટ શિક્ષક છો. 
ધોરણ {std}, વિષય: {subject}, પ્રકરણ: {chapter} માંથી {marks} ગુણના અગત્યના પ્રશ્નો બનાવો.
ક્રમ: 1. સ્વાધ્યાયના પ્રશ્નો 2. અગાઉ પૂછાયેલા પ્રશ્નો (વર્ષ સાથે) 3. એક્સ્ટ્રા IMP.

કડક નિયમો:
- ક્યાંય પણ 'ગાલા', 'નવનીત', 'દર્પણ' કે અન્ય પ્રાઇવેટ પબ્લિકેશનનું નામ આવવું જોઈએ નહિ. 
- રેફરન્સ તરીકે માત્ર "NJ Classes IMP" કે "GSEB બોર્ડ આધારિત" લખવું.
- દરેક જવાબના અંતે "💡 નિતેશ સરની શોર્ટકટ ટ્રીક:" હેડિંગ સાથે દાખલો કે થિયરી જલ્દી યાદ રાખવાની ટ્રીક આપવી.
- આકૃતિની જરૂર હોય ત્યાં HTML/SVG કોડ વાપરવો.

આઉટપુટ માત્ર JavaScript ફોર્મેટમાં આપવું. 
પ્રશ્નના div નો કલર '#1a237e' અને જવાબના div નો કલર '#f5f7fa', બોર્ડર '#2196f3' રાખવી.
"""

# 4. માસ્ટર ઓટો-ડિટેક્ટ સિસ્ટમ (Google માંથી લાઈવ મોડેલ લિસ્ટ મંગાવશે)
print("Searching for live available AI models in your account...")
available_models = []
try:
    for model in client.models.list():
        # જે મોડેલ 'generateContent' સપોર્ટ કરતા હોય તેને જ લિસ્ટમાં લેશે
        if hasattr(model, 'supported_actions') and "generateContent" in model.supported_actions:
            available_models.append(model.name)
except Exception as e:
    print(f"Warning: Could not fetch model list automatically: {e}")
    # જો લિસ્ટ ખેંચવામાં એરર આવે, તો સીધા નીચેના લેટેસ્ટ મોડેલ ટ્રાય કરશે
    available_models = ['models/gemini-1.5-flash-latest', 'gemini-1.5-flash', 'models/gemini-pro']

if not available_models:
    print("Error: એકાઉન્ટમાં કોઈ મોડેલ ઉપલબ્ધ નથી.")
    exit(1)

# 'flash' વાળા મોડેલને સૌથી પહેલાં ટ્રાય કરવા માટે ગોઠવણી
available_models.sort(key=lambda x: 'flash' not in x.lower())
print(f"Found {len(available_models)} models. Top models to try: {available_models[:3]}")

output_data = ""

# 5. ડેટા જનરેટ કરવો
for m in available_models[:5]: # શરૂઆતના 5 બેસ્ટ મોડેલ ટ્રાય કરશે
    try:
        print(f"Trying to generate data using model: {m}...")
        response = client.models.generate_content(
            model=m,
            contents=prompt,
        )
        output_data = response.text.replace("```javascript", "").replace("```", "").strip()
        print(f"✅ Success! Data generated using {m}")
        break
    except Exception as e:
        print(f"❌ Failed with {m}. Error: {e}")

if not output_data:
    print("Error: બધી જ ટ્રાય ફેલ ગઈ છે. API Key ચાલુ છે કે નહિ તે ચકાસો.")
    exit(1)

# 6. ડેટાને ફાઇલમાં સેવ કરવો
folder_path = f"Std{std}/{subject}"
os.makedirs(folder_path, exist_ok=True)
file_path = f"{folder_path}/{subject}_{marks}_Marks.js"

mode = 'a' if os.path.exists(file_path) else 'w'
with open(file_path, mode, encoding='utf-8') as f:
    if mode == 'w':
        f.write(f"var Std{std}_{subject}_{marks}Marks = [\n")
    f.write(output_data + ",\n")

# 7. ટ્રેકર અપડેટ કરવું
tracker['current_chapter'] += 1 
with open('system/progress_tracker.json', 'w') as f:
    json.dump(tracker, f, indent=4)

print("Task Completed Successfully! Data Saved for NJ Classes.")

