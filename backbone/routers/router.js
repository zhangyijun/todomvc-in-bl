'use strict';

var todos = require('../collections/todos')
var Backbone = require('../backbone')

// Todo Router
// ----------
var TodoRouter = Backbone.Router.extend({
	routes: {
		'*filter': 'setFilter'
	},

	setFilter: function (param) {
		// Set the current filter to be used
		this.TodoFilter = param || '';

		// Trigger a collection filter event, causing hiding/unhiding
		// of Todo view items
		todos.trigger('filter');
	}
});
module.exports = new TodoRouter();

Backbone.history.start();
