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
/**
 * GSEB Standard 10 - Maths - Chapter 2: Polynomials (બહુપદીઓ)
 * Year: 2026 (New NCERT Syllabus Post-2024)
 * Blueprint Analysis: 
 * - Standard Maths: Section D (4 marks) questions are often asked as multi-part verification or Case Study.
 * - Basic Maths: Section D (4 marks) usually features "Case Study" based on graphs of polynomials.
 * Reference: NJ Classes IMP / GSEB Board
 */

const gsebMathsData = {
  chapterName: "બહુપદીઓ (Polynomials)",
  chapterNumber: 2,
  standard: 10,
  year: 2026,
  questions: [
    {
      id: 1,
      category: "સ્વાધ્યાયના પ્રશ્નો",
      marks: 4,
      reference: "NJ Classes IMP (For Standard Maths)",
      question: "દ્વિઘાત બહુપદી 6x² - 3 - 7x ના શૂન્યો શોધો અને તેના શૂન્યો અને સહગુણકો વચ્ચેનો સંબંધ ચકાસો.",
      styling: {
        questionBg: "#1a237e",
        answerBg: "#f5f7fa",
        borderColor: "#2196f3"
      },
      answer: "<b>પગલું 1:</b> બહુપદીને પ્રમાણિત સ્વરૂપમાં ગોઠવતા: p(x) = 6x² - 7x - 3<br><b>પગલું 2:</b> શૂન્યો શોધવા માટે p(x) = 0 લેતા,<br>6x² - 9x + 2x - 3 = 0<br>3x(2x - 3) + 1(2x - 3) = 0<br>(2x - 3)(3x + 1) = 0<br>તેથી, x = 3/2 અથવા x = -1/3<br><b>પગલું 3: શૂન્યોનો સંબંધ:</b><br>શૂન્યોનો સરવાળો (α + β) = 3/2 + (-1/3) = (9-2)/6 = 7/6 = -(-7)/6 = -b/a (ચકાસાયેલ છે)<br>શૂન્યોનો ગુણાકાર (αβ) = (3/2) * (-1/3) = -3/6 = -1/2 = c/a (ચકાસાયેલ છે)",
      shortcut: "💡 નિતેશ સરની શોર્ટકટ ટ્રીક: હંમેશા પહેલા બહુપદીને ઘાતના ઉતરતા ક્રમમાં ગોઠવો (ax² + bx + c), નહીતર અવયવ પાડવામાં ભૂલ પડશે."
    },
    {
      id: 2,
      category: "સ્વાધ્યાયના પ્રશ્નો",
      marks: 4,
      reference: "GSEB Board (For Standard Maths)",
      question: "દ્વિઘાત બહુપદી 4u² + 8u ના શૂન્યો શોધો અને તેના શૂન્યો અને સહગુણકો વચ્ચેનો સંબંધ ચકાસો.",
      styling: {
        questionBg: "#1a237e",
        answerBg: "#f5f7fa",
        borderColor: "#2196f3"
      },
      answer: "<b>પગલું 1:</b> p(u) = 4u² + 8u<br>શૂન્યો માટે, 4u² + 8u = 0<br>4u(u + 2) = 0<br>તેથી, u = 0 અથવા u = -2<br><b>પગલું 2: સંબંધની ચકાસણી:</b><br>અહીં a = 4, b = 8, c = 0 છે.<br>શૂન્યોનો સરવાળો = 0 + (-2) = -2. સૂત્ર મુજબ -b/a = -8/4 = -2. (સરખું છે)<br>શૂન્યોનો ગુણાકાર = 0 * (-2) = 0. સૂત્ર મુજબ c/a = 0/4 = 0. (સરખું છે)",
      shortcut: "💡 નિતેશ સરની શોર્ટકટ ટ્રીક: જ્યારે પદ 'c' (અચળ પદ) ન આપેલ હોય, ત્યારે એક શૂન્ય હંમેશા 0 જ આવશે."
    },
    {
      id: 3,
      category: "ઉદાહરણના પ્રશ્નો",
      marks: 4,
      reference: "GSEB Board (For Standard Maths)",
      question: "દ્વિઘાત બહુપદી x² + 7x + 10 ના શૂન્યો શોધો અને તેના શૂન્યો અને સહગુણકો વચ્ચેનો સંબંધ ચકાસો.",
      styling: {
        questionBg: "#1a237e",
        answerBg: "#f5f7fa",
        borderColor: "#2196f3"
      },
      answer: "<b>ઉકેલ:</b><br>x² + 7x + 10 = (x + 5)(x + 2)<br>શૂન્યો: -5 અને -2.<br>સરવાળો: -5 + (-2) = -7 = -b/a (7/1)<br>ગુણાકાર: (-5) * (-2) = 10 = c/a (10/1)",
      shortcut: "💡 નિતેશ સરની શોર્ટકટ ટ્રીક: જો બધા જ પદો ધન (+) હોય, તો તેના બંને શૂન્યો ઋણ (-) જ આવશે."
    },
    {
      id: 4,
      category: "ઉદાહરણના પ્રશ્નો",
      marks: 4,
      reference: "NJ Classes IMP (For Standard Maths)",
      question: "એક દ્વિઘાત બહુપદીના શૂન્યોનો સરવાળો અને ગુણાકાર અનુક્રમે -3 અને 2 હોય, તો તે બહુપદી શોધો અને તેના શૂન્યો પણ મેળવો.",
      styling: {
        questionBg: "#1a237e",
        answerBg: "#f5f7fa",
        borderColor: "#2196f3"
      },
      answer: "<b>પગલું 1:</b> ધારો કે બહુપદી p(x) = x² - (α+β)x + αβ છે.<br>α+β = -3 અને αβ = 2 આપેલ છે.<br>તેથી, p(x) = x² - (-3)x + 2 = x² + 3x + 2.<br><b>પગલું 2:</b> શૂન્યો શોધવા x² + 3x + 2 = 0 ના અવયવ પાડો.<br>(x + 2)(x + 1) = 0 => x = -2, x = -1.",
      shortcut: "💡 નિતેશ સરની શોર્ટકટ ટ્રીક: બહુપદીનું સીધું સૂત્ર: x² - (S)x + (P), જ્યાં S=સરવાળો અને P=ગુણાકાર."
    },
    {
      id: 5,
      category: "અગાઉ બોર્ડમાં પૂછાયેલા પ્રશ્નો",
      marks: 4,
      reference: "GSEB Board March 2024 (Adapted)",
      question: "દ્વિઘાત બહુપદી p(x) = x² - 3 ના શૂન્યો શોધો અને તેના શૂન્યો અને સહગુણકો વચ્ચેનો સંબંધ ચકાસો.",
      styling: {
        questionBg: "#1a237e",
        answerBg: "#f5f7fa",
        borderColor: "#2196f3"
      },
      answer: "<b>ઉકેલ:</b><br>x² - 3 = (x - √3)(x + √3)<br>શૂન્યો: √3 અને -√3.<br>અહીં a=1, b=0 (કારણ કે x વાળું પદ નથી), c=-3.<br>સરવાળો: √3 + (-√3) = 0. સૂત્ર -b/a = -0/1 = 0.<br>ગુણાકાર: (√3)(-√3) = -3. સૂત્ર c/a = -3/1 = -3.",
      shortcut: "💡 નિતેશ સરની શોર્ટકટ ટ્રીક: જ્યારે મધ્યમ પદ (x) ન હોય, ત્યારે શૂન્યો હંમેશા એકબીજાની વિરોધી સંખ્યા જ હોય."
    },
    {
      id: 6,
      category: "એક્સ્ટ્રા IMP પ્રશ્નો (Case Study)",
      marks: 4,
      reference: "NJ Classes IMP (For Basic/Standard Maths)",
      question: "<b>કેસ સ્ટડી:</b> એક બાસ્કેટબોલ ખેલાડી જ્યારે દડાને બાસ્કેટમાં નાખવા માટે ફેંકે છે ત્યારે તેનો પથ દ્વિઘાત બહુપદી p(x) = -x² + 2x + 8 દ્વારા દર્શાવવામાં આવે છે.<br>1. આ બહુપદીનો આલેખ કેવો હશે?<br>2. બહુપદીના શૂન્યો શોધો.<br>3. આલેખ x-અક્ષને કેટલા બિંદુમાં છેદશે?<br>4. x = 1 આગળ દડાની ઊંચાઈ શોધો.",
      styling: {
        questionBg: "#1a237e",
        answerBg: "#f5f7fa",
        borderColor: "#2196f3"
      },
      answer: "1. અહીં a = -1 (ઋણ) હોવાથી આલેખ <b>નીચેની તરફ ખૂલ્લો પરવલય</b> મળશે.<br>2. -x² + 2x + 8 = 0 => x² - 2x - 8 = 0 => (x-4)(x+2)=0. શૂન્યો: 4, -2.<br>3. બે ભિન્ન શૂન્યો હોવાથી <b>2 બિંદુમાં</b> છેદશે.<br>4. x = 1 મુકતા: p(1) = -(1)² + 2(1) + 8 = -1 + 2 + 8 = <b>9 એકમ</b>.",
      shortcut: "💡 નિતેશ સરની શોર્ટકટ ટ્રીક: જો x² નો સહગુણક માઈનસ હોય, તો પરવલયનો આકાર ઉંધા 'U' જેવો (નીચે ખૂલ્લો) બને."
    },
    {
      id: 7,
      category: "એક્સ્ટ્રા IMP પ્રશ્નો (Case Study)",
      marks: 4,
      reference: "NJ Classes IMP (For Basic Maths)",
      question: "નીચે આપેલ આકૃતિ એક રોલર કોસ્ટરનો ટ્રેક દર્શાવે છે જે બહુપદીનું સ્વરૂપ છે.<br><svg width='200' height='100' viewBox='0 0 200 100'><path d='M 10 80 Q 50 10 100 50 T 190 20' fill='none' stroke='#2196f3' stroke-width='3'/><line x1='0' y1='50' x2='200' y2='50' stroke='black' stroke-dasharray='4'/></svg><br>જો આ આલેખ x-અક્ષને 3 બિંદુમાં છેદતો હોય તો:<br>1. આ બહુપદીના શૂન્યોની સંખ્યા જણાવો.<br>2. આ બહુપદી કયા પ્રકારની હોઈ શકે? (સુરેખ, દ્વિઘાત કે ત્રિઘાત)<br>3. જો શૂન્યો 1, 2 અને 3 હોય, તો તેના અવયવો લખો.<br>4. p(x) ના શૂન્યો શોધવા માટે p(x) = ? લેવું પડે.",
      styling: {
        questionBg: "#1a237e",
        answerBg: "#f5f7fa",
        borderColor: "#2196f3"
      },
      answer: "1. આલેખ x-અક્ષને 3 બિંદુમાં છેદે છે, તેથી શૂન્યોની સંખ્યા <b>3</b> છે.<br>2. 3 શૂન્યો હોવાથી આ <b>ત્રિઘાત બહુપદી</b> છે.<br>3. અવયવો: <b>(x - 1), (x - 2) અને (x - 3)</b>.<br>4. શૂન્યો શોધવા માટે <b>p(x) = 0</b> લેવું પડે.",
      shortcut: "💡 નિતેશ સરની શોર્ટકટ ટ્રીક: આલેખ x-અક્ષને જેટલી વાર ટચ કરે કે છેદે, તેટલા તે બહુપદીના શૂન્યો કહેવાય."
    },
    {
      id: 8,
      category: "એક્સ્ટ્રા IMP પ્રશ્નો",
      marks: 4,
      reference: "NJ Classes IMP (For Standard Maths)",
      question: "જો દ્વિઘાત બહુપદી kx² + 2x + 3k ના શૂન્યોનો સરવાળો તેમના ગુણાકાર જેટલો જ હોય, તો k ની કિંમત શોધો અને બહુપદી ફરીથી લખો.",
      styling: {
        questionBg: "#1a237e",
        answerBg: "#f5f7fa",
        borderColor: "#2196f3"
      },
      answer: "<b>ઉકેલ:</b> અહીં a = k, b = 2, c = 3k.<br>શૂન્યોનો સરવાળો (α+β) = -b/a = -2/k.<br>શૂન્યોનો ગુણાકાર (αβ) = c/a = 3k/k = 3.<br>શરત મુજબ: સરવાળો = ગુણાકાર<br>-2/k = 3<br>-2 = 3k => k = -2/3.<br>બહુપદી: (-2/3)x² + 2x + 3(-2/3) => -2/3x² + 2x - 2.",
      shortcut: "💡 નિતેશ સરની શોર્ટકટ ટ્રીક: જ્યારે સરવાળો = ગુણાકાર હોય, ત્યારે -b/a = c/a, એટલે કે -b = c સીધું વાપરી શકાય."
    },
    {
      id: 9,
      category: "એક્સ્ટ્રા IMP પ્રશ્નો",
      marks: 4,
      reference: "GSEB Board (For Standard Maths)",
      question: "જો બહુપદી p(x) = x² - 8x + k ના શૂન્યોના વર્ગોનો સરવાળો 40 હોય, તો k ની કિંમત શોધો.",
      styling: {
        questionBg: "#1a237e",
        answerBg: "#f5f7fa",
        borderColor: "#2196f3"
      },
      answer: "<b>ઉકેલ:</b> અહીં α+β = 8 અને αβ = k.<br>આપેલ છે: α² + β² = 40.<br>આપણે જાણીએ છીએ કે (α+β)² = α² + β² + 2αβ<br>(8)² = 40 + 2k<br>64 = 40 + 2k<br>24 = 2k => k = 12.",
      shortcut: "💡 નિતેશ સરની શોર્ટકટ ટ્રીક: α² + β² ના દાખલામાં હંમેશા (α+β)² - 2αβ સૂત્રનો ઉપયોગ કરવો."
    },
    {
      id: 10,
      category: "સ્વાધ્યાયના પ્રશ્નો",
      marks: 4,
      reference: "NJ Classes IMP (For Standard Maths)",
      question: "દ્વિઘાત બહુપદી t² - 15 ના શૂન્યો શોધો અને તેના શૂન્યો અને સહગુણકો વચ્ચેનો સંબંધ ચકાસો.",
      styling: {
        questionBg: "#1a237e",
        answerBg: "#f5f7fa",
        borderColor: "#2196f3"
      },
      answer: "<b>પગલું 1:</b> t² - 15 = (t - √15)(t + √15)<br>શૂન્યો: √15 અને -√15.<br><b>પગલું 2:</b> a = 1, b = 0, c = -15.<br>સરવાળો: √15 + (-√15) = 0. સૂત્ર -b/a = -0/1 = 0.<br>ગુણાકાર: (√15) * (-√15) = -15. સૂત્ર c/a = -15/1 = -15.",
      shortcut: "💡 નિતેશ સરની શોર્ટકટ ટ્રીક: જ્યારે x² - k પ્રકારની બહુપદી હોય ત્યારે શૂન્યો હંમેશા ±√k જ હોય."
    }
  ]
};

console.log("GSEB 2026 IMP Questions Loaded Successfully.");,
/**
 * GSEB Std 10 Maths - Chapter 3 (દ્વિચલ રેખિક સમીકરણ યુગ્મ) 
 * Target Year: 2026 (Based on 2024+ Rationalized Syllabus)
 * Expert: NJ Classes (નિતેશ સર)
 */

const importantQuestions = [
  {
    category: "સ્વાધ્યાયના પ્રશ્નો",
    standard: "Basic/Standard",
    question: "પાંચ વર્ષ પછી જેકબની ઉંમર તેના પુત્રની ઉંમર કરતાં ત્રણ ગણી હશે અને પાંચ વર્ષ પહેલાં જેકબની ઉંમર તેના પુત્રની ઉંમર કરતાં સાત ગણી હોય, તો તેમની વર્તમાન ઉંમર શોધો. (આદેશની રીતે ઉકેલો)",
    reference: "GSEB Board (Ex 3.2)",
    solution: "ધારો કે જેકબની વર્તમાન ઉંમર x વર્ષ અને પુત્રની ઉંમર y વર્ષ છે.<br>5 વર્ષ પછી: x + 5 = 3(y + 5) => x - 3y = 10 ---(1)<br>5 વર્ષ પહેલાં: x - 5 = 7(y - 5) => x - 7y = -30 ---(2)<br>સમીકરણ (1) માંથી x = 3y + 10 ને (2) માં મૂકતા:<br>3y + 10 - 7y = -30 => -4y = -40 => y = 10.<br>તેથી x = 3(10) + 10 = 40.<br>જવાબ: જેકબની ઉંમર 40 વર્ષ અને પુત્રની ઉંમર 10 વર્ષ.",
    shortcut: "💡 નિતેશ સરની શોર્ટકટ ટ્રીક: ઉંમરના દાખલામાં હંમેશા 'વર્તમાન ઉંમર' ધારો. 'પછી' હોય તો (+) કરો અને 'પહેલા' હોય તો (-) કરો. સમીકરણ હંમેશા (મોટું = ગુણ્યા * નાનું) ના ફોર્મેટમાં બનાવો."
  },
  {
    category: "સ્વાધ્યાયના પ્રશ્નો",
    standard: "Basic/Standard",
    question: "એક અપૂર્ણાંકના અંશમાં 1 ઉમેરતા અને છેદમાંથી 1 બાદ કરતા અપૂર્ણાંકની કિંમત 1 બને છે. જો માત્ર છેદમાં 1 ઉમેરતા અપૂર્ણાંકનું અતિસંક્ષિપ્ત રૂપ 1/2 બને, તો તે અપૂર્ણાંક શોધો.",
    reference: "NJ Classes IMP (Ex 3.3)",
    solution: "ધારો કે અપૂર્ણાંક x/y છે.<br>શરત 1: (x+1)/(y-1) = 1 => x - y = -2 ---(1)<br>શરત 2: x/(y+1) = 1/2 => 2x - y = 1 ---(2)<br>લોપની રીતે: (2) માંથી (1) બાદ કરતા, x = 3.<br>x ની કિંમત (1) માં મૂકતા, 3 - y = -2 => y = 5.<br>જવાબ: અપૂર્ણાંક 3/5 છે.",
    shortcut: "💡 નિતેશ સરની શોર્ટકટ ટ્રીક: અપૂર્ણાંકના દાખલામાં અંશને x અને છેદને y ધારી સીધા શરત મુજબ સમીકરણ બનાવો. લોપની રીત અહીં સૌથી ઝડપી બને છે."
  },
  {
    category: "સ્વાધ્યાયના પ્રશ્નો",
    standard: "Standard Maths",
    question: "બે અંકોની એક સંખ્યાના અંકોનો સરવાળો 9 છે. વળી સંખ્યાના 9 ગણા એ અંકોની અદલાબદલી કરતા મળતી સંખ્યા કરતા બે ગણા છે. તે સંખ્યા શોધો.",
    reference: "GSEB Board (Ex 3.3)",
    solution: "એકમનો અંક x અને દશકનો અંક y ધારો. મૂળ સંખ્યા = 10y + x.<br>શરત 1: x + y = 9 ---(1)<br>શરત 2: 9(10y + x) = 2(10x + y)<br>90y + 9x = 20x + 2y => 88y - 11x = 0 => 8y - x = 0 ---(2)<br>(1) અને (2) નો સરવાળો કરતા: 9y = 9 => y = 1.<br>y = 1 તો x = 8. સંખ્યા = 10(1) + 8 = 18.",
    shortcut: "💡 નિતેશ સરની શોર્ટકટ ટ્રીક: અંકોની અદલાબદલીમાં 'મૂળ સંખ્યા = 10 * દશક + એકમ' અને 'નવી સંખ્યા = 10 * એકમ + દશક' સૂત્ર ફિક્સ યાદ રાખો."
  },
  {
    category: "ઉદાહરણના પ્રશ્નો",
    standard: "Basic/Standard",
    question: "એક ટેક્સીનું ભાડું નિશ્ચિત ભાડું અને અંતરના પ્રમાણમાં સંયુક્ત રીતે લેવાય છે. 10 કિમી અંતર માટે ₹ 105 અને 15 કિમી માટે ₹ 155 ની ચુકવણી કરવી પડે છે, તો નિશ્ચિત ભાડું અને પ્રતિ કિમી દર શોધો. 25 કિમીની મુસાફરી માટે કેટલું ભાડું ચૂકવવું પડે?",
    reference: "GSEB Board (Example)",
    solution: "ધારો કે નિશ્ચિત ભાડું x અને દર y પ્રતિ કિમી છે.<br>x + 10y = 105 ---(1)<br>x + 15y = 155 ---(2)<br>બાદબાકી કરતા: 5y = 50 => y = 10.<br>x + 10(10) = 105 => x = 5.<br>25 કિમી માટે: 5 + 25(10) = 5 + 250 = ₹ 255.",
    shortcut: "💡 નિતેશ સરની શોર્ટકટ ટ્રીક: આવા દાખલામાં નિશ્ચિત ભાડું (x) હંમેશા એક જ વાર આવે, જ્યારે અંતર સાથે દર (y) ગુણાય છે."
  },
  {
    category: "ઉદાહરણના પ્રશ્નો",
    standard: "Standard Maths",
    question: "બે વ્યક્તિઓની માસિક આવકનો ગુણોત્તર 9:7 છે અને તેમના ખર્ચનો ગુણોત્તર 4:3 છે. જો દરેક વ્યક્તિ માસિક ₹ 2000 ની બચત કરે, તો તેમની માસિક આવક શોધો.",
    reference: "NJ Classes IMP (Example)",
    solution: "આવક 9x અને 7x ધારો. ખર્ચ 4y અને 3y ધારો.<br>9x - 4y = 2000 ---(1)<br>7x - 3y = 2000 ---(2)<br>સમીકરણ (1) ને 3 વડે અને (2) ને 4 વડે ગુણી લોપ કરતા:<br>27x - 12y = 6000<br>28x - 12y = 8000<br>બાદબાકી કરતા: x = 2000.<br>આવક: 9(2000) = 18000 અને 7(2000) = 14000.",
    shortcut: "💡 નિતેશ સરની શોર્ટકટ ટ્રીક: બચત = આવક - ખર્ચ. ગુણોત્તર આપ્યો હોય ત્યારે ચલ (x અથવા y) સાથે ગુણીને સમીકરણ બનાવો."
  },
  {
    category: "અગાઉ બોર્ડમાં પૂછાયેલા પ્રશ્નો",
    standard: "Basic Maths",
    question: "નીચેના સમીકરણ યુગ્મનો ઉકેલ લોપની રીતે શોધો: 3x + 4y = 10 અને 2x - 2y = 2. (માર્ચ-2024 જેવો)",
    reference: "GSEB Board 2024",
    solution: "3x + 4y = 10 ---(1)<br>2x - 2y = 2 ---(2)<br>સમીકરણ (2) ને 2 વડે ગુણતા: 4x - 4y = 4 ---(3)<br>(1) અને (3) નો સરવાળો કરતા: 7x = 14 => x = 2.<br>x = 2 સમીકરણ (2) માં મૂકતા: 2(2) - 2y = 2 => 4 - 2y = 2 => 2 = 2y => y = 1.<br>જવાબ: (x, y) = (2, 1).",
    shortcut: "💡 નિતેશ સરની શોર્ટકટ ટ્રીક: લોપની રીતમાં જે ચલના સહગુણક સમાન કરવા સરળ હોય (અહીં y ને 2 વડે ગુણતા 4 થઈ જાય છે) તેને જ પસંદ કરવા."
  },
  {
    category: "અગાઉ બોર્ડમાં પૂછાયેલા પ્રશ્નો",
    standard: "Standard Maths",
    question: "એક લંબચોરસની લંબાઈમાં 5 એકમ ઘટાડો થાય અને પહોળાઈમાં 3 એકમ વધારો થાય, તો ક્ષેત્રફળ 9 ચોરસ એકમ ઘટે છે. જો લંબાઈમાં 3 અને પહોળાઈમાં 2 એકમ વધારીએ, તો ક્ષેત્રફળ 67 વધે છે. લંબચોરસના પરિમાણ શોધો.",
    reference: "GSEB Board (Standard Style)",
    solution: "લંબાઈ x, પહોળાઈ y. ક્ષેત્રફળ xy.<br>(x-5)(y+3) = xy - 9 => 3x - 5y = 6 ---(1)<br>(x+3)(y+2) = xy + 67 => 2x + 3y = 61 ---(2)<br>સમીકરણ ઉકેલતા: x = 17, y = 9.<br>લંબાઈ 17 એકમ, પહોળાઈ 9 એકમ.",
    shortcut: "💡 નિતેશ સરની શોર્ટકટ ટ્રીક: (x+a)(y+b) નું વિસ્તરણ કરતી વખતે xy હંમેશા સામસામે ઉડી જશે, એટલે માત્ર ચલવાળા પદો પર ધ્યાન આપો."
  },
  {
    category: "એક્સ્ટ્રા IMP પ્રશ્નો",
    standard: "Basic/Standard",
    question: "5 પેન્સિલ અને 7 પેનની કુલ કિંમત ₹ 50 છે અને તે જ કિંમતવાળી 7 પેન્સિલ તથા 5 પેનની કુલ કિંમત ₹ 46 છે. એક પેન્સિલ અને એક પેનની કિંમત શોધો.",
    reference: "NJ Classes IMP",
    solution: "પેન્સિલ x, પેન y.<br>5x + 7y = 50 ---(1)<br>7x + 5y = 46 ---(2)<br>એકવાર સરવાળો: 12x + 12y = 96 => x + y = 8 ---(3)<br>એકવાર બાદબાકી: -2x + 2y = 4 => -x + y = 2 ---(4)<br>(3) અને (4) પરથી: 2y = 10 => y = 5. x = 3.<br>પેન્સિલ ₹ 3, પેન ₹ 5.",
    shortcut: "💡 નિતેશ સરની શોર્ટકટ ટ્રીક: જ્યારે સહગુણકોની અદલાબદલી હોય (5,7 અને 7,5), ત્યારે એકવાર સરવાળો અને એકવાર બાદબાકી કરવાથી ખૂબ નાના સમીકરણો મળે છે."
  },
  {
    category: "એક્સ્ટ્રા IMP પ્રશ્નો",
    standard: "Standard Maths",
    question: "નીચેના સમીકરણોને આલેખની રીતે ઉકેલો: x - y + 1 = 0 અને 3x + 2y - 12 = 0. આ રેખાઓ અને x-અક્ષ દ્વારા બનેલા ત્રિકોણના શિરોબિંદુઓ મેળવો.",
    reference: "GSEB Board",
    solution: "સમીકરણ 1: x-y = -1 => બિંદુઓ (0,1), (-1,0), (2,3).<br>સમીકરણ 2: 3x+2y = 12 => બિંદુઓ (4,0), (0,6), (2,3).<br>બંને રેખાઓ (2,3) માં છેદે છે.<br>x-અક્ષ પરના બિંદુઓ: (-1,0) અને (4,0).<br>શિરોબિંદુઓ: (2,3), (-1,0), (4,0).",
    shortcut: "💡 નિતેશ સરની શોર્ટકટ ટ્રીક: x-અક્ષ પરના બિંદુ શોધવા y=0 મૂકો અને y-અક્ષ માટે x=0 મૂકો. છેદબિંદુ એ જ ઉકેલ છે."
  },
  {
    category: "એક્સ્ટ્રા IMP પ્રશ્નો",
    standard: "Basic Maths",
    question: "એક હોસ્ટેલના વિદ્યાર્થીઓનું ભોજન ખર્ચ અંશતઃ અચળ અને અંશતઃ વિદ્યાર્થીઓએ કેટલા દિવસ ભોજન લીધું તેના પર આધારિત છે. વિદ્યાર્થી A 20 દિવસ ભોજન લે છે અને ₹ 1000 ચૂકવે છે. વિદ્યાર્થી B 26 દિવસ ભોજન લે છે અને ₹ 1180 ચૂકવે છે. નિશ્ચિત ખર્ચ અને દૈનિક ખર્ચ શોધો.",
    reference: "NJ Classes IMP",
    solution: "નિશ્ચિત ખર્ચ x, દૈનિક ખર્ચ y.<br>x + 20y = 1000 ---(1)<br>x + 26y = 1180 ---(2)<br>બાદબાકી કરતા: 6y = 180 => y = 30.<br>x + 20(30) = 1000 => x + 600 = 1000 => x = 400.<br>નિશ્ચિત ખર્ચ ₹ 400 અને દૈનિક ખર્ચ ₹ 30.",
    shortcut: "💡 નિતેશ સરની શોર્ટકટ ટ્રીક: આ ટેક્સીવાળા દાખલા જેવો જ છે. x હંમેશા એકલો રહેશે અને દિવસોની સંખ્યા y સાથે ગુણાશે."
  }
];

// Function to render the UI
function renderIMPQuestions() {
  const container = document.createElement('div');
  container.style.fontFamily = 'Arial, sans-serif';
  container.style.padding = '20px';
  container.style.backgroundColor = '#e0e0e0';

  importantQuestions.forEach((item, index) => {
    const qDiv = document.createElement('div');
    qDiv.style.backgroundColor = '#1a237e';
    qDiv.style.color = 'white';
    qDiv.style.padding = '15px';
    qDiv.style.marginTop = '20px';
    qDiv.style.borderRadius = '8px 8px 0 0';
    qDiv.style.borderLeft = '5px solid #2196f3';
    qDiv.innerHTML = `<strong>પ્રશ્ન ${index + 1} [${item.category}]</strong> <span style="float:right; font-size: 0.8em; background:#ffeb3b; color:black; padding:2px 5px; border-radius:4px;">${item.standard}</span><br><br>${item.question}`;

    const aDiv = document.createElement('div');
    aDiv.style.backgroundColor = '#f5f7fa';
    aDiv.style.color = '#333';
    aDiv.style.padding = '15px';
    aDiv.style.border = '1px solid #2196f3';
    aDiv.style.borderTop = 'none';
    aDiv.style.borderRadius = '0 0 8px 8px';
    aDiv.innerHTML = `<strong>ઉકેલ:</strong><p>${item.solution}</p>
                      <p style="color: #d32f2f; font-weight: bold;">${item.shortcut}</p>
                      <hr><small>Reference: ${item.reference}</small>`;

    container.appendChild(qDiv);
    container.appendChild(aDiv);
  });

  document.body.appendChild(container);
}

// Visualizing the graph axis with SVG for graphical method context (Optional display)
const graphIcon = `
<svg width="100" height="100" viewBox="0 0 100 100" style="background: white; border:1px solid #ccc; margin-top:10px;">
  <line x1="10" y1="50" x2="90" y2="50" stroke="black" stroke-width="1" />
  <line x1="50" y1="10" x2="50" y2="90" stroke="black" stroke-width="1" />
  <line x1="20" y1="80" x2="80" y2="20" stroke="blue" stroke-width="2" />
  <line x1="20" y1="20" x2="80" y2="80" stroke="red" stroke-width="2" />
  <circle cx="50" cy="50" r="3" fill="green" />
</svg>`;

renderIMPQuestions();
console.log("NJ Classes - Std 10 Maths Ch 3 IMP Questions Loaded Successfully.");,
