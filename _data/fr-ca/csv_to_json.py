import csv
import json

# Read CSV file
with open('_data/fr-ca/conferences.csv', 'r', encoding='utf-8') as csvfile:
    csvreader = csv.DictReader(csvfile)
    data = list(csvreader)

# Write JSON file
with open('assets/json/fr-ca/conferences.json', 'w', encoding='utf-8') as jsonfile:
    json.dump(data, jsonfile, indent=2, ensure_ascii=False)
