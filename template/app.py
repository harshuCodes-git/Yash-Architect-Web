from flask import Flask, render_template, request
from flask_mail import Mail, Message

app = Flask(__name__)
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_USERNAME'] = 'dubeyharshu0921@gmail.com'  # Replace with your Gmail address
app.config['MAIL_PASSWORD'] = 'Harshu@211205Dubey'   # Replace with your Gmail password

mail = Mail(app)

@app.route('/')
def career():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    if request.method == 'POST':
        # Retrieve form data
        name = request.form['name']
        email = request.form['email']
        mobile = request.form['mobile']
        service = request.form['service']
        message = request.form['message']

        # Send email
        send_email(name, email, mobile, service, message)

        return 'Form submitted successfully!'

    return 'Error submitting form.'

def send_email(name, email, mobile, service, message):
    msg = Message('New Career Form Submission', sender='your-email@gmail.com', recipients=['recipient-email@gmail.com'])
    msg.body = f'''
    Name: {name}
    Email: {email}
    Mobile: {mobile}
    Service: {service}
    Message: {message}
    '''
    mail.send(msg)

if __name__ == '__main__':
    app.run(debug=True)
