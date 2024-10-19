import csv
import json
import os

# Get the base directory of the project
base_dir = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

# Define file paths
en_csv_path = os.path.join(base_dir, '_data', 'en-us', 'conferences.csv')
fr_csv_path = os.path.join(base_dir, '_data', 'fr-ca', 'conferences.csv')
en_json_path = os.path.join(base_dir, 'assets', 'json', 'en-us', 'conferences.json')
fr_json_path = os.path.join(base_dir, 'assets', 'json', 'fr-ca', 'conferences.json')

def convert_csv_to_json(csv_path, json_path):
    with open(csv_path, 'r', encoding='utf-8') as csvfile:
        csvreader = csv.DictReader(csvfile)
        data = list(csvreader)

    with open(json_path, 'w', encoding='utf-8') as jsonfile:
        json.dump(data, jsonfile, indent=2, ensure_ascii=False)

# Convert English CSV to JSON
convert_csv_to_json(en_csv_path, en_json_path)

# Convert French CSV to JSON
convert_csv_to_json(fr_csv_path, fr_json_path)
