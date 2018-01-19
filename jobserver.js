var CronJob = require("cron").CronJob

var job1 = new CronJob({
	cronTime: "* * * * * *",
	onTick: function() {
		console.log(
			"Job 1. jobserver has been running for " + process.uptime() + " seconds."
		)
	},
	start: false,
	timeZone: "America/Los_Angeles",
})

var job2 = new CronJob({
	cronTime: "*/5 * * * * *",
	onTick: function() {
		var date = new Date()
			.toISOString()
			.replace(/T/, " ")
			.replace(/\..+/, "")
		console.log("Job 2. The current time is " + date + ".")
	},
	start: false,
	timeZone: "America/Los_Angeles",
})

console.log("jobserver is running.")

console.log("job1 status: ", job1.running)
console.log("job2 status: ", job2.running)

console.log("Starting job1.")
job1.start()

console.log("Starting job2.")
job2.start()

console.log("job1 status", job1.running)
console.log("job2 status", job2.running)
