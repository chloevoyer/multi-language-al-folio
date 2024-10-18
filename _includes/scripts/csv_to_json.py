import csv
import json

# Read CSV file
with open('_data/en-us/conferences.csv', 'r') as csvfile:
    csvreader = csv.DictReader(csvfile)
    data = list(csvreader)

# Write JSON file
with open('_data/en-us/conferences.json', 'w') as jsonfile:
    json.dump(data, jsonfile, indent=2)
