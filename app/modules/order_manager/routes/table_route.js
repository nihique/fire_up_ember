FireUpEmber.TableRoute = Ember.Route.extend({

    renderTemplate: function () {
        this.render('order_manager/table', {
            outlet: 'table',
            into: 'order_manager/index'
        });
    }
});