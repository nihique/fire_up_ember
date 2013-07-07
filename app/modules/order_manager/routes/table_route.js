FireUpEmber.TableRoute = Ember.Route.extend({
    model: function (params) {
        return FireUpEmber.Table.find(params.table_id);
    },

    renderTemplate: function () {
        this.render('order_manager/table', {
            outlet: 'table',
            into: 'order_manager/index'
        });
    }
});