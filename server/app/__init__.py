from flask import Flask
from flask_cors import CORS
app = Flask(__name__)
app.config['TEMPLATES_AUTO_RELOAD'] = True

CORS(app)

from app import routes
