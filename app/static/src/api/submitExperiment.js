export default function submitExperiment(experiment) {
  fetch("/experiments/api/submit", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(experiment)
  }).then(response => console.log("Done! Response:", response));
}