from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Hello, Flask!"

@app.route("/test")
def test():
    return {"message": "Hello world! Hello Koral!"}

if __name__ == '__main__':
    app.run(debug=True, port=5001)
