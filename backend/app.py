from flask import Flask, jsonify, request
import psycopg2

app = Flask(__name__)

app.config['SECRET_KEY'] = '123ibeforee456rocksandsticks789'
app.config['DATABASE_URI'] = 'your_database_uri'

app = Flask(__name__)

# ElephantSQL connection details
host = 'your_host'
port = 'your_port'
database = 'vsypgyjb'
user = 'vsypgyjb'
password = 'mRIwNt4_fVw2gVn44L6kuGQKQfzWen2C'

# Establish a connection to ElephantSQL
conn = psycopg2.connect(host=host, port=port, database=database, user=user, password=password)