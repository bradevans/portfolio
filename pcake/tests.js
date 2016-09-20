QUnit.test( "getEditDistance('distance', 'distance') === 0", function( assert ) {
    assert.ok( getEditDistance("distance", "distance") === 0, "PASS" );
});

QUnit.test( "getEditDistance('', 'nothing') === 7", function( assert ) {
    assert.ok( getEditDistance("", "nothing") === 7, "PASS" );
});

QUnit.test( "getEditDistance('kitten', 'sitting') === 3", function( assert ) {
    assert.ok( getEditDistance("kitten", "sitting") === 3, "PASS" );
});