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

    assert.equal(ds.get('m@bond.com'), test1['order'], 'Add pass test1');
    assert.equal(ds.get('james@bond.com'), test2['order'], 'Add pass test2');


    ds.remove('james@bond.com');

    assert.equal(ds.get('m@bond.com'), test1['order'], ds.get('m@bond.com') + test1['order']);
    assert.equal(ds.get('james@bond.com'), undefined, 'Remove pass undefined');
});

QUnit.test('Truck', function(assert){
  var myTruck = new App.Truck("Magic", App.DataStore());
  
  myTruck.createOrder({email: 'me@goldfinger.com', coffee: 'double mocha'});

  assert.equal("1", "1");
});
