var express = require( "express" );
var app = express();

var sensor = require( './index' );

// add more sensors on routes here
app.use( '/', sensor( 11, 4 ) );

app.listen( 3000 );
