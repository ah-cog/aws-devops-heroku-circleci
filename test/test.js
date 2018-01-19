let chai = require("chai")
let chaiHttp = require("chai-http")
let app = require("../app")
let should = chai.should()

chai.use(chaiHttp)

describe("HttpRequestTests", () => {
	describe("/GET /", () => {
		it("it should GET the index route", done => {
			chai
				.request(app)
				.get("/")
				.end((err, res) => {
					res.should.have.status(200)
					done()
				})
		})
	})
})
