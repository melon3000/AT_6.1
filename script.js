const translations = {
  et: {
    siteTitle: "Aerofold 2.0",
    siteSubtitle: "Paberlennukite voltimisjuhendid",
    navPlanes: "Lennukid",
    navAbout: "Projektist",
    themeButton: "Teema",
    heroTitle: "Vali paberlennuk ja alusta voltimist",
    heroText: "Leht toetab eesti ja inglise keelt ning heledat ja tumedat teemat.",
    planesHeading: "Lennukid",
    aboutHeading: "Projektist",
    aboutText: "Sprint 2 keskendub lihtsale disainile, keelevalikule, teemale ja agiilsele otsusele mitte arendada native äppe selles sprindis.",
    footerText: "AT 6.1 Praktiline projektijuhtimine - Sprint 2",
    steps: "Sammud",
    planes: [
      {
        name: "Klassikaline nool",
        description: "Lihtne ja kiire paberlennuk algajale.",
        steps: ["Murra paber pikuti pooleks.", "Voldi ülemised nurgad keskele.", "Tee mõlemad tiivad võrdsed."]
      },
      {
        name: "Pikk lendaja",
        description: "Stabiilne mudel, mis sobib pikemaks lennuks.",
        steps: ["Kasuta sirget A4 paberit.", "Tee ninaosa kitsamaks.", "Kontrolli tiibade sümmeetriat."]
      },
      {
        name: "Trikilennuk",
        description: "Lühikeseks ja lõbusaks katsetamiseks mõeldud mudel.",
        steps: ["Voldi lühem nina.", "Painuta tiivaotsi natuke üles.", "Viska rahuliku nurga all."]
      }
    ]
  },
  en: {
    siteTitle: "Aerofold 2.0",
    siteSubtitle: "Paper airplane folding guides",
    navPlanes: "Airplanes",
    navAbout: "About",
    themeButton: "Theme",
    heroTitle: "Choose a paper airplane and start folding",
    heroText: "The page supports Estonian and English, plus light and dark themes.",
    planesHeading: "Airplanes",
    aboutHeading: "About the project",
    aboutText: "Sprint 2 focuses on simple design, language selection, theme switching and an agile decision not to develop native apps in this sprint.",
    footerText: "AT 6.1 Practical Project Management - Sprint 2",
    steps: "Steps",
    planes: [
      {
        name: "Classic dart",
        description: "A simple and fast paper airplane for beginners.",
        steps: ["Fold the paper lengthwise in half.", "Fold the upper corners to the center.", "Make both wings equal."]
      },
      {
        name: "Long flyer",
        description: "A stable model suitable for longer flights.",
        steps: ["Use a straight A4 sheet.", "Make the nose narrower.", "Check wing symmetry."]
      },
      {
        name: "Trick plane",
        description: "A model for short and fun experiments.",
        steps: ["Fold a shorter nose.", "Bend the wingtips slightly upward.", "Throw at a calm angle."]
      }
    ]
  }
};

const btnEt = document.getElementById("btn-et");
const btnEn = document.getElementById("btn-en");
const themeToggle = document.getElementById("theme-toggle");
const planesContainer = document.getElementById("planes-container");

function setLanguage(language) {
  const current = translations[language] || translations.et;

  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = current[key];
  });

  planesContainer.innerHTML = current.planes.map((plane) => `
    <article class="card">
      <h3>${plane.name}</h3>
      <p>${plane.description}</p>
      <strong>${current.steps}</strong>
      <ol>
        ${plane.steps.map((step) => `<li>${step}</li>`).join("")}
      </ol>
    </article>
  `).join("");

  localStorage.setItem("language", language);
  btnEt.classList.toggle("active", language === "et");
  btnEn.classList.toggle("active", language === "en");
}

function getStartTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) return savedTheme;

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

function setTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
}

btnEt.addEventListener("click", () => setLanguage("et"));
btnEn.addEventListener("click", () => setLanguage("en"));

themeToggle.addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("dark") ? "light" : "dark";
  setTheme(nextTheme);
});

setTheme(getStartTheme());
setLanguage(localStorage.getItem("language") || "et");
