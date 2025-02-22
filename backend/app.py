from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow all origins (for development)

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
