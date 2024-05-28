# from flask import Flask, request, jsonify
# import pandas as pd
# import sys
# import joblib
# import Model from Backend.CatBoost_train

# app = Flask(__name__)

# @app.route('/endpoint', methods=['POST'])
# def process_file():
#     file = request.files['file']
#     df = pd.read_excel(file, dtype=str)
#     df.to_csv(index=False, sep=';')
#     result = df
#     return jsonify(result)

# if __name__ == '__main__':
#     app.run(host='0.0.0.0', port=5000)

from flask import Flask, request, jsonify
import pandas as pd
from model import Model
import sys
import joblib
app = Flask(__name__)


@app.route('/predict', methods=['POST'])
def process_file():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    try:
        # Убедитесь, что файл можно читать и перемещаться по нему
        file.seek(0)
        df = pd.read_excel(file, dtype=str)
        df.to_csv(index=False, sep=';')
        model = Model()
        result = model.predict(df)
        print(result)
        return (jsonify({"data": result[0][0]}))
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)