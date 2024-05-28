import joblib
import pandas as pd
from fastapi import FastAPI, UploadFile

from model import Model

app = FastAPI()

model = None


@app.on_event("startup")
async def startup():
    global model
    model = Model()


@app.post(path="/predict")
def get_predict(file: UploadFile):
    df = pd.read_excel(file.file, dtype=str)
    df.to_csv(index=False, sep=';')
    predictions = model.predict(df)
    return {"predict": predictions[0][0]}
