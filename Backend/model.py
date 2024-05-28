import joblib


class Model:
    def __init__(self):
        self.model = joblib.load("catboost_model.pkl")

    def predict(self, input):
        return self.model.predict(input)
