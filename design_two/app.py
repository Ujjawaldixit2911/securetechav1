from flask import Flask, render_template, send_from_directory
from flask_compress import Compress
import jinja2
import os

base_dir = os.path.dirname(os.path.abspath(__file__))

app = Flask(__name__, static_folder=os.path.join(base_dir, '../secure/static'), static_url_path='/static')
Compress(app)

# Use ChoiceLoader with absolute paths to ensure correct templates load regardless of working directory
app.jinja_loader = jinja2.ChoiceLoader([
    jinja2.FileSystemLoader(os.path.join(base_dir, 'templates')),
    jinja2.FileSystemLoader(os.path.join(base_dir, '../secure/templates'))
])

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/AboutUs")
def about():
    return render_template("about.html")

@app.route("/Contactus")
def contact():
    return render_template("contact.html")

@app.route("/Solutionpage")
def solutions():
    return render_template("solutions.html")

@app.route("/CorporateProfile")
def corporate_profile():
    return render_template("securetech_profile.html")

@app.route("/images/<path:filename>")
def serve_images(filename):
    img_dir = os.path.join(base_dir, '../images')
    if os.path.exists(os.path.join(img_dir, filename)):
        return send_from_directory(img_dir, filename)
    return send_from_directory(os.path.join(base_dir, '../secure/static'), filename)

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5002)
