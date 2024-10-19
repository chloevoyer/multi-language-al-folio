import csv
import json

# Read CSV file
with open('_data/en-us/conferences.csv', 'r') as csvfile:
    csvreader = csv.DictReader(csvfile)
    data = list(csvreader)

# Write JSON file
with open('/assets/json/en-us/conferences.json', 'w') as jsonfile:
    json.dump(data, jsonfile, indent=2)

# Read CSV file
with open('_data/fr-ca/conferences.csv', 'r') as csvfile:
    csvreader = csv.DictReader(csvfile)
    data = list(csvreader)

# Write JSON file
with open('/assets/json/fr-ca/conferences.json', 'w') as jsonfile:
    json.dump(data, jsonfile, indent=2)
