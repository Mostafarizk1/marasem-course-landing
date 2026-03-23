# دليل ربط الفورم بـ Google Sheets

## الخطوات المطلوبة منك:

### 1️⃣ إنشاء Google Sheet جديد

1. افتح [Google Sheets](https://sheets.google.com)
2. اضغط على **+ Blank** لإنشاء ملف جديد
3. سمّي الملف: **"تسجيلات كورس المونتاج العقاري"**
4. في الصف الأول، اكتب العناوين التالية:
   - العمود A: **التاريخ**
   - العمود B: **الاسم**
   - العمود C: **رقم التليفون**

---

### 2️⃣ إنشاء Google Apps Script

1. في نفس ملف Google Sheet، اذهب إلى:
   - **Extensions** (الإضافات) → **Apps Script**

2. امسح أي كود موجود، والصق الكود التالي:

```javascript
function doPost(e) {
  try {
    // فتح الشيت
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // الحصول على البيانات من الفورم
    var name = e.parameter.name;
    var phone = e.parameter.phone;
    var timestamp = new Date();
    
    // إضافة صف جديد بالبيانات
    sheet.appendRow([timestamp, name, phone]);
    
    // إرجاع رد نجاح
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'success',
        'message': 'تم التسجيل بنجاح'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(error) {
    // في حالة حدوث خطأ
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'error',
        'message': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. اضغط على **Save** (💾) وسمّي المشروع: **"Form to Sheet"**

---

### 3️⃣ نشر السكريبت كـ Web App

1. اضغط على **Deploy** (النشر) → **New deployment**
2. اضغط على أيقونة الترس ⚙️ بجانب "Select type"
3. اختر **Web app**
4. املأ البيانات كالتالي:
   - **Description**: Form Handler
   - **Execute as**: **Me** (أنت)
   - **Who has access**: **Anyone** (أي شخص)
5. اضغط **Deploy**
6. سيطلب منك الموافقة على الأذونات:
   - اضغط **Authorize access**
   - اختر حسابك في Google
   - اضغط **Advanced** → **Go to [اسم المشروع] (unsafe)**
   - اضغط **Allow**

---

### 4️⃣ نسخ رابط Web App URL

بعد النشر، ستظهر لك نافذة فيها:
- **Web app URL**: انسخ هذا الرابط كاملاً
- سيكون شكله مثل:
```
https://script.google.com/macros/s/AKfycbz.../exec
```

---

### 5️⃣ وضع الرابط في الكود

1. افتح ملف `script.js`
2. ابحث عن السطر رقم **341**:
```javascript
const scriptURL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';
```

3. استبدل `'YOUR_GOOGLE_SCRIPT_URL_HERE'` بالرابط الذي نسخته:
```javascript
const scriptURL = 'https://script.google.com/macros/s/AKfycbz.../exec';
```

4. احفظ الملف

---

## ✅ اختبار الفورم

1. افتح موقعك في المتصفح
2. اذهب لقسم التسجيل
3. املأ الاسم ورقم التليفون
4. اضغط "سجل اهتمامك الآن"
5. يجب أن ترى رسالة نجاح خضراء
6. تحقق من Google Sheet - يجب أن تجد البيانات مسجلة!

---

## 🔧 في حالة حدوث مشاكل

### المشكلة: "حدث خطأ في الإرسال"

**الحل:**
1. تأكد أن رابط Web App صحيح وينتهي بـ `/exec`
2. تأكد أن الأذونات مضبوطة على **Anyone**
3. جرب إعادة نشر السكريبت (Deploy → Manage deployments → Edit → New version)

### المشكلة: البيانات لا تظهر في الشيت

**الحل:**
1. تأكد أن أسماء الأعمدة في الشيت صحيحة
2. تأكد أن السكريبت يشير للشيت الصحيح
3. افتح Apps Script → Executions لرؤية سجل الأخطاء

---

## 📧 إضافة إشعارات بالبريد الإلكتروني (اختياري)

إذا أردت استلام إيميل عند كل تسجيل جديد، أضف هذا السطر في السكريبت بعد `sheet.appendRow`:

```javascript
// إرسال إيميل إشعار
MailApp.sendEmail({
  to: "your-email@example.com",  // ضع إيميلك هنا
  subject: "تسجيل جديد في كورس المونتاج العقاري",
  body: `تم تسجيل طالب جديد:\n\nالاسم: ${name}\nالتليفون: ${phone}\nالتاريخ: ${timestamp}`
});
```

---

## 🎉 تم!

الآن الفورم مربوط بـ Google Sheets وجاهز للاستخدام!
