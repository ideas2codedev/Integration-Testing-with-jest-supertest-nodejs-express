/* Debug */
const SOURCE = 'integrationtesting:routes:pages.js'
const debug = require('debug')(SOURCE)
/* Modules */
const express = require('express')
const _ = require('lodash')
/* App */
const router = express.Router()
/* Controllers */
const controllerPages = require('../controllers/pages/index.controller')
const controllerPolicies = require('../controllers/public/policies.controller')

const routes = {
	'/': {
		GET: {
			middleware: [
        		controllerPolicies.checkApiAuthorization,
				controllerPages.getAllPages
			]
    	},
	  },
	'/:id': {
		GET: {
			middleware: [
				controllerPolicies.checkApiAuthorization,
				controllerPages.getPageById
			]
		},
  	}
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
