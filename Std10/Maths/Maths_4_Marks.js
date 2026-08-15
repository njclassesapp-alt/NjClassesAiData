var Std10_Maths_4Marks = [
/**
 * પ્રકરણ-1: વાસ્તવિક સંખ્યાઓ (Real Numbers) - અગત્યના 4 ગુણના પ્રશ્નો
 * શૈક્ષણિક વર્ષ: 2025-26 (નવો અભ્યાસક્રમ)
 * લેટેસ્ટ બ્લુપ્રિન્ટ મુજબ વિશ્લેષણ: 
 * સામાન્ય રીતે આ પ્રકરણમાંથી 2 અને 3 ગુણના પ્રશ્નો વધુ પુછાય છે, 
 * પરંતુ 'બેઝિક ગણિત' માં વિભાગ-D માં જોડાણવાળા પ્રશ્નો અથવા 
 * 'સ્ટાન્ડર્ડ ગણિત' માં સાબિતીના લાંબા પ્રશ્નો 4 ગુણમાં આવી શકે છે.
 */

const mathsImpQuestions = [
    {
        id: 1,
        type: "સ્વાધ્યાયના પ્રશ્નો",
        standard: "For Standard Maths",
        question: "સાબિત કરો કે √5 અસંમેય સંખ્યા છે. (સંપૂર્ણ વિગતવાર સાબિતી આપો).",
        answer: `
            <div style="background-color: #1a237e; color: white; padding: 20px; border-radius: 10px; margin-bottom: 10px; border: 2px solid #2196f3;">
                <h3>પ્રશ્ન 1: સાબિત કરો કે √5 અસંમેય સંખ્યા છે.</h3>
                <p><strong>ગુણ: 4 (Standard Maths માટે અત્યંત મહત્વનું)</strong></p>
            </div>
            <div style="background-color: #f5f7fa; color: #333; padding: 20px; border-radius: 10px; border: 1px solid #2196f3; line-height: 1.6;">
                <p><strong>ઉકેલ:</strong></p>
                <p>ધારો કે √5 સંમેય સંખ્યા છે. તેથી પરસ્પર અવિભાજ્ય પૂર્ણાંકો a અને b (b ≠ 0) એવા મળે કે જેથી:</p>
                <p>√5 = a / b</p>
                <p>બંને બાજુ વર્ગ કરતા: 5 = a² / b² => 5b² = a²  --- (1)</p>
                <p>અહીં, a² એ 5 વડે વિભાજ્ય છે, તેથી પ્રમેય 1.2 મુજબ a પણ 5 વડે વિભાજ્ય હોય.</p>
                <p>ધારો કે a = 5c (જ્યાં c કોઈ પૂર્ણાંક છે). કિંમત (1) માં મુકતા:</p>
                <p>5b² = (5c)² => 5b² = 25c² => b² = 5c²</p>
                <p>અહીં, b² એ 5 વડે વિભાજ્ય છે, તેથી b પણ 5 વડે વિભાજ્ય હોય.</p>
                <p>આમ, a અને b બંનેનો સામાન્ય અવયવ 5 છે, જે આપણી ધારણા (a અને b અવિભાજ્ય છે) થી વિરુદ્ધ છે.</p>
                <p>તેથી, √5 એ અસંમેય સંખ્યા છે.</p>
                <hr>
                <p><strong>રેફરન્સ:</strong> NJ Classes IMP / GSEB Board</p>
                <p style="color: #d32f2f;"><strong>💡 નિતેશ સરની શોર્ટકટ ટ્રીક:</strong> આ દાખલામાં "ઊંધી ધારણા" કરવાની ટ્રીક યાદ રાખો. પહેલા સંમેય ધારો, છેલ્લે વિરોધાભાસ લાવો. (યાદ રાખો: √2, √3 કે √5 ગમે તે હોય, પદ્ધતિ સરખી જ રહેશે!)</p>
            </div>
        `
    },
    {
        id: 2,
        type: "ઉદાહરણના પ્રશ્નો",
        standard: "Basic & Standard",
        question: "અવિભાજ્ય અવયવીકરણની રીતથી 6, 72 અને 120 નો ગુ.સા.અ. અને લ.સા.અ. શોધો.",
        answer: `
            <div style="background-color: #1a237e; color: white; padding: 20px; border-radius: 10px; margin-bottom: 10px; border: 2px solid #2196f3;">
                <h3>પ્રશ્ન 2: 6, 72 અને 120 નો ગુ.સા.અ. અને લ.સા.અ. શોધો.</h3>
                <p><strong>ગુણ: 4 (Basic Maths માટે અગત્યનું)</strong></p>
            </div>
            <div style="background-color: #f5f7fa; color: #333; padding: 20px; border-radius: 10px; border: 1px solid #2196f3; line-height: 1.6;">
                <p><strong>ઉકેલ:</strong></p>
                <p>6 = 2¹ × 3¹</p>
                <p>72 = 2³ × 3² (8 × 9)</p>
                <p>120 = 2³ × 3¹ × 5¹ (8 × 3 × 5)</p>
                <br>
                <p><b>ગુ.સા.અ. (6, 72, 120):</b> દરેક સંખ્યામાં આવતા સામાન્ય અવિભાજ્ય અવયવની <b>લઘુત્તમ</b> ઘાતનો ગુણાકાર.</p>
                <p>ગુ.સા.અ. = 2¹ × 3¹ = <b>6</b></p>
                <br>
                <p><b>લ.સા.અ. (6, 72, 120):</b> તમામ અવિભાજ્ય અવયવોની <b>મહત્તમ</b> ઘાતનો ગુણાકાર.</p>
                <p>લ.સા.અ. = 2³ × 3² × 5¹ = 8 × 9 × 5 = <b>360</b></p>
                <hr>
                <p><strong>રેફરન્સ:</strong> NJ Classes IMP / GSEB Board</p>
                <p style="color: #d32f2f;"><strong>💡 નિતેશ સરની શોર્ટકટ ટ્રીક:</strong> <b>ગુ</b>.સા.અ. માં '<b>ગુ</b>' એટલે '<b>ગુ</b>ણ' નાના (નાની ઘાત) અને <b>લ</b>.સા.અ. માં '<b>લ</b>' એટલે '<b>લ</b>ઠ્ઠ' (મોટી ઘાત) યાદ રાખવી!</p>
            </div>
        `
    },
    {
        id: 3,
        type: "અગાઉ બોર્ડમાં પૂછાયેલા પ્રશ્નો",
        standard: "Basic Maths",
        question: "એક રમતના મેદાનમાં વર્તુળાકાર માર્ગ છે. સોનિયાને એક પરિભ્રમણ પૂર્ણ કરતા 18 મિનિટ લાગે છે, જ્યારે રવિને 12 મિનિટ લાગે છે. જો બંને એક જ સમયે એક જ દિશામાં દોડવાનું શરૂ કરે, તો કેટલી મિનિટ બાદ ફરી પ્રારંભબિંદુ પર ભેગા થશે? (March 2024 જેવો)",
        answer: `
            <div style="background-color: #1a237e; color: white; padding: 20px; border-radius: 10px; margin-bottom: 10px; border: 2px solid #2196f3;">
                <h3>પ્રશ્ન 3: સોનિયા અને રવિ ફરી ક્યારે ભેગા થશે?</h3>
            </div>
            <div style="background-color: #f5f7fa; color: #333; padding: 20px; border-radius: 10px; border: 1px solid #2196f3; line-height: 1.6;">
                <p><strong>ઉકેલ:</strong></p>
                <p>બંને ફરી પ્રારંભબિંદુ પર મળે તે સમય શોધવા માટે 18 અને 12 નો <b>લ.સા.અ.</b> શોધવો પડે.</p>
                <p>18 ના અવિભાજ્ય અવયવ = 2 × 3 × 3 = 2¹ × 3²</p>
                <p>12 ના અવિભાજ્ય અવયવ = 2 × 2 × 3 = 2² × 3¹</p>
                <p>લ.સા.અ. (18, 12) = 2² × 3² = 4 × 9 = <b>36</b></p>
                <p>આમ, બંને <b>36 મિનિટ</b> પછી ફરી પ્રારંભબિંદુ પર ભેગા થશે.</p>
                <hr>
                <p><strong>રેફરન્સ:</strong> GSEB Board (Updated)</p>
                <p style="color: #d32f2f;"><strong>💡 નિતેશ સરની શોર્ટકટ ટ્રીક:</strong> જ્યારે કોઈ ઘટના ફરી ક્યારે સાથે થશે તેવું પૂછાય (જેમ કે ઘંટ વાગવો, દોડવું), ત્યારે હંમેશા <b>લ.સા.અ.</b> જ શોધવો.</p>
            </div>
        `
    },
    {
        id: 4,
        type: "એક્સ્ટ્રા IMP પ્રશ્નો",
        standard: "For Standard Maths",
        question: "સાબિત કરો કે 7√5 અસંમેય છે.",
        answer: `
            <div style="background-color: #1a237e; color: white; padding: 20px; border-radius: 10px; margin-bottom: 10px; border: 2px solid #2196f3;">
                <h3>પ્રશ્ન 4: સાબિત કરો કે 7√5 અસંમેય છે.</h3>
            </div>
            <div style="background-color: #f5f7fa; color: #333; padding: 20px; border-radius: 10px; border: 1px solid #2196f3; line-height: 1.6;">
                <p>ધારો કે 7√5 સંમેય છે.</p>
                <p>તેથી, 7√5 = a/b (જ્યાં a, b અવિભાજ્ય પૂર્ણાંક, b ≠ 0)</p>
                <p>√5 = a / (7b)</p>
                <p>અહીં a, 7 અને b પૂર્ણાંકો હોવાથી a/7b એ સંમેય સંખ્યા થાય.</p>
                <p>પરંતુ ડાબી બાજુ √5 એ અસંમેય સંખ્યા છે.</p>
                <p>સંમેય ≠ અસંમેય. આથી આપણી ધારણા ખોટી છે.</p>
                <p>તેથી 7√5 એ અસંમેય સંખ્યા છે.</p>
                <hr>
                <p><strong>રેફરન્સ:</strong> NJ Classes IMP</p>
                <p style="color: #d32f2f;"><strong>💡 નિતેશ સરની શોર્ટકટ ટ્રીક:</strong> આવા દાખલામાં √ વાળી સંખ્યાને એકલી પાડો (Subject બનાવો). બાકીનું બધું જમણી બાજુ લઈ જાઓ.</p>
            </div>
        `
    },
    {
        id: 5,
        type: "એક્સ્ટ્રા IMP પ્રશ્નો",
        standard: "Basic Maths",
        question: "જો ગુ.સા.અ. (306, 657) = 9 આપેલ હોય, તો લ.સા.અ. (306, 657) શોધો.",
        answer: `
            <div style="background-color: #1a237e; color: white; padding: 20px; border-radius: 10px; margin-bottom: 10px; border: 2px solid #2196f3;">
                <h3>પ્રશ્ન 5: લ.સા.અ. શોધો (સૂત્રનો ઉપયોગ કરીને).</h3>
            </div>
            <div style="background-color: #f5f7fa; color: #333; padding: 20px; border-radius: 10px; border: 1px solid #2196f3; line-height: 1.6;">
                <p><b>સૂત્ર:</b> ગુ.સા.અ. (a, b) × લ.સા.અ. (a, b) = a × b</p>
                <p>9 × લ.સા.અ. (306, 657) = 306 × 657</p>
                <p>લ.સા.અ. = (306 × 657) / 9</p>
                <p>લ.સા.અ. = 34 × 657 = <b>22338</b></p>
                <hr>
                <p><strong>રેફરન્સ:</strong> GSEB Board / NJ Classes IMP</p>
                <p style="color: #d32f2f;"><strong>💡 નિતેશ સરની શોર્ટકટ ટ્રીક:</strong> ગુણાકાર કરવામાં સમય ન બગાડવો, પહેલા છેદ ઉડાડવો (Simplify first, then multiply!).</p>
            </div>
        `
    },
    {
        id: 6,
        type: "સ્વાધ્યાયના પ્રશ્નો",
        standard: "Basic & Standard",
        question: "સમજાવો કે 7 × 11 × 13 + 13 અને 7 × 6 × 5 × 4 × 3 × 2 × 1 + 5 શા માટે વિભાજ્ય સંખ્યાઓ છે?",
        answer: `
            <div style="background-color: #1a237e; color: white; padding: 20px; border-radius: 10px; margin-bottom: 10px; border: 2px solid #2196f3;">
                <h3>પ્રશ્ન 6: વિભાજ્ય સંખ્યાની સમજૂતી આપો.</h3>
            </div>
            <div style="background-color: #f5f7fa; color: #333; padding: 20px; border-radius: 10px; border: 1px solid #2196f3; line-height: 1.6;">
                <p><b>(i) 7 × 11 × 13 + 13:</b></p>
                <p>= 13 (7 × 11 + 1) = 13 (77 + 1) = 13 × 78</p>
                <p>અહીં સંખ્યાને 1 અને સંખ્યા પોતે તે સિવાયના અવયવો (13 અને 78) છે, તેથી તે વિભાજ્ય છે.</p>
                <p><b>(ii) 7 × 6 × 5 × 4 × 3 × 2 × 1 + 5:</b></p>
                <p>= 5 (7 × 6 × 4 × 3 × 2 × 1 + 1) = 5 (1008 + 1) = 5 × 1009</p>
                <p>અહીં પણ સંખ્યાને 5 અને 1009 જેવા અવયવો હોવાથી તે વિભાજ્ય છે.</p>
                <hr>
                <p><strong>રેફરન્સ:</strong> NJ Classes IMP</p>
                <p style="color: #d32f2f;"><strong>💡 નિતેશ સરની શોર્ટકટ ટ્રીક:</strong> જે સંખ્યા પ્લસ (+) પછી આપી હોય તેને સામાન્ય (Common) કાઢી લો, એટલે સાબિત થઈ જશે!</p>
            </div>
        `
    },
    {
        id: 7,
        type: "એક્સ્ટ્રા IMP પ્રશ્નો",
        standard: "For Standard Maths",
        question: "સાબિત કરો કે 3 + 2√5 અસંમેય છે.",
        answer: `
            <div style="background-color: #1a237e; color: white; padding: 20px; border-radius: 10px; margin-bottom: 10px; border: 2px solid #2196f3;">
                <h3>પ્રશ્ન 7: 3 + 2√5 ની અસંમેયતા સાબિત કરો.</h3>
            </div>
            <div style="background-color: #f5f7fa; color: #333; padding: 20px; border-radius: 10px; border: 1px solid #2196f3; line-height: 1.6;">
                <p>ધારો કે 3 + 2√5 સંમેય છે. તેથી 3 + 2√5 = a/b</p>
                <p>2√5 = a/b - 3</p>
                <p>2√5 = (a - 3b) / b</p>
                <p>√5 = (a - 3b) / 2b</p>
                <p>અહીં (a - 3b) / 2b એ સંમેય સંખ્યા છે, પરંતુ √5 અસંમેય છે.</p>
                <p>આથી વિરોધાભાસ સર્જાય છે. 3 + 2√5 અસંમેય છે.</p>
                <hr>
                <p><strong>રેફરન્સ:</strong> GSEB Board / NJ Classes IMP</p>
                <p style="color: #d32f2f;"><strong>💡 નિતેશ સરની શોર્ટકટ ટ્રીક:</strong> સ્ટેપ્સ: 1. સંમેય ધારો, 2. √ વાળી સંખ્યાને એકલી પાડો, 3. વિરોધાભાસ લખો.</p>
            </div>
        `
    },
    {
        id: 8,
        type: "અગાઉ બોર્ડમાં પૂછાયેલા પ્રશ્નો",
        standard: "Basic Maths",
        question: "એક લશ્કરનું 616 સભ્યોનું જૂથ લશ્કરના બેન્ડના 32 સભ્યોની પાછળ કૂચ કરી રહ્યું છે. બંને જૂથ સમાન સંખ્યાના સ્તંભમાં કૂચ કરી રહ્યા છે. તેઓ જે સ્તંભમાં કૂચ કરી રહ્યા છે તેવા કોઈપણ સ્તંભમાં મહત્તમ કેટલા સભ્યો હશે?",
        answer: `
            <div style="background-color: #1a237e; color: white; padding: 20px; border-radius: 10px; margin-bottom: 10px; border: 2px solid #2196f3;">
                <h3>પ્રશ્ન 8: સ્તંભની મહત્તમ સંખ્યા શોધો.</h3>
            </div>
            <div style="background-color: #f5f7fa; color: #333; padding: 20px; border-radius: 10px; border: 1px solid #2196f3; line-height: 1.6;">
                <p>મહત્તમ સંખ્યા શોધવા માટે 616 અને 32 નો <b>ગુ.સા.અ.</b> શોધવો પડે.</p>
                <p>616 = 2 × 2 × 2 × 7 × 11 = 2³ × 7 × 11</p>
                <p>32 = 2 × 2 × 2 × 2 × 2 = 2⁵</p>
                <p>ગુ.સા.અ. (616, 32) = 2³ = <b>8</b></p>
                <p>આમ, મહત્તમ 8 સ્તંભ હશે.</p>
                <hr>
                <p><strong>રેફરન્સ:</strong> NJ Classes IMP / GSEB Board</p>
                <p style="color: #d32f2f;"><strong>💡 નિતેશ સરની શોર્ટકટ ટ્રીક:</strong> રકમમાં જ્યારે '<b>મહત્તમ</b>' શબ્દ આવે ત્યારે <b>ગુ.સા.અ.</b> શોધવો અને '<b>લઘુત્તમ</b>' આવે ત્યારે <b>લ.સા.અ.</b> શોધવો.</p>
            </div>
        `
    },
    {
        id: 9,
        type: "એક્સ્ટ્રા IMP પ્રશ્નો",
        standard: "Basic Maths",
        question: "અવિભાજ્ય અવયવની રીતે 96 અને 404 નો ગુ.સા.અ. શોધો અને તે પરથી તેનો લ.સા.અ. શોધો.",
        answer: `
            <div style="background-color: #1a237e; color: white; padding: 20px; border-radius: 10px; margin-bottom: 10px; border: 2px solid #2196f3;">
                <h3>પ્રશ્ન 9: 96 અને 404 નો ગુ.સા.અ. અને લ.સા.અ.</h3>
            </div>
            <div style="background-color: #f5f7fa; color: #333; padding: 20px; border-radius: 10px; border: 1px solid #2196f3; line-height: 1.6;">
                <p>96 = 2⁵ × 3</p>
                <p>404 = 2² × 101</p>
                <p>ગુ.સા.અ. (96, 404) = 2² = <b>4</b></p>
                <p>લ.સા.અ. = (96 × 404) / 4 = 96 × 101 = <b>9696</b></p>
                <hr>
                <p><strong>રેફરન્સ:</strong> NJ Classes IMP</p>
                <p style="color: #d32f2f;"><strong>💡 નિતેશ સરની શોર્ટકટ ટ્રીક:</strong> 404 ના અવયવ પાડતી વખતે 101 અવિભાજ્ય છે તે ખાસ યાદ રાખવું!</p>
            </div>
        `
    },
    {
        id: 10,
        type: "એક્સ્ટ્રા IMP પ્રશ્નો",
        standard: "For Standard Maths",
        question: "કોઈપણ પ્રાકૃતિક સંખ્યા n માટે 6ⁿ નો અંતિમ અંક 0 હોઈ શકે કે કેમ? સમજાવો.",
        answer: `
            <div style="background-color: #1a237e; color: white; padding: 20px; border-radius: 10px; margin-bottom: 10px; border: 2px solid #2196f3;">
                <h3>પ્રશ્ન 10: 6ⁿ નો અંતિમ અંક શૂન્ય હોઈ શકે?</h3>
            </div>
            <div style="background-color: #f5f7fa; color: #333; padding: 20px; border-radius: 10px; border: 1px solid #2196f3; line-height: 1.6;">
                <p>જો કોઈ સંખ્યાનો અંતિમ અંક 0 હોય, તો તેના અવિભાજ્ય અવયવોમાં 2 અને 5 બંને હોવા જોઈએ.</p>
                <p>અહીં, 6ⁿ = (2 × 3)ⁿ = 2ⁿ × 3ⁿ</p>
                <p>6ⁿ ના અવિભાજ્ય અવયવીકરણમાં માત્ર 2 અને 3 છે, 5 નથી.</p>
                <p>અંકગણિતના મૂળભૂત પ્રમેય મુજબ, આ અવયવીકરણ અનન્ય છે.</p>
                <p>તેથી, 6ⁿ નો અંતિમ અંક ક્યારેય 0 હોઈ શકે નહીં.</p>
                <hr>
                <p><strong>રેફરન્સ:</strong> NJ Classes IMP / GSEB Board</p>
                <p style="color: #d32f2f;"><strong>💡 નિતેશ સરની શોર્ટકટ ટ્રીક:</strong> યાદ રાખો: અંતે 0 લાવવા માટે 2 અને 5 ની જોડી (Pair) હોવી જ જોઈએ. (2 × 5 = 10)</p>
            </div>
        `
    }
];

// આ ફંક્શન HTML માં પ્રશ્નો ડિસ્પ્લે કરવા માટે વાપરી શકાય છે
function getImpQuestionsHTML() {
    return mathsImpQuestions.map(q => q.answer).join('<br><br>');
}

console.log("NJ Classes IMP - 2026 Batch - Std 10 Maths Ch 1 Loaded");,
