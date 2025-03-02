from tensorflow.keras.models import load_model
import numpy as np
import tensorflow as tf
from tensorflow.keras.preprocessing import image
from tensorflow.keras.optimizers import Adamax



'''Add Code to preprocess the image ready to be predicted  '''
def preprocess_image(img_path):
    img = image.load_img(img_path, target_size=(224, 224))  # Load and resize image
    img_array = image.img_to_array(img)  # Convert to array
    img_array = np.expand_dims(img_array, axis=0)  # Expand dims to match batch shape
    #img_array = img_array / 255.0  # Normalize if required
    return img_array



def predict_image_lung(img_path):
    #img_path = "/content/lung_colon_image_set/lung_image_sets/lung_scc/lungscc1.jpeg"
    processed_img = preprocess_image(img_path)
    predictions = model.predict(processed_img)
    predicted_class = np.argmax(predictions, axis=1)[0]  # Get class index
    print(predicted_class)
    # Assuming you used ImageDataGenerator, retrieve class labels
    class_indices = train_gen.class_indices  # Dictionary mapping class names to indices
    labels_map = {v: k for k, v in class_indices.items()}  # Reverse dict to get class names

    predicted_label = labels_map[predicted_class]  # Get class name
    print(f"Predicted Class: {predicted_label}")
    return predicted_label