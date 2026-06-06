const pptxgen = require("pptxgenjs");

const NAVY = "0F172A";
const NAVY_LIGHT = "1E293B";
const GOLD = "CA8A04";
const OFFWHITE = "F8FAFC";
const MUTED = "94A3B8";

const pres = new pptxgen();
pres.defineLayout({ name: "LI45", width: 7.5, height: 9.375 });
pres.layout = "LI45";
pres.author = "Soulimane Farah";
pres.title = "Is SEO dead in 2026?";

const W = 7.5, H = 9.375, MX = 0.7;

function swipe(slide, label = "Swipe →") {
  slide.addText(label, {
    x: W - 2.2, y: H - 0.62, w: 1.9, h: 0.35, margin: 0,
    fontSize: 11, color: GOLD, align: "right", fontFace: "Arial", bold: true,
  });
}
function brand(slide, color = MUTED) {
  slide.addText("SEO Pharma Montréal", {
    x: MX, y: H - 0.62, w: 4.5, h: 0.35, margin: 0,
    fontSize: 10, color, align: "left", fontFace: "Arial",
  });
}
function pageNum(slide, n) {
  slide.addText(`0${n} / 08`, {
    x: W - 1.6, y: 0.45, w: 1.2, h: 0.3, margin: 0,
    fontSize: 11, color: MUTED, align: "right", fontFace: "Arial", bold: true,
  });
}

// ---------- SLIDE 1 — COVER ----------
let s = pres.addSlide();
s.background = { color: NAVY };
s.addShape(pres.shapes.RECTANGLE, { x: MX, y: 1.7, w: 0.9, h: 0.14, fill: { color: GOLD } });
s.addText("THE QUESTION EVERYONE IS ASKING", {
  x: MX, y: 2.0, w: W - MX * 2, h: 0.4, margin: 0,
  fontSize: 13, color: GOLD, bold: true, charSpacing: 2, fontFace: "Arial",
});
s.addText([
  { text: "Is SEO ", options: { color: OFFWHITE } },
  { text: "dead", options: { color: GOLD } },
  { text: " in 2026?", options: { color: OFFWHITE } },
], {
  x: MX, y: 2.7, w: W - MX * 2, h: 2.8, margin: 0,
  fontSize: 58, bold: true, fontFace: "Arial", lineSpacingMultiple: 1.0, valign: "top",
});
s.addText("What it really means for the pharma and health industry in Canada.", {
  x: MX, y: 5.6, w: W - MX * 2 - 0.5, h: 1.0, margin: 0,
  fontSize: 18, color: MUTED, fontFace: "Arial", valign: "top",
});
swipe(s);

// ---------- SLIDE 2 — THE ANSWER ----------
s = pres.addSlide();
s.background = { color: OFFWHITE };
pageNum(s, 2);
s.addText("Here's my honest answer:", {
  x: MX, y: 1.5, w: W - MX * 2, h: 0.5, margin: 0,
  fontSize: 18, color: GOLD, bold: true, fontFace: "Arial",
});
s.addText([
  { text: "SEO isn't ", options: { color: NAVY } },
  { text: "dead.", options: { color: NAVY, bold: true } },
], { x: MX, y: 2.4, w: W - MX * 2, h: 1.4, margin: 0, fontSize: 42, bold: true, fontFace: "Arial", valign: "top" });
s.addText([
  { text: "But the SEO you ", options: { color: NAVY } },
  { text: "knew?", options: { color: NAVY } },
  { text: " That's gone.", options: { color: GOLD, bold: true } },
], { x: MX, y: 3.9, w: W - MX * 2, h: 2.0, margin: 0, fontSize: 42, bold: true, fontFace: "Arial", valign: "top" });
s.addShape(pres.shapes.RECTANGLE, { x: MX, y: 6.4, w: 0.14, h: 1.5, fill: { color: GOLD } });
s.addText("Search itself has changed — not disappeared. This is a transformation, not an ending.", {
  x: MX + 0.4, y: 6.4, w: W - MX * 2 - 0.4, h: 1.5, margin: 0,
  fontSize: 17, color: NAVY_LIGHT, fontFace: "Arial", valign: "top",
});
brand(s); swipe(s);

// ---------- SLIDE 3 — THE SHIFT ----------
s = pres.addSlide();
s.background = { color: NAVY };
pageNum(s, 3);
s.addText("THE SHIFT", {
  x: MX, y: 1.4, w: W - MX * 2, h: 0.4, margin: 0,
  fontSize: 13, color: GOLD, bold: true, charSpacing: 2, fontFace: "Arial",
});
s.addText("Your customers don't “search” the way they used to.", {
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
s.addText("They ask a question and get a synthesized answer — often without ever clicking a website.", {
  x: MX, y: ty + 0.1, w: W - MX * 2, h: 1.1, margin: 0,
  fontSize: 16, color: MUTED, fontFace: "Arial", valign: "top",
});
swipe(s);

// ---------- SLIDES 4-6 — THREE SHIFTS ----------
const shifts = [
  {
    n: "1", kicker: "PRINCIPLE 1",
    title: "Your content must be citable by AI",
    body: "Not just ranked by Google. Clear structure, factual data, verifiable sources — that's what generative engines actually cite.",
  },
  {
    n: "2", kicker: "PRINCIPLE 2",
    title: "E-E-A-T is no longer optional",
    body: "For YMYL (Your Money, Your Life) topics, Google and LLMs demand demonstrable expertise. A pharma SME without authority signals is simply invisible.",
  },
  {
    n: "3", kicker: "PRINCIPLE 3",
    title: "Compliance becomes an SEO advantage",
    body: "Content built to PAAB and Health Canada standards is, by nature, exactly the kind of structured, trustworthy content AI engines favor.",
  },
];
shifts.forEach((sh, i) => {
  s = pres.addSlide();
  s.background = { color: OFFWHITE };
  pageNum(s, 4 + i);
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
s.addText("MY TAKE", {
  x: MX, y: 1.5, w: W - MX * 2, h: 0.4, margin: 0,
  fontSize: 13, color: GOLD, bold: true, charSpacing: 2, fontFace: "Arial",
});
s.addText([
  { text: "Too many pharma SMEs hand their visibility to SEO agencies that understand ", options: { color: OFFWHITE } },
  { text: "neither PAAB nor regulatory constraints", options: { color: GOLD, bold: true } },
  { text: " — nor why one wrong word can become a real problem.", options: { color: OFFWHITE } },
], {
  x: MX, y: 2.2, w: W - MX * 2, h: 4.0, margin: 0,
  fontSize: 28, bold: true, fontFace: "Arial", valign: "top", lineSpacingMultiple: 1.15,
});
s.addShape(pres.shapes.RECTANGLE, { x: MX, y: 6.7, w: 0.9, h: 0.14, fill: { color: GOLD } });
s.addText("SEO now requires understanding your industry as much as understanding Google.", {
  x: MX, y: 7.0, w: W - MX * 2, h: 1.5, margin: 0,
  fontSize: 17, color: MUTED, fontFace: "Arial", valign: "top",
});
swipe(s);

// ---------- SLIDE 8 — CTA ----------
s = pres.addSlide();
s.background = { color: NAVY };
s.addShape(pres.shapes.RECTANGLE, { x: MX, y: 1.9, w: 0.9, h: 0.14, fill: { color: GOLD } });
s.addText("Is your content strategy ready for AI search?", {
  x: MX, y: 2.2, w: W - MX * 2, h: 3.0, margin: 0,
  fontSize: 40, bold: true, color: OFFWHITE, fontFace: "Arial", valign: "top", lineSpacingMultiple: 1.1,
});
s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: MX, y: 5.5, w: W - MX * 2, h: 2.0, fill: { color: NAVY_LIGHT }, rectRadius: 0.1 });
s.addText([
  { text: "Want to dig deeper?", options: { bold: true, color: GOLD, breakLine: true, fontSize: 22 } },
  { text: "Guides, insights and SEO/GEO resources for the pharma and health industry in Canada.", options: { color: OFFWHITE, fontSize: 15 } },
], { x: MX + 0.35, y: 5.8, w: W - MX * 2 - 0.7, h: 1.4, margin: 0, fontFace: "Arial", valign: "top", lineSpacingMultiple: 1.1 });
s.addText("🌐  seopharmamontreal.com", {
  x: MX, y: 7.9, w: W - MX * 2, h: 0.6, margin: 0, fontSize: 16, color: OFFWHITE, bold: true, fontFace: "Arial", valign: "top",
});

pres.writeFile({ fileName: "C:\\Projects\\seopharmamontreal\\linkedin-carousel\\carousel-seo-dead-2026-en.pptx" }).then((fn) => {
  console.log("Saved:", fn);
});
