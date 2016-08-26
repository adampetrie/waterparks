waterparks.Routers.router = Backbone.Router.extend({

  routes: {
    "" : "home",
    "water-parks/" : "waterparkIndex",
    "water-parks/:waterpark/" : "waterpark"
  },

  home: function() {
    $('.slick-carousel').slick({
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
      draggable: false,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    });
  },

  waterparkIndex: function() {
    var mapView = new waterparks.Views.BigMapView({
      el: '.big-map',
      collection: waterparkData,
      lat: bigMapLatLng.lat,
      lng: bigMapLatLng.lng
    }).render();
  },

  waterpark: function(waterpark) {
    var waterparkModel = waterparkData.get(waterpark);

    var reviews = new waterparks.Collections.Reviews({
      waterpark: waterparkModel,
      node: '.reviews-output'
    });

    new waterparks.Views.ReviewsView({
      collection: reviews,
      template: '#reviews-template',
      el: '.reviews-output'
    });

    new waterparks.Views.weatherView({
      waterpark: waterparkModel,
      template: '#weather-template',
      el: '.weather-output'
    }).render();

    var dir = new waterparks.Views.DirectionsMapView({
      waterpark: waterparkModel,
      el: '.directions-map'
    }).locateUser();
  }
});
