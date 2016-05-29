waterparks.Views.ReviewsView = Backbone.View.extend({

  initialize: function(options) {
    this.template = _.template($(options.template).text());
    this.listenTo(this.collection, 'reset', this.render);
  },

  render: function() {
    $(this.el).html(
      this.template({
        reviews: this.collection.models
      })
    );
  }

});
