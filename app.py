# import the necessary modules
from flask import Flask , render_template , request , jsonify

# importing sentiment_analysis file as sa
import sentiment_analysis as sa

app = Flask(__name__)
@app_route('/')
def index():
    return render_template('index.html')

@app.route('/predict_emotion', methods = ["POST"])
def predict_emotion():
    input_text = request.json.get("text")

    if not input_text:

        response = {
                    "status":"error",
                    "message":"Please tell me what you're feeling so that I can predict your current emotion!"
                    }
                
        return jsonify(response)
app.run(debug=True)


@app.route('/')
def home():
    return render_template('index.html')

# write a route for post request
@app.route('' , methods = [''])
def review():

    review = request.json.get('')
    if not review:

        return jsonify({'status' : 'error' , 
                        'message' : 'Empty response'})

    else:

        _ , _ = sa.predict(review)

        return jsonify({'':'' , '':''})


if __name__  ==  "__main__":
    app.run(debug = True)