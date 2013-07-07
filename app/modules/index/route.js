FireUpEmber.IndexRoute = Ember.Route.extend({
  setupController: function (controller) {
    controller.set("content", FireUpEmber.IndexModel.find());
  }
});

