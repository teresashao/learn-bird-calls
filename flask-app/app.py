from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

scores = []
completed = [0] * 7
completed_count = 0

@app.route("/")
def home():
    return {"scores": scores}

@app.route("/test")
def test():
    return {"message": "Hello world! Hello Koral!"}

@app.route("/start", methods=["POST"])
def start():
    global completed, completed_count
    completed = [0] * 7
    completed_count = 0
    return {"message": "Game reset successfully!"}, 200

@app.route("/get_completed", methods=["GET"])
def get_completed():
    return {"completed": completed, "completed_count": completed_count}, 200

@app.route("/complete_bird", methods=["POST"])
def complete_bird():
    global completed, completed_count
    data = request.json
    bird_id = data.get("bird_id")

    if bird_id is None or not (0 <= bird_id < len(completed)):
        return {"message": "Invalid bird ID"}, 400

    if completed[bird_id] == 0:
        completed[bird_id] = 1
        completed_count += 1

    return {"message": f"Bird {bird_id} marked as completed"}, 200


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
