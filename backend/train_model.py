import pandas as pd
import pickle
import os
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.svm import LinearSVC
from sklearn.pipeline import Pipeline
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report

def train():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    data_path = os.path.join(base_dir, 'augmented_dataset.csv')
    
    if not os.path.exists(data_path):
        print("Augmented dataset not found. Please run augment_data.py first.")
        return

    print("Loading augmented dataset...")
    df = pd.read_csv(data_path)
    
    # Ensure no NaN
    df.dropna(subset=['Skills', 'JobRole'], inplace=True)
    
    X = df['Skills']
    y = df['JobRole']
    
    print(f"Training on {len(df)} examples...")
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    # Create Pipeline
    pipeline = Pipeline([
        ('tfidf', TfidfVectorizer(max_features=5000, ngram_range=(1,2))),
        ('clf', LinearSVC(dual='auto', random_state=42))
    ])
    
    print("Training model...")
    pipeline.fit(X_train, y_train)
    
    print("Evaluating model...")
    accuracy = pipeline.score(X_test, y_test)
    print(f"Test Accuracy: {accuracy:.4f}")
    
    # Save model
    model_path = os.path.join(base_dir, 'model.pkl')
    with open(model_path, 'wb') as f:
        pickle.dump(pipeline, f)
        
    print(f"Model saved to {model_path}")
    
    # Quick Test
    test_skills = ["python, machine learning, sql"]
    prediction = pipeline.predict(test_skills)
    print(f"Test Prediction for '{test_skills[0]}': {prediction[0]}")

if __name__ == "__main__":
    train()
