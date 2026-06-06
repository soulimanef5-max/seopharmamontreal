import fitz
for f,pre in [("carousel-seo-mort-2026-fr.pdf","fr"),("carousel-seo-dead-2026-en.pdf","en")]:
    doc = fitz.open(f)
    pix = doc[7].get_pixmap(dpi=96)
    pix.save(f"{pre}-s8.jpg")
print("slide 8 rendered")
