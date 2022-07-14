export default function submitExperiment() {
  let data = {element: "barium"};
  fetch("/experiments/api", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  }).then(response => console.log("Done! Response:", response));
}