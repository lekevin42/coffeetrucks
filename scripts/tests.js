var App = window.App;
QUnit.test('DataStore', function(assert) {
    var ds = new App.DataStore();
    var test1 = {
        'email': 'm@bond.com',
        'order': 'tea'
    };
    var test2 = {
        'email': 'james@bond.com',
        'order': 'eshpressho'
    };


    ds.add('m@bond.com', 'tea');
    ds.add('james@bond.com', 'eshpressho');

    assert.equal(ds.get('m@bond.com'), test1['order'], 'Get pass test1');
    assert.equal(ds.get('james@bond.com'), test2['order'], 'Get pass test2');

    ds.remove('james@bond.com');

    assert.equal(ds.get('m@bond.com'), test1['order'], 'There is One left');
    assert.equal(ds.get('james@bond.com'), undefined, 'remove pass');
});

QUnit.test('Truck', function(assert) {
    var myTruck = new App.Truck('Magic', new App.DataStore());

    myTruck.createOrder({
        emailAddress: 'me@goldfinger.com',
        coffee: 'double mocha'
    });

    myTruck.createOrder({
        emailAddress: 'dr@no.com',
        coffee: 'decaf'
    });

    myTruck.createOrder({
        emailAddress: 'm@bond.com',
        coffee: 'earl grey'
    });

    assert.deepEqual(myTruck.getOrders(), ['me@goldfinger.com', 'dr@no.com', 'm@bond.com'], 'all three are here');

    myTruck.deliverOrder('dr@no.com');

    myTruck.deliverOrder('m@bond.com');

    assert.deepEqual(myTruck.getOrders(), ['me@goldfinger.com'], 'only goldfinger left');
});
