# CONP Experiments Portal

## About

This repository houses the experiments portal we developed for the Canadian Open Neuroscience Platform (CONP) portal.

## Development Setup

The following setup was tested using [Node](https://nodejs.org/) 16.16 (LTS) and [Python](https://www.python.org/) 3.9.12.

### Flask Setup

First, in the project root directory, create a new virtual environment: 

    python -m venv venv

Then, activate this environment and install the required dependencies:

    source venv/bin/activate
    pip install -r requirements.txt

Create an empty database:

    flask shell
    >>> from app import db
    >>> db.create_all()
    >>> exit()

## React/Webpack Setup

Install the required node modules:
    
    npm install --prefix app/static

## Run Application

    node run.js

