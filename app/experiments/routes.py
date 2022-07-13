import json

from flask import flash, render_template, redirect, url_for
from . import experiments_bp
from .simulated import get_simulated_experiments

@experiments_bp.route('/experiments/api', methods=['GET'])
def experiments_search():
    return json.dumps(get_simulated_experiments(25))