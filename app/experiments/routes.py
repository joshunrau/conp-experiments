import json

from flask import flash, render_template, redirect, url_for, request
from . import experiments_bp
from .simulated import get_simulated_experiments

@experiments_bp.route('/experiments/api', methods=['GET'])
def experiments_search():
    if request.method == 'GET':
        return json.dumps(get_simulated_experiments(25))
    elif request.method == 'POST':
        print(request)

@experiments_bp.route('/experiments/api/submit', methods=['POST'])
def submit_experiment():
    experiment = request.get_json()
    
    print("Recieved Request")
    print(request.get_json())
    print(type(request))
    return 200

