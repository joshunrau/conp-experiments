import os

basedir = os.path.abspath(os.path.dirname(__file__))

class Config:
  SECRET_KEY = os.environ.get('SECRET_KEY')
  SQLALCHEMY_DATABASE_URI = f"sqlite:///{os.path.join(basedir, 'data.sqlite')}"
  SQLALCHEMY_TRACK_MODIFICATIONS = False
  
  @staticmethod
  def init_app(app):
    pass


class DevelopmentConfig(Config):
  DEBUG = True


class TestingConfig(Config):
  pass


class ProductionConfig(Config):
  pass


config = {
  'development': DevelopmentConfig,
  'testing': TestingConfig,
  'production': ProductionConfig,
  'default': DevelopmentConfig
}