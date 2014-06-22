"use strict";

var Pic = Backbone.Model.extend({
	idAttribute: '_id',

});

var PicCollection = Backbone.Collection.extend({
	Model: Pic,
	url: 'http://tiny-pizza-server.herokuapp.com/collections/lukeTriesAgain',

});