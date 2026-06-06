from PIL import Image
im = Image.open(r"C:\Projects\seopharmamontreal\public\images\soulimane-farah.webp").convert("RGB")
w,h = im.size
print("source:", w, "x", h)
# crop carre centre-haut (visage en haut, object-top sur le site)
side = min(w,h)
left = (w - side)//2
top = 0
im2 = im.crop((left, top, left+side, top+side))
im2 = im2.resize((800,800), Image.LANCZOS)
im2.save(r"C:\Projects\seopharmamontreal\linkedin-carousel\soulimane-farah-linkedin.jpg", quality=92)
print("saved 800x800 jpg")
