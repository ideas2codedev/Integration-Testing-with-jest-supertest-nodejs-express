/* Debug */
const SOURCE = 'integrationtesting:controllers:pages:index.controller.js'
const debug = require('debug')(SOURCE)

/* Data stored*/
const dataStore = require('../../data-store')

module.exports = {
	getAllPages: async (req, res, next) => {
        try {
            debug("getAllPages")
            debug("Getting information from data-store.js file")
            let data = dataStore()
            debug("Responding data to endpoint")
            res.status(200).send(data)
        } catch (error) {
            next(error)
        }
    },
    getPageById: async (req, res, next) => {
        try {
            debug("getPageById")
            debug("Getting information from data-store.js file")
            let data = dataStore()
            debug("Filtering data by id")
            data = data.filter(page => page.id == req.params.id)
            var status = (data.length>0?200:404)
            data = (data.length>0?data[0]:{msg: "No records found"})
            debug("Responding data to endpoint")
            res.status(status).send(data)
        } catch (error) {
            next(error)
        }
    }
}