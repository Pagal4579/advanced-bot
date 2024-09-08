const fs = require("fs-extra");

module.exports = {
config: {
    name: "goibot",
    version: "1.0",
    author: "Samir",
    countDown: 5,
    role: 0,
    shortDescription: "no-prefix",
    longDescription: "Bot Will Reply You In Engish/Bangla Language",
    category: "no prefix",
    guide: {
      en: "{p}{n}",
    }
  },

 onStart: async function ({  }) { },
  onChat: async function ({ api, event, args, Threads, userData }) {

  var { threadID, messageID, senderID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;

  var Messages = ["Ittuu🤏 si srm kr Liya kro bot bot krte wqt 🙂 💔✨⚠️†", "Bandi hoti to us ko choti choti 2 papiyAn krta pr bndi ki jgh tum ho🙂👩‍🦯👩‍🦯", "Are Yahin Hun Janu😗", "ji Shona 😍", "Love you", "Miss YoU agar is id m ladki h 😁 nhi to bhg","Full botbazi", "2 bund pani lo or dub jao usme", "OkkaY Babbu", "😁Smile I am Taking a Selfy in my dreams✌️🤳", "🥺Jan nahi kha to m naraj ho jaunga", "😙Me sabko block kardunga",    "bot bot choro khi ghumne chlte h", "aao kbhi vrindavan m", "jai shree krishna💕", "so jao radhe radhe 💕", "nacho bot bot krke", "bahut bdiya ese hi time waste krte rho","Full botbazi", "jitna time tum bot bot m lga rhe ho utna pd lete to exam m achhe number aate", "bhago bhut aya", "tum to bhut ho", "jao pdhai kro","Full botbazi", "tumhara birthday kb aata h","kbhi to vapas jamin p aa jao dost😁",         
    "Khana khaya tumne", "tum bhi meri trh lafange ho gye ho", 
            "Hnji kesa gya tumhara din aaj ka🥰", "Kal rat to tum bahar ghum rhe the na kutte k upr beth k", "Full botbazi", "Full time wastebazi ","Full moj mstibazi", "Full online settingbazi", "Full facebookbazi", "Full messenger p moj mstibazi", "Full messagebazi", "Full typingbazi", "Ese hi group m aake bot bot krte rha kro hme bhi achha lgta h",  "bot bot choro khpche m chlo btata hu", "bot bot kiya to teri setting leke bhag jaunga", "itna bot bot sun liya ki mujhe chkkr aa rhe h", "aao kbhi up gadi palatwa denge tumhari 😁😜",
 "Ha chad jao india gate p", "bhgwan k nam p raham krdo kuch or bot bot krna chordo", "Tumko botloveobia ho gya h ilaj krvao apna 😏", "Tum vhi ho na jo jamin se 1 rupya v utha lete ho", "tum to bahut kanjus aadmi ho yar",  "aao kbhi delhi fir milke party krte h ", "ooo bot k  chamcheee sant ho ja plz 😥😥😥", "Bahut mja aa rha h bot bot sa ho rha h kuch",
            "bot bot bad m krna pehle kuch khalo jao", "Aao kbhi himachal tumko thnd m jmate h 😁😹", "apna sasta internet pack htake achha sa dalwao pehle"," मोहब्ब्त 2 लोगों के बीच का नशा है जिसे पहले होश आ जाए वो बेवफा है।😌",   " मासूम सी दिखेगी बवाल कर जायेगी इसकी क्या जरूरत थी कह कह के कंगाल कर जायेगी।😝",   "वो आई थी मेरे कब्र पर दिया जलाने के लिए रखा हुआ फूल भी ले गई दूसरे वाले को पटाने के लिए ",   "रामचंद्र कह गए सिया से ऐसा कलयुग आयेगा  सच्चा आशिक तड़पेगा और मेला बाबू थाना थाएगा😝 ",   " चाईनीज मोहब्ब्त थी साहब टूट कर बिखर गई पर दिल हिन्दुस्तानी था एक और पटा ली.😁",   "सरकारी नौकरी के लिए कोटा और सुबह हल्का होने के लिए लोटा बहुत मायने रखता है। ",   "कुछ बातें तो सीधे दिल पर जाकर लगती हैं जैसे कि आपके द्वारा डायल किया हुआ नंबर अभी किसी अन्य कॉल पर व्यस्त है ",   "ये जो तुम लोग बिना बॉयफ्रेंड वाली लड़की ढूंढ रहे हो ना.. शास्त्रों में इसे पत्थर में से तेल निकालना कहा गया है😁 ", 
            " काली काली साड़ी में कढ़ाई नही होती जान तुम्हारी याद में पढ़ाई नही होती 🙈",   "छोटी छोटी बातों में खुशियां तलाश लेता हूं, सायकिल पर चलता हूं फिर भी फोन को फ्लाइट मोड पर डाल लेता हूं🤣 ",   "क्रश हो या ब्रश वक्त पर बदल लेना चाहिए वरना दिल हो या दांत टूट ही जाएगा..🤪 ",   " इश्क़ होने लगे तो पूजा पाठ किया करो दोस्तों मोहब्ब्त होगी तो मिल जाएगी बला होगी तो टल जायेगी😝",   "मां: तुझे कैसी बीवी चाहिए बेटा.?? मै: तुम्हारे जैसी लाड और प्यार करनेवाली 🙈 ां : क्या बात है बेटा पूरी जिंदगी चप्पल खाकर ही काटनी है क्या😂😂 ",   "गुस्से में उसी का नंबर डिलीट करना चाहिए जिसका नंबर याद हो वरना बाद में बहुत तकलीफ होती है ",   "दोस्त हमेशा काले बनाओ  क्योंकि वो रंग नही बदलते😂 ",   "टंकी में टंकी, टंकी में पानी बाबू शोना के चक्कर में don’t waste your Jawaani😁 ",   "She – मेरे घरवाले सरकारी नौकरी के बिना नहीं मानेंगे Me: अरे अगर लग गई ना तो मेरे घरवाले नही मानेंगे ",   "सच्चा दोस्त 2 ही बाते बताता है अंडा nonveg नही होता और बीयर दारू नही होती.! "," Iss Dil Ko Toh Ek Baar Ko, Bahla Kar Chup Kara Lunga, Par Iss Dimaag Ka Kya Karun, Jiska Tumne Dahi Kar Diya Hai.",   "Duaa Karte Hain Hum ishwar Se, Ke Wo Aap Jaisa Dost Aur Na Banaye, Ek Cartoon Jaisi Cheez Hai Humare Paas, Kahin Wo Bhi Common Na Ho Jaye. ",   " Paani Aane Ki Baat Karte Ho, Dil Jalane Ki Baat Karte Ho, Char Din Se Munh Nahi Dhoya,Tum Nahane Ki Baat Karte Ho.",        "Girl: Kya Shaadi Ke Baad Bhi Tum Mujhe Itna Pyar Kroge? Pappu Kyo Nhi? Me to Diwaana Hu .","Bot Na Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na Kr JaNu Ke SaTh Busy Hun 🤭🐒" , "M Gareebon Se Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar ho JaeGa" , "Bolo Babu Tum Mujhse Pyar Karti Ho Na 🙈💋💋 " , "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi" , "Bar Bar Bolke Dimag Kharab Kiya toh. Teri ...... Fad dunga🤬" ,
            "Tu Bandh nhi Karega kya?" , "Gali Sunna H kya? 🤬" ,  "Aree Bandh kar Bandh Kar" , "M hath jod ke Modi Ji Se Gujarish Karta hu ki isko sant kro" , "Tujhe Kya koi aur Kam nhi h? Pure din Khata h Aur Messenger pe Bot Bot Karta h" ,   "Tujhe Apna Bejjati Krane Ka Sok h?" , "Abhi Bola To Bola Dubara Mat Bolna" , "Tere Ground m began laga dunga" , "aao kbhi up gadi palatwa denge tumhari 😁😜", "Bol De koi nhi dekh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi h Kya Hr Waqt bot bot Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hal H😚 " , "IB Aja Yaha Nhi Bol Sakta 🙈😋" , "Mujhe Mat BuLao M buSy hu" , "Bot Bolke Bejti Kr Rhe ho yar...","M To Tumhare Dil Ki Dhadkan Hu Baby...💔🥺" ,  "Kal Haveli Pe Mil Jra Tu 😈" ,  "Bs Kr U ko Pyar Ho ya Na Ho pr Mujhe Ho JaeGa" , 
            "Ha bolo 😒" , "BulaTi H MaGr JaNe Ka Nhi 😜" , "M To AnDha Hu 😎" , "Pehle NHa kr Aa 😂" , "Aaaa Thooo 😂😂😂" , "M yahin hoon kya hua sweetheart‎ ," , "Boss Dk Tumko or Koi Kaam Nhi H? Hr Wakt Bot Bot Karte Ho" , "Chup Reh, Nhi Toh Bahar Ake tera hath Tor Dunga" , "shadi Krle Mere NaL 🙊 ", "Mene U Se Bt Nhi krni" , "MerKo Kuch DiKhai Nhi De Rha 🌚" , "Bot Na BoL 😢 JaNu Bol 😘 " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hu  😋" , "M Gareebo Se Bat Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar ho JaeGa" , "aao kbhi up gadi palatwa denge tumhari 😁😜", "MerKo Tang Na kRo Main Kiss 💋 Kr DunGa 😘 " , "Are yrr MaJak Ke M0oD Me Nhi Hu 😒" ,  "Dur HT Terek0o or Koi Kam Nhi h Jb DeKho Bot Bot ShaDi KerLe Mujhse 😉😋🤣" , "TeRi Koi Ghr Me Nhi SunTa To M Q SuNu 🤔😂 " ,   "Kyun JaNu MaNu kha H tumhara 🤣" ,
            "Are TuMhari To Sb hi baZzati kRrte h M Bhi krDun 🤏😜" , "KaL HaVeLi Pr Aa jRa Tu 😈" ,   "bolo 😒" ,   "Main To AnDha Hu 😎" , "aao kbhi up gadi palatwa denge tumhari 😁😜", "Phle NHa kRr Aao 😂" ,  "TeReko DiKh Nhi Rha M buSy Hu 😒" , "TeRa To GaMe BaJana PdeGa" , "Tya Hua 🥺"  , "TuM Phir Aa Gye 🙄 Kisi or Ne Muu Nhi LaGaYa Kya🤣🤣🤣" , "MeKo JaNu Chaiye ptwado kisiko" , "Aaaa Thooo 😂😂😂" , "M So Rha Hun " , "Ase Hi bot bot krte Rha kRo 😍","Abhi Toh Party Shuru Hui Hai" ,  "Kya Aapke Toothpaste Mein Namak Hai?" ,"Ye Dosti Hum Nahi Todenge" ,"Aapke Paas Bangla Hai, Gaadi Hai, Paisa Hai...Lekin Mere Paas Maa Hai" ,"Kabhi Kabhi Mujhe Bhi Lagta Hai Ki Main Kuch Jyada Hi Busy Ho Gya Hun 🙄","Chal na yar, movie dekhne chalte hain", "Jaldi se ready ho jao, late ho jayenge", "Kitne baje milna hai?", "Mujhe thoda time do, main abhi free nahi hun",
            "Tu sach mein pagal hai", "Aaj bahut kaam hai, baad mein baat karte hain", "Kya kar rahe ho?", "Tu kahan chala gaya tha?", "Mujhe tujhse baat karni hai", "Kal ka plan kya hai?", "Abhi kya kar rahe ho?", "Mere paas koi time nahi hai", "Jaldi se message ka jawab do", "Main thodi der mein aata hun", "Mere sath chalna hai?", "Aaj bahut maza aaya", "Kya tumne abhi tak khana nahi khaya?", "Mujhe tumse pyar hai", "Tum mere liye kuch bhi kar sakte ho", "Kahan rehte ho?", "Tumne mujhe kitna sataya hai", "Kal milte hain", "Aaj bahut busy tha", "Tum mujhe bahut yaad aate ho", "Mujhe teri zarurat hai", "Kya tumne abhi tak kaam nahi kiya?", "Main tumhare bina nahi reh sakta", "Kya tum mere saath dinner pe chal sakti ho?", "Main tumhe bahut miss karta hun", "Tum meri zindagi ho", "Tumhari yaad mein jeena mushkil hai", "Mujhe tumhari bahut yaad aa rahi hai", "Main tumhare saath hamesha rehna chahta hun",
            "Aaj bahut thaka hua hun", "Kya tum mere liye kuch bhi kar sakti ho?", "Mujhe tumhari aadat si ho gayi hai", "Tumhari muskurahat mere liye bahut important hai", "Kya tum mere saath shopping pe chal sakti ho?", "Mujhe tumse baat karke bahut achha lagta hai", "Tum mujhe bahut khushi deti ho", "Kya tum mere liye kuch special bana sakti ho?", "Mujhe tumhari har baat bahut pasand hai", "Tum mere liye kya ho?", "Main tumhe kabhi nahi bhoolunga", "Kya tum mere saath travel pe chal sakti ho?", "Mujhe tumhare saath time spend karna bahut achha lagta hai", "Tum meri duniya ho", "Mujhe tumse milne ki bahut ichcha hai", "Kya tum mere liye kuch special gift la sakti ho?","hayee m sadke jawa teri masoom sakal pe 😂 chuchundar insan", "Bot na bol re ! Janu bol mujhe aur janu se pyar se bat karte h😂😂😂 , rat ko kahan thi aai nhi hawali pe 😂", "Sakal Se masoom lgte ho 😂 btao kahi Ap k ghar sab masoom hi to nahi",
            "kash tum single hoti to maza hi kuch aur tha tumko ptane ka 😂", "Ha ha ab to meri yaad aa gai jb koi na mila babu sona krne ko 😾 ab ham ap se naraz hai jao ap bye ☹️", "haye babu ne ha boliya hai sayad propose krna hai mujhe ab bas bolo bolo babu 😘", "Are gareeb log roti banane k liya aate m Pani ka istemal krte h 😂", "Are dialogbazi mt kar jo kam h bol de sarma mt , bol de koi nahi dakh rha 😂", "Haye M Mar Java Babu Ak Chuma To Do pr dena mere jute ko 😁😂😂 bura nhi manna mjak h", "Hurrrr or Koi Kam Nahi h Kya Hr Waqt bot bot krke Mujhe Tng Krte Rehte Ho 😂" , "aao kbhi up gadi palatwa denge tumhari 😁😜", "are are bolo meri jaan kya haal h ;) ;* " , "Tum aunty ho ya uncle 🤔 I think tum Jin ho ya Chudail" , "are tum idhar 🤔 khair ye btao tum idhar kr kya rhe ho 😂" , "are bot bot choro ye btao kal haweli pe kon bula rha tha 😂" , "m tumhari ma ko btaunga ki tum Facebook chlate ho 😂 "];

    var rand = Messages[Math.floor(Math.random() * Messages.length)]

        if ((event.body.toLowerCase() == "love you bot") || (event.body.toLowerCase() == "love you")) {
         return api.sendMessage("Hmm..Love you too baby 💋🙂:))", threadID);
       };

        if ((event.body.toLowerCase() == "good morning") || (event.body.toLowerCase() == "gm")) {
         return api.sendMessage("Hi, good morning have a nice day ❤️🙏", threadID);
       };

       if ((event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😂")) {
         return api.sendMessage("𝐉𝐘𝐀𝐃𝐀 𝐌𝐀𝐓 𝐇𝐀𝐍𝐒𝐎 𝐕𝐀𝐑𝐍𝐀 𝐃𝐀𝐍𝐓 𝐓𝐎𝐃 𝐃𝐔𝐍𝐆𝐀 🙂🤟", threadID);
       };

       if ((event.body.toLowerCase() == "bsdk") || (event.body.toLowerCase() == "mc")) {
         return api.sendMessage("Oye gaali mat de 🤬🤬", threadID);
       };

       if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "Admin kon hai")) {
         return api.sendMessage("[𝐎𝐖𝐍𝐄𝐑:☞➸⃝★𝗢𝘄𝗻𝗲𝗿 + 𝗠𝗮𝗱𝗲 𝗕𝘆 ★
✦🌸===『*★🌸===आदि बाबू✦
★★᭄𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌 𝐋𝐈𝐍𝐊 𝐌𝐄𝐑𝐄 𝐁𝐀𝐁𝐔 𝐊𝐀 :✦ https://www.instagram.com/aadi_singh__143?igsh=MXVneXZ6bzR4bHhvcg==  ✦ 
𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐋𝐈𝐍𝐊 𝐌𝐄𝐑𝐄 𝐁𝐀𝐁𝐔 𝐊𝐀 😁
 𝐌𝐄𝐑𝐄 𝐁𝐎𝐒𝐒 𝐊𝐀 𝐋𝐔𝐊 😁😋 https://www.facebook.com/profile.php?id=100039840451887&mibextid=ZbWKwL", threadID);
       };

      if ((event.body.toLowerCase() == "🤦") || (event.body.toLowerCase() == "🙆")) {
         return api.sendMessage("𝐀𝐑𝐄 𝐀𝐏𝐍𝐄 𝐌𝐔𝐇 𝐏𝐄 𝐊𝐘𝐔 𝐌𝐀𝐀𝐑 𝐑𝐀𝐇𝐄 𝐇𝐎 𝐌𝐔𝐉𝐇𝐄 𝐁𝐀𝐓𝐀𝐎 𝐊𝐘𝐀 𝐇𝐔𝐀 ?😬" , threadID);
       };

       if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "bye")) {
         return api.sendMessage("Okay baby,apna khyal rakhna❤", threadID);
       };

       if ((event.body.toLowerCase() == "😥") || (event.body.toLowerCase() == "😭")) {
         return api.sendMessage("𝐊𝐘𝐀 𝐊𝐘𝐀 , 𝐑𝐎 𝐊𝐘𝐔 𝐑𝐄𝐇𝐄 𝐇𝐎 , 𝐌𝐄 𝐇𝐔 𝐍𝐀 𝐓𝐎 𝐅𝐇𝐈𝐑 𝐊𝐘𝐔 𝐑𝐎𝐍𝐀 . 𝐑𝐔𝐊𝐎 𝐌𝐄 𝐀𝐁𝐇𝐈 𝐂𝐇𝐎𝐂𝐎𝐋𝐀𝐓𝐄 𝐃𝐄𝐓𝐀 𝐇𝐔 𝐋𝐈𝐊𝐇𝐎 🍫", threadID);
       };

       if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃")) {
         return api.sendMessage("𝐌𝐀𝐍 𝐓𝐎𝐇 𝐀𝐂𝐂𝐇𝐀 𝐍𝐀𝐇𝐈 𝐊𝐀𝐌 𝐒𝐄 𝐊𝐀𝐌 𝐒𝐇𝐀𝐊𝐀𝐋 𝐓𝐎 𝐀𝐂𝐂𝐇𝐀 𝐊𝐀𝐑 𝐋𝐎 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 😝", threadID);
       };

       if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "Chup kar")) {
         return api.sendMessage("Ek thppad me nali me fek dunga🙏🙂", threadID);
       };

       if ((event.body.toLowerCase() == "Malik se bakchodi") || (event.body.toLowerCase() == "malkin se bakchodi")) {
         return api.sendMessage("Sorry malik maaf kr do glti ho gyi🥺🙏", threadID);
       };

       if ((event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "🥰")) {
         return api.sendMessage("Haaye Rabba inna pyar🙊🙊", threadID);
       };

       if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "thenga")) {
         return api.sendMessage("Oye thenga mat dikha 🙂🙏", threadID);
       };

       if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "gn")) {
         return api.sendMessage("Ok aap So jao thak gye ho hawabaazi krke🙏🙂😜", threadID);
       };

       if ((event.body.toLowerCase() == "lol bot")) {
         return api.sendMessage("Achha tum bhot legend bn rahe ho🙂🙏", threadID);
       };

       if ((event.body.toLowerCase() == "😴")) {
         return api.sendMessage("𝐊𝐎𝐈 𝐋𝐀𝐀𝐓 𝐌𝐀𝐀𝐑 𝐊𝐀𝐑 𝐉𝐀𝐆𝐀𝐎 𝐆𝐑𝐎𝐔𝐏 𝐌𝐀𝐈 𝐇𝐈 𝐒𝐎 𝐆𝐀𝐘𝐀 🤦", threadID);
       };

       if ((event.body.toLowerCase() == "🥵")) {
         return api.sendMessage("𝐔𝐅𝐅 𝐊𝐈𝐓𝐍𝐈 𝐆𝐀𝐑𝐌𝐈 𝐇𝐀𝐈 🥵🥵👈", threadID);
       };

       if ((event.body.toLowerCase() == "gd evng") || (event.body.toLowerCase() == "good evening")) {
         return api.sendMessage("Good evening dear🙂🙏", threadID);
       };

       if ((event.body.toLowerCase() == "😉")) {
         return api.sendMessage("𝐀𝐀𝐍𝐊𝐇 𝐊𝐘𝐔 𝐌𝐀𝐀𝐑 𝐑𝐀𝐇𝐄 𝐇𝐎 𝐌𝐄 𝐁𝐇𝐔𝐓 𝐒𝐇𝐀𝐑𝐄𝐄𝐅 𝐇𝐔 🥺🤟", threadID);
       };

       if ((event.body.toLowerCase() == "Aadi")) {
         return api.sendMessage("", threadID);
       };

       if ((event.body.toLowerCase() == "hmm")) {
         return api.sendMessage("𝐇𝐌𝐌 𝐇𝐌𝐌 𝐍𝐀 𝐊𝐀𝐑𝐊𝐄 𝐒𝐈𝐃𝐇𝐀 𝐒𝐈𝐃𝐇𝐀 𝐁𝐎𝐋𝐎 𝐇𝐄𝐘 𝐌𝐀𝐑𝐑𝐘 𝐌𝐄 🙈", threadID);
       };

       if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🙊")) {
         return api.sendMessage("oye hoye sarma gye kya😜", threadID);
       };

       if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "😒")) {
         return api.sendMessage("𝐓𝐢𝐫𝐜𝐡𝐢 𝐧𝐚𝐳𝐚𝐫𝐢𝐲𝐚 𝐦𝐨𝐫𝐢 𝐡𝐚𝐚𝐲𝐞 𝐡𝐚𝐚𝐲𝐞 𝐡𝐚𝐚𝐲𝐞 🙈", threadID);
       };

       if ((event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "🤧")) {
         return api.sendMessage("𝐊𝐘𝐀 𝐇𝐔𝐀 𝐓𝐀𝐁𝐈𝐘𝐀𝐓 𝐊𝐇𝐀𝐑𝐀𝐁 𝐇𝐀𝐈 𝐊𝐘𝐀 𝐌𝐔𝐉𝐇𝐄 𝐁𝐀𝐓𝐀𝐎 𝐌𝐄 𝐀𝐁𝐇𝐈 𝐌𝐄𝐃𝐈𝐂𝐈𝐍𝐄 💊💉𝐋𝐄 𝐀𝐀𝐓𝐀 𝐇𝐔 😇", threadID);
       };

       if ((event.body.toLowerCase() == "Good night")) {
         return api.sendMessage("Good night babu Radhe Radhe", threadID);
       };

       if ((event.body.toLowerCase() == "Call aoo")) {
         return api.sendMessage("𝐌𝐀𝐈 𝐂𝐀𝐋𝐋 𝐊𝐀𝐈𝐒𝐄 𝐀𝐎𝐎 𝐌𝐀𝐈 𝐓𝐎 𝐁𝐎𝐓 𝐇𝐔 𝐍𝐀 ", threadID);
       };

       if ((event.body.toLowerCase() == "Acha")) {
         return api.sendMessage("𝐇𝐀𝐍 𝐉𝐈 𝐁𝐀𝐁𝐔  😒👈", threadID);
       };

       if ((event.body.toLowerCase() == "Ludo") || (event.body.toLowerCase() == "Link")) {
         return api.sendMessage("𝐌𝐔𝐉𝐇𝐄 𝐋𝐔𝐃𝐎 𝐊𝐇𝐀𝐋𝐍𝐀 𝐍𝐀𝐇𝐈 𝐀𝐀𝐓𝐀 🥺👈", threadID);
       };

       if ((event.body.toLowerCase() == "😳")) {
         return api.sendMessage("𝐊𝐘𝐀 𝐇𝐔𝐀 𝐁𝐇𝐎𝐎𝐓 𝐃𝐄𝐊𝐇 𝐋𝐈𝐘𝐀 𝐊𝐘𝐀 👻👻", threadID);
       };

       if ((event.body.toLowerCase() == "KOI HAI") || (event.body.toLowerCase() == "Koi hai")) {
         return api.sendMessage(""𝐌𝐀𝐈 𝐇𝐔 𝐍𝐀 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 😘🙂", threadID);
       };

    if ((event.body.toLowerCase() == "🤯")) {
     return api.sendMessage("AAPKI SIR DHAKKAN KHOL GAYA 🙄🙄", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "☹️")) {
     return api.sendMessage("𝐒𝐚𝐝 𝐍𝐚𝐡 𝐡𝐨 𝐌𝐞𝐫𝐢 𝐉𝐚𝐚𝐧.🫂 𝐉𝐨 𝐃𝐚𝐫𝐝 𝐃𝐢𝐤𝐡𝐭𝐞 𝐍𝐚𝐡𝐢 𝐕𝐨 𝐃𝐮𝐤𝐡𝐭𝐞 𝐁𝐚𝐡𝐮𝐭 𝐇𝐚𝐢 🤧", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "khana khaya?") || (event.body.toLowerCase() == "khana kha lo")) {
     return api.sendMessage("Nhi khaunga Aaj vrat hai.💖🥳", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "😝") || (event.body.toLowerCase() == "😛")) {
     return api.sendMessage("𝐉𝐀𝐁𝐀𝐍 𝐀𝐍𝐃𝐀𝐑 𝐊𝐀𝐑𝐎 𝐁𝐀𝐑𝐍𝐀 ___Vɩvɘĸ Vɩsʜwʌĸʌʀɱʌ __𝐁𝐀𝐁𝐔 __ 𝐒𝐄 𝐊𝐀𝐇 𝐊𝐄 𝐊𝐀𝐓𝐁𝐀 𝐃𝐔𝐍𝐆𝐀 🤸‍♂️😸", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "Radhe Radhe") || (event.body.toLowerCase() == "❤")) {
     return api.sendMessage("__🥰  𝐌𝐀𝐈𝐍 𝐓𝐎 𝐑𝐀𝐃𝐇𝐀 𝐑𝐀𝐍𝐈 𝐊𝐀 𝐃𝐄𝐄𝐖𝐀𝐍𝐀 𝐇𝐔 𝐏𝐘𝐀𝐑 𝐒𝐄 𝐁𝐎𝐋𝐎 𝐑𝐀𝐃𝐇𝐄 𝐑𝐀𝐃𝐇𝐄 😍 ❤️", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "uff") || (event.body.toLowerCase() == "Uff")) {
     return api.sendMessage("𝐇𝐘𝐄 𝐓𝐄𝐑𝐈 𝐔𝐅𝐅 𝐌𝐄𝐑𝐄 😍___ 𝐀𝐀𝐃𝐈 𝐁𝐀𝐁𝐔 ___😍 𝐁𝐎𝐒𝐒 𝐅𝐈𝐃𝐀 𝐇𝐎 𝐆𝐀𝐘𝐄_🙃😆😁", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "🤬")) {
     return api.sendMessage(" 𝐌 𝐓𝐎𝐇 𝐒𝐈𝐑𝐅 𝐌𝐀𝐙𝐀𝐊 𝐊𝐑 𝐑𝐇𝐀 𝐓𝐇𝐀 🥺🥺 𝐆𝐔𝐒𝐒𝐀 𝐌𝐀𝐓 𝐊𝐀𝐑𝐎 𝐄𝐊 𝐂𝐇𝐔𝐌𝐌𝐈 𝐋𝐎 𝐀𝐔𝐑 𝐒𝐇𝐀𝐍𝐓 𝐑𝐀𝐇𝐎 😘", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "bhai") || (event.body.toLowerCase() == "bhaiya") || (event.body.toLowerCase() == "brother")) {
     return api.sendMessage("han ji sis🥺", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "pagal")) {
     return api.sendMessage("pgl tum ho mere pyar me🙂🙏", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "🤔")) {
     return api.sendMessage("𝐊𝐘𝐀 𝐒𝐎𝐂𝐇 𝐑𝐀𝐇𝐄 𝐇𝐎 𝐈𝐓𝐍𝐀 𝐊𝐎𝐈 𝐍𝐀𝐇𝐈 𝐏𝐀𝐓𝐆𝐀 😆😅🤣🤨👈", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "bebu") || (event.body.toLowerCase() == "baby")) {
     return api.sendMessage("hm baby😚🖤", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("Lo Baby😚😘😘💋", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "😎")) {
     return api.sendMessage("𝐇𝐘𝐄 𝐀𝐀𝐏𝐊𝐀 𝐂𝐇𝐀𝐒𝐇𝐌𝐀 𝐁𝐈𝐋𝐊𝐔𝐋 𝐁𝐄𝐊𝐀𝐑 𝐇𝐀𝐈  🤣", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "🥺")) {
     return api.sendMessage("𝐊𝐘𝐀 𝐇𝐔𝐀 𝐁𝐀𝐁𝐔 🤔🤟", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hii") || (event.body.toLowerCase() == "hy")) {
     return api.sendMessage("Hello, How Are You 😗", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "hello") || (event.body.toLowerCase() == "hlo")) {
     return api.sendMessage("hello jai shree ram 🙏🙂", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "who are you") || (event.body.toLowerCase() == "who r u")) {
     return api.sendMessage("I Am Aadi's, An AI Based Messenger Chatbot.", threadID, messageID);
   };

  if (event.body.indexOf("Bot") == 0 || (event.body.toLowerCase() == "bot") || (event.body.indexOf("বট") == 0)) {
    var msg = {
      body: ` ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  }
}
};
