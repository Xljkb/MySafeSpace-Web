import pandas as pd
from sklearn.model_selection import train_test_split
import numpy as np
import random
from sklearn.metrics import mean_absolute_error, mean_squared_error
from sklearn.linear_model import LinearRegression, Ridge, RidgeCV
from sklearn.tree import DecisionTreeRegressor
from sklearn.preprocessing import MinMaxScaler, OneHotEncoder
from catboost import CatBoostClassifier
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score
from sklearn.metrics import accuracy_score, classification_report
import joblib

# df = pd.read_csv('train.csv')
df = pd.read_excel('Backend/train.xlsx', dtype=str)
df.to_csv(index=False, sep=';')

cat_cols = []

y = df['TARGET']
X = df.drop(['TARGET'], axis=1)

train_X, test_X, train_y, test_y = train_test_split(X, y, random_state=42, test_size=0.35)

cat = CatBoostClassifier(
    iterations=500,
    random_seed=42,
    loss_function='MultiClass'
    )

cat.fit(train_X,
        train_y,
        verbose=True,
        eval_set=(test_X, test_y)
        )

print(f'accuracy: {accuracy_score(cat.predict(test_X), test_y)}')

test = classification_report(test_y, cat.predict(test_X))
print(test)

joblib.dump(cat, 'catboost_model.pkl')

class Model:
    def __init__(self, model_name):
        self.model = joblib.load(f'{model_name}.pkl')

    def predict(self, input):
        return self.model.predict(input)
    
cat.predict(test_X)