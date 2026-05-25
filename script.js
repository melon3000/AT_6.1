// ============================================================
// TRANSLATIONS
// ============================================================
const translations = {
  et: {
    siteTitle: "Aerofold 2.0",
    siteSubtitle: "Paberlennukite voltimisjuhendid",
    navPlanes: "Lennukid",
    navTutorial: "Juhend",
    navAnalysis: "Analüüs",
    navAbout: "Projektist",
    heroBadge: "Sprint 2 · Aerofold",
    heroTitle: "Vali paberlennuk ja alusta voltimist",
    heroText: "Leht toetab eesti ja inglise keelt ning heledat ja tumedat teemat. Kõik Sprint 2 nõuded on täidetud.",
    heroCta: "Vaata lennukeid →",
    heroCtaAlt: "Sprint analüüs",
    stat1: "Lennukit",
    stat2: "Keelt",
    stat3: "Teemat",
    stat4: "% Agiilne",
    sectionTag1: "Kataloog",
    planesHeading: "Lennukid",
    planesDesc: "Vali oma lennuk ja järgi voltimise juhiseid samm-sammult.",
    sectionTag2: "Juhend",
    tutorialHeading: "Voltimise põhireeglid",
    tutorialDesc: "Enne lennuki tegemist tutvu põhireeglitega parima tulemuse saavutamiseks.",
    tip1Title: "Täpsed voldid",
    tip1Text: "Iga voldi täpsus mõjutab lennuki lendamisvõimet. Kasuta joonlauda.",
    tip2Title: "Õige paber",
    tip2Text: "Kasuta standardset A4 paberit (80g/m²). Liiga raske paber ei lenda hästi.",
    tip3Title: "Tasakaal",
    tip3Text: "Tiivad peavad olema täpselt sümmeetrilised. Kontrolli enne viskamist.",
    tip4Title: "Viskamine",
    tip4Text: "Viska lennuk horisontaalselt, 30–45 kraadise nurga all, sujuva liigutusega.",
    foldDemoTitle: "Interaktiivne demo — kliki paberil!",
    paperLabel: "A4 paber",
    foldHint: "Kliki, et alustada voltimist →",
    sectionTag3: "Sprint 2 · Ülesanne 3",
    analysisHeading: "Analüüs: \"Võimatu\" soov",
    analysisDesc: "Product Owner soovis selle sprindi jooksul luua native mobiilirakendused Androidile ja iOS-ile. Siin on meie argumenteeritud vastus.",
    alertTitle: "Product Ownerilt saabunud nõue:",
    alertText: "\"Meie konkurentidel on äpid! Me peame hiljemalt selle sprindi lõpuks valmis tegema eraldiseisvad native rakendused nii Androidile kui ka iPhone'ile.\"",
    anal1Title: "Ajaline sobimatus",
    anal1Text: "Native äppide arendus nõuab täiesti eraldi koodibaase: Swift + Xcode iOS-ile ja Kotlin + Android Studio Androidile. See tähendab kaks eraldi rakendust nullist. Sprint 2 ajaraam (1–2 nädalat) on selleks ebareaalselt lühike — miinimum on 3–6 kuud töötavaks MVP-ks.",
    anal2Title: "Brooksi seadus",
    anal2Text: "Fred Brooks kirjutas 1975: \"Adding manpower to a late software project makes it later.\" Uued programmeerijad vajavad onboarding'ut, kommunikatsioonikanalite arv kasvab plahvatuslikult valemiga n(n-1)/2. 3 inimest = 3 kanalit, 6 inimest = 15 kanalit. See lisab keerukust, mitte kiirust.",
    team3: "3 inimest",
    team5: "5 inimest",
    team8: "8 inimest",
    anal3Title: "Agiilne kompromiss: PWA",
    anal3Text: "Agiilse manifesti kohaselt on töötav tarkvara peamine edusammude mõõt. Meie ettepanek: muuta olemasolev veebileht Progressive Web App (PWA)-ks. See käitub mobiilis nagu äpp — ikoon avakuval, offline-režiim, push-teated — aga ühe koodibaasiga.",
    compareNative: "Native äpp",
    comparePWA: "PWA",
    native1: "✗ 3–6 kuud arendust",
    native2: "✗ 2 eraldi koodibaasi",
    native3: "✗ App Store ülevaatused",
    native4: "✗ Kõrge kulu",
    pwa1: "✓ 1–2 päeva lisatöö",
    pwa2: "✓ 1 koodibaaas",
    pwa3: "✓ Kohene kättesaadavus",
    pwa4: "✓ Madal kulu",
    conclusionTitle: "Järeldus",
    conclusionText: "Soovitame Sprint 2-s rakendada PWA lahendust, mis annab kasutajatele äpitaolise kogemuse minimaalsete lisakuludega. Native äppide arendus lükatakse edasi, kui äriline vajadus on selgelt põhjendatud ja ressursid planeeritud.",
    sectionTag4: "Projektist",
    aboutHeading: "Sprint 2 kokkuvõte",
    feat1Title: "Mitmekeelsus",
    feat1Text: "EE / EN keelevalik reaalajas, localStorage'i salvestamine, kohene ümberlülitus ilma lehe laadimiseta.",
    feat2Title: "Dark / Light teema",
    feat2Text: "Harmooniline värvipaletter, prefers-color-scheme tuvastus, localStorage'i salvestamine.",
    feat3Title: "Responsive disain",
    feat3Text: "Töötab kõikidel seadmetel. PWA-valmis arhitektuur tuleviku laienduseks.",
    feat4Title: "XP põhimõtted",
    feat4Text: "Simple Design, Working Software, Scope Management — kõik rakendatud selles sprindis.",
    footerText: "AT 6.1 Praktiline projektijuhtimine — Sprint 2",
    footerBadge: "Agiilne arendus · XP · Scrum",
    steps: "Sammud",
    planes: [
      {
        emoji: "✈️",
        name: "Klassikaline nool",
        description: "Lihtne ja kiire paberlennuk algajale. Lennab sirgjooneliselt ja kiiresti.",
        steps: ["Murra paber pikuti pooleks.", "Voldi ülemised nurgad keskele.", "Kordu voltimine tiibade moodustamiseks.", "Tee mõlemad tiivad võrdsed."]
      },
      {
        emoji: "🛩️",
        name: "Pikk lendaja",
        description: "Stabiilne mudel, mis sobib pikemaks lennuks. Ideaalne kauguse võistlusteks.",
        steps: ["Kasuta sirget A4 paberit.", "Tee ninaosa kitsamaks.", "Kontrolli tiibade sümmeetriat.", "Lisa kerge tõusenurk tiibadele."]
      },
      {
        emoji: "🚀",
        name: "Trikilennuk",
        description: "Lühikeseks ja lõbusaks katsetamiseks mõeldud mudel. Teeb ilusaid loopinguid.",
        steps: ["Voldi lühem nina.", "Painuta tiivaotsi natuke üles.", "Lisa lopp nina osale.", "Viska rahuliku nurga all."]
      }
    ]
  },
  en: {
    siteTitle: "Aerofold 2.0",
    siteSubtitle: "Paper airplane folding guides",
    navPlanes: "Airplanes",
    navTutorial: "Tutorial",
    navAnalysis: "Analysis",
    navAbout: "About",
    heroBadge: "Sprint 2 · Aerofold",
    heroTitle: "Choose a paper airplane and start folding",
    heroText: "The page supports Estonian and English, plus light and dark themes. All Sprint 2 requirements fulfilled.",
    heroCta: "See airplanes →",
    heroCtaAlt: "Sprint analysis",
    stat1: "Airplanes",
    stat2: "Languages",
    stat3: "Themes",
    stat4: "% Agile",
    sectionTag1: "Catalog",
    planesHeading: "Airplanes",
    planesDesc: "Choose your airplane and follow the folding instructions step by step.",
    sectionTag2: "Tutorial",
    tutorialHeading: "Basic folding rules",
    tutorialDesc: "Before making your airplane, get familiar with the basics for the best results.",
    tip1Title: "Precise folds",
    tip1Text: "The precision of each fold affects the airplane's flight. Use a ruler.",
    tip2Title: "Right paper",
    tip2Text: "Use standard A4 paper (80g/m²). Too heavy paper won't fly well.",
    tip3Title: "Balance",
    tip3Text: "Wings must be exactly symmetrical. Check before throwing.",
    tip4Title: "Throwing",
    tip4Text: "Throw the plane horizontally at a 30–45° angle with a smooth motion.",
    foldDemoTitle: "Interactive demo — click the paper!",
    paperLabel: "A4 paper",
    foldHint: "Click to start folding →",
    sectionTag3: "Sprint 2 · Task 3",
    analysisHeading: "Analysis: The \"Impossible\" Request",
    analysisDesc: "The Product Owner requested native mobile apps for Android and iOS within this sprint. Here is our argued response.",
    alertTitle: "Request from Product Owner:",
    alertText: "\"Our competitors have apps! We must have standalone native apps for both Android and iPhone ready by the end of this sprint.\"",
    anal1Title: "Time Infeasibility",
    anal1Text: "Native app development requires completely separate codebases: Swift + Xcode for iOS and Kotlin + Android Studio for Android. That means two separate apps from scratch. Sprint 2's timeframe (1–2 weeks) is unrealistically short — the minimum is 3–6 months for a working MVP.",
    anal2Title: "Brook's Law",
    anal2Text: "Fred Brooks wrote in 1975: \"Adding manpower to a late software project makes it later.\" New programmers need onboarding, communication channels grow explosively with formula n(n-1)/2. 3 people = 3 channels, 6 people = 15 channels. This adds complexity, not speed.",
    team3: "3 people",
    team5: "5 people",
    team8: "8 people",
    anal3Title: "Agile Compromise: PWA",
    anal3Text: "According to the Agile Manifesto, working software is the primary measure of progress. Our proposal: turn the existing website into a Progressive Web App (PWA). It behaves like an app on mobile — icon on home screen, offline mode, push notifications — but with one codebase.",
    compareNative: "Native App",
    comparePWA: "PWA",
    native1: "✗ 3–6 months development",
    native2: "✗ 2 separate codebases",
    native3: "✗ App Store reviews",
    native4: "✗ High cost",
    pwa1: "✓ 1–2 days extra work",
    pwa2: "✓ 1 codebase",
    pwa3: "✓ Immediate availability",
    pwa4: "✓ Low cost",
    conclusionTitle: "Conclusion",
    conclusionText: "We recommend implementing a PWA solution in Sprint 2, giving users an app-like experience with minimal extra cost. Native app development is deferred until the business need is clearly justified and resources are planned.",
    sectionTag4: "About",
    aboutHeading: "Sprint 2 Summary",
    feat1Title: "Multilingual",
    feat1Text: "EE / EN language selector in real-time, localStorage saving, instant switch without page reload.",
    feat2Title: "Dark / Light Theme",
    feat2Text: "Harmonious color palette, prefers-color-scheme detection, localStorage saving.",
    feat3Title: "Responsive Design",
    feat3Text: "Works on all devices. PWA-ready architecture for future extension.",
    feat4Title: "XP Principles",
    feat4Text: "Simple Design, Working Software, Scope Management — all applied in this sprint.",
    footerText: "AT 6.1 Practical Project Management — Sprint 2",
    footerBadge: "Agile development · XP · Scrum",
    steps: "Steps",
    planes: [
      {
        emoji: "✈️",
        name: "Classic Dart",
        description: "A simple and fast paper airplane for beginners. Flies straight and quickly.",
        steps: ["Fold the paper lengthwise in half.", "Fold upper corners to the center.", "Repeat fold to form wings.", "Make both wings equal."]
      },
      {
        emoji: "🛩️",
        name: "Long Flyer",
        description: "A stable model suitable for longer flights. Ideal for distance competitions.",
        steps: ["Use a straight A4 sheet.", "Make the nose narrower.", "Check wing symmetry.", "Add a slight lift angle to wings."]
      },
      {
        emoji: "🚀",
        name: "Trick Plane",
        description: "A model designed for short and fun experiments. Makes great loops.",
        steps: ["Fold a shorter nose.", "Bend the wingtips slightly upward.", "Add a flap to the nose section.", "Throw at a calm angle."]
      }
    ]
  }
};

// ============================================================
// DOM REFS
// ============================================================
const btnEt = document.getElementById("btn-et");
const btnEn = document.getElementById("btn-en");
const themeToggle = document.getElementById("theme-toggle");
const planesContainer = document.getElementById("planes-container");
const demoPaper = document.getElementById("demo-paper");
const foldHint = document.getElementById("fold-hint");
const paperLabel = document.getElementById("paper-label");

// ============================================================
// LANGUAGE
// ============================================================
function setLanguage(lang) {
  const t = translations[lang] || translations.et;
  document.documentElement.lang = lang;

  // Update all data-i18n elements (except planes container, handled separately)
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Render plane cards
  planesContainer.innerHTML = t.planes.map((plane, i) => `
    <article class="card fade-in" style="transition-delay: ${i * 0.1}s">
      <span class="card-emoji">${plane.emoji}</span>
      <h3>${plane.name}</h3>
      <p>${plane.description}</p>
      <div class="steps-label">${t.steps}</div>
      <ol>
        ${plane.steps.map(s => `<li>${s}</li>`).join("")}
      </ol>
    </article>
  `).join("");

  // Re-observe new cards for fade-in
  document.querySelectorAll(".card.fade-in").forEach(el => observer.observe(el));

  localStorage.setItem("language", lang);
  btnEt.classList.toggle("active", lang === "et");
  btnEn.classList.toggle("active", lang === "en");
}

// ============================================================
// THEME
// ============================================================
function getInitialTheme() {
  const saved = localStorage.getItem("theme");
  if (saved) return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function setTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
}

themeToggle.addEventListener("click", () => {
  const next = document.body.classList.contains("dark") ? "light" : "dark";
  setTheme(next);
});

btnEt.addEventListener("click", () => setLanguage("et"));
btnEn.addEventListener("click", () => setLanguage("en"));

// ============================================================
// CANVAS BACKGROUND ANIMATION
// ============================================================
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");
let particles = [];
let animFrame;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createParticles() {
  particles = [];
  const count = Math.floor((canvas.width * canvas.height) / 18000);
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.4 + 0.1
    });
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const isDark = document.body.classList.contains("dark");
  const color = isDark ? "77, 144, 254" : "26, 86, 219";

  particles.forEach(p => {
    p.x += p.speedX;
    p.y += p.speedY;
    if (p.x < 0) p.x = canvas.width;
    if (p.x > canvas.width) p.x = 0;
    if (p.y < 0) p.y = canvas.height;
    if (p.y > canvas.height) p.y = 0;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${color}, ${p.opacity})`;
    ctx.fill();
  });

  // Draw connections
  particles.forEach((p, i) => {
    particles.slice(i + 1).forEach(p2 => {
      const dx = p.x - p2.x;
      const dy = p.y - p2.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(${color}, ${(1 - dist / 120) * 0.12})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    });
  });

  animFrame = requestAnimationFrame(drawParticles);
}

window.addEventListener("resize", () => {
  resizeCanvas();
  createParticles();
});

// ============================================================
// SCROLL FADE IN
// ============================================================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".tutorial-card, .analysis-card, .about-card, .stats-bar, .fold-demo, .alert-box, .conclusion-box").forEach(el => {
  el.classList.add("fade-in");
  observer.observe(el);
});

// ============================================================
// COUNTER ANIMATION
// ============================================================
function animateCounters() {
  document.querySelectorAll(".stat-num[data-count]").forEach(el => {
    const target = parseInt(el.dataset.count);
    const duration = 1200;
    const start = performance.now();
    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

const statsObs = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    animateCounters();
    statsObs.disconnect();
  }
}, { threshold: 0.5 });

const statsBar = document.querySelector(".stats-bar");
if (statsBar) statsObs.observe(statsBar);

// ============================================================
// PAPER FOLDING DEMO
// ============================================================
let foldStep = 0;
const foldClasses = ["fold-1", "fold-2", "fold-3", "fold-4", "fold-5", "fold-done"];
const foldLabels = {
  et: ["Murra pooleks →", "Voldi nurgad →", "Tee tiivad →", "Suru kinni →", "Kujunda nina →", "✈ Valmis! Viska!"],
  en: ["Fold in half →", "Fold corners →", "Form wings →", "Press flat →", "Shape nose →", "✈ Done! Throw it!"]
};

if (demoPaper) {
  demoPaper.addEventListener("click", () => {
    foldClasses.forEach(c => demoPaper.classList.remove(c));
    foldStep = (foldStep + 1) % (foldClasses.length + 1);

    const lang = localStorage.getItem("language") || "et";
    const labels = foldLabels[lang] || foldLabels.et;

    if (foldStep === 0) {
      foldHint.textContent = translations[lang]?.foldHint || "Kliki, et alustada voltimist →";
      paperLabel.textContent = translations[lang]?.paperLabel || "A4 paber";
    } else {
      demoPaper.classList.add(foldClasses[foldStep - 1]);
      foldHint.textContent = labels[foldStep - 1];
      paperLabel.textContent = `${foldStep} / ${foldClasses.length}`;
    }
  });
}

// ============================================================
// BROOKS LAW BARS — animate on scroll
// ============================================================
const barsObs = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    document.querySelectorAll(".formula-bar").forEach(bar => {
      bar.style.width = bar.style.getPropertyValue("--w") ||
        getComputedStyle(bar).getPropertyValue("--w");
    });
    barsObs.disconnect();
  }
}, { threshold: 0.3 });

const barsSection = document.querySelector(".brooks-formula");
if (barsSection) barsObs.observe(barsSection);

// ============================================================
// INIT
// ============================================================
setTheme(getInitialTheme());
setLanguage(localStorage.getItem("language") || "et");
resizeCanvas();
createParticles();
drawParticles();
