from PIL import Image, ImageDraw, ImageFont

NAVY = (15, 23, 42)
GOLD = (202, 138, 4)
OFFWHITE = (248, 250, 252)
S = 500
img = Image.new("RGB", (S, S), NAVY)
d = ImageDraw.Draw(img)

# subtle rounded gold border frame
d.rounded_rectangle([18,18,S-18,S-18], radius=36, outline=GOLD, width=4)

# fonts
def font(path, size):
    try: return ImageFont.truetype(path, size)
    except: return ImageFont.truetype("arial.ttf", size)
fbold = font("arialbd.ttf", 180)
fsmall = font("arialbd.ttf", 30)

# monogram SPM centered (upper area)
mono = "SPM"
bb = d.textbbox((0,0), mono, font=fbold)
mw, mh = bb[2]-bb[0], bb[3]-bb[1]
mx = (S-mw)//2 - bb[0]
my = 120 - bb[1]
# S and M offwhite, P gold for accent
# draw whole in offwhite, then redraw P in gold
d.text((mx,my), mono, font=fbold, fill=OFFWHITE)
# compute P position
sw = d.textbbox((0,0),"S",font=fbold)[2]
d.text((mx+sw, my), "P", font=fbold, fill=GOLD)

# ECG pulse line (gold) under the monogram
cy = 340
pts = [(70,cy),(150,cy),(180,cy-30),(210,cy+45),(245,cy-70),(280,cy+30),(310,cy),(430,cy)]
d.line(pts, fill=GOLD, width=6, joint="curve")

# wordmark bottom
txt = "SEO PHARMA MONTRÉAL"
bb2 = d.textbbox((0,0), txt, font=fsmall)
tw = bb2[2]-bb2[0]
d.text(((S-tw)//2 - bb2[0], 410), txt, font=fsmall, fill=OFFWHITE)

img.save(r"C:\Projects\seopharmamontreal\linkedin-carousel\logo-spm-500.png")
print("logo saved 500x500")
