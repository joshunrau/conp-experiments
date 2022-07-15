export default function fetchExperiments(callback) {
  fetch("/experiments/api/search")
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.error(error));
}