/* Debug */
const SOURCE = 'integrationtesting:routes:index.js'
const debug = require('debug')(SOURCE)
/* Modules */
const express = require('express')
const _ = require('lodash')
/* App */
const router = express.Router()
/* Controllers */
const controllerUsers = require('../controllers/index.controller')

const routes = {
	'/': {
		GET: {
			middleware: [
				controllerUsers.index
			]
    	},
  	},
}
_.forOwn(routes, (methods, endpoint) => {
	_.forOwn(methods, (details, method) => {
		method = method.toLowerCase()
		if (typeof router[method] === 'function') {
			debug('Loanding endpoint %s#%s', endpoint, method)
			router[method](endpoint, details.middleware)
		}
	})
})

module.exports = router
