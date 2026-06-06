import fitz
doc = fitz.open("carousel-seo-mort-2026-fr.pdf")
for i, page in enumerate(doc, 1):
    pix = page.get_pixmap(dpi=96)
    pix.save(f"slide-{i}.jpg")
    print(f"slide-{i}.jpg", pix.width, "x", pix.height)
