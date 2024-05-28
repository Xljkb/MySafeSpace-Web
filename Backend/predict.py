# import joblib

# class Model:
#     def __init__(self, model_name):
#         self.model = joblib.load(f'{model_name}.pkl')

#     def predict(self, input):
#         return self.model.predict(input)

# model = Model("catboost_model")

# model.predict(v)

import sys
import pandas as pd
import joblib
import model from Backend.CatBoost_train

# Путь к файлу XLSX передается как аргумент командной строки
file_path = sys.argv[1]

# Загрузка модели
model = joblib.load('catboost_model.pkl')

# Загрузка данных из файла XLSX
df = pd.read_excel(file_path, dtype=str)
df.to_csv(index=False, sep=';')

# Выполнение предсказания
predictions = model.predict(df)

# Печать результата (stdout будет захвачен Node.js)
print(predictions)
