const supertest = require("supertest")
const app = require("./../app")

describe("Testing the homepage/root path", () => {
	test("It should response 200 status code by GET method", done => {
	  supertest(app)
		.get("/")
		.then(response => {
		  expect(response.statusCode).toBe(200)
		  done()
		})
	})
  })