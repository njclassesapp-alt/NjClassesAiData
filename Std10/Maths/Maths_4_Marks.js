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
