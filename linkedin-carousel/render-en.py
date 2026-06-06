import fitz
doc = fitz.open("carousel-seo-dead-2026-en.pdf")
for i, page in enumerate(doc, 1):
    pix = page.get_pixmap(dpi=96)
    pix.save(f"en-slide-{i}.jpg")
print("rendered", len(doc), "slides")
