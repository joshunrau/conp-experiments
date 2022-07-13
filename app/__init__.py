from flask import Flask

from config import config

def create_app(config_name: str) -> Flask:
    """ application factory takes as an argument the name of a configuration from config.py """
    app = Flask(__name__)
    app.config.from_object(config[config_name])
    config[config_name].init_app(app)

    # attach routes and custom error pages here
    from .experiments import experiments_bp
    app.register_blueprint(experiments_bp)
    
    return app