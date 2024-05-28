from flask import Flask, request, jsonify
import pandas as pd
import sys
import joblib
import Model from Backend.CatBoost_train

app = Flask(__name__)

@app.route('/endpoint', methods=['POST'])
def process_file():
    file = request.files['file']
    df = pd.read_excel(file, dtype=str)
    df.to_csv(index=False, sep=';')
    result = df
    return jsonify(result)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
