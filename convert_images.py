import os
import glob
from pathlib import Path

try:
    from PIL import Image
    import pillow_heif
    
    pillow_heif.register_heif_opener()
except ImportError:
    print("Missing packages. Run: pip install Pillow pillow-heif")
    exit(1)

directory = r"C:\Users\edufe\Downloads\oral-medic-site-prototipo\oral-medic-site\profissionais Oral e Medic"
os.chdir(directory)

files = glob.glob("*.HEIC") + glob.glob("*.JPG") + glob.glob("*.jpg")
success = 0
for f in files:
    try:
        img = Image.open(f)
        out_name = Path(f).with_suffix(".webp")
        img.save(out_name, format="WEBP", quality=85)
        print(f"Converted {f} to {out_name}")
        success += 1
    except Exception as e:
        print(f"Failed to convert {f}: {e}")

print(f"Successfully converted {success} out of {len(files)} files.")
