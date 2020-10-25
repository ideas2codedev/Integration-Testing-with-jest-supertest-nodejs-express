const supertest = require('supertest')
const app = require('../../app')


describe("Requests pages", () => {
	test("Get all pages and array data with http code 200", done => {
		supertest(app)
		.get("/pages")
		.set({
			"Authorization": "Bearer c3VwZXJhZG1pbjp1QHR3XkVXQ3BVWDFrdEN1",
			"Accept":"application/json"
		})
		.then(response => {
		expect(response.statusCode).toBe(200)
		expect(response.body).toEqual([
			{
				"id": 1,
				"url": "https://www.ideas2code.io"
			},
			{
				"id": 2,
				"url": "https://github.com/ideas2codedev"
			},
			{
				"id": 3,
				"url": "https://github.com/irenteria0617"
			},
			{
				"id": 4,
				"url": "https://demos.ideas2code.io"
			}
		])
		done()
		})
	})
	test("Get page(exists) by id, 200 status", done => {
		supertest(app)
		.get("/pages/1")
		.set({
			"Authorization": "Bearer c3VwZXJhZG1pbjp1QHR3XkVXQ3BVWDFrdEN1",
			"Accept":"application/json"
		})
		.then(response => {
		expect(response.statusCode).toBe(200)
		expect(response.body).toEqual(
			{
				"id": 1,
				"url": "https://www.ideas2code.io"
			}
		)
		done()
		})
	})
	test("Get page by id(no exists),404 status", done => {
		supertest(app)
		.get("/pages/15")
		.set({
			"Authorization": "Bearer c3VwZXJhZG1pbjp1QHR3XkVXQ3BVWDFrdEN1",
			"Accept":"application/json"
		})
		.then(response => {
		expect(response.statusCode).toBe(404)
		expect(response.body).toEqual({msg: "No records found"})
		done()
		})
	})
	test("Check invalid Authorization,401 status", done => {
		supertest(app)
		.get("/pages")
		.set({
			"Authorization": "Incorrent Authorization",
			"Accept":"application/json"
		})
		.then(response => {
		expect(response.statusCode).toBe(401)
		expect(response.body).toEqual({msg: 'Invalid authorization'})
		done()
		})
	})
})