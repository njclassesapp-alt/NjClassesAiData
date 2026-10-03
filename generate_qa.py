import os
import json
import time
from google import genai

client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])

with open('system/progress_tracker.json', 'r', encoding='utf-8') as f:
    tracker = json.load(f)

if tracker.get('status') == "completed":
    print("🎉 ધોરણ 9 ના તમામ વિષયોનો ડેટાબેઝ સફળતાપૂર્વક તૈયાર થઈ ગયો છે!", flush=True)
    exit(0)

# ==========================================
# ૧. મુખ્ય વિષયોનો સિલેબસ (પ્રકરણ નામો સાથે)
# ==========================================
main_subjects = [
    {
        "name": "Maths",
        "guj_name": "ગણિત",
        "chapters": {
            1: "સંખ્યા પદ્ધતિ", 2: "બહુપદીઓ", 3: "યામ ભૂમિતિ",
            4: "દ્વિચલ સુરેખ સમીકરણો", 5: "યુક્લિડની ભૂમિતિનો પરિચય",
            6: "રેખાઓ અને ખૂણાઓ", 7: "ત્રિકોણ", 8: "ચતુષ્કોણ",
            9: "વર્તુળ", 10: "હેરોનનું સૂત્ર", 11: "પૃષ્ઠફળ અને ઘનફળ",
            12: "આંકડાશાસ્ત્ર"
        }
    },
    {
        "name": "Science",
        "guj_name": "વિજ્ઞાન",
        "chapters": {
            1: "આપણી આસપાસમાં દ્રવ્ય", 2: "શું આપણી આસપાસના દ્રવ્યો શુદ્ધ છે?",
            3: "પરમાણુઓ અને અણુઓ", 4: "પરમાણુનું બંધારણ", 5: "સજીવનો પાયાનો એકમ",
            6: "પેશીઓ", 7: "ગતિ", 8: "બળ તથા ગતિના નિયમો", 9: "ગુરુત્વાકર્ષણ",
            10: "કાર્ય અને ઊર્જા", 11: "ધ્વનિ", 12: "અન્નસ્ત્રોતોમાં સુધારણા"
        }
    },
    {
        "name": "SS",
        "guj_name": "સામાજિક વિજ્ઞાન",
        "chapters": {
            1: "ભારતમાં બ્રિટિશ સત્તાનો ઉદય", 2: "પ્રથમ વિશ્વયુદ્ધ અને રશિયન ક્રાંતિ",
            3: "દ્વિતીય વિશ્વયુદ્ધ પછીનું વિશ્વ", 4: "ભારતની રાષ્ટ્રીય ચળવળો",
            5: "ભારત: આઝાદી તરફ પ્રયાણ", 6: "૧૯૪૫ પછીનું વિશ્વ",
            7: "સ્વાતંત્ર્યોત્તર ભારત", 8: "ભારતના રાજ્યબંધારણનું ઘડતર અને લક્ષણો",
            9: "મૂળભૂત હકો, મૂળભૂત ફરજો અને રાજ્યનીતિના માર્ગદર્શક સિદ્ધાંતો",
            10: "સરકારનાં અંગો", 11: "ભારતનું ન્યાયતંત્ર", 12: "ભારતીય લોકશાહી",
            13: "ભારત: સ્થાન, ભૂસ્તરીય રચના અને ભૂપૃષ્ઠ - ૧",
            14: "ભારત: સ્થાન, ભૂસ્તરીય રચના અને ભૂપૃષ્ઠ - ૨",
            15: "જળ-પરિવાહ", 16: "આબોહવા", 17: "કુદરતી વનસ્પતિ",
            18: "વન્યજીવન", 19: "ભારત: લોકજીવન", 20: "આપત્તિ વ્યવસ્થાપન"
        }
    }
]

# ==========================================
# ૨. ભાષાઓનો સિલેબસ (ગુજરાતી માધ્યમ Std 9)
# ==========================================
languages_syllabus = [
    {
        "folder": "Gujarati_FL",
        "name": "Gujarati",
        "guj_name": "ગુજરાતી (પ્રથમ ભાષા)",
        "chapters": {
            1: "સાંજ સમયે શામળિયો (કાવ્ય)", 2: "ચોરી અને પ્રાયશ્ચિત્ત (પાઠ)", 3: "પછે શામળિયોજી બોલિયા (કાવ્ય)",
            4: "ગોપાળબાપા (પાઠ)", 5: "ગુર્જરીના ગૃહકુંજે (કાવ્ય)", 6: "લોહીની સગાઈ (પાઠ)",
            7: "કામ કરે ઈ જીતે (કાવ્ય)", 8: "છાલ, છોતરાં અને ગોટલા (પાઠ)", 9: "પુત્રવધૂનું સ્વાગત (કાવ્ય)",
            10: "ભારતીય સંસ્કૃતિની સિદ્ધિ (પાઠ)", 11: "મરજીવિયા (કાવ્ય)", 12: "સખી! માર્કંડી (પાઠ)",
            13: "રસ્તો કરી જવાના (કાવ્ય)", 14: "વાડી પરનાં વહાલાં (પાઠ)", 15: "તે બેસે અહીં (કાવ્ય)",
            16: "કુદરતી (એકાંકી)", 17: "મારા સપનામાં આવ્યા હરિ (કાવ્ય)", 18: "પંગું લંઘયતે ગિરિમ (પાઠ)",
            19: "પપ્પા હવે ફોન મૂકું? (કાવ્ય)", 20: "સમાજસમર્પિત શ્રેષ્ઠી (પાઠ)", 21: "તેજમલ (લોકગીત)",
            22: "બોળો (પાઠ)", 23: "લઘુકાવ્યો (દુહા, મુક્તક, હાઈકુ)", 24: "પ્રેરક પ્રસંગો (પૂરક વાચન)"
        },
        "special_instructions": "GSEB ધોરણ 9 પ્રથમ ભાષા મુજબ કર્તા-કૃતિ-સાહિત્યપ્રકાર, કાવ્યપંક્તિનો ભાવાર્થ અને જોડણી ધ્યાને રાખવી."
    },
    {
        "folder": "English_SL",
        "name": "English",
        "guj_name": "અંગ્રેજી (Second Language)",
        "chapters": {
            1: "Cheetah's Tears", 2: "Dental Health", 3: "Mohan's Veena",
            4: "Call of the Hills", 5: "Rani Ki Vav", 6: "The Night Train at Deoli",
            7: "Adolescents Speak", 8: "A Day in the Life of an Indian Air Force Fighter Pilot",
            9: "Friendship Never Dies", 10: "Ecology for Peace"
        },
        "special_instructions": "પ્રશ્નો અંગ્રેજીમાં રાખવા. જરૂર જણાય ત્યાં ગુજરાતી ગ્લોસરી અને સમજૂતી આપવી."
    },
    {
        "folder": "Hindi_SL",
        "name": "Hindi",
        "guj_name": "હિન્દી (દ્વિતીય ભાષા)",
        "chapters": {
            1: "आराधना (काव्य)", 2: "न्यायमंत्री (कहानी)", 3: "क्या निराश हुआ जाए (निबंध)",
            4: "कर्ण का जीवन-दर्शन (काव्य)", 5: "स्वराज्य की नींव (एकांकी)", 6: "मेरी बीमारी श्यामा ने ली (आत्मकथांश)",
            7: "सूरदास के पद (काव्य)", 8: "गुलमर्ग की खिड़की से एक रात (यात्रा-वृत्तांत)", 9: "निर्भय बनो (उपन्यास अंश)",
            10: "भारत गौरव (काव्य)", 11: "एक यात्रा यह भी (कहानी)", 12: "रानी (रेखाचित्र)",
            13: "नीति के दोहे (काव्य)", 14: "युग और मैं (काव्य)", 15: "दाज्यू (कहानी)",
            16: "अपरिचित से (काव्य)", 17: "जैसलमेर की सैर (यात्रा-डायरी)", 18: "दुख (कहानी)",
            19: "तोता और मैना (निबंध)", 20: "क्रांतिकारी शेखर का बचपन (उपन्यास अंश)", 21: "क्रांतिकारी का पत्र (पत्र)",
            22: "वीर बालक (एकांकी)", 23: "सूर-तुलसी के पद (काव्य)"
        },
        "special_instructions": "દેવનાગરી લિપિમાં શુદ્ધ હિન્દી મુહાવરે, કહાવતેં અને પ્રશ્નોત્તરી આપવી."
    },
    {
        "folder": "Sanskrit_SL",
        "name": "Sanskrit",
        "guj_name": "સંસ્કૃત (દ્વિતીય ભાષા)",
        "chapters": {
            1: "સમર્ચનમ્ (પદ્ય)", 2: "કુલસ્ય આચારઃ (ગદ્ય)", 3: "પરમ નિધાનમ્ (ગદ્ય)",
            4: "વલ્લભી વિદ્યાપીઠમ્ (ગદ્ય)", 5: "સુભાષિતમધુબિન્દવઃ (પદ્ય)", 6: "સર્વં ચારુતરં વસન્તે (પદ્ય)",
            7: "સંહતિઃ કાર્યસાધિકા (ગદ્ય)", 8: "કાષાયાણાં કોઽપરાધઃ (ગદ્ય)", 9: "ઉપકારહતસ્તુ કર્તવ્યઃ (નાટ્યખંડ)",
            10: "દ્વારિકસ્ય સેવાનિષ્ઠા (ગદ્ય)", 11: "વેદિતવ્યાનિ મિત્રાણિ (પદ્ય)", 12: "સુભાષિતસપ્તકમ્ (પદ્ય)",
            13: "દિષ્ટ્યા ગૌગ્રહણં સ્વન્તમ્ (નાટ્યખંડ)", 14: "હનુમદ્વર્ણિતરામવૃત્તાન્તઃ (પદ્ય)", 15: "સુદુર્લભા સર્વમનોરમા ગિરઃ (ગદ્ય)",
            16: "અજયઃ સ ભવિષ્યતિ (પદ્ય)", 17: "આચાર્યઃ ચરકઃ (ગદ્ય)", 18: "બિલસ્ય વાણી ન કદાપિ મે શ્રુતા (ગદ્ય)",
            19: "વિનોદપદ્યાનિ (પદ્ય)", 20: "સંસ્કૃતભાષાયાઃ વૈશિષ્ટ્યમ્ (ગદ્ય)"
        },
        "special_instructions": "સંસ્કૃત અને ગુજરાતી બંને માધ્યમમાં પૂછાતા ઉત્તરો, શ્લોકાર્થ અને સંધિ-સમાસ આપવા."
    }
]

# ભાષાના મોડ્યુલ્સ
language_modules = [
    {"id": "Short_QA", "name": "હેતુલક્ષી અને ટૂંક જવાબી પ્રશ્નો (1 અને 2 ગુણ)", "marks": "1 અને 2", "target_count": 25, "desc": "કર્તા-કૃતિ, ૧ વાક્યના ઉત્તરો અને ૨ ગુણના ટૂંકા પ્રશ્નો."},
    {"id": "Long_QA", "name": "મુદ્દાસર અને સવિસ્તર ઉત્તરો (3 અને 4 ગુણ)", "marks": "3 અને 4", "target_count": 10, "desc": "સવિસ્તર ઉત્તરો, કાવ્યાર્થ, ભાવાર્થ અને પાત્રાલેખન."},
    {"id": "Chapter_Grammar", "name": "પ્રકરણ આધારિત વ્યાકરણ અને શબ્દભંડોળ", "marks": "વ્યાકરણ", "target_count": 30, "desc": "સમાનાર્થી, વિરોધી, જોડણી, રૂઢિપ્રયોગો, શબ્દસમૂહ માટે એક શબ્દ."}
]

phase = tracker.get('phase', 'main_subjects')

# ==========================================
# ૩. પ્રોમ્પ્ટ અને સેવિંગ લોજિક
# ==========================================
if phase == "main_subjects":
    sub_idx = tracker['current_subject_index']
    current_sub = main_subjects[sub_idx]
    ch_num = tracker['current_chapter']
    marks = tracker['current_marks']
    ch_name = current_sub["chapters"].get(ch_num, "અન્ય")
    max_chapters = len(current_sub["chapters"])

    print(f"Generating Std 9 {current_sub['guj_name']} - પ્રકરણ {ch_num} ({ch_name}) - {marks} ગુણ...", flush=True)

    prompt = f"""
તમે GSEB ધોરણ 9 ના વિષય નિષ્ણાત શિક્ષક છો.
વિષય: {current_sub['guj_name']}
પ્રકરણ ક્રમાંક: {ch_num}
પ્રકરણનું નામ: {ch_name}
પ્રશ્નનો પ્રકાર: {marks} ગુણના પ્રશ્નો

કડક ગુણવત્તા નિયમો:
1. શુદ્ધતા (ZERO MIXING): આ સામગ્રી માત્ર અને માત્ર '{current_sub['guj_name']}' ના પ્રકરણ '{ch_name}' ની જ હોવી જોઈએ.
2. લેવલ: બરાબર {marks} ગુણના પ્રશ્નો હોવા જોઈએ. જો 4 ગુણ હોય તો વિસ્તૃત, 3 હોય તો મુદ્દાસર, અને 2 હોય તો ટૂંકા પ્રશ્નો.
3. સંખ્યા: ઓછામાં ઓછા 10 શ્રેષ્ઠ પ્રશ્નો આપવા (મોટું પ્રકરણ હોય તો વધુ બનાવવા).
4. દરેક ઉત્તરમાં '💡 નિતેશ સરની શોર્ટકટ ટ્રીક (NJ Classes)' ફરજિયાત સામેલ કરવી.

આઉટપુટ ફોર્મેટ (STRICT JSON ONLY):
{{
  "chapterName": "પ્રકરણ {ch_num}",
  "chapterTitle": "{ch_name}",
  "marks": {marks},
  "qa_list": [
    {{
      "questionNumber": "પ્રશ્ન 1",
      "marks": {marks},
      "question": "અહીં પ્રશ્ન લખવો...",
      "answer": "<div style='background-color:#f0f8ff; padding:15px; border-left:5px solid #16a085; border-radius:8px;'><p><strong>ઉત્તર:</strong> અહીં સંપૂર્ણ ઉકેલ/જવાબ લખવો.</p><hr><p style='color:#d32f2f; font-weight:bold;'>💡 નિતેશ સરની શોર્ટકટ ટ્રીક: અહીં યાદ રાખવાની રીત લખવી...</p></div>"
    }}
  ]
}}
"""

else:
    lang_idx = tracker['current_lang_index']
    type_idx = tracker['current_lang_type_index']
    ch_num = tracker['current_chapter']
    current_lang = languages_syllabus[lang_idx]
    current_mod = language_modules[type_idx]
    ch_name = current_lang["chapters"].get(ch_num, "અન્ય")
    max_chapters = len(current_lang["chapters"])

    print(f"Generating Std 9 {current_lang['guj_name']} - પ્રકરણ {ch_num} ({ch_name}) - {current_mod['name']}...", flush=True)

    prompt = f"""
તમે GSEB ધોરણ 9 ના ભાષા નિષ્ણાત શિક્ષક છો.
માધ્યમ: ગુજરાતી માધ્યમ.
વિષય: {current_lang['guj_name']}
પ્રકરણ ક્રમાંક: {ch_num}
પ્રકરણનું નામ: {ch_name}
મોડ્યુલ: {current_mod['name']} ({current_mod['marks']} માર્ક)

વિગત: {current_mod['desc']}
વિશેષ સૂચના: {current_lang['special_instructions']}

કડક ગુણવત્તા નિયમો:
1. શુદ્ધતા (ZERO MIXING): આ સામગ્રી માત્ર અને માત્ર '{current_lang['guj_name']}' ના પ્રકરણ '{ch_name}' ની જ હોવી જોઈએ.
2. સંખ્યા લક્ષ્યાંક: ઓછામાં ઓછા {current_mod['target_count']} પ્રશ્નો/મુદ્દાઓ બનાવવા.
3. દરેક ઉત્તરમાં '💡 નિતેશ સરની શોર્ટકટ ટ્રીક (NJ Classes)' ફરજિયાત સામેલ કરવી.

આઉટપુટ ફોર્મેટ (STRICT JSON ONLY):
{{
  "chapterName": "પ્રકરણ {ch_num}",
  "chapterTitle": "{ch_name}",
  "contentType": "{current_mod['name']}",
  "qa_list": [
    {{
      "questionNumber": "પ્રશ્ન 1",
      "question": "અહીં પ્રશ્ન લખવો...",
      "answer": "<div style='background-color:#f0f8ff; padding:15px; border-left:5px solid #16a085; border-radius:8px;'><p><strong>ઉત્તર:</strong> અહીં આદર્શ ઉત્તર લખવો.</p><hr><p style='color:#d32f2f; font-weight:bold;'>💡 નિતેશ સરની શોર્ટકટ ટ્રીક: અહીં યાદ રાખવાની સહેલી રીત લખવી...</p></div>"
    }}
  ]
}}
"""

# મોડલ કૉલિંગ
models_to_try = ["gemini-3-flash-preview", "gemini-2.0-flash", "gemini-1.5-flash"]
output_data = ""

for m in models_to_try:
    print(f"⏳ Processing with model: {m}...", flush=True)
    success = False
    for attempt in range(1, 4):
        try:
            response = client.models.generate_content(model=m, contents=prompt)
            raw_output = response.text.strip()
            if "{" in raw_output and "}" in raw_output:
                raw_output = raw_output[raw_output.find("{") : raw_output.rfind("}") + 1]
            output_data = raw_output.strip()
            print(f"✅ Success! ડેટા જનરેટ થઈ ગયો.", flush=True)
            success = True
            break
        except Exception as e:
            err_msg = str(e)
            print(f"⚠️ પ્રયાસ {attempt}/3 નિષ્ફળ ({m}): {err_msg}", flush=True)
            if "NOT_FOUND" in err_msg or "no longer available" in err_msg:
                break
            time.sleep(6)
    if success:
        break

if not output_data:
    print("Error: ડેટા જનરેટ કરવામાં નિષ્ફળતા મળી.", flush=True)
    exit(1)

# સેવિંગ લોજિક
if phase == "main_subjects":
    folder_path = f"Std9/{current_sub['name']}"
    os.makedirs(folder_path, exist_ok=True)
    file_path = f"{folder_path}/{current_sub['name']}_{marks}_Marks.js"
    var_name = f"Std9_{current_sub['name']}_{marks}Marks"
else:
    folder_path = f"Std9/Languages/{current_lang['folder']}"
    os.makedirs(folder_path, exist_ok=True)
    file_path = f"{folder_path}/{current_lang['folder']}_{current_mod['id']}.js"
    var_name = f"Std9_{current_lang['folder']}_{current_mod['id']}"

mode = 'a' if os.path.exists(file_path) else 'w'
with open(file_path, mode, encoding='utf-8') as f:
    if mode == 'w':
        f.write(f"var {var_name} = {{\n")
        f.write(f'"{ch_num}": ' + output_data + '\n')
    else:
        f.write(f',\n"{ch_num}": ' + output_data + '\n')

# ==========================================
# ૪. ટ્રાન્ઝિશન લોજિક (સ્ટેટ મશીન)
# ==========================================
tracker['current_chapter'] += 1

if phase == "main_subjects":
    if tracker['current_chapter'] > max_chapters:
        tracker['current_chapter'] = 1
        tracker['current_marks'] -= 1  # 4 -> 3 -> 2 ગુણ
        
        if tracker['current_marks'] < 2:
            tracker['current_marks'] = 4
            tracker['current_subject_index'] += 1
            
            # જો ત્રણેય મુખ્ય વિષયો પૂરા થઈ જાય તો ભાષાઓ પર જવું
            if tracker['current_subject_index'] >= len(main_subjects):
                print("🎉 મુખ્ય વિષયો પૂરા થયા! હવે ભાષાઓ શરૂ થશે...", flush=True)
                tracker['phase'] = "languages"
                tracker['current_lang_index'] = 0
                tracker['current_lang_type_index'] = 0
                tracker['current_chapter'] = 1

else:  # languages
    if tracker['current_chapter'] > max_chapters:
        tracker['current_chapter'] = 1
        tracker['current_lang_type_index'] += 1
        
        if tracker['current_lang_type_index'] >= len(language_modules):
            tracker['current_lang_type_index'] = 0
            tracker['current_lang_index'] += 1
            
            if tracker['current_lang_index'] >= len(languages_syllabus):
                tracker['status'] = "completed"

with open('system/progress_tracker.json', 'w', encoding='utf-8') as f:
    json.dump(tracker, f, indent=4)

print("Task Completed Successfully! Tracker updated.", flush=True)
