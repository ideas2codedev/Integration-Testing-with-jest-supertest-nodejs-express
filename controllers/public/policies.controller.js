/* Debug */
const SOURCE = 'integrationtesting:controllers:public:policies.controllers.js'
const debug = require('debug')(SOURCE)

module.exports = {
	checkApiAuthorization: (req, res, next) => {
        try {
            debug("Checking authorization: "+req.headers.authorization)
            let apiKey = req.headers.authorization
            if (!apiKey || apiKey != ("Bearer c3VwZXJhZG1pbjp1QHR3XkVXQ3BVWDFrdEN1")) {
                let error = {
                    msg: 'Invalid authorization'
                }
                res.status(401).send(error)
                return
            }
            debug("Authorized!")
            next()
        } catch (error) {
            next(error)
        }
	}
}