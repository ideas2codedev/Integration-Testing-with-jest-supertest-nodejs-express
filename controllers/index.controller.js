/* Debug */
const SOURCE = 'intetrationtesting:controllers:index.controller.js'
const debug = require('debug')(SOURCE)

module.exports = {
	index: (req, res, next) => {
        try {
            debug("home page.")
            res.render('index', { title: "Integration testing with Jest, SuperTest, nodejs & expressjs" })
        } catch (error) {
            next(error)
        }
    }
}