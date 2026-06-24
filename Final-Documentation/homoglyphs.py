import random

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

# Example Usage:
original_text = "Hello Company, expect automated changes to your portal."

fully_converted = convert_to_homoglyphs(original_text, replacement_chance=1.0)
print("Original   :", original_text)
print("Converted  :", fully_converted)

partially_converted = convert_to_homoglyphs(original_text, replacement_chance=0.5)
print("Partial Mix:", partially_converted)
