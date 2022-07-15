const path = require("path");
const process = require("process");
const { spawn } = require("child_process");

const flaskDevServer = spawn("flask", ["run"], {
  env: { ...process.env, FLASK_APP: "conp.py" },
});

const webpackDevServer = spawn("npm", ["start"], {
  cwd: path.join(__dirname, "app", "static")
});

const formatOutput = (title, data) => {
  console.log(`***** ${title} *****`)
  console.log(data.toString())
}

flaskDevServer.stdout.on("data", (data) => formatOutput("Flask Dev Server", data))
flaskDevServer.stderr.on("data", (data) => formatOutput("Flask Dev Server", data))

webpackDevServer.stdout.on("data", (data) => formatOutput("Webpack Dev Server", data))
webpackDevServer.stderr.on("data", (data) => formatOutput("Webpack Dev Server", data))
