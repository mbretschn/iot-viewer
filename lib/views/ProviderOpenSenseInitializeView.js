var ProviderOpenSenseInitializeView = Backbone.View.extend({
	events: {
		"click .initialize" : "save",
		"click .delete" : "delete"
	},
	height: 320,
	initialize: function(){
		this.render();
	},
	serialize : function() {
		return {

		};
	},
	render: function() {
		var template = _.template( $("#xively_initialize").html(), this.model.attributes );
		this.$el.html( template );
	},
	save : function () {
		this.model.set(this.serialize());
		this.model.save();
		var that = this;

		this.model.meta(function (result) {
			result.provider_id = result.id;
			delete result.id;

			that.model.set(result);
			that.model.set({initialized : true});
			that.model.save();

			that.model.load_devices();
		});
	},
	delete : function () {

	}
});