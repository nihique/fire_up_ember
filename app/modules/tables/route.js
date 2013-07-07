FireUpEmber.TablesRoute = Ember.Route.extend({
    model: function () {
        return FireUpEmber.Table.find();
    }
})
