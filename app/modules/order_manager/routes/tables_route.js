FireUpEmber.TablesRoute = Ember.Route.extend({
    model: function () {
        return FireUpEmber.Table.find();
    },

    renderTemplate: function () {
        this.render('order_manager/tables', {
            outlet: 'tables',
            into: 'order_manager/index'
        });
    }
});

