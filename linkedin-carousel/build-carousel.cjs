const pptxgen = require("pptxgenjs");

const NAVY = "0F172A";
const NAVY_LIGHT = "1E293B";
const GOLD = "CA8A04";
const GOLD_LIGHT = "EAB308";
const OFFWHITE = "F8FAFC";
const MUTED = "94A3B8";

const pres = new pptxgen();
pres.defineLayout({ name: "LI45", width: 7.5, height: 9.375 });
pres.layout = "LI45";
pres.author = "Soulimane Farah";
pres.title = "Le SEO est-il mort en 2026 ?";

const W = 7.5, H = 9.375, MX = 0.7;

// Helper: swipe hint bottom-right
function swipe(slide, label = "Glissez →") {
  slide.addText(label, {
    x: W - 2.2, y: H - 0.62, w: 1.9, h: 0.35, margin: 0,
    fontSize: 11, color: GOLD, align: "right", fontFace: "Arial", bold: true,
  });
}
// Helper: small brand footer left
function brand(slide, color = MUTED) {
  slide.addText("SEO Pharma Montréal", {
    x: MX, y: H - 0.62, w: 4.5, h: 0.35, margin: 0,
    fontSize: 10, color, align: "left", fontFace: "Arial",
  });
}
// Helper: page number dot indicator
function pageNum(slide, n) {
  slide.addText(`0${n} / 08`, {
    x: W - 1.6, y: 0.45, w: 1.2, h: 0.3, margin: 0,
    fontSize: 11, color: MUTED, align: "right", fontFace: "Arial", bold: true,
  });
}

// ---------- SLIDE 1 — COVER ----------
let s = pres.addSlide();
s.background = { color: NAVY };
// gold accent block top-left
s.addShape(pres.shapes.RECTANGLE, { x: MX, y: 1.7, w: 0.9, h: 0.14, fill: { color: GOLD } });
s.addText("QUESTION QUE TOUT LE MONDE SE POSE", {
  x: MX, y: 2.0, w: W - MX * 2, h: 0.4, margin: 0,
  fontSize: 13, color: GOLD, bold: true, charSpacing: 2, fontFace: "Arial",
});
s.addText([
  { text: "Le SEO", options: { breakLine: true, color: OFFWHITE } },
  { text: "est-il ", options: { color: OFFWHITE } },
  { text: "mort", options: { color: GOLD, breakLine: false } },
  { text: " en 2026 ?", options: { color: OFFWHITE } },
], {
  x: MX, y: 2.55, w: W - MX * 2, h: 3.0, margin: 0,
  fontSize: 58, bold: true, fontFace: "Arial", lineSpacingMultiple: 1.0, valign: "top",
});
s.addText("Ce que ça change vraiment pour l'industrie pharma et santé au Canada.", {
  x: MX, y: 5.7, w: W - MX * 2 - 0.5, h: 1.0, margin: 0,
  fontSize: 18, color: MUTED, fontFace: "Arial", valign: "top",
});
swipe(s, "Glissez →");

// ---------- SLIDE 2 — THE ANSWER ----------
s = pres.addSlide();
s.background = { color: OFFWHITE };
pageNum(s, 2);
s.addText("Voici ma réponse franche :", {
  x: MX, y: 1.5, w: W - MX * 2, h: 0.5, margin: 0,
  fontSize: 18, color: GOLD, bold: true, fontFace: "Arial",
});
s.addText([
  { text: "Le SEO n'est ", options: { color: NAVY } },
  { text: "pas mort.", options: { color: NAVY, bold: true } },
], { x: MX, y: 2.4, w: W - MX * 2, h: 1.4, margin: 0, fontSize: 40, bold: true, fontFace: "Arial", valign: "top" });
s.addText([
  { text: "Mais le SEO que vous ", options: { color: NAVY } },
  { text: "connaissiez,", options: { color: NAVY } },
  { text: " oui.", options: { color: GOLD, bold: true } },
], { x: MX, y: 3.9, w: W - MX * 2, h: 2.0, margin: 0, fontSize: 40, bold: true, fontFace: "Arial", valign: "top" });
s.addShape(pres.shapes.RECTANGLE, { x: MX, y: 6.4, w: 0.14, h: 1.5, fill: { color: GOLD } });
s.addText("La recherche a changé de nature. Pas de disparition — une transformation profonde.", {
  x: MX + 0.4, y: 6.4, w: W - MX * 2 - 0.4, h: 1.5, margin: 0,
  fontSize: 17, color: NAVY_LIGHT, fontFace: "Arial", valign: "top",
});
brand(s); swipe(s);

// ---------- SLIDE 3 — THE SHIFT ----------
s = pres.addSlide();
s.background = { color: NAVY };
pageNum(s, 3);
s.addText("LE CHANGEMENT", {
  x: MX, y: 1.4, w: W - MX * 2, h: 0.4, margin: 0,
  fontSize: 13, color: GOLD, bold: true, charSpacing: 2, fontFace: "Arial",
});
s.addText("Vos clients ne « cherchent » plus comme avant.", {
  x: MX, y: 1.95, w: W - MX * 2, h: 1.6, margin: 0,
  fontSize: 32, bold: true, color: OFFWHITE, fontFace: "Arial", valign: "top",
});
const tools = ["ChatGPT", "Perplexity", "Google AI Overviews"];
let ty = 4.0;
tools.forEach((t) => {
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: MX, y: ty, w: W - MX * 2, h: 0.95, fill: { color: NAVY_LIGHT }, rectRadius: 0.08 });
  s.addShape(pres.shapes.OVAL, { x: MX + 0.3, y: ty + 0.27, w: 0.4, h: 0.4, fill: { color: GOLD } });
  s.addText(t, { x: MX + 0.95, y: ty, w: W - MX * 2 - 1.2, h: 0.95, margin: 0, fontSize: 20, bold: true, color: OFFWHITE, fontFace: "Arial", valign: "middle" });
  ty += 1.15;
});
s.addText("Ils posent une question et reçoivent une réponse synthétisée — souvent sans jamais cliquer sur un site.", {
  x: MX, y: ty + 0.1, w: W - MX * 2, h: 1.1, margin: 0,
  fontSize: 16, color: MUTED, fontFace: "Arial", valign: "top",
});
swipe(s);

// ---------- SLIDES 4-6 — THREE SHIFTS ----------
const shifts = [
  {
    n: "1", kicker: "PRINCIPE N°1",
    title: "Votre contenu doit être citable par les IA",
    body: "Pas seulement classé par Google. Structure claire, données factuelles, sources vérifiables — c'est ce que les moteurs génératifs citent.",
  },
  {
    n: "2", kicker: "PRINCIPE N°2",
    title: "L'E-E-A-T n'est plus optionnel",
    body: "Pour le YMYL (Your Money, Your Life), Google et les LLMs exigent une expertise démontrable. Une PME pharma sans signaux d'autorité est tout simplement invisible.",
  },
  {
    n: "3", kicker: "PRINCIPE N°3",
    title: "La conformité devient un avantage SEO",
    body: "Un contenu conçu selon les exigences du PAAB et de Santé Canada est, par nature, le type de contenu structuré et fiable que les IA privilégient.",
  },
];
shifts.forEach((sh, i) => {
  s = pres.addSlide();
  s.background = { color: OFFWHITE };
  pageNum(s, 4 + i);
  // big number
  s.addText(sh.n, {
    x: MX - 0.05, y: 1.3, w: 3.0, h: 2.6, margin: 0,
    fontSize: 150, bold: true, color: GOLD, fontFace: "Arial", valign: "top",
  });
  s.addText(sh.kicker, {
    x: MX, y: 3.85, w: W - MX * 2, h: 0.4, margin: 0,
    fontSize: 13, color: GOLD, bold: true, charSpacing: 2, fontFace: "Arial",
  });
  s.addText(sh.title, {
    x: MX, y: 4.3, w: W - MX * 2, h: 1.8, margin: 0,
    fontSize: 34, bold: true, color: NAVY, fontFace: "Arial", valign: "top",
  });
  s.addShape(pres.shapes.RECTANGLE, { x: MX, y: 6.3, w: 0.14, h: 1.6, fill: { color: NAVY } });
  s.addText(sh.body, {
    x: MX + 0.4, y: 6.3, w: W - MX * 2 - 0.4, h: 1.8, margin: 0,
    fontSize: 17, color: NAVY_LIGHT, fontFace: "Arial", valign: "top", lineSpacingMultiple: 1.1,
  });
  brand(s); swipe(s);
});

// ---------- SLIDE 7 — MY TAKE ----------
s = pres.addSlide();
s.background = { color: NAVY };
pageNum(s, 7);
s.addText("MON CONSTAT", {
  x: MX, y: 1.5, w: W - MX * 2, h: 0.4, margin: 0,
  fontSize: 13, color: GOLD, bold: true, charSpacing: 2, fontFace: "Arial",
});
s.addText([
  { text: "Trop de PME pharma confient leur visibilité à des agences SEO qui ne comprennent ", options: { color: OFFWHITE } },
  { text: "ni le PAAB, ni les contraintes réglementaires", options: { color: GOLD, bold: true } },
  { text: " — ni pourquoi un mot mal choisi peut devenir un vrai problème.", options: { color: OFFWHITE } },
], {
  x: MX, y: 2.2, w: W - MX * 2, h: 4.0, margin: 0,
  fontSize: 28, bold: true, fontFace: "Arial", valign: "top", lineSpacingMultiple: 1.15,
});
s.addShape(pres.shapes.RECTANGLE, { x: MX, y: 6.7, w: 0.9, h: 0.14, fill: { color: GOLD } });
s.addText("Le SEO demande aujourd'hui de comprendre votre industrie autant que de comprendre Google.", {
  x: MX, y: 7.0, w: W - MX * 2, h: 1.5, margin: 0,
  fontSize: 17, color: MUTED, fontFace: "Arial", valign: "top",
});
swipe(s);

// ---------- SLIDE 8 — CTA ----------
s = pres.addSlide();
s.background = { color: NAVY };
s.addShape(pres.shapes.RECTANGLE, { x: MX, y: 1.9, w: 0.9, h: 0.14, fill: { color: GOLD } });
s.addText("Votre stratégie de contenu est-elle prête pour la recherche par IA ?", {
  x: MX, y: 2.2, w: W - MX * 2, h: 3.0, margin: 0,
  fontSize: 38, bold: true, color: OFFWHITE, fontFace: "Arial", valign: "top", lineSpacingMultiple: 1.1,
});
// CTA card
s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: MX, y: 5.5, w: W - MX * 2, h: 2.0, fill: { color: NAVY_LIGHT }, rectRadius: 0.1 });
s.addText([
  { text: "Pour aller plus loin.", options: { bold: true, color: GOLD, breakLine: true, fontSize: 22 } },
  { text: "Guides, analyses et ressources SEO/GEO pour l'industrie pharma et santé au Canada.", options: { color: OFFWHITE, fontSize: 15 } },
], { x: MX + 0.35, y: 5.8, w: W - MX * 2 - 0.7, h: 1.4, margin: 0, fontFace: "Arial", valign: "top", lineSpacingMultiple: 1.1 });
// contact line
s.addText("🌐  seopharmamontreal.com", {
  x: MX, y: 7.9, w: W - MX * 2, h: 0.6, margin: 0, fontSize: 16, color: OFFWHITE, bold: true, fontFace: "Arial", valign: "top",
});

pres.writeFile({ fileName: "C:\\Projects\\seopharmamontreal\\linkedin-carousel\\carousel-seo-mort-2026-fr.pptx" }).then((fn) => {
  console.log("Saved:", fn);
});
