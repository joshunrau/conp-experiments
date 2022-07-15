from datetime import date

from . import db

class Experiment(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  creators = db.Column(db.Text, default="Unknown")
  title = db.Column(db.Text, default="Unknown")
  version = db.Column(db.Float, default=-1.0)
  dateAdded = db.Column(db.DateTime, default=date.today())
  dateUpdated = db.Column(db.DateTime, default=date.today())
  downloads = db.Column(db.Integer, default=-1)
  numberFiles = db.Column(db.Integer, default=-1)
  sizeFiles = db.Column(db.Integer, default=-1)
  views = db.Column(db.Integer, default=-1)

  def __init__(self, title, creators) -> None:
    self.title = title
    self.creators = creators
  
  def __repr__(self) -> str:
    return str(self.title)
  
  def to_dict(self):
    data = {}
    included_attributes = [
      'title', "creators", "version", "dateAdded", "dateUpdated", 
      "downloads", "numberFiles", "sizeFiles", "views"
    ]
    for attribute in included_attributes:
      data[attribute] = getattr(self, attribute)
    return data