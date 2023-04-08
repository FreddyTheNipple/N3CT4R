from flask import Flask, request, render_template, redirect, url_for, session
import json
from datetime import datetime

app = Flask(__name__)
app.secret_key = 'supersecretkey'

@app.before_request
def log_request():
    data = {
        'method': request.method,
        'url': request.url,
        'headers': dict(request.headers),
        'data': request.get_data(as_text=True),
        'path': request.path,
        'query_string': request.query_string.decode('utf-8'),
        'remote_addr': request.remote_addr,
        'user_agent': request.headers.get('User-Agent'),
        'username': request.form.get('username', ''),
        'password': request.form.get('password', ''),
        'command': request.form.get('command', '')
    }
    with open('honeypot_log.json', 'a') as log_file:
        log_file.write(json.dumps(data) + '\n')

# Route for the home page
@app.route('/')
def index():
    return render_template('index.html')

# Route for the login page
@app.route('/login')
def login():
    return render_template('login.html')

# Route to handle the login form submission
@app.route('/admin', methods=['POST'])
def login_submit():
    # Get the username and password from the form
    username = request.form['username']
    password = request.form['password']

    # Check if the username and password are correct
    if username == 'admin' and password == 'password':
        session['authorized'] = True  # mark user as authorized
        return redirect(url_for('admin'))
    else:
        return render_template('login.html', message='Incorrect username or password')

@app.route('/exec', methods=['POST'])
def exec():
    return redirect(url_for('admin'))

# Route for the admin page
@app.route('/admin')
def admin():
    if not session.get('authorized'):  # check if user is authorized
        return redirect(url_for('login'))
    else:
        return render_template('admin.html')

if __name__ == '__main__':
    app.run(debug=True)
