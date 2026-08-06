// js/init-page-root.js
// تحميل الهيدر والفوتر من الجذر

(async function initPage() {
    console.log('🔄 [init-page-root] بدء تحميل الهيدر والفوتر...');
    
    try {
        // =============================================
        //  1️⃣ تحميل الهيدر
        // =============================================
        console.log('📄 [init-page-root] جاري تحميل الهيدر...');
        const headerResponse = await fetch('/header.html');
        if (!headerResponse.ok) {
            throw new Error(`الهيدر غير موجود (${headerResponse.status})`);
        }
        const headerHTML = await headerResponse.text();
        console.log('✅ [init-page-root] تم تحميل الهيدر بنجاح');
        
        // ✅ إضافة محتوى الهيدر إلى الصفحة (ظاهر)
        const headerPlaceholder = document.getElementById('header-placeholder');
        if (headerPlaceholder) {
            headerPlaceholder.innerHTML = headerHTML;
            console.log('✅ [init-page-root] تم وضع الهيدر في المكان المخصص');
            
            // تنفيذ سكريبتات الهيدر
            const headerScripts = headerPlaceholder.querySelectorAll('script');
            console.log(`📜 [init-page-root] عدد سكريبتات الهيدر: ${headerScripts.length}`);
            headerScripts.forEach((script, index) => {
                const newScript = document.createElement('script');
                if (script.src) {
                    newScript.src = script.src;
                } else {
                    newScript.textContent = script.textContent;
                }
                document.head.appendChild(newScript);
                console.log(`✅ [init-page-root] تم تنفيذ سكريبت الهيدر ${index + 1}`);
            });
            
            // ✅ إظهار الهيدر بعد التحميل
            headerPlaceholder.style.display = 'block';
            
            // تحديث اللغة في الهيدر
            if (typeof window.updateHeaderLang === 'function') {
                window.updateHeaderLang();
            }
            
        } else {
            console.warn('⚠️ [init-page-root] عنصر header-placeholder غير موجود');
        }
        
        // =============================================
        //  2️⃣ تحميل الفوتر
        // =============================================
        console.log('📄 [init-page-root] جاري تحميل الفوتر...');
        const footerResponse = await fetch('/footer.html');
        if (!footerResponse.ok) {
            throw new Error(`الفوتر غير موجود (${footerResponse.status})`);
        }
        const footerHTML = await footerResponse.text();
        console.log('✅ [init-page-root] تم تحميل الفوتر بنجاح');
        
        // وضع الفوتر في المكان المخصص
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = footerHTML;
            console.log('✅ [init-page-root] تم وضع الفوتر في المكان المخصص');
            
            // تنفيذ سكريبتات الفوتر
            const footerScripts = footerPlaceholder.querySelectorAll('script');
            console.log(`📜 [init-page-root] عدد سكريبتات الفوتر: ${footerScripts.length}`);
            footerScripts.forEach((script, index) => {
                const newScript = document.createElement('script');
                if (script.src) {
                    newScript.src = script.src;
                } else {
                    newScript.textContent = script.textContent;
                }
                document.body.appendChild(newScript);
                console.log(`✅ [init-page-root] تم تنفيذ سكريبت الفوتر ${index + 1}`);
            });
            
            // تحديث اللغة في الفوتر
            if (typeof window.updateFooterLang === 'function') {
                window.updateFooterLang();
            }
            
            // إعلام بأن الفوتر تم تحميله
            document.dispatchEvent(new Event('footerLoaded'));
            console.log('✅ [init-page-root] تم إرسال حدث footerLoaded');
            
        } else {
            console.warn('⚠️ [init-page-root] عنصر footer-placeholder غير موجود');
        }
        
        // =============================================
        //  3️⃣ تطبيق اللغة المحفوظة
        // =============================================
        const savedLang = localStorage.getItem('preferred-language') || 'ar';
        if (typeof window.applyLanguage === 'function') {
            window.applyLanguage(savedLang);
        } else {
            // إذا لم توجد applyLanguage، نطبق اللغة يدوياً
            document.documentElement.lang = savedLang;
            document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
            document.body.classList.add(savedLang);
        }
        
        console.log('🎉 [init-page-root] تم تحميل الهيدر والفوتر بنجاح!');
        
    } catch (error) {
        console.error('❌ [init-page-root] خطأ في تحميل المكونات:', error);
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = `
                <div style="background: #1a1a2e; color: #888; padding: 2rem; text-align: center; border-top: 1px solid #333;">
                    <p>⚠️ لم يتم تحميل الفوتر. يرجى تحديث الصفحة.</p>
                    <p style="font-size: 12px; color: #666;">خطأ: ${error.message}</p>
                </div>
            `;
        }
    }
})();
