# Skin-O-Care
 ML Project
<h1>Skin diseases detection using machine learning</h1>
This project utilizes Azure services for the backend and HTML, CSS, and JavaScript for the frontend for skin disease detection using machine learning.

<h2>Overview</h2>
Skin diseases affect millions of people worldwide, and early detection is crucial for effective treatment. This project aims to develop a machine-learning model for skin disease detection using image analysis. Azure services are used for the backend, including storage and a RESTful API, while the frontend is built using HTML, CSS, JavaScript and bootstrap.

<h2>Azure Services Used</h2>
Azure Storage: Used to store the dataset of skin disease images. Blob storage is utilized for efficient storage and retrieval of images.
Azure RESTful API: Provides a web service endpoint for skin disease detection. The API accepts image inputs, processes them using the machine learning model, and returns the predicted skin disease category.
<h2>Frontend</h2>
The frontend of the application is built using HTML, CSS, and JavaScript. It provides a user-friendly interface for uploading images and viewing the results of the skin disease detection process.

<h2>Usage</h2>
Once the application is running, you can upload an image of a skin lesion through the frontend interface. The image will be sent to the Azure backend for processing, and the predicted skin disease category will be displayed on the frontend.

<h2>Dataset</h2>
The dataset used for training the model is stored in Azure Blob Storage. It contains images of various skin diseases, sourced from public datasets and medical websites.

<h2>Model Training</h2>
The machine learning model is trained using a convolutional neural network (CNN) architecture. Transfer learning is employed to leverage pre-trained models and fine-tune them on the skin disease dataset.

<h2>License</h2>
This project is licensed under the MIT License - see the LICENSE file for details.
