export default function fetchSimulatedExperiments(callback) {
  fetch("/experiments/api")
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.error(error));
}