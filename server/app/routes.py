from flask import render_template
from flask import request
from app import app


@app.route('/')
@app.route('/index')
def index(methods=('get',)):
    print("args are: " + str(request.args.keys()))
    clicked_button = request.args.get('value')
    return render_template('index.html', clicked_button=clicked_button)

@app.route('/slideshow.html')
def show_slideshow():
    return render_template('slideshow.html')

@app.route('/slide.js')
def slide_js():
    return render_template('slide.js')

@app.route('/slide_style.css')
def slide_css():
    return render_template('slide_style.css')
