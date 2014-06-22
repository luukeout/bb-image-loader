"use strict",

ThumbView = Backbone.View.extend({

	template: _.template($('.thumbView-template').text()),

	initialize: function() {
		$('.container').append(this.el);
		this.render()

		this.collection = new PicCollection();
		this.collection.fetch()
		this.listenTo(this.collection, 'add', function(pic) {
			new ThumbView({model: pic});
		})
	},

	render: function() {
		var renderedTemplate = this.template(this.model.attributes);
		this.$el.html(renderedTemplate);

	},
})

$('.button').click(function(){
	var nameInput = $('.name-input').val();
	var urlInput = $('.url-input').val();
	var captionInput = $('.caption-input').val();

	var thumbPic = new Pic();

	thumbPic.set({
		name    : nameInput,
		url     : urlInput,
		caption : captionInput,
	});

	aThumbView

}
	

	var aThumbView = new ThumbView();





