from flask import Flask, request, render_template, url_for, jsonify
from cs50 import SQL

app = Flask(__name__)

db = SQL('sqlite:///movies.db')


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/search')
def search():
    movies = db.execute('SELECT * FROM movies WHERE title LIKE ?', '%' + request.args.get('q') + '%')
    return jsonify(movies)
    