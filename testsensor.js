var sensorLib = require( "node-dht-sensor" );

var sensor = {
  type: 11,
  pin: 4
};

function read() {
  console.log( "start reading..." );
  var spec = sensorLib.readSpec( sensor.type, sensor.pin );
  console.log( spec );
}

setInterval( read, 2000 );
