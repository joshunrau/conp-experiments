import os

from app import create_app, db

from dotenv import load_dotenv
load_dotenv()

app = create_app(os.getenv('FLASK_CONFIG') or 'default')

@app.cli.command()
def init():
    """Run the unit tests."""
    db.create_all()