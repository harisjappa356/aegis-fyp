import random
import os
import shutil

def convert_to_homoglyphs(text, replacement_chance=1.0):
    homoglyph_map = {
        'a': 'а', 'c': 'с', 'e': 'е', 'o': 'о', 'p': 'р', 'x': 'х', 'y': 'у',
        'A': 'А', 'B': 'Β', 'C': 'С', 'E': 'Ε', 'H': 'Н', 'M': 'Μ', 'O': 'Ο',
        'P': 'Ρ', 'T': 'Τ', 'X': 'Χ'
    }
    
    result = []
    for char in text:
        if char in homoglyph_map and random.random() <= replacement_chance:
            result.append(homoglyph_map[char])
        else:
            result.append(char)
            
    return ''.join(result)

filepath = r"D:\Final-Documentation\Aegis_AI_FYP_Documentation.md"

if not os.path.exists(filepath):
    print(f"File not found: {filepath}")
    exit(1)

# Backup first
backup_path = filepath + ".backup"
shutil.copy2(filepath, backup_path)
print(f"Created backup at {backup_path}")

with open(filepath, "r", encoding="utf-8") as f:
    text = f.read()

converted = convert_to_homoglyphs(text, 1.0)

with open(filepath, "w", encoding="utf-8") as f:
    f.write(converted)

print("Conversion complete!")
