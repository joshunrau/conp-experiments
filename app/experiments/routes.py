import json

from flask import Response, request
from . import experiments_bp
from .simulated import get_simulated_experiments

from .. import db
from ..models import Experiment

@experiments_bp.route('/experiments/api/search', methods=['GET'])
def experiments_search():
    """ returns a JSON array of experiments, where each experiment is an object with the keys 
    map to values based on those in the model
    """
    all_experiments = Experiment.query.all()
    print(all_experiments)
    data = [{"title": e.title, "creators": e.creators} for e in all_experiments]
    return json.dumps(data)


@experiments_bp.route('/experiments/api/submit', methods=['POST'])
def experiment_submission():
    r = request.get_json()
    experiment = Experiment(title=r["title"], creators=r["creators"])
    db.session.add(experiment)
    db.session.commit()
    if experiment.id is None:
        return Response(response="ID is None!", status=500)
    return Response(response="Good", status=200)

