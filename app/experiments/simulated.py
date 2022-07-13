from datetime import date
from random import randint, randrange

def get_random_element(l: list):
  return l[randrange(0, len(l))]

def get_random_name():
  first_names = ["Liam", "Noah", "Oliver", "Elijah", "James", "Olivia", "Emma", "Charlotte", "Amelia", "Ava"]
  last_names = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Wilson"]
  return get_random_element(first_names) + " " + get_random_element(last_names)

def get_random_date(start_year, end_year):
  return date(randint(start_year, end_year), randint(1, 12), randint(1, 28))

def get_simulated_experiments(n: int):
  simulated_experiments = []
  for i in range(1, n+1):
    simulated_experiments.append({
      "creators": get_random_name(),
      "title": "Experiment " + str(i),
      "version": 1.0,
      "dateAdded": get_random_date(2000, 2009).isoformat(),
      "dateUpdated": get_random_date(2010, 2020).isoformat(),
      "downloads": randint(1, 100),
      "numberFiles": randint(1, 100),
      "sizeFiles": randint(1, 100),
      "views": randint(1, 100)
    })
  return simulated_experiments