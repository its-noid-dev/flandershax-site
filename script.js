// Flanders Hax - script.js
// Alles lokaal, geen tracking, geen externe scripts of fonts (GDPR).

var T = {
  nl: {
    disc_strong: "Let op:",
    disc_text: "Deze site is gemaakt door een Hack Clubber (een tiener) en is NIET van de Vlaamse of Belgische overheid.",
    nav_home: "Home", nav_info: "Info",
    h1: "Welkom bij Flanders Hax",
    lead: "Een groep tieners in Vlaanderen die samen coderen, projecten maken en van STEM houden.",
    cta: "Bekijk de kaart",
    cta_join: "Schrijf je in",
    donation_h: "Doneer aan Flanders HAX",
    donation_p: "Elke bijdrage helpt ons om activiteiten en technische projecten voor jongeren mogelijk te maken.",
    donation_progress: "Onze voortgang",
    sponsor_h: "Sponsor Flanders HAX",
    sponsor_p: "Help jongeren in Vlaanderen om samen te leren programmeren, met elektronica te experimenteren en technische projecten te bouwen.",
    sponsor_money: "Financiële steun voor bijeenkomsten en workshops.",
    sponsor_material: "Materiaal zoals elektronica, computeronderdelen en 3D-printfilament is ook welkom.",
    sponsor_visibility: "We vermelden sponsors graag op onze website, als ze dat wensen.",
    sponsor_contact: "Interesse in sponsoring of een samenwerking? Neem contact met ons op.",
    sponsor_button: "Contacteer ons",
    f_h: "Schrijf je in",
    f_p: "Vul het formulier in. Daarna opent je e-mailprogramma met een kant-en-klaar bericht naar ons. Je moet zelf nog op 'verzenden' klikken.",
    f_first: "Voornaam", f_last: "Achternaam", f_city: "Woonplaats", f_age: "Leeftijd", f_email: "E-mailadres",
    f_consent: "Ik ga ermee akkoord dat Flanders HAX deze gegevens gebruikt om contact met mij op te nemen over mijn inschrijving. Ben je jonger dan 13? Vraag eerst toestemming aan je ouders.",
    f_submit: "Inschrijven",
    f_done: "Je e-mailprogramma wordt geopend. Opent er niets? Mail zelf naar",
    f_subject: "Inschrijving Flanders HAX",
    f_mail_intro: "Nieuwe inschrijving voor Flanders HAX:",
    i_form_h: "Inschrijfformulier",
    i_form_p1: "Als je het formulier invult (voornaam, achternaam, woonplaats, leeftijd en e-mailadres), wordt er niets naar een server van deze site gestuurd en niets bewaard. Je gegevens worden alleen in een e-mailconcept gezet in jouw eigen e-mailprogramma. Pas als je zelf op 'verzenden' klikt, ontvangt Flanders HAX (flandershax@gmail.com) ze.",
    i_form_p2: "We gebruiken je gegevens enkel om contact met je op te nemen over je inschrijving en bewaren ze niet langer dan nodig. Je kan altijd vragen om je gegevens in te zien of te laten verwijderen via hetzelfde e-mailadres. Jonger dan 13? Vraag eerst toestemming aan je ouders.",
    logo_h: "Flanders HAX",
    logo_p: "Wij zijn een groep tieners die van STEM houden. Kom gezellig mee projecten maken!",
    map_h: "Waar ligt Vlaanderen?",
    map_p: "Vlaanderen is het noordelijke deel van België. Hieronder zie je het op OpenStreetMap.",
    map_consent: "Deze kaart wordt geladen van OpenStreetMap (een externe partij). Daarbij ziet OpenStreetMap je IP-adres.",
    map_load: "Kaart laden",
    map_link: "Bekijk Vlaanderen groter op OpenStreetMap",
    foot_made: "Gemaakt door een Hack Clubber. Niet door de overheid.",
    foot_privacy: "Privacy", foot_cookie: "Cookie-instellingen", foot_lang: "Taal wijzigen",
    ck_h: "Cookies en opslag",
    ck_p: "Wij gebruiken geen tracking of reclame. Alleen je taal, thema en deze keuze worden lokaal in je browser bewaard. Mag de OpenStreetMap-kaart automatisch laden?",
    ck_accept: "Ja, kaart automatisch laden", ck_decline: "Nee, alleen als ik klik", ck_more: "Meer info",
    i_h1: "Info en privacy",
    i_who_h: "Wie maakt deze site?",
    i_who_p: "Deze site is een hobbyproject van een tiener die lid is van Hack Club, een wereldwijde community van jonge programmeurs. Het is een simpele site voor onze Flanders HAX-groep.",
    i_gov: "Deze site is NIET van de Vlaamse of Belgische overheid, en heeft er ook geen link mee. Voor officiële info ga je naar vlaanderen.be.",
    i_priv_h: "Privacy en cookies (GDPR/AVG)",
    i_priv_p1: "Wij verzamelen geen persoonsgegevens: geen accounts, geen analytics, geen opslag van het inschrijfformulier, geen advertenties en geen cookies van derden voor tracking.",
    i_priv_p2: "Je gegevens worden dus niet verkocht, gedeeld of gebruikt voor profilering.",
    i_ck_h: "Wat bewaren we in je browser?",
    t_name: "Naam", t_purpose: "Doel", t_duration: "Bewaartijd", t_type: "Type",
    t_lang: "Onthoudt je taalkeuze (nl of en)", t_theme: "Onthoudt je thema (donker of licht)", t_consent: "Onthoudt je keuze over de kaart",
    t_until: "Tot je het wist",
    i_ck_p: "Dit zijn geen tracking-cookies. Het zijn kleine instellingen die jij zelf kiest en enkel in je browser blijven. Je kan ze altijd wissen via je browserinstellingen, of via 'Cookie-instellingen' onderaan de pagina.",
    i_osm_h: "OpenStreetMap (externe partij)",
    i_osm_p: "De kaart komt van OpenStreetMap (OpenStreetMap Foundation, VK). Pas als je toestemming geeft of op 'Kaart laden' klikt, wordt er verbinding gemaakt en ziet OpenStreetMap je IP-adres. Zonder toestemming wordt er niets geladen. Meer info: osmfoundation.org/wiki/Privacy_Policy.",
    i_host_h: "Hosting",
    i_host_p: "De host van deze site (bv. GitHub Pages of een andere dienst) kan technisch gezien je IP-adres tijdelijk in serverlogs bewaren. Dat valt onder het privacybeleid van die host.",
    i_rights_h: "Jouw rechten",
    i_rights_p: "Onder de GDPR heb je recht op inzage, verbetering, verwijdering, beperking, bezwaar en overdraagbaarheid. Je kan ook klacht indienen bij de Gegevensbeschermingsautoriteit (gegevensbeschermingsautoriteit.be).",
    i_contact_h: "Contact",
    i_contact_p: "Vragen? Mail naar: flandershax@gmail.com"
  },
  en: {
    disc_strong: "Heads up:",
    disc_text: "This site was made by a Hack Clubber (a teenager) and is NOT from the Flemish or Belgian government.",
    nav_home: "Home", nav_info: "Info",
    h1: "Welcome to Flanders Hax",
    lead: "A group of teens in Flanders who code together, build projects and love STEM.",
    cta: "See the map",
    cta_join: "Join us",
    donation_h: "Donate to Flanders HAX",
    donation_p: "Every contribution helps us make activities and technical projects for young people possible.",
    donation_progress: "Our progress",
    sponsor_h: "Sponsor Flanders HAX",
    sponsor_p: "Help young people in Flanders learn programming together, experiment with electronics and build technical projects.",
    sponsor_money: "Financial support for meetups and workshops.",
    sponsor_material: "Donations of electronics, computer parts and 3D-printing filament are also welcome.",
    sponsor_visibility: "We are happy to acknowledge sponsors on our website if they wish.",
    sponsor_contact: "Interested in sponsoring or collaborating? Get in touch.",
    sponsor_button: "Contact us",
    f_h: "Sign up",
    f_p: "Fill in the form. Your email app will then open with a ready-made message to us. You still have to press 'send' yourself.",
    f_first: "First name", f_last: "Last name", f_city: "City", f_age: "Age", f_email: "Email address",
    f_consent: "I agree that Flanders HAX uses this data to contact me about my registration. Under 13? Ask your parents for permission first.",
    f_submit: "Sign up",
    f_done: "Your email app is opening. Nothing happens? Email us yourself at",
    f_subject: "Flanders HAX registration",
    f_mail_intro: "New registration for Flanders HAX:",
    i_form_h: "Sign-up form",
    i_form_p1: "When you fill in the form (first name, last name, city, age and email), nothing is sent to a server of this site and nothing is stored. Your data is only put into an email draft in your own email app. Only when you press 'send' yourself, Flanders HAX (flandershax@gmail.com) receives it.",
    i_form_p2: "We only use your data to contact you about your registration and don't keep it longer than needed. You can always ask to see or delete your data via the same email address. Under 13? Ask your parents for permission first.",
    logo_h: "Flanders HAX",
    logo_p: "We are a group of teens that like STEM. Come make projects with us!",
    map_h: "Where is Flanders?",
    map_p: "Flanders is the northern part of Belgium. You can see it below on OpenStreetMap.",
    map_consent: "This map is loaded from OpenStreetMap (a third party). OpenStreetMap will see your IP address.",
    map_load: "Load map",
    map_link: "View Flanders bigger on OpenStreetMap",
    foot_made: "Made by a Hack Clubber. Not by the government.",
    foot_privacy: "Privacy", foot_cookie: "Cookie settings", foot_lang: "Change language",
    ck_h: "Cookies and storage",
    ck_p: "We use no tracking or ads. Only your language, theme and this choice are stored locally in your browser. May the OpenStreetMap map load automatically?",
    ck_accept: "Yes, load map automatically", ck_decline: "No, only when I click", ck_more: "More info",
    i_h1: "Info and privacy",
    i_who_h: "Who makes this site?",
    i_who_p: "This site is a hobby project by a teenager who is a member of Hack Club, a worldwide community of young coders. It is a simple site for our Flanders HAX group.",
    i_gov: "This site is NOT from the Flemish or Belgian government and has no link with it. For official info go to vlaanderen.be.",
    i_priv_h: "Privacy and cookies (GDPR)",
    i_priv_p1: "We collect no personal data: no accounts, no analytics, no storage of the sign-up form, no ads and no third-party tracking cookies.",
    i_priv_p2: "So your data is never sold, shared or used for profiling.",
    i_ck_h: "What do we store in your browser?",
    t_name: "Name", t_purpose: "Purpose", t_duration: "Duration", t_type: "Type",
    t_lang: "Remembers your language (nl or en)", t_theme: "Remembers your theme (dark or light)", t_consent: "Remembers your map choice",
    t_until: "Until you clear it",
    i_ck_p: "These are not tracking cookies. They are small settings you choose yourself and they stay in your browser. You can delete them anytime in your browser settings, or via 'Cookie settings' at the bottom of the page.",
    i_osm_h: "OpenStreetMap (third party)",
    i_osm_p: "The map comes from OpenStreetMap (OpenStreetMap Foundation, UK). Only when you consent or click 'Load map' a connection is made and OpenStreetMap sees your IP address. Without consent nothing is loaded. More info: osmfoundation.org/wiki/Privacy_Policy.",
    i_host_h: "Hosting",
    i_host_p: "The host of this site (e.g. GitHub Pages or another service) may technically store your IP address temporarily in server logs. That falls under that host's privacy policy.",
    i_rights_h: "Your rights",
    i_rights_p: "Under the GDPR you have the right to access, rectification, erasure, restriction, objection and portability. You can also file a complaint with the Belgian Data Protection Authority (gegevensbeschermingsautoriteit.be).",
    i_contact_h: "Contact",
    i_contact_p: "Questions? Email: flandershax@gmail.com"
  }
};

// veilige localStorage (kan geblokkeerd zijn)
function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
function set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
function $(id) { return document.getElementById(id); }

var lang = get("lang");

function applyLang() {
  var d = T[lang] || T.nl;
  document.documentElement.lang = lang || "nl";
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var key = el.getAttribute("data-i18n");
    if (d[key]) el.textContent = d[key];
  });
  updateThemeBtn();
}

function updateThemeBtn() {
  var dark = document.documentElement.dataset.theme !== "light";
  var btn = $("themeBtn");
  if (!btn) return;
  btn.textContent = dark ? "☀ Light" : "☾ Dark";
  btn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
}

function toggleTheme() {
  var next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
  document.documentElement.dataset.theme = next;
  set("theme", next);
  updateThemeBtn();
}

function loadMap() {
  var box = $("mapBox");
  if (!box || box.querySelector("iframe")) return;
  var f = document.createElement("iframe");
  // bbox = ruwweg heel Vlaanderen
  f.src = "https://www.openstreetmap.org/export/embed.html?bbox=2.5%2C50.65%2C5.95%2C51.55&layer=mapnik";
  f.title = "OpenStreetMap - Flanders";
  f.loading = "lazy";
  f.referrerPolicy = "no-referrer";
  box.innerHTML = "";
  box.appendChild(f);
}

var MAIL = "flandershax@gmail.com";
function sendForm(e) {
  e.preventDefault();
  var f = e.target;
  if (!f.reportValidity()) return;
  var d = T[lang] || T.nl;
  var v = function (n) { return f.elements[n].value.trim(); };
  var body = d.f_mail_intro + "\r\n\r\n" +
    d.f_first + ": " + v("first") + "\r\n" +
    d.f_last + ": " + v("last") + "\r\n" +
    d.f_city + ": " + v("city") + "\r\n" +
    d.f_age + ": " + v("age") + "\r\n" +
    d.f_email + ": " + v("email") + "\r\n";
  var msg = $("formMsg");
  msg.textContent = d.f_done + " " + MAIL;
  window.location.href = "mailto:" + MAIL + "?subject=" + encodeURIComponent(d.f_subject) + "&body=" + encodeURIComponent(body);
}

function showCookie() { $("cookieBanner").hidden = false; }
function setConsent(v) {
  set("consent", v);
  $("cookieBanner").hidden = true;
  if (v === "yes") loadMap();
}

function chooseLang(l) {
  lang = l;
  set("lang", l);
  $("langModal").hidden = true;
  applyLang();
  if (!get("consent")) showCookie();
}

document.addEventListener("DOMContentLoaded", function () {
  $("themeBtn").addEventListener("click", toggleTheme);

  document.querySelectorAll("[data-lang]").forEach(function (b) {
    b.addEventListener("click", function () { chooseLang(b.dataset.lang); });
  });

  var sf = $("signup");
  if (sf) sf.addEventListener("submit", sendForm);

  var lm = $("loadMap");
  if (lm) lm.addEventListener("click", loadMap);

  $("ckAccept").addEventListener("click", function () { setConsent("yes"); });
  $("ckDecline").addEventListener("click", function () { setConsent("no"); });
  $("cookieSettings").addEventListener("click", showCookie);
  $("langSettings").addEventListener("click", function () { $("langModal").hidden = false; });

  if (lang !== "nl" && lang !== "en") {
    lang = "nl";
    applyLang();
    $("langModal").hidden = false;   // eerste bezoek: vraag taal
  } else {
    applyLang();
    var c = get("consent");
    if (!c) showCookie();
    if (c === "yes") loadMap();
  }
});
