"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Globe, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const translations = {
  english: {
    welcome: "Welcome to Lazeez Gali",
    explore: "Rumi Chowk is Lucknow's first-ever food park...",
    exploreBtn: "Book Now",
    partners: "Our Trusted Partners",
    faq: "Frequently Asked Questions",

    faq1Question: "What documents are required to book a shop at Rumi Chowk @ Laziz Gali?",
    faq1Answer: `
To secure a shop booking, you need to submit the following verified documents:
- Company Registration Certificate
- Brand Registration Certificate
- Trademark Registration
- FSSAI License
- GST Registration
- Police Verification Certificates for the owner and staff
- MSME Registration (optional but beneficial)
    `,

    faq2Question: "Are there any additional licenses or approvals needed?",
    faq2Answer: `
Yes, depending on local regulations, the following may also be required:
- Shop and Establishment Registration
- No Objection Certificate (NOC) from the Municipal Corporation

We recommend consulting local authorities or a legal expert in Lucknow for the most up-to-date requirements.
    `,

    faq3Question: "Why is police verification mandatory for booking a shop?",
    faq3Answer: `
Police verification ensures the safety and security of the marketplace. It is required for both the shop owner and employees to comply with local law enforcement and maintain public trust.
    `,

    footer: "© 2025 RUMI CHOWK | All Rights Reserved.",
    signIn: "Terms & Conditions",
    tenderOwnerLabel: "Tender Owner:",
    tenderOwnerName: "M/S Praveen Kumar Mishra, Jaunpur UP",
    address: "Address: Gulab Vatika, Opposite Rumi Gate, Husainabad",
        termsDetailed: `To secure a shop booking at Rumi Chowk @ Laziz Gali, please submit the following verified documents of the franchise or brand owners:

- Company Registration Certificate: Proof of legal incorporation of your business entity.
- Brand Registration Certificate: Documentation verifying the registration of your brand name or logo.
- Trademark Registration: Evidence of official registration protecting your brand identity.
- Food Safety and Standards Authority of India (FSSAI) License: Mandatory for all food business operators to ensure compliance with food safety standards.
- Goods and Services Tax (GST) Registration: A GST number required for tax purposes and legal business transactions.
- Police Verification Certificates: Background verification documents for the shop owner and all employees to ensure security and compliance with local regulations.
- Micro, Small, and Medium Enterprises (MSME) Registration: Certification classifying your business under the MSME category, which can offer various benefits.

Additionally, depending on local regulations and specific requirements of Rumi Chowk Laziz Gali, you may need:
- Shop and Establishment Registration: Regulates working conditions and ensures employee rights.
- No Objection Certificate (NOC) from the Municipal Corporation: Confirms compliance with local municipal guidelines.

Consulting with local authorities or a legal expert in Lucknow is advisable to obtain a comprehensive list of required documents and ensure full compliance with all applicable regulations.`
  },
  hindi: {
    welcome: "लज़ीज़ गली में आपका स्वागत है",
    explore: "रूमी चौक लखनऊ का पहला फूड पार्क है...",
    exploreBtn: "बुक करें",
    partners: "हमारे विश्वसनीय साझेदार",
    faq: "अक्सर पूछे जाने वाले प्रश्न",

    faq1Question: "रूमी चौक @ लज़ीज़ गली में दुकान बुक करने के लिए कौन-कौन से दस्तावेज़ आवश्यक हैं?",
    faq1Answer: `
दुकान बुकिंग सुनिश्चित करने के लिए निम्नलिखित सत्यापित दस्तावेज़ प्रस्तुत करने होंगे:
- कंपनी पंजीकरण प्रमाणपत्र
- ब्रांड पंजीकरण प्रमाणपत्र
- ट्रेडमार्क पंजीकरण
- एफएसएसएआई लाइसेंस
- जीएसटी पंजीकरण
- मालिक और कर्मचारियों का पुलिस सत्यापन प्रमाणपत्र
- एमएसएमई पंजीकरण (वैकल्पिक लेकिन लाभकारी)
    `,

    faq2Question: "क्या अतिरिक्त लाइसेंस या अनुमोदन की आवश्यकता है?",
    faq2Answer: `
हाँ, स्थानीय नियमों के अनुसार निम्नलिखित की भी आवश्यकता हो सकती है:
- दुकान और स्थापना पंजीकरण
- नगर निगम से अनापत्ति प्रमाणपत्र (NOC)

सबसे अद्यतित जानकारी के लिए स्थानीय अधिकारियों या कानूनी विशेषज्ञ से परामर्श लें।
    `,

    faq3Question: "दुकान बुकिंग के लिए पुलिस सत्यापन अनिवार्य क्यों है?",
    faq3Answer: `
पुलिस सत्यापन बाज़ार की सुरक्षा और भरोसे को सुनिश्चित करता है। यह दुकानदार और कर्मचारियों दोनों के लिए आवश्यक होता है ताकि स्थानीय कानूनों का पालन हो सके।
    `,

    footer: "© 2025 रूमी चौक | सर्वाधिकार सुरक्षित।",
    signIn: "नियम और शर्तें",
    tenderOwnerLabel: "निविदा धारक:",
    tenderOwnerName: "एम/एस प्रवीण कुमार मिश्रा, जौनपुर यूपी",
    address: "पता: गुलाब वाटिका, रूमी गेट के सामने, हुसैनाबाद",
    termsDetailed: `रूमी चौक @ लज़ीज़ गली में एक दुकान बुक करने के लिए, कृपया फ्रैंचाइज़ी या ब्रांड मालिकों के निम्नलिखित सत्यापित दस्तावेज़ जमा करें:

- कंपनी पंजीकरण प्रमाणपत्र: आपके व्यवसाय की कानूनी स्थापना का प्रमाण।
- ब्रांड पंजीकरण प्रमाणपत्र: आपके ब्रांड नाम या लोगो के पंजीकरण का प्रमाण।
- ट्रेडमार्क पंजीकरण: आपके ब्रांड की पहचान की सुरक्षा का आधिकारिक प्रमाण।
- खाद्य सुरक्षा और मानक प्राधिकरण (FSSAI) लाइसेंस: सभी खाद्य व्यवसाय संचालकों के लिए अनिवार्य ताकि खाद्य सुरक्षा मानकों का पालन सुनिश्चित किया जा सके।
- वस्तु एवं सेवा कर (GST) पंजीकरण: कर उद्देश्यों और कानूनी व्यापार लेनदेन के लिए आवश्यक GST नंबर।
- पुलिस सत्यापन प्रमाणपत्र: दुकान मालिक और सभी कर्मचारियों के लिए सुरक्षा और स्थानीय नियमों के अनुपालन हेतु पृष्ठभूमि सत्यापन दस्तावेज़।
- MSME पंजीकरण: आपके व्यवसाय को सूक्ष्म, लघु और मध्यम उद्यम श्रेणी में वर्गीकृत करने वाला प्रमाणपत्र, जो विभिन्न लाभ प्रदान कर सकता है।

इसके अतिरिक्त, स्थानीय नियमों और रूमी चौक लज़ीज़ गली की विशिष्ट आवश्यकताओं के आधार पर निम्नलिखित दस्तावेज़ भी आवश्यक हो सकते हैं:
- दुकान और प्रतिष्ठान पंजीकरण: कार्य परिस्थितियों को नियंत्रित करता है और कर्मचारियों के अधिकार सुनिश्चित करता है।
- नगर निगम से अनापत्ति प्रमाणपत्र (NOC): स्थानीय नगर नियमों के अनुपालन की पुष्टि करता है।

पूरा अनुपालन सुनिश्चित करने और आवश्यक दस्तावेज़ों की सूची प्राप्त करने के लिए लखनऊ के स्थानीय अधिकारियों या कानूनी विशेषज्ञ से परामर्श करना उचित है।`

  },
  urdu: {
    welcome: "لذیذ گلی میں خوش آمدید",
    explore: "رومی چوک لکھنؤ کا پہلا فوڈ پارک ہے...",
    exploreBtn: "ابھی بک کریں",
    partners: "ہمارے قابل اعتماد شراکت دار",
    faq: "اکثر پوچھے گئے سوالات",

    faq1Question: "رومی چوک @ لذیذ گلی میں دکان بک کرنے کے لیے کون سے دستاویزات درکار ہیں؟",
    faq1Answer: `
دکان کی بکنگ کو یقینی بنانے کے لیے درج ذیل تصدیق شدہ دستاویزات جمع کروائیں:
- کمپنی رجسٹریشن سرٹیفکیٹ
- برانڈ رجسٹریشن سرٹیفکیٹ
- ٹریڈ مارک رجسٹریشن
- ایف ایس ایس اے آئی لائسنس
- جی ایس ٹی رجسٹریشن
- مالک اور عملے کے لیے پولیس تصدیق
- ایم ایس ایم ای رجسٹریشن (اختیاری لیکن فائدہ مند)
    `,

    faq2Question: "کیا اضافی لائسنس یا منظوری کی ضرورت ہے؟",
    faq2Answer: `
جی ہاں، مقامی قوانین کے مطابق درج ذیل کی بھی ضرورت ہو سکتی ہے:
- دکان اور اسٹیبلشمنٹ رجسٹریشن
- میونسپل کارپوریشن سے این او سی

تازہ ترین ضروریات کے لیے مقامی حکام یا قانونی ماہر سے مشورہ کریں۔
    `,

    faq3Question: "دکان کی بکنگ کے لیے پولیس تصدیق کیوں لازمی ہے؟",
    faq3Answer: `
پولیس تصدیق مارکیٹ کی حفاظت اور اعتماد کو یقینی بنانے کے لیے ہے۔ یہ دکاندار اور ملازمین دونوں کے لیے ضروری ہے تاکہ مقامی قانون کا مکمل طور پر اطلاق ہو سکے۔
    `,

    footer: "© 2025 رومی چوک | جملہ حقوق محفوظ ہیں۔",
    signIn: "شرائط و ضوابط",
    tenderOwnerLabel: "ٹینڈر مالک:",
    tenderOwnerName: "ایم/ایس پروین کمار مشرا، جونپور یوپی",
    address: "پتہ: گلاب واٹیکا، رومی گیٹ کے سامنے، حسین آباد",
    termsDetailed: `رومی چوک @ لذیذ گلی میں دکان بک کرنے کے لیے، براہ کرم فرنچائز یا برانڈ مالکان کے درج ذیل تصدیق شدہ دستاویزات جمع کریں:

- کمپنی رجسٹریشن سرٹیفیکیٹ: آپ کے کاروبار کے قانونی اندراج کا ثبوت۔
- برانڈ رجسٹریشن سرٹیفیکیٹ: آپ کے برانڈ نام یا لوگو کے رجسٹریشن کی دستاویزات۔
- ٹریڈ مارک رجسٹریشن: آپ کی برانڈ شناخت کے تحفظ کے لیے باضابطہ رجسٹریشن کا ثبوت۔
- فوڈ سیفٹی اینڈ اسٹینڈرڈز اتھارٹی آف انڈیا (FSSAI) لائسنس: تمام فوڈ کاروبار کے لیے لازمی تاکہ فوڈ سیفٹی کے معیار پر عمل ہو سکے۔
- جی ایس ٹی (GST) رجسٹریشن: ٹیکس مقاصد اور قانونی کاروباری لین دین کے لیے ضروری جی ایس ٹی نمبر۔
- پولیس ویری فکیشن سرٹیفیکیٹس: دکان کے مالک اور تمام ملازمین کے لیے پس منظر کی جانچ کے دستاویزات تاکہ سلامتی اور مقامی قوانین کی پابندی یقینی بنائی جا سکے۔
- مائیکرو، اسمال اینڈ میڈیم انٹرپرائزز (MSME) رجسٹریشن: آپ کے کاروبار کو MSME زمرے میں شامل کرنے کا سرٹیفیکیٹ، جو مختلف فوائد فراہم کر سکتا ہے۔

اضافی طور پر، مقامی قوانین اور رومی چوک لذیذ گلی کی مخصوص ضروریات کے مطابق آپ کو درج ذیل کی بھی ضرورت ہو سکتی ہے:
- دکان اور ادارہ رجسٹریشن: کام کے حالات کو منظم کرتا ہے اور ملازمین کے حقوق کو یقینی بناتا ہے۔
- میونسپل کارپوریشن سے این او سی (NOC): مقامی بلدیاتی ضوابط کے مطابق ہونے کی تصدیق کرتا ہے۔

تمام ضوابط کی مکمل تعمیل کے لیے لکھنؤ کے مقامی حکام یا کسی قانونی ماہر سے مشورہ کرنا بہتر ہوگا۔`

  }
}


const terraCottaColors = {
  base: "#E2725B",
  hover: "#D1604B",
  dark: "#A44C3D",
  light: "#F8EDE6",
  accent: "#B85746",
  glass: "rgba(226,114,91,0.15)",
}

export default function Home() {
  const [showTermsModal, setShowTermsModal] = useState(false)

  const [currentLang, setCurrentLang] = useState("english")
  const [text, setText] = useState(translations.english)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showHero, setShowHero] = useState(false)
  const [showPartners, setShowPartners] = useState(false)

  useEffect(() => {
    setText(translations[currentLang as keyof typeof translations])
  }, [currentLang])

  useEffect(() => {
    const heroTimeout = setTimeout(() => setShowHero(true), 300)
    const partnerTimeout = setTimeout(() => setShowPartners(true), 1200)
    return () => {
      clearTimeout(heroTimeout)
      clearTimeout(partnerTimeout)
    }
  }, [])

  const handleLanguageChange = (lang: string) => {
    setCurrentLang(lang)
    setMobileMenuOpen(false)
  }

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Header + Hero */}
      <header className="relative h-screen flex flex-col overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/bg.jpg"
            alt="Lucknow Background"
            className="w-full h-full object-cover object-center"
            draggable={false}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(209,98,69,0.85) 0%, rgba(183,77,52,0.85) 50%, rgba(184,87,70,0.55) 100%)",
              mixBlendMode: "multiply",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black/90"></div>
        </div>

        {/* Navbar */}
        <nav className="relative z-30 flex justify-between items-center px-6 md:px-12 py-6">
          <img src="/logo.png" alt="Rumi Chowk Logo" className="w-36 md:w-44" draggable={false} />
          <div className="hidden md:flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-[#E2725B] text-[#E2725B] hover:bg-[#E2725B]/20 transition">
                  <Globe className="mr-2 h-4 w-4" />
                  {currentLang.charAt(0).toUpperCase() + currentLang.slice(1)}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {Object.keys(translations).map((lang) => (
                  <DropdownMenuItem key={lang} onClick={() => handleLanguageChange(lang)}>
                    {lang.charAt(0).toUpperCase() + lang.slice(1)}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
           <Button
  className="bg-[#E2725B] hover:bg-[#D1604B] text-black shadow-lg transition"
  onClick={() => setShowTermsModal(true)}
>
  {text.signIn}
</Button>

          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-[#E2725B]/30 rounded-md transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-20 right-0 left-0 bg-black/95 p-6 z-40 flex flex-col gap-4 md:hidden rounded-b-lg shadow-lg">
            {Object.keys(translations).map((lang) => (
              <Button
                key={lang}
                variant="outline"
                className="border-[#E2725B] text-[#E2725B] w-full justify-start"
                onClick={() => handleLanguageChange(lang)}
              >
                {lang.charAt(0).toUpperCase() + lang.slice(1)}
              </Button>
            ))}
           <Button
  className="bg-[#E2725B] hover:bg-[#D1604B] text-black w-full shadow-lg transition"
  onClick={() => setShowTermsModal(true)}
>
  {text.signIn}
</Button>
          </div>
        )}

        {/* Hero Section */}
        <div
          className={`relative z-30 flex-1 flex flex-col justify-center items-center text-center px-6 md:px-12 mt-auto mb-24 transition-opacity duration-1000 ease-in-out ${
            showHero ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1
            className="text-5xl md:text-7xl font-serif font-extrabold mb-6"
            style={{
              color: terraCottaColors.light,
              textShadow: `0 0 10px ${terraCottaColors.base}, 0 0 30px ${terraCottaColors.accent}`,
            }}
          >
            {text.welcome}
          </h1>

          <Button
  onClick={() => window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLScDul2UbQreFPOZUcDveKDPnySLtRh6S67Fp7xTTyerMa3Pkw/viewform",
    "_blank"
  )}
  className="border-2 border-[#B85746] px-10 py-6 text-lg rounded-lg text-[#B85746] bg-transparent hover:bg-[#B85746] hover:text-black shadow-lg hover:shadow-[#B85746]/70 transition transform hover:scale-105"
>
  {text.exploreBtn}
</Button>

        </div>
      </header>

      {/* Partners */}
<section
  className={`w-full relative overflow-hidden bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
    showPartners ? "opacity-100" : "opacity-0"
  }`}
  style={{
    backgroundImage: `
      linear-gradient(rgba(0, 0, 0, 0.90), rgba(35, 20, 15, 0.95)),
      url('https://www.exoticindiaart.com/images/products/original/paintings-2019/mix484.webp')
    `,
  }}
>
  <div className="px-6 md:px-12 max-w-6xl mx-auto py-24 text-white font-serif">

    {/* Tender Owner Box */}
  <div className="bg-[#E2725B]/20 border border-white/20 backdrop-blur-md px-6 py-3 rounded-xl text-center text-sm md:text-base font-semibold tracking-wide shadow-md mb-16 max-w-md mx-auto">
  {text.tenderOwnerLabel} <span className="italic text-[#E4C59E]">{text.tenderOwnerName}</span>
</div>


    {/* Logos Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-14 justify-items-center mb-20">
      {[
        { id: 1, label: "In Association with" },
        { id: 2, label: "Concept & Visualisation by" },
        { id: 3, label: "Interior by" },
        { id: 4, label: "In Association with" },
      ].map(({ id, label }) => (
        <div
          key={id}
          className="w-44 md:w-52 h-auto bg-[#E2725B]/20 border border-white/20 backdrop-blur-md p-4 rounded-2xl shadow-lg shadow-black/40 flex flex-col items-center space-y-4 transition-transform hover:scale-105"
        >
          <div className="text-xs md:text-sm font-bold tracking-wide text-white/90 text-center leading-snug">
            {label}
          </div>
          <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full bg-white overflow-hidden shadow-xl shadow-black/30">
            <img
              src={`/logo${id}.png`}
              alt={`Partner ${id}`}
              className="w-full h-full object-contain z-10 relative"
              draggable={false}
            />
            <div className="absolute inset-0 bg-[#E2725B]/20 z-20 pointer-events-none rounded-full" />
          </div>
        </div>
      ))}
    </div>

    {/* Address Box */}
   <div className="bg-[#E2725B]/20 border border-white/20 backdrop-blur-md px-6 py-3 rounded-xl text-center text-sm md:text-base font-semibold tracking-wide shadow-md max-w-lg mx-auto">
  {text.address}
</div>

  </div>
</section>






   <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-[#3e1f16] via-[#4e2a1e] to-[#2b1712]">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16 text-[#E2725B] drop-shadow-sm">
      {text.faq}
    </h2>
    <Accordion type="single" collapsible className="w-full space-y-4">
      {/* FAQ 1 */}
      <AccordionItem value="item-1" className="border border-[#E2725B]/40 rounded-xl overflow-hidden bg-[#1c0f0a]/60 backdrop-blur-md shadow-md">
        <AccordionTrigger className="text-xl font-serif px-4 py-4 text-[#f8e2d3] hover:text-[#E2725B] transition-all duration-300">
          {text.faq1Question}
        </AccordionTrigger>
        <AccordionContent className="text-[#e7d2c1] px-6 pb-6 whitespace-pre-line">
          {text.faq1Answer}
        </AccordionContent>
      </AccordionItem>

      {/* FAQ 2 */}
      <AccordionItem value="item-2" className="border border-[#E2725B]/40 rounded-xl overflow-hidden bg-[#1c0f0a]/60 backdrop-blur-md shadow-md">
        <AccordionTrigger className="text-xl font-serif px-4 py-4 text-[#f8e2d3] hover:text-[#E2725B] transition-all duration-300">
          {text.faq2Question}
        </AccordionTrigger>
        <AccordionContent className="text-[#e7d2c1] px-6 pb-6 whitespace-pre-line">
          {text.faq2Answer}
        </AccordionContent>
      </AccordionItem>

      {/* FAQ 3 */}
      <AccordionItem value="item-3" className="border border-[#E2725B]/40 rounded-xl overflow-hidden bg-[#1c0f0a]/60 backdrop-blur-md shadow-md">
        <AccordionTrigger className="text-xl font-serif px-4 py-4 text-[#f8e2d3] hover:text-[#E2725B] transition-all duration-300">
          {text.faq3Question}
        </AccordionTrigger>
        <AccordionContent className="text-[#e7d2c1] px-6 pb-6">
          {text.faq3Answer}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</section>

{showTermsModal && (
  <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
    <div className="bg-[#1c0f0a] border border-[#E2725B]/40 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-lg text-[#f8e2d3] p-6 relative">
      <button
        className="absolute top-3 right-3 text-[#E2725B] hover:text-white transition"
        onClick={() => setShowTermsModal(false)}
      >
        <X className="w-6 h-6" />
      </button>
      <h2 className="text-2xl font-serif font-bold mb-4 text-[#E2725B]">Terms & Conditions</h2>
    <p className="whitespace-pre-line text-sm leading-relaxed">
  {text.termsDetailed}
</p>

    </div>
  </div>
)}


      {/* Footer */}
      <footer className="py-8 text-center text-sm text-white bg-[#1a0804] font-sans drop-shadow-sm">
        {text.footer}
      </footer>
    </main>
  )
}
