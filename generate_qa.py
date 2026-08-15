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

print(f"Generating {marks} Marks questions for Std {std} {subject} Chapter {chapter}...")

# નવો, પાવરફુલ અને સિલેબસ-આધારિત પ્રોમ્પ્ટ
prompt = f"""
તમે ગુજરાત બોર્ડ (GSEB) ના એક્સપર્ટ શિક્ષક છો. આજનું વર્ષ 2026 છે.
તમારે ફરજિયાતપણે 2024 પછીના નવા ઘટાડેલા NCERT/GSEB સિલેબસ મુજબ જ ડેટા બનાવવાનો છે. જૂના સિલેબસના રદ થયેલા ટોપિક (જેમ કે યુક્લિડની ભાગ પ્રવિધિ વગેરે) બિલકુલ લેવાના નથી.

ધોરણ {std}, વિષય: {subject}, પ્રકરણ: {chapter} માંથી {marks} ગુણના ઓછામાં ઓછા 10 અગત્યના પ્રશ્નો બનાવો (જો શક્ય હોય તો).

ખાસ શરત (બ્લુપ્રિન્ટ અને બેઝિક/સ્ટાન્ડર્ડ ગણિત):
- પ્રશ્નો બનાવતા પહેલા ઓનલાઈન લેટેસ્ટ બ્લુપ્રિન્ટનું એનાલિસિસ કરો કે આ પ્રકરણમાંથી {marks} ગુણના પ્રશ્નો પૂછાય છે કે નહિ.
- પ્રાથમિકતા 'બેઝિક ગણિત' ને આપવી. 
- જો {marks} ગુણનો પ્રશ્ન બેઝિકમાં ન પૂછાતો હોય પણ 'સ્ટાન્ડર્ડ ગણિત' માં પૂછાતો હોય, તો પ્રશ્ન બનાવવો પણ reference માં "For Standard Maths" એવું ખાસ લખવું.

પ્રશ્નોનો ક્રમ આ મુજબ જ હોવો જોઈએ:
1. સ્વાધ્યાયના પ્રશ્નો
2. ઉદાહરણના પ્રશ્નો
3. અગાઉ બોર્ડમાં પૂછાયેલા પ્રશ્નો (નવા સિલેબસને અનુરૂપ હોય તેવા જ, વર્ષ સાથે)
4. એક્સ્ટ્રા IMP પ્રશ્નો

કડક નિયમો:
- ક્યાંય પણ 'ગાલા', 'નવનીત' કે અન્ય પ્રાઇવેટ પબ્લિકેશનનું નામ આવવું જોઈએ નહિ. 
- રેફરન્સ તરીકે માત્ર "NJ Classes IMP" કે "GSEB Board" લખવું.
- દરેક જવાબના અંતે "💡 નિતેશ સરની શોર્ટકટ ટ્રીક:" હેડિંગ સાથે દાખલો જલ્દી યાદ રાખવાની ટ્રીક આપવી.
- આકૃતિની જરૂર હોય ત્યાં HTML/SVG કોડ વાપરવો.

આઉટપુટ માત્ર JavaScript ફોર્મેટમાં આપવું. 
પ્રશ્નના div નો કલર '#1a237e' અને જવાબના div નો કલર '#f5f7fa', બોર્ડર '#2196f3' રાખવી.
"""

print("Searching for live available AI models...")
available_models = []
try:
    for model in client.models.list():
        if hasattr(model, 'supported_actions') and "generateContent" in model.supported_actions:
            available_models.append(model.name)
except Exception as e:
    available_models = ['models/gemini-1.5-flash-latest', 'gemini-1.5-flash', 'models/gemini-pro']

if not available_models:
    print("Error: એકાઉન્ટમાં કોઈ મોડેલ ઉપલબ્ધ નથી.")
    exit(1)

available_models.sort(key=lambda x: 'flash' not in x.lower())
output_data = ""

for m in available_models[:3]: 
    try:
        print(f"Trying model: {m}...")
        response = client.models.generate_content(
            model=m,
            contents=prompt,
        )
        output_data = response.text.replace("```javascript", "").replace("```", "").strip()
        print(f"✅ Success! Data generated.")
        break
    except Exception as e:
        print(f"❌ Failed with {m}")

if not output_data:
    print("Error: બધી ટ્રાય ફેલ ગઈ.")
    exit(1)

folder_path = f"Std{std}/{subject}"
os.makedirs(folder_path, exist_ok=True)
file_path = f"{folder_path}/{subject}_{marks}_Marks.js"

mode = 'a' if os.path.exists(file_path) else 'w'
with open(file_path, mode, encoding='utf-8') as f:
    if mode == 'w':
        f.write(f"var Std{std}_{subject}_{marks}Marks = [\n")
    f.write(output_data + ",\n")

tracker['current_chapter'] += 1 
with open('system/progress_tracker.json', 'w') as f:
    json.dump(tracker, f, indent=4)

print("Task Completed Successfully!")
