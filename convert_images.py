import os
from PIL import Image

source_dir = "Adoption Desktop 2.0/Solo Images/"
quality = 80

for filename in os.listdir(source_dir):
    if filename.lower().endswith(".png"):
        file_path = os.path.join(source_dir, filename)
        img = Image.open(file_path)
        
        # Convert to RGB if necessary (e.g. if RGBA and we want to avoid issues, though WebP supports transparency)
        # WebP supports RGBA, so we can just save.
        
        new_filename = os.path.splitext(filename)[0] + ".webp"
        new_file_path = os.path.join(source_dir, new_filename)
        
        print(f"Converting {filename} to {new_filename}...")
        img.save(new_file_path, "WEBP", quality=quality)

print("Conversion complete!")
