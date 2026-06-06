import fitz
for f in ["carousel-seo-mort-2026-fr.pdf","carousel-seo-dead-2026-en.pdf"]:
    doc = fitz.open(f)
    hits = []
    for i,p in enumerate(doc,1):
        if "Soulimane" in p.get_text():
            hits.append(i)
    print(f, "-> pages avec 'Soulimane':", hits if hits else "AUCUNE")
