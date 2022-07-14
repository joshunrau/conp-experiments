# CONP Experiments Portal

## About

This repository houses the experiments portal we developed for the Canadian Open Neuroscience Platform (CONP) portal.

## Setup

Install NodeJS https://nodejs.org/en/

Create Virtual Environemnt
    $ python -m venv venv

Source
  source venv/bin/activate
  pip install -r requirements.txt


npm install --prefix app/static
export FLASK_APP=conp.py

./scripts/start

## Create DB
    flask shell
    from app import db
    db.create_all()
    exit()


