from flask import Flask,render_template
#from pymongo import MongoClient
import os

app = Flask (__name__)

# Read data from MongoDB
#client = MongoClient("mongodb://my-mongo-compose:27017/") 
#db = client.mydb 
#collection = db.mycollection
#mongo_data = list(collection.find())


# Read data from txt file
#file_path = './static/stored.txt'
#with open(file_path, 'r') as f:
#    txt_data = f.read().splitlines()
#    txt_data = [x.split(';') for x in txt_data]

@app.route("/")
def index():
    return render_template("index.html", results1 = [], results2 = [])

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/about")
def about():
    return render_template("about.html")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)