import os
from PIL import Image

def process_images():
    base_dir = r"c:\Users\ADMIN\Desktop\Touring Website\tour\public\images"
    converted_count = 0
    total_saved_bytes = 0

    for root, dirs, files in os.walk(base_dir):
        for file in files:
            file_path = os.path.join(root, file)
            filename = os.path.basename(file_path)
            base_name, ext = os.path.splitext(filename)
            ext_lower = ext.lower()
            
            if ext_lower not in ['.png', '.jpg', '.jpeg']:
                continue

            orig_size = os.path.getsize(file_path)
            # Skip tiny vector-like icons (< 25KB pngs like logo/cart/polygon)
            if orig_size < 25000 and ext_lower == '.png':
                continue

            # Standardize output to webp (or png if needed, but webp gives 80%+ savings)
            # Also handle case sensitivity: ensure consistent names (e.g. Card4 -> card4 if needed)
            clean_base_name = base_name
            if base_name.lower().startswith('card') and len(base_name) == 5 and base_name[4].isdigit():
                num = base_name[4]
                if int(num) in [4, 5, 6]:
                    clean_base_name = f"card{num}"
                else:
                    clean_base_name = f"Card{num}"

            webp_path = os.path.join(root, f"{clean_base_name}.webp")

            try:
                with Image.open(file_path) as img:
                    w, h = img.size
                    max_dim = 1920
                    if "card" in filename.lower():
                        max_dim = 1000
                    
                    if w > max_dim or h > max_dim:
                        img.thumbnail((max_dim, max_dim), Image.Resampling.LANCZOS)

                    if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                        img.save(webp_path, 'WEBP', quality=82, method=6)
                    else:
                        img = img.convert('RGB')
                        img.save(webp_path, 'WEBP', quality=82, method=6)

                    webp_size = os.path.getsize(webp_path)
                    saved = orig_size - webp_size
                    total_saved_bytes += saved
                    converted_count += 1
                    print(f"Converted {filename} ({orig_size/1024:.1f}KB) -> {clean_base_name}.webp ({webp_size/1024:.1f}KB)")

                    # Remove old file if different path or name
                    if file_path != webp_path and os.path.exists(file_path):
                        os.remove(file_path)

            except Exception as e:
                print(f"Error processing {filename}: {e}")

    print(f"\nFinished! Converted {converted_count} images. Total space saved: {total_saved_bytes / 1024 / 1024:.2f} MB")

if __name__ == "__main__":
    process_images()
