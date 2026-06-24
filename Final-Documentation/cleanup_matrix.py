import os

filepath = r"D:\Final-Documentation\Aegis_AI_FYP_Documentation.md.backup"
output_filepath = r"D:\Final-Documentation\Aegis_AI_FYP_Documentation_Cleaned.md"

with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    # Check if the line is part of a markdown table and contains the unwanted sprints
    if line.strip().startswith('|'):
        if any(unwanted in line for unwanted in ['Sprint 10', 'Sprint 11', 'Sprint 12', 'Sprint 14']):
            continue  # skip this row
    new_lines.append(line)

with open(output_filepath, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Saved cleaned file to", output_filepath)
