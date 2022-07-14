import json

from flask import flash, render_template, redirect, url_for, request
from . import experiments_bp
from .simulated import get_simulated_experiments

@experiments_bp.route('/experiments/api', methods=['GET', 'POST'])
def experiments_search():
    print(f"\n\n{request.method}\n\n")
    if request.method == 'GET':
        return json.dumps(get_simulated_experiments(25))
    elif request.method == 'POST':
        print(request)
