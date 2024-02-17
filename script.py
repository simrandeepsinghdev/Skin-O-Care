import csv
from shutil import copyfile
import os

csv_file = open('metadata.csv')
csv_reader = csv.reader(csv_file)
header = next(csv_reader)

i = 0
for row in csv_reader:
    i += 1
    file_name = row[1]
    disease = row[2]
    source_path = "undescribed_images/" + file_name + '.jpg'
    destination_path = "described_images/" + disease + "_" + str(i) + ".jpg"
    try:
        copyfile(source_path, destination_path)
    except FileNotFoundError:
        print(f"Image '{file_name}.jpg' not found at path: '{source_path}'")
    except Exception as e:
        print(f"An error occurred while copying the image: {e}")

csv_file.close()
