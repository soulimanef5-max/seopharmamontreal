import fitz
for f,pre in [("carousel-seo-mort-2026-fr.pdf","fr"),("carousel-seo-dead-2026-en.pdf","en")]:
    doc = fitz.open(f)
    p = doc[0]
    pix = p.get_pixmap(dpi=96)
    pix.save(f"{pre}-cover.jpg")
print("covers rendered")
