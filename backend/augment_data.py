import pandas as pd
import numpy as np
import os
from itertools import combinations

import pandas as pd
import numpy as np
import os
import random

def augment_data(input_file, output_file, target_size=100000):
    print(f"Loading seed data from {input_file}...")
    df = pd.read_csv(input_file)
    
    keyword_cols = [f'Keyword{i}' for i in range(1, 6)]
    
    # 1. Build a valid skill pool for each JobRole
    role_skills = {}
    
    print("Analyzing skill patterns...")
    for _, row in df.iterrows():
        role = row['JobRole']
        if role not in role_skills:
            role_skills[role] = set()
            
        for col in keyword_cols:
            if pd.notna(row[col]):
                skill = str(row[col]).strip()
                if skill:
                    role_skills[role].add(skill)
    
    # Convert sets to lists for sampling
    for role in role_skills:
        role_skills[role] = list(role_skills[role])
        print(f"  - {role}: {len(role_skills[role])} unique skills found")

    generated_rows = []
    roles = list(role_skills.keys())
    
    print(f"Generating {target_size} synthetic samples...")
    
    # We want roughly equal distribution or proportional to original? 
    # Let's target equal distribution for better model balance, 
    # but slightly weighted by original prevalence if desire.
    # For now, uniform random choice of role is good for balance.
    
    existing_count = 0
    
    while len(generated_rows) < target_size:
        # Pick a random role
        role = random.choice(roles)
        available_skills = role_skills[role]
        
        # Pick 3 to 5 skills
        num_skills = random.randint(3, 5)
        # If not enough skills, take all
        if len(available_skills) < num_skills:
            selected_skills = available_skills
        else:
            selected_skills = random.sample(available_skills, num_skills)
            
        # Shuffle them
        random.shuffle(selected_skills)
        
        generated_rows.append({
            'Skills': ', '.join(selected_skills),
            'JobRole': role
        })
        
        if len(generated_rows) % 10000 == 0:
            print(f"  ...generated {len(generated_rows)} samples")

    augmented_df = pd.DataFrame(generated_rows)
    
    # Combine with original (transformed to same format) if desired, 
    # or just use synthetic if we generated enough.
    # Let's append original data to ensure ground truth is present.
    print("Processing original data to append...")
    original_rows = []
    for _, row in df.iterrows():
        keywords = [str(row[col]) for col in keyword_cols if pd.notna(row[col])]
        original_rows.append({'Skills': ', '.join(keywords), 'JobRole': row['JobRole']})
        
    final_df = pd.concat([pd.DataFrame(original_rows), augmented_df], ignore_index=True)
    
    # Shuffle
    final_df = final_df.sample(frac=1, random_state=42).reset_index(drop=True)
    
    # Cap at target size + original size roughly, or just save all
    print(f"Final dataset size: {len(final_df)}")
    final_df.to_csv(output_file, index=False)
    print(f"Saved to {output_file}")

if __name__ == "__main__":
    base_dir = os.path.dirname(os.path.abspath(__file__))
    input_path = os.path.join(base_dir, 'dataset.csv')
    output_path = os.path.join(base_dir, 'augmented_dataset.csv')
    
    augment_data(input_path, output_path, target_size=1000000)
