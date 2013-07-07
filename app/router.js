FireUpEmber.Router.map(function () {
    this.resource('order_manager', function () {
        this.resource('tables', { path: 'order_manager/tables' }, function () {
            this.resource('table', { path: ':table_id' });
        });
    });
});

