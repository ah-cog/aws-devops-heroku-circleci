var express = require("express")
var path = require("path")
var logger = require("morgan")
var cookieParser = require("cookie-parser")
var bodyParser = require("body-parser")

var index = require("./routes/index")
var users = require("./routes/users")

var debug = require("debug")("aws-devops-heroku-buggy:server")
var http = require("http")

var app = express()

// Configure Express view engine.
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(logger("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.use("/", index)
app.use("/users", users)

// Catch 404 and forward to error handler.
app.use(function(req, res, next) {
	var err = new Error("Not Found")
	err.status = 404
	next(err)
})

// Error handler.
app.use(function(err, req, res, next) {
	// Set locals, only providing error in development.
	res.locals.message = err.message
	res.locals.error = req.app.get("env") === "development" ? err : {}

	// Render the error page.
	res.status(err.status || 500)
	res.render("error")
})

// Set port from environment.
var port = parseInt(process.env.PORT, 10) || 5000
app.set("port", port)

// Create HTTP server.
var server = http.createServer(app)

// Listen on provided port, on all network interfaces.
server.listen(port)
