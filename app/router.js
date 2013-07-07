FireUpEmber.Router.map(function () {
    this.resource('order_manager', function () {
        this.resource('tables', { path: 'tables' }, function () {
            this.resource('table', { path: ':table_id' });
        });
    });
});

