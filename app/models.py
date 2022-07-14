from . import db

class Experiment(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  creators = db.Column(db.Text)
  title = db.Column(db.Text)
  #version = db.Column(db.Float)
  #dateAdded = db.Column(db.DateTime)
  #dateUpdated = db.Column(db.DateTime)
  #downloads = db.Column(db.Integer)
  #numberFiles = db.Column(db.Integer)
  #sizeFiles = db.Column(db.Integer)
  #views = db.Column(db.Integer)

  def __init__(self, title, creators) -> None:
    self.title = title
    self.creators = creators
  
  def __repr__(self) -> str:
    return str(self.title)