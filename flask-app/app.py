from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

scores = []

@app.route("/")
def home():
    return {"scores": scores}

@app.route("/test")
def test():
    return {"message": "Hello world! Hello Koral!"}

@app.route("/log_score", methods=["POST"])
def log_score():
    data = request.json
    score = data.get("score")
    scores.append(score)
    print(f"Received score: {score}")
    return {"message": "Score received!"}, 200

@app.route("/get_scores", methods=["GET"])
def get_scores():
    return {"scores": scores}, 200

if __name__ == '__main__':
    app.run(debug=True, port=5001)
