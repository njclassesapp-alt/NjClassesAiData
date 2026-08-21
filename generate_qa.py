import os
import json
from google import genai

client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])

with open('system/progress_tracker.json', 'r') as f:
    tracker = json.load(f)

# --- ત્રણેય વિષયોના સિલેબસનું લિસ્ટ ---
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

# નવો ઉમેરો: સામાજિક વિજ્ઞાનના 23 પ્રકરણો
std10_ss_chapters = {
    1: "ભારતનો વારસો", 2: "ભારતનો સાંસ્કૃતિક વારસો: પરંપરાઓ: હસ્ત અને લલિતકલા",
    3: "ભારતનો સાંસ્કૃતિક વારસો: શિલ્પ અને સ્થાપત્ય", 4: "ભારતનો સાહિત્યિક વારસો",
    5: "ભારતનો વિજ્ઞાન અને ટેકનોલોજીનો વારસો", 6: "ભારતના સાંસ્કૃતિક વારસાનાં સ્થળો",
    7: "આપણા વારસાનું જતન", 8: "કુદરતી સંસાધનો", 9: "વન અને વન્યજીવ સંસાધન",
    10: "ભારત: કૃષિ", 11: "ભારત: જળ સંસાધન", 12: "ભારત: ખનીજ અને શક્તિનાં સંસાધનો",
    13: "ઉત્પાદન ઉદ્યોગો", 14: "પરિવહન, સંદેશાવ્યવહાર અને વ્યાપાર", 15: "આર્થિક વિકાસ",
    16: "આર્થિક ઉદારીકરણ વૈશ્વિકીકરણ", 17: "આર્થિક સમસ્યાઓ અને પડકારો: ગરીબી અને બેરોજગારી",
    18: "ભાવવધારો અને ગ્રાહક જાગૃતિ", 19: "માનવ વિકાસ", 20: "ભારતની સામાજિક સમસ્યાઓ અને પડકારો",
    21: "સામાજિક પરિવર્તન", 22: "પ્રકૃતિમાં પોષણ-વ્યવસ્થા", 23: "માર્ગ-સલામતી અને વાહનચાલક"
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
    subject_rules = "- સ્માર્ટ વર્ક: 2 નાના પ્રશ્નો ભેગા કરી 4 માર્કના મોટા પ્રશ્નો બનાવવા."
elif subject.lower() == "science":
    max_chapters = len(std10_science_chapters)
    chapter_name = std10_science_chapters.get(chapter_num, "અન્ય પ્રકરણ")
    blueprint = {i: [2, 3, 4] for i in range(1, max_chapters + 1)}
    subject_rules = "- આ વિજ્ઞાનનો વિષય છે. આકૃતિ વાળા અને મુદ્દાસર સચોટ જવાબો આપવા."
else:  # સામાજિક વિજ્ઞાન (SS)
    max_chapters = len(std10_ss_chapters)
    chapter_name = std10_ss_chapters.get(chapter_num, "અન્ય પ્રકરણ")
    blueprint = {i: [2, 3, 4] for i in range(1, max_chapters + 1)}
    subject_rules = "- આ સામાજિક વિજ્ઞાનનો વિષય છે. ઐતિહાસિક, ભૌગોલિક અને આર્થિક મુદ્દાસર વિસ્તૃત જવાબો આપવા."

# --- ઓટો-સ્કીપ લોજીક ---
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

if subject.lower() == "maths":
    chapter_name = std10_maths_chapters.get(chapter_num, "અન્ય")
elif subject.lower() == "science":
    chapter_name = std10_science_chapters.get(chapter_num, "અન્ય")
else:
    chapter_name = std10_ss_chapters.get(chapter_num, "અન્ય")

print(f"Generating {marks} Marks questions for Std {std} {subject} Chapter {chapter_num} ({chapter_name})...", flush=True)

# નવો કડક પ્રોમ્પ્ટ: મેક્સિમમ પ્રશ્નો અને નો-રીપીટેશન લોજીક
prompt = f"""
તમે ગુજરાત બોર્ડ (GSEB) ના એક્સપર્ટ શિક્ષક છો. 
તમારે 2024 પછીના નવા ઘટાડેલા NCERT સિલેબસ મુજબ ધોરણ {std}, વિષય: {subject}, પ્રકરણ: {chapter_num} ({chapter_name}) માંથી {marks} ગુણના પ્રશ્નો બનાવવાના છે.

પ્રશ્નોની સંખ્યા અને લેવલ માટેના અત્યંત કડક નિયમો (STRICT QUALITY CONTROL):
1. સંખ્યા (ફરજિયાત મેક્સિમમ): 10 પ્રશ્નો તો ફરજિયાત કાઢવાના જ છે! પણ જો આ પ્રકરણ મોટું હોય, તો 10 પર અટકવું નહિ, 15, 20 કે જેટલા વધુ પ્રશ્નો બની શકતા હોય તેટલા મેક્સિમમ પ્રશ્નો ફરજિયાત બનાવવા.
2. નો-રીપીટેશન (NO REPETITION): જે પ્રશ્ન {marks} ગુણમાં પૂછ્યો હોય તે અગાઉ 4 કે 3 ગુણમાં ન પૂછાયો હોવો જોઈએ. પ્રશ્નો એકબીજામાં રીપીટ ન થવા જોઈએ.
3. એક્ઝેક્ટ લેવલ: પ્રશ્નોની લંબાઈ અને ડેપ્થ બરાબર {marks} ગુણ જેટલી જ હોવી જોઈએ. જો 4 ગુણ હોય તો માત્ર મોટા અને અત્યંત વિસ્તૃત પ્રશ્નો જ લેવા. જો 2 ગુણ હોય તો માત્ર ટૂંકા પ્રશ્નો લેવા.
4. ક્રમ: પહેલા અગાઉ પૂછાયેલા બોર્ડના પ્રશ્નો (વર્ષ સાથે) અને પછી મોસ્ટ IMP પ્રશ્નો લેવા.
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
      "answer": "<div style='background-color:#f0f8ff; padding:15px; border-left:5px solid #16a085; border-radius:8px;'><p><strong>ઉકેલ:</strong></p><p>અહીં સંપૂર્ણ ઉકેલના સ્ટેપ્સ લખવા (જરૂર પડે ત્યાં આકૃતિ માટે SVG વાપરવું).</p><hr><p style='color:#d32f2f; font-weight:bold;'>💡 નિતેશ સરની શોર્ટકટ ટ્રીક / યાદ રાખવાની રીત: અહીં ટ્રીક લખવી...</p><p style='color:#64748b; font-size:14px;'><strong>Reference:</strong> GSEB Board / NJ Classes IMP</p></div>"
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
# ટ્રાન્ઝિશન લોજીક: ગણિત -> વિજ્ઞાન -> સામાજિક વિજ્ઞાન (SS)
# ---------------------------------------------------------
tracker['current_chapter'] += 1 
if tracker['current_chapter'] > max_chapters:
    tracker['current_chapter'] = 1
    tracker['current_marks'] -= 1

# 1. ગણિતમાંથી વિજ્ઞાનમાં જવું
if tracker['subject'].lower() == "maths" and tracker['current_marks'] < 2:
    print("🎉 ગણિત વિષય પૂરો થયો છે! હવે વિજ્ઞાન વિષય શરૂ થશે...", flush=True)
    tracker['subject'] = "Science"
    tracker['current_marks'] = 4
    tracker['current_chapter'] = 1

# 2. વિજ્ઞાનમાંથી સામાજિક વિજ્ઞાન (SS) માં જવું
elif tracker['subject'].lower() == "science" and tracker['current_marks'] < 2:
    print("🎉 વિજ્ઞાન વિષય પૂરો થયો છે! હવે સામાજિક વિજ્ઞાન (SS) શરૂ થશે...", flush=True)
    tracker['subject'] = "SS"
    tracker['current_marks'] = 4
    tracker['current_chapter'] = 1

# 3. સામાજિક વિજ્ઞાન પૂરું થાય એટલે ઓટોમેશન કમ્પ્લીટ
elif tracker['subject'].lower() in ["ss", "social science"] and tracker['current_marks'] < 2:
    print("🎉 સામાજિક વિજ્ઞાન પણ પૂરો થયો છે! ઓટોમેશન પૂર્ણ થયું.", flush=True)
    tracker['status'] = "completed"

with open('system/progress_tracker.json', 'w') as f:
    json.dump(tracker, f, indent=4)

print("Task Completed Successfully!", flush=True)
