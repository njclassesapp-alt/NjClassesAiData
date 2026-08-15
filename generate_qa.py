import os
import json
import google.generativeai as genai

# 1. API સેટઅપ (જે આપણે સિક્રેટમાં સેવ કરી છે)
genai.configure(api_key=os.environ["GEMINI_API_KEY"])
model = genai.GenerativeModel('gemini-1.5-pro')

# 2. ટ્રેકર ફાઈલ વાંચવી (આજે કયું ચેપ્ટર કરવાનું છે તે જાણવા)
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

# 4. ડેટા જનરેટ કરવો
response = model.generate_content(prompt)
output_data = response.text.replace("```javascript", "").replace("```", "").strip()

# 5. ડેટાને ફાઇલમાં સેવ કરવો
folder_path = f"Std{std}/{subject}"
os.makedirs(folder_path, exist_ok=True)
file_path = f"{folder_path}/{subject}_{marks}_Marks.js"

mode = 'a' if os.path.exists(file_path) else 'w'
with open(file_path, mode, encoding='utf-8') as f:
    if mode == 'w':
        f.write(f"var Std{std}_{subject}_{marks}Marks = [\n")
    f.write(output_data + ",\n")

# 6. ટ્રેકર અપડેટ કરવું (આગળના દિવસ માટે પ્રકરણ બદલવું)
tracker['current_chapter'] += 1 
with open('system/progress_tracker.json', 'w') as f:
    json.dump(tracker, f, indent=4)

print("Task Completed Successfully! Data Saved for NJ Classes.")

