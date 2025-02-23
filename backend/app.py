from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow all origins (for development)

@app.route('/upload', methods=["POST","GET"])
def upload_image():
    if 'image' not in request.files:
        return jsonify({"message": "No file part"}), 400

    file = request.files['image']
    if file.filename == '':
        return jsonify({"message": "No selected file"}), 400

    # You can save the file if needed
    file.save(f"./{file.filename}")

    return jsonify({"message": "Image received successfully"}), 200


@app.route("/check-age", methods=["POST","GET"])
def check_age():
    data = request.get_json()
    age = data.get("age", 0)

    if age >= 18:
        return jsonify({"message": "✅ You are eligible to vote!"})
    else:
        return jsonify({"message": "❌ You are not eligible to vote!"})

if __name__ == "__main__":
    app.run(debug=True)
