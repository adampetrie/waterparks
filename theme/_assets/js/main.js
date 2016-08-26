window.waterparks = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {}
};

$(function() {
  router = new waterparks.Routers.router();
  Backbone.history.start({pushState: true});
})
