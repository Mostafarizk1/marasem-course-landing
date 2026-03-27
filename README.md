# 🎬 كورس المونتاج العقاري - Landing Page

صفحة هبوط احترافية لبيع كورس المونتاج العقاري من أكاديمية مراسم للتدريب والتطوير.

---

## 📋 نظرة عامة

هذا المشروع عبارة عن صفحة هبوط (Landing Page) مصممة خصيصاً لتسويق وبيع كورس المونتاج العقاري. الصفحة مرفوعة على **GitHub** ومنشورة على **Vercel** وجاهزة للعمل.

---

## 🚀 الموقع المباشر

- **GitHub Repository**: [https://github.com/Mostafarizk1/marasem-course-landing](https://github.com/Mostafarizk1/marasem-course-landing)
- **Live Website**: مرفوع على Vercel

---

## ✨ المميزات الرئيسية

### 1. **تصميم احترافي وجذاب**
- تصميم عصري بألوان ذهبية وسوداء فاخرة
- متجاوب مع جميع الأجهزة (Mobile, Tablet, Desktop)
- تأثيرات حركية سلسة وجذابة

### 2. **أقسام الصفحة**
- **Hero Section**: قسم البداية مع عنوان جذاب وزر CTA
- **Video Showcase**: عرض نماذج من الفيديوهات التي سيتم شرحها
- **About Academy**: نبذة عن أكاديمية مراسم
- **Instructor Profile**: معلومات عن المحاضر مصطفى رزق
- **Course Journey**: محتوى الكورس بالتفصيل (Timeline)
- **Investment Section**: لماذا الكورس استثمار وليس تكلفة
- **Target Audience**: الفئة المستهدفة
- **Employment Opportunities**: فرص التوظيف للمتميزين
- **Requirements**: متطلبات الحضور
- **Study System**: نظام الدراسة
- **Pricing**: مدة وسعر الكورس
- **Registration Form**: فورم التسجيل مع ربط Google Sheets
- **CTA Section**: دعوة نهائية للتواصل

### 3. **فورم التسجيل المتقدم**
- فورم لجمع بيانات المهتمين (الاسم ورقم التليفون)
- مربوط مباشرة بـ **Google Sheets** لحفظ البيانات تلقائياً
- رسائل نجاح/خطأ تفاعلية
- تصميم جذاب ومتجاوب

### 4. **تتبع الزوار والتحويلات**
- **Facebook Pixel** مدمج لتتبع الزوار والتحويلات
- Pixel ID: `1250484713863859`
- تحميل مؤجل للبيكسل لتحسين الأداء

### 5. **تحسينات الأداء**
- Lazy loading للصور والفيديوهات
- تحميل الخطوط بشكل غير متزامن
- CSS مضغوط ومحسّن
- تأثيرات Intersection Observer للأنيميشن

---

## 🛠️ التقنيات المستخدمة

- **HTML5**: هيكل الصفحة
- **CSS3**: التصميم والتنسيق
  - CSS Variables للألوان
  - Flexbox & Grid للتخطيط
  - Animations & Transitions
- **JavaScript (Vanilla)**: التفاعلات والوظائف
  - Intersection Observer API
  - Fetch API للربط مع Google Sheets
  - Facebook Pixel Integration
- **Font Awesome**: الأيقونات
- **Google Fonts**: خط Cairo
- **Google Apps Script**: لربط الفورم بـ Google Sheets

---

## 📁 هيكل الملفات

```
marasem-course-landing/
├── index.html              # الصفحة الرئيسية
├── styles.css              # ملف التنسيقات
├── script.js               # ملف JavaScript الرئيسي
├── fa-subset.css           # Font Awesome Icons (مخصص)
├── GOOGLE_SHEETS_SETUP.md  # دليل ربط Google Sheets
├── README.md               # هذا الملف
└── assets/                 # الصور والملفات
    ├── hero-bg.webp
    ├── hero-bg.jpg
    ├── mobile.webp
    ├── marasim-office.jpg
    ├── profile.png
    └── certificate-adobe.jpg
```

---

## 🔗 الربط مع Google Sheets

الفورم مربوط بـ Google Sheets لحفظ بيانات المسجلين تلقائياً.

### البيانات المحفوظة:
- **التاريخ والوقت**: تاريخ التسجيل
- **الاسم**: اسم المهتم
- **رقم التليفون**: رقم تليفون المهتم

### لمزيد من التفاصيل:
راجع ملف `GOOGLE_SHEETS_SETUP.md` للحصول على دليل كامل لإعداد Google Sheets.

---

## 📊 Facebook Pixel

الصفحة تحتوي على Facebook Pixel لتتبع:
- **PageView**: عدد زيارات الصفحة
- **Events**: التفاعلات على الصفحة (اختياري)

**Pixel ID الحالي**: `1250484713863859`

---

## 🎯 أزرار الـ CTA (Call To Action)

جميع الأزرار موجهة للتواصل عبر WhatsApp:
- **رقم التليفون**: 01034144446
- **رقم بديل**: 01034244449

الرسالة الافتراضية:
> "أهلاً، أنا قريت كل تفاصيل كورس المونتاج العقاري على الموقع وجاهز للاشتراك، إيه هي طرق الدفع المتاحة؟"

---

## 🎨 نظام الألوان

```css
--black-royal: #0a0a0a      /* الخلفية الرئيسية */
--black-rich: #111111       /* خلفية ثانوية */
--gold: #c9a227             /* اللون الذهبي الرئيسي */
--gold-light: #dbb84d       /* ذهبي فاتح */
--white: #ffffff            /* النصوص */
--gray-light: #8a8a8a       /* نصوص ثانوية */
--danger: #8b0000           /* تنبيهات */
--whatsapp: #25d366         /* زر واتساب */
```

---

## 📱 التجاوب مع الأجهزة

الصفحة متجاوبة بالكامل مع:
- 📱 **Mobile**: أقل من 768px
- 💻 **Tablet**: 768px - 1024px
- 🖥️ **Desktop**: أكبر من 1024px

---

## 🔄 التحديثات الأخيرة

### آخر تحديث: 27 مارس 2026
- ✅ تحديث Facebook Pixel ID إلى `1250484713863859`
- ✅ إضافة فورم التسجيل مع ربط Google Sheets
- ✅ تحسينات في الأداء والتحميل

---

## 📞 معلومات الاتصال

- **الأكاديمية**: أكاديمية مراسم للتدريب والتطوير
- **المحاضر**: مصطفى رزق
- **التليفون**: 01034144446 / 01034244449
- **الموقع**: معرض أعمال المحاضر - [mostafarizkk.com/services](https://www.mostafarizkk.com/services)

---

## 📝 ملاحظات للمطورين

### لتحديث Facebook Pixel:
ابحث في `script.js` عن:
```javascript
fbq('init', 'PIXEL_ID_HERE');
```

### لتحديث Google Sheets URL:
ابحث في `script.js` عن:
```javascript
const scriptURL = 'YOUR_GOOGLE_SCRIPT_URL';
```

### لتحديث أرقام التليفون:
ابحث في `index.html` عن أرقام التليفون واستبدلها.

---

## 🚀 النشر والتحديث

المشروع مرفوع على **GitHub** ومتصل بـ **Vercel** للنشر التلقائي.

### لرفع تحديث جديد:
```bash
git add .
git commit -m "وصف التحديث"
git push origin master
```

Vercel سيقوم بنشر التحديث تلقائياً خلال دقائق.

---

## 📄 الترخيص

جميع الحقوق محفوظة © 2026 أكاديمية مراسم للتدريب والتطوير

---

**تم التطوير بواسطة**: فريق أكاديمية مراسم  
**آخر تحديث**: مارس 2026
