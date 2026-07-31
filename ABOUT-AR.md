<!-- ===== شريط تبديل اللغة (النسخة العربية النشطة) ===== -->
<div align="center" style="margin: 10px 0 20px 0; padding: 8px; background: #161b22; border-radius: 30px; display: inline-block; width: auto; border: 1px solid #30363d;">
    <a href="./ABOUT.md" style="background: transparent; color: #c9d1d9; padding: 6px 22px; border-radius: 20px; text-decoration: none; font-weight: bold; font-size: 14px; margin: 0 5px; display: inline-block; border: 1px solid #30363d;">
        🇬🇧 English
    </a>
    <a href="./ABOUT-AR.md" style="background: #6ae3ff; color: #0a0a0f; padding: 6px 22px; border-radius: 20px; text-decoration: none; font-weight: bold; font-size: 14px; margin: 0 5px; display: inline-block;">
        🇾🇪 العربية (الافتراضية)
    </a>
</div>

---

# 📌 بطاقة تعريف المستودع

| الحقل | التفاصيل |
| :--- | :--- |
| **اسم المستودع** | `Jabri_Checkout` |
| **رابط GitHub** | [https://github.com/Jabri-web/Jabri_Checkout](https://github.com/Jabri-web/Jabri_Checkout) |
| **رابط الصفحة** | [https://jabri-web.github.io/Jabri_Checkout/](https://jabri-web.github.io/Jabri_Checkout/) |
| **الملف الحالي** | `./ABOUT-AR.md` (العربية) |
| **اللغة** | العربية (الافتراضية) / English (بديل) |
| **DOI** | [10.5281/zenodo.20513840](https://doi.org/10.5281/zenodo.20513840) |
| **المؤلف** | [م/ عبدالله محمد ناصر الجبري](https://github.com/Jabri-web) |
| **الترخيص** | رخصة MIT |
| **الهوية** | `Z + C + A = 1` |

---

# 🔍 Jabri_Checkout

**نظام التحقق والاختبار – لتفحص وتوثيق منظومة المستودعات بأكملها**

---

<div align="center">
  <img src="Image/Dar2.png" width="80%" style="border-radius: 12px; border: 2px solid #6ae3ff;" alt="دار الحجر، اليمن">
  <p><i>🏛️ دار الحجر، اليمن – التراث الذي يربط الماضي العريق بمستقبل التكنولوجيا.</i></p>
</div>

---

## 📖 حول هذا المستودع

**Jabri_Checkout** هو **نظام التحقق والاختبار** لمنظومة Jabri-web بأكملها. يعمل كطبقة ضمان الجودة، حيث يفحص جميع المستودعات لضمان سلامة الكود، والتوثيق الصحيح، والهيكل المتسق عبر المنظمة.

يعتمد هذا المستودع على إجراء GitHub Actions `checkout`، ويوفر الأدوات وسير العمل اللازمة للتحقق من أن كل مشروع يلبي معايير Jabri-web قبل النشر.

**المميزات الرئيسية:**
- 🧪 **اختبار آلي** – يُجري فحوصات على جميع المستودعات للتحقق من جودة الكود.
- 📄 **التحقق من التوثيق** – يتأكد من وجود `README.md`، `ABOUT.md`، والملفات الأساسية الأخرى بشكل صحيح.
- 🔗 **التحقق من الروابط** – يتأكد من أن جميع روابط DOIs و GitHub Pages نشطة وصحيحة.
- 🔄 **تكامل CI/CD** – مصمم للاستخدام كإجراء GitHub Actions في سير العمل عبر المنظمة.

---

## 🗂️ هيكل المستودع

| الملف / المجلد | الوصف |
| :--- | :--- |
| `action.yml` | تعريف الإجراء الرئيسي لسير عمل checkout. |
| `dist/` | ملفات التوزيع المجمعة للإجراء. |
| `src/` | الكود المصدري لمنطق checkout والتحقق. |
| `.github/workflows/` | سير عمل CI/CD للاختبار والتحقق. |
| `README.md` | دليل المستخدم والتوثيق. |
| `LICENSE` | نص رخصة MIT. |

---

## 🔬 المميزات الرئيسية

| الميزة | الوصف |
| :--- | :--- |
| **أمان الاعتماد** | يخزن بيانات الاعتماد في `$RUNNER_TEMP` بدلاً من `.git/config` لتحسين الأمان. |
| **سحب مرن** | يدعم السحب الجزئي (sparse checkout)، والتحكم في عمق الجلب، ومعالجة الوحدات الفرعية. |
| **متعدد المستودعات** | يمكنه سحب مستودعات متعددة جنباً إلى جنب أو متداخلة. |
| **دعم المستودعات الخاصة** | يعمل مع المستودعات الداخلية والخاصة باستخدام PAT مخصص. |
| **متعدد المنصات** | متوافق مع مشغلات Linux و macOS و Windows. |

---

## 🚀 أمثلة الاستخدام

### السحب الأساسي
```yaml
- uses: actions/checkout@v6
