/* Barcha matn va raqamlar shu faylda. Taqdimotdan oldin shu yerda tahrirlang.
   "~" belgisi — yaxlitlangan yoki taxminiy qiymat. Har bir raqam yonida manba va yil. */

/** Ismingiz va guruhingizni yozing — bo‘sh qolsa, ko‘rsatilmaydi. */
export const PRESENTER = {
  name: "Xasanboyev Sardor",
  group: "85-25 I guruh",
  university: "Farg‘ona davlat texnika universiteti",
  faculty: "Ishlab chiqarishda boshqaruv fakulteti",
  subject: "Iqtisodiyotda siyosat",
  course: "«Iqtisodiyotda siyosat» fanidan animatsiyali taqdimot",
}

export type SectionId =
  | "muqova"
  | "kirish"
  | "helvetia"
  | "raqamlar"
  | "tarix"
  | "siyosat"
  | "sanoat"
  | "innovatsiya"
  | "muammolar"
  | "kelajak"
  | "xulosa"

/** `accent` — to‘rt rasmiy tildan biridagi so‘z (nemis, fransuz, italyan, romansh). */
export const SECTIONS: { id: SectionId; label: string; accent: string }[] = [
  { id: "muqova", label: "Muqova", accent: "Titel" },
  { id: "kirish", label: "Kirish", accent: "Willkommen" },
  { id: "helvetia", label: "Helvetia", accent: "Helvetia" },
  { id: "raqamlar", label: "Raqamlarda", accent: "Zahlen" },
  { id: "tarix", label: "Tarix", accent: "Histoire" },
  { id: "siyosat", label: "Siyosat", accent: "Politik" },
  { id: "sanoat", label: "Sanoat", accent: "Swiss Made" },
  { id: "innovatsiya", label: "Innovatsiya", accent: "Innovation" },
  { id: "muammolar", label: "Muammolar", accent: "Défis" },
  { id: "kelajak", label: "Kelajak", accent: "Futuro" },
  { id: "xulosa", label: "Xulosa", accent: "Fazit" },
]

export const HERO_READOUTS = [
  { label: "YaIM", value: "~1,06 trln $", note: "2025, XVF" },
  { label: "Aholi", value: "9,13 mln", note: "2025-yil oxiri, FSO" },
  { label: "Innovatsiya", value: "1-o‘rin", note: "GII 2026, 16-yil ketma-ket" },
]

export const HELVETIA_FACTS = [
  { value: "41 285 km²", label: "Maydoni — O‘zbekistondan ~11 marta kichik" },
  { value: "26 kanton", label: "Federal davlat: har bir kanton o‘z soliq stavkasini belgilaydi" },
  { value: "4 til", label: "Nemis, fransuz, italyan va romansh — hammasi rasmiy" },
  { value: "CHF", label: "Shveytsariya franki · Federal shahar — Bern" },
]

/** Aholi jon boshiga nominal YaIM, ming AQSh dollari. XVF WEO, 2026-oktabr (2025 bahosi). */
export const GDP_DROPS = [
  { country: "Lyuksemburg", code: "lu", value: 148.2 },
  { country: "Irlandiya", code: "ie", value: 123.8 },
  { country: "Shveytsariya", code: "ch", value: 117.2, focus: true },
  { country: "Singapur", code: "sg", value: 99.4 },
  { country: "AQSh", code: "us", value: 90.3 },
  { country: "Germaniya", code: "de", value: 61.3 },
  { country: "O‘zbekiston", code: "uz", value: 3.8 },
]

export const KEY_FIGURES = [
  {
    value: 1.06,
    prefix: "~",
    suffix: " trln $",
    decimals: 2,
    label: "Nominal YaIM — aholisi 9 mln bo‘lgan mamlakat uchun ulkan hajm",
    note: "XVF WEO, 2026-oktabr (2025 bahosi)",
  },
  {
    value: 2.8,
    suffix: "%",
    decimals: 1,
    label: "Ishsizlik darajasi — Yevropadagi eng pastlardan",
    note: "SECO, 2025-yil o‘rtachasi",
  },
  {
    value: 40,
    prefix: "~",
    suffix: "%",
    label: "Davlat qarzi / YaIM — rivojlangan davlatlar ichida eng pastlardan",
    note: "XVF WEO, 2026-oktabr (2025 bahosi)",
  },
  {
    value: 287,
    suffix: " mlrd CHF",
    label: "Eksport — tarixiy rekord",
    note: "BAZG (bojxona), 2025",
  },
  {
    value: 53,
    suffix: "%",
    label: "Kimyo va farmatsevtikaning eksportdagi ulushi (152 mlrd CHF)",
    note: "BAZG, 2025",
  },
  {
    value: 0.2,
    prefix: "~",
    suffix: "%",
    decimals: 1,
    label: "Inflyatsiya — narxlar deyarli o‘zgarmaydi",
    note: "XVF WEO, 2026-oktabr (2025)",
  },
]

export const LADDER = [
  {
    year: "1291",
    title: "Ittifoq tug‘ildi",
    text: "Uri, Shvits va Untervalden «Federal xartiya»ni imzolab, bir-birini himoya qilishga qasamyod qildi. 1-avgust hozir ham milliy bayram.",
  },
  {
    year: "1815",
    title: "Doimiy betaraflik",
    text: "Vena kongressi Shveytsariyaning betarafligini tan oldi. Urushlardan chetda qolish — kapital va ishonch uchun eng yaxshi reklama bo‘ldi.",
  },
  {
    year: "1848",
    title: "Federal davlat va yagona bozor",
    text: "Yangi konstitutsiya kantonlar orasidagi ichki bojlarni bekor qildi. 1850-yilda yagona valyuta — Shveytsariya franki joriy etildi.",
  },
  {
    year: "1934",
    title: "Bank siri",
    text: "Bank qonuni mijoz ma’lumotini oshkor qilishni jinoyat deb belgiladi. Shveytsariya dunyoning «seyfi»ga aylandi; 2017-yildan xorij bilan avtomatik axborot almashinuvi boshlandi.",
  },
  {
    year: "2015",
    title: "Frank zarbasi",
    text: "15-yanvar: Milliy bank (SNB) evroga nisbatan 1,20 minimal kursni bekor qildi. Frank bir kunda keskin qimmatladi, stavka −0,75% ga tushirildi.",
  },
  {
    year: "2023",
    title: "Credit Suisse qulashi",
    text: "167 yillik bank inqirozga uchradi; hukumat ko‘magida UBS uni 3 mlrd frankka sotib oldi. Natijada YaIMdan ham katta bitta mega-bank qoldi.",
  },
  {
    year: "2026",
    title: "Yevropa bilan yangi paket",
    text: "2-mart: Shveytsariya va Yevropa Ittifoqi yangi kelishuvlar paketini imzoladi. Endi parlament muhokamasi, ehtimol, referendum kutilmoqda.",
  },
]

/** Real YaIMning o‘rtacha yillik o‘sishi, %. XVF WEO, 2026-oktabr (yillik ma’lumotlardan hisoblangan). */
export const ERAS: { period: string; name: string; value: number; approx?: boolean }[] = [
  { period: "1980–1990", name: "Sovuq urush oxiri", value: 2.5 },
  { period: "1991–2007", name: "Turg‘unlik va tiklanish", value: 1.6 },
  { period: "2008–2025", name: "Inqirozlar davri", value: 1.8 },
]

/** Frank tarixidagi uch burilish. SNB. */
export const FRANC = [
  {
    title: "Minimal kurs: 1,20",
    period: "2011-sentabr",
    text: "Evro inqirozida investorlar frankka yopirildi. SNB «1 evro kamida 1,20 frank turadi» deb e’lon qildi va buning uchun cheksiz valyuta sotib oldi.",
  },
  {
    title: "Frank zarbasi",
    period: "2015-yanvar",
    text: "Chegara bekor qilindi, frank bir kunda keskin qimmatladi. Stavka −0,75% gacha tushdi va 2022-yilgacha manfiy bo‘lib qoldi.",
  },
  {
    title: "Yana nol",
    period: "2025–2026",
    text: "Inflyatsiya deyarli nol bo‘lgani uchun SNB 2025-yil iyunida stavkani 0% ga tushirdi va 2026-yil sentabrida ham o‘zgartirmadi.",
  },
]

/** Pensiya tizimining uch ustuni. Federal ijtimoiy sug‘urta idorasi (BSV/OFAS). */
export const PILLARS = [
  {
    n: "I",
    title: "Davlat pensiyasi (AHV)",
    text: "1948-yildan. Har bir ishlovchi va ish beruvchi badal to‘laydi — asosiy yashash minimumini kafolatlaydi.",
  },
  {
    n: "II",
    title: "Kasbiy pensiya (BVG)",
    text: "1985-yildan majburiy. Har bir xodim uchun ish joyidagi fondda shaxsiy jamg‘arma yig‘iladi.",
  },
  {
    n: "III",
    title: "Shaxsiy jamg‘arma",
    text: "Ixtiyoriy, lekin soliq imtiyozi bilan rag‘batlantiriladi — odamlar o‘zi qo‘shimcha yig‘adi.",
  },
]

export const SECTORS = [
  {
    name: "Farmatsevtika va kimyo",
    accent: "Pharma",
    text: "2025-yilda kimyo-farma eksporti 152 mlrd frankka yetdi — jami eksportning 53% i. Bazel — Roche va Novartis vatani, dunyoning eng yirik hayot fanlari markazlaridan biri.",
    makers: "Roche · Novartis · Lonza · Givaudan",
  },
  {
    name: "Soatsozlik",
    accent: "Horlogerie",
    text: "2025-yilda 25,6 mlrd frank soat eksport qilindi. Eng yirik bozor — AQSh (17%). Kuchli frank va bojlar tufayli sotuv ikki yil ketma-ket ozgina kamaydi.",
    makers: "Rolex · Swatch Group · Patek Philippe · Richemont",
  },
  {
    name: "Bank va sug‘urta",
    accent: "Banken",
    text: "Shveytsar banklari chet elliklarning 2,9 trln frank boyligini boshqaradi (2025). 2025-yilda bu sohada Gonkong ilk bor biroz o‘zib ketdi — raqobat kuchaymoqda.",
    makers: "UBS · Zurich · Swiss Re · Julius Bär",
  },
  {
    name: "Oziq-ovqat va mashinasozlik",
    accent: "Industrie",
    text: "Nestlé — dunyodagi eng yirik oziq-ovqat kompaniyasi. ABB elektrotexnika, Schindler lift va eskalatorlar bilan butun dunyoga tanilgan.",
    makers: "Nestlé · Lindt · ABB · Schindler",
  },
]

/** Shveytsar modelining to‘rt kaliti. `word` — asl tildagi atama, `lang` — tili. */
export const FLASHCARDS = [
  {
    word: "Berufs\u00adlehre",
    lang: "Nemischa · dual ta’lim",
    meaning: "Ikki yo‘lli kasb ta’limi",
    text: "Yoshlarning qariyb uchdan ikki qismi maktabdan keyin kasb ta’limini tanlaydi: haftaning ko‘p qismi korxonada, qolgani kollejda (SERI).",
  },
  {
    word: "Démocratie directe",
    lang: "Fransuzcha · referendum",
    meaning: "To‘g‘ridan-to‘g‘ri demokratiya",
    text: "Fuqarolar yiliga bir necha marta soliq, pensiya va xalqaro kelishuvlar bo‘yicha o‘zi ovoz beradi. Siyosat sekin, lekin oldindan aytib bo‘ladigan bo‘ladi.",
  },
  {
    word: "Federalismo",
    lang: "Italyancha · kantonlar",
    meaning: "Kantonlar raqobati",
    text: "26 kanton o‘z soliq stavkasini belgilaydi va kompaniyalarni jalb qilish uchun bir-biri bilan raqobatlashadi.",
  },
  {
    word: "Schulden\u00adbremse",
    lang: "Nemischa · byudjet qoidasi",
    meaning: "Qarz tormozi",
    text: "2003-yildan federal byudjet iqtisodiy sikl davomida daromaddan ko‘p sarflay olmaydi. Shuning uchun davlat qarzi past.",
  },
]

/** Kompaniya va uning shtab-kvartirasi joylashgan shahar. */
export const MAKERS = [
  ["Nestlé", "Vevey"],
  ["Roche", "Bazel"],
  ["Novartis", "Bazel"],
  ["UBS", "Tsyurix"],
  ["Rolex", "Jeneva"],
  ["Swatch", "Biel"],
  ["Omega", "Biel"],
  ["Patek Philippe", "Jeneva"],
  ["ABB", "Tsyurix"],
  ["Lindt", "Kilxberg"],
  ["Swiss Re", "Tsyurix"],
  ["Zurich", "Tsyurix"],
  ["Logitech", "Lozanna"],
  ["Schindler", "Ebikon"],
  ["Givaudan", "Vernye"],
  ["Victorinox", "Ibax"],
]

export const INNOVATION_STATS = [
  { value: 16, suffix: " yil", label: "Global innovatsiya indeksida ketma-ket 1-o‘rin", note: "WIPO GII 2026 · 139 davlat" },
  { value: 1096, label: "Har 1 mln aholiga Yevropa patent arizalari", note: "EPO 2025 · yirik davlatlar ichida 1-o‘rin" },
  { value: 3.22, suffix: "%", decimals: 2, label: "YaIMning ilmiy tadqiqotlarga (R&D) sarflanadigan ulushi", note: "FSO, 2023 · 25,9 mlrd CHF" },
  { value: 70, prefix: "~", suffix: "%", label: "R&D xarajatining xususiy kompaniyalar ulushi (18 mlrd CHF)", note: "FSO, 2023" },
]

export const INVENTIONS = [
  { year: "1867", name: "Bolalar ozuqasi", text: "Henri Nestlé — bugungi Nestlé kompaniyasining boshlanishi" },
  { year: "1908", name: "Sellofan", text: "Jak Brandenberger ixtiro qilgan shaffof plyonka" },
  { year: "1955", name: "Velkro (yopishqoq lenta)", text: "Jorj de Mestral patenti — tog‘ o‘simligi tikanidan ilhom" },
  { year: "1983", name: "Swatch", text: "Arzon plastik soat — Yaponiya kvars raqobatidan soatsozlikni qutqardi" },
  { year: "1989", name: "World Wide Web", text: "Jenevadagi CERN laboratoriyasida tug‘ilgan internet sahifalari" },
  { year: "2016", name: "Gotthard tunneli", text: "57 km — dunyodagi eng uzun temir yo‘l tunneli" },
]

export const INNOVATION_CHAIN = [
  { title: "Xomashyo yo‘q", figure: "0", note: "dengiz, neft va gaz yo‘q" },
  { title: "Bilimga tikiladi", figure: "2/3", note: "yoshlar kasb ta’limini tanlaydi" },
  { title: "Tadqiqotga pul", figure: "3,22%", note: "YaIMdan R&D ga (2023)" },
  { title: "Ixtiro va patent", figure: "1 096", note: "patent / 1 mln aholi (2025)" },
  { title: "Qimmat eksport", figure: "287 mlrd", note: "CHF eksport, rekord (2025)" },
]

export const INNOVATION_WHY = [
  {
    title: "Qimmat frankka bardosh beradi",
    text: "Noyob dori yoki aniq mexanizmni narxi qimmat bo‘lsa ham sotib olishadi — innovatsiya kuchli valyutadan himoya qiladi.",
  },
  {
    title: "Yuqori ish haqi",
    text: "Mahsulot qimmat sotilgani uchun kompaniyalar dunyodagi eng yuqori maoshlardan birini to‘lay oladi.",
  },
  {
    title: "Xalqaro shtab-kvartiralar",
    text: "Google AQShdan tashqaridagi eng yirik muhandislik markazlaridan birini Tsyurixda ochgan; yuzlab global kompaniyalarning Yevropa markazi shu yerda.",
  },
  {
    title: "Universitet → startap",
    text: "ETH Tsyurix va EPFL Lozanna laboratoriyalaridan chiqqan deep-tech startaplar aholi jon boshiga yirik davlatlar ichida eng ko‘p (GII 2026).",
  },
]

/** 65 va undan katta yoshdagilar ulushi, %. Jahon banki (BMT ma’lumotlari); 2055 — FSO prognozi (2025). */
export const AGING = [
  { year: 1960, value: 10.2 },
  { year: 1980, value: 13.9 },
  { year: 2000, value: 15.3 },
  { year: 2010, value: 16.8 },
  { year: 2024, value: 20.0 },
  { year: 2055, value: 25.0, projected: true },
]

/** Davlat yalpi qarzi, YaIMga nisbatan %. XVF WEO 2026-oktabr, 2025 bahosi (yaxlitlangan). */
export const DEBT = [
  { country: "Yaponiya", code: "jp", value: 205 },
  { country: "Italiya", code: "it", value: 137 },
  { country: "AQSh", code: "us", value: 124 },
  { country: "Fransiya", code: "fr", value: 116 },
  { country: "Buyuk Britaniya", code: "gb", value: 102 },
  { country: "Germaniya", code: "de", value: 63 },
  { country: "Shveytsariya", code: "ch", value: 40, focus: true },
]

export const PROBLEMS = [
  {
    figure: "39% → 15%",
    title: "AQSh bojlari",
    text: "2025-yil avgustida AQSh Shveytsariya tovarlariga 39% boj qo‘ydi — Yevropadagi eng yuqori stavka; noyabrdagi kelishuv bilan u 15% ga tushdi. 2026-yil fevralida AQSh Oliy sudi bu bojlarni bekor qildi, lekin boj siyosati hamon noaniq. Hukumat javobi — qasos bojlari emas, diplomatiya va doimiy savdo bitimi bo‘yicha muzokara.",
  },
  {
    figure: "0%",
    title: "Juda kuchli frank",
    text: "Inqiroz bo‘lsa, pul frankka qochadi — u qimmatlaydi va eksportchilar zarar ko‘radi. SNB javobi: 2025-yil iyunidan stavka 0%, kerak bo‘lsa valyuta bozoriga aralashishga tayyor.",
  },
]

export const FUTURE = [
  {
    tag: "YeI",
    title: "Yevropa bilan yangi paket",
    text: "2026-yil 2-martda imzolangan kelishuvlar: Yevropa ichki bozoriga, elektr energiyasi va sog‘liqni saqlash sohalariga kirish. Parlament ma’qullashi kerak.",
  },
  {
    tag: "AQSh",
    title: "AQSh bilan savdo bitimi",
    text: "2025-yil noyabridagi kelishuvda shveytsar kompaniyalari AQShga 200 mlrd dollar investitsiya va’da qildi. Asosiy maqsad — doimiy va oldindan aytib bo‘ladigan past boj.",
  },
  {
    tag: "Sun’iy intellekt",
    title: "Ochiq sun’iy intellekt",
    text: "ETH va EPFL 2025-yilda ochiq til modeli Apertus’ni chiqardi. Deep-tech startaplar soni bo‘yicha (aholi jon boshiga) yirik davlatlar ichida birinchi.",
  },
  {
    tag: "Energiya",
    title: "Energiya strategiyasi 2050",
    text: "2024-yilda xalq referendumda quyosh, shamol va gidroenergiyani kengaytiruvchi elektr qonunini ma’qulladi.",
  },
  {
    tag: "Hayot fanlari",
    title: "Hayot fanlari va farma",
    text: "Roche va Novartis global kengaymoqda, Bazel va Jeneva klasterlari esa yangi dori va biotexnologiyalarga tikmoqda.",
  },
]

export const CONCLUSIONS = [
  "Mustaqil markaziy bank va past inflyatsiya — ishonchning asosi: frank dunyoning «xavfsiz boshpanasi»ga aylandi, lekin eksportga bosim beradi.",
  "Qoidaga asoslangan byudjet (qarz tormozi) va kantonlar soliq raqobati davlat qarzini past, biznesni esa faol ushlab turadi.",
  "O‘zbekiston uchun saboq: ochiq savdo, dual kasb ta’limi va o‘zgarmas, oldindan aytib bo‘ladigan qoidalar — tabiiy boylikdan ham muhimroq.",
]

/** Iqtisodiy siyosatning olti vositasi: kim boshqaradi, qaysi qoida, hozirgi natija. */
export const POLICY = [
  {
    area: "Pul-kredit siyosati",
    who: "Milliy bank (SNB) — hukumatdan mustaqil",
    rule: "Yagona maqsad — narx barqarorligi: inflyatsiya 0–2% oralig‘ida. Kerak bo‘lsa frankni ushlab turish uchun valyuta bozoriga aralashadi.",
    now: "Stavka 0% (SNB, 2026-sentabr)",
  },
  {
    area: "Fiskal siyosat",
    who: "Federal Kengash va parlament",
    rule: "«Qarz tormozi»: 2001-yilgi referendumda ~85% ovoz bilan qabul qilingan, 2003-yildan sikl davomida xarajat daromaddan oshmaydi.",
    now: "Davlat qarzi ~40% YaIM (XVF, 2025)",
  },
  {
    area: "Soliq siyosati",
    who: "26 kanton + federatsiya",
    rule: "Har bir kanton o‘z stavkasini belgilaydi va raqobatlashadi. 2024-yildan yirik xalqaro kompaniyalarga OECD minimal 15% soliq qo‘llanadi.",
    now: "2023-yil referendumida ~79% «ha»",
  },
  {
    area: "Savdo siyosati",
    who: "SECO — iqtisodiyot vazirligi",
    rule: "2024-yil 1-yanvardan sanoat tovarlari importiga bojlar bir tomonlama bekor qilindi. Yevropa Ittifoqidan tashqari 30 dan ortiq erkin savdo bitimi.",
    now: "Hindiston bilan bitim 2025-yil oktabrdan",
  },
  {
    area: "Ta’lim va mehnat siyosati",
    who: "Federatsiya, kantonlar va ish beruvchilar",
    rule: "Dual kasb ta’limi va moslashuvchan mehnat bozori: kompaniyalar kadrni o‘zi tayyorlaydi, yoshlar ishsiz qolmaydi.",
    now: "Ishsizlik 2,8% (SECO, 2025)",
  },
  {
    area: "Tashqi iqtisodiy siyosat",
    who: "Federal Kengash, xalq referendumi",
    rule: "Betaraflik; Yevropa Ittifoqiga a’zo emas, lekin 1999-yildan ikki tomonlama kelishuvlar orqali uning ichki bozoriga kiradi.",
    now: "Yangi paket imzolandi (2026-yil mart)",
  },
]

export const SOURCES = [
  "XVF (IMF) — World Economic Outlook, 2026-oktabr (YaIM, qarz, o‘sish, inflyatsiya)",
  "BAZG — Shveytsariya bojxonasi, tashqi savdo statistikasi, 2025",
  "FH — Shveytsariya soat sanoati federatsiyasi, eksport 2025",
  "SECO — mehnat bozori statistikasi, 2025",
  "FSO / BFS — Federal statistika idorasi: aholi 2025, R&D 2023, prognoz 2025–2055",
  "SNB — Shveytsariya Milliy banki, pul-kredit siyosati, 2026-sentabr",
  "WIPO — Global Innovation Index 2026",
  "EPO — Patent Index 2025",
  "SBA — Swiss Bankers Association, Banking Barometer 2026; BCG Global Wealth 2026",
  "SERI / SBFI — kasb ta’limi; BSV — pensiya tizimi",
  "SECO — erkin savdo bitimlari va sanoat bojlarining bekor qilinishi (2024); Federal kanslerlik — referendum natijalari",
  "Yevropa Ittifoqi bilan kelishuvlar — Shveytsariya Tashqi ishlar vazirligi (EDA), 2026",
  "AQSh bojlari — USTR (2025-noyabr kelishuvi); AQSh Oliy sudi, Learning Resources v. Trump (2026-fevral)",
  "O‘zbekiston: Statistika qo‘mitasi (2025, o‘sish 7,7%)",
  "Matterhorn surati — Roy Egloff, Wikimedia Commons (CC BY-SA 4.0); bayroqlar — circle-flags (MIT)",
]
