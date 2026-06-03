<!DOCTYPE html>
<!-- file=readme.html | Compiler Pass2: Jabri-web.github.io → vercel.app -->
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Jabri-web Database</title>
<script>
// ___future_________ Compiler Pass2
(function(){
  // Pass1: المتصفح يقرأ HTML فاضي
  // Pass2: نبني الصفحة + نبدل الروابط

  window.addEventListener('error', e => console.error("You have to check this:", e.message));

  // 1. الدومين النهائي
  const x = 'Jabri-web.github.io';
  const y = location.hostname;
  const fix = url => (y!==x &&!y.includes('localhost') && url.includes(x))? url.replace(/Jabri-web\.github\.io/g, y) : url;

  // 2. بيانات المستودعات - Pass2 بيشتغل عليها
  const repos = [
    {name:"jabri_lab", desc:"Zx function & Millennium Problems"},
    {name:"Jabri_Nobble", desc:"Zx_RiemannOS archive"},
    {name:"Zx_RiemannOS", desc:"Riemann hypothesis framework"},
    {name:"Zx_RieOS_v1.2", desc:"v1.2 improved algorithms"},
    {name:"Zx_RieOS_v1.1", desc:"v1.1 numerical validation"},
    {name:"Zx_Mother_Function_Jabri", desc:"Core theory"},
    {name:"Jabri_Checkout", desc:"Testing scripts"}
  ].map(r => ({...r, url: fix(`https://${x}/${r.name}/`)}));

  // 3. بيانات الاوراق
  const papers = [
    ["Riemann Hypothesis","10.5281/zenodo.20139904"],
    ["P vs NP","10.5281/zenodo.20145279"],
    ["Yang-Mills Mass Gap","10.5281/zenodo.20148344"],
    ["Navier-Stokes","10.5281/zenodo.20149618"],
    ["Zx_RiemannOS v1.3","10.5281/zenodo.20145337"],
    ["Jabri Identity","10.5281/zenodo.20114317"],
    ["Zx_RieOS v1.2 Gold","10.5281/zenodo.20100622"],
    ["Zx_RieOS v1.1","10.5281/zenodo.20070594"]
  ];

  // 4. بناء الصفحة بـ JS فقط
  document.body.style.cssText = "margin:0;padding:40px 20px;font-family:Tahoma;background:#0d1117;color:#c9d1d9;text-align:center;max-width:900px;margin:auto;line-height:1.8";

  document.body.innerHTML = `
    <img src="Jabri_photo.png" width="140" height="140" style="border-radius:50%;border:4px solid #6ae3ff;object-fit:cover">
    <h1>Eng. Abdulla Mohammed Nasser Al-Jabri</h1>
    <h3>م. عبدالله محمد ناصر الجبري</h3>
    <p><b>Independent Researcher in Mathematics & Theoretical Physics</b><br>
    <b>باحث مستقل في الرياضيات والفيزياء النظرية</b></p>
    <p><b>Research Focus:</b> Zx Function & Millennium Problems<br>
    <b>مجال البحث:</b> دالة Zx ومسائل الألفية</p>

    <a href="${fix('https://github.com/Jabri-web')}" style="display:inline-block;margin:10px;padding:12px 20px;background:#6ae3ff;color:#000;text-decoration:none;border-radius:8px;font-weight:bold">Visit GitHub Profile</a>

    <div style="margin:20px 0">
      <img src="https://komarev.com/ghpvc/?username=Jabri-web&color=6ae3ff&style=for-the-badge&label=Visitors">
      <img src="https://img.shields.io/github/stars/Jabri-web?color=yellow&style=for-the-badge&logo=github">
      <img src="https://img.shields.io/github/followers/Jabri-web?color=green&style=for-the-badge&logo=github">
    </div>

    <img src="Zx_Equations.png" style="max-width:100%;margin:20px 0">
    <img src="Zx_Eq_figure.png" style="max-width:100%;margin:20px 0">

    <hr style="border:1px solid #30363d;margin:30px 0">
    <h2>📄 License / الترخيص</h2>
    <p><b>CC BY 4.0</b> - Free to use with attribution<br>
    <b>Jabri Identity:</b> Z + C + A = 1</p>

    <h2>📚 Main Repositories / المستودعات الرئيسية</h2>
    ${repos.map((r,i) => `
      <p>${i+1}. <a href="${r.url}" style="color:#6ae3ff;text-decoration:none;font-weight:bold">${r.name}</a> - ${r.desc}</p>
    `).join('')}

    <h2>📑 Published Papers with DOI</h2>
    ${papers.map((p,i) => `
      <p>${i+1}. <b>${p[0]}</b> - <a href="https://doi.org/${p[1]}" style="color:#6ae3ff">${p[1]}</a></p>
    `).join('')}

    <h2>🔗 Contact</h2>
    <p><b>ORCID:</b> <a href="https://orcid.org/0009-0001-1319-3622" style="color:#6ae3ff">0009-0001-1319-3622</a><br>
    <b>Email:</b> <a href="mailto:jabri.2018@gmail.com" style="color:#6ae3ff">jabri.2018@gmail.com</a><br>
    <b>Website:</b> <a href="${fix('https://Jabri-web.github.io')}" style="color:#6ae3ff">${y}</a></p>

    <hr>
    <p><b>From Sana'a to the Universe / من صنعاء إلى الكون 🇾🇪</b></p>
  `;
})();
<!-- ____future_______ End -->
</script>
</head>
<body></body>
</html>