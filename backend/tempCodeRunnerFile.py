@app.route('/checklungcancer', methods=["POST","GET"])
def upload_image_lung():
    if 'image' not in request.files:
        return jsonify({"message": "No file part"}), 400

    file = request.files['image']
    if file.filename == '':
        return jsonify({"message": "No selected file"}), 400
    image = Image.open(file) 
    # You can save the file if needed
    file.save(f"./{file.filename}")
    # prediction = predict_image_lung(f"./{file.filename}")
    prediction="hello"
    return jsonify({"message": f"{prediction}"}), 200