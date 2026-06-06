import fitz
for f in ["carousel-seo-mort-2026-fr.pdf","carousel-seo-dead-2026-en.pdf"]:
    doc = fitz.open(f)
    hits = []
    for i,p in enumerate(doc,1):
        t = p.get_text()
        if "Soulimane" in t or "Farah" in t:
            hits.append(i)
    print(f, "-> pages avec nom:", hits if hits else "AUCUNE (propre)")
