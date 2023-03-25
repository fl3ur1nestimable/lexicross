import os
import json

def merge_json_files(directory_path, output_file_path):
    # Créer un dictionnaire pour stocker les données de chaque fichier
    data = {}

    # Parcourir tous les fichiers dans le sous-dossier 'themes'
    for filename in os.listdir(os.path.join(directory_path, 'themes')):
        # Vérifier si le fichier est un fichier JSON
        if filename.endswith('.json'):
            # Ouvrir le fichier et charger les données JSON
            with open(os.path.join(directory_path, 'themes', filename), 'r') as f:
                file_data = json.load(f)
            
            # Utiliser le nom de fichier comme clé et les données JSON comme valeur
            data[filename] = file_data
    
    # Écrire les données dans le fichier JSON de sortie
    with open(output_file_path, 'w') as f:
        json.dump(data, f, indent=4)

merge_json_files('./src', './src/themes/themes.json')
