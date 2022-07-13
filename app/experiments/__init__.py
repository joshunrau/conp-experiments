from flask import Blueprint

experiments_bp = Blueprint('experiments', __name__)

from . import routes