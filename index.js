var sensorLib = require( "node-dht-sensor" );
var express = require( "express" );

function isSpecUseful( spec ) {
  if ( spec.errors > 0 ) {
    return false;
  } else if ( !spec.isValid ) {
    return false;
  } else if ( spec.humidity === 0 && spec.temperature === 0 ) {
    return false;
  }

  return true;
}

module.exports = function( type, pin ) {
  var router = express.Router();

  router.use( function( req, res ) {
    var spec;
    do {
      console.log( "start reading..." );
      spec = sensorLib.readSpec( type, pin );
      console.log( 'got', spec, 'is useful:', isSpecUseful( spec ) );
    } while ( !isSpecUseful( spec ) );

    res.json( spec );
  } );

  return router;
};
