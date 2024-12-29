from flask import Flask, request, jsonify, render_template
import json

app = Flask(__name__)

# In-memory storage for bugs
bugs = []

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/add-bug", methods=["POST"])
def add_bug():
    data = request.json
    title = data.get("title")
    description = data.get("description")
    
    if title and description:
        bugs.append({"title": title, "description": description})
        return jsonify({"message": "Bug added successfully"}), 200
    return jsonify({"error": "Invalid input"}), 400

@app.route("/get-bugs", methods=["GET"])
def get_bugs():
    return jsonify(bugs)

if __name__ == "__main__":
    app.run(debug=True)
