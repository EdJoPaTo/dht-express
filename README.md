# dht-express

A simple express webserver serving data of the DHT11/ DHT22 temperature and humidity sensors.

# Installation

You need to install the [Broadcom BCM 2835](http://www.airspayce.com/mikem/bcm2835/index.html) libary first.

After that clone the repository.
```bash
git clone https://github.com/edjopato/dht-express.git
cd dht-express
```

If you want to include the endpoint in your existing Express webserver take a look in the topic at the end of the README

# Configuration

Remember to configure the webserver in the standalone.js after the comment

```JavaScript
// add more sensors on routes here
app.use( '/', sensor( 11, 4 ) );
```

You have to configure the express route, the sensor type (11 or 22 for DHT11/ 22) and the pin.

# Run

This module uses the [BCM2835](http://www.airspayce.com/mikem/bcm2835/) library through [node-dht-sensor](https://www.npmjs.com/package/node-dht-sensor) that requires access to /open/mem. Because of this, you will typically run node with admin privileges.

```bash
npm start
```

After that you can configure and run [homebridge](https://www.npmjs.com/package/homebridge) with the [homebridge-http-temperature-humidity](https://www.npmjs.com/package/node-dht-sensor) plugin.

# Include in existing express webserver

## Install in your project
```bash
npm install --save dht-express
```

## use in your project
you can use every other express router

```JavaScript
var sensorRouter = requires('dht-express');
...
app.use( '/my/super/route', sensor( type, pin ) );
```

Don't forget the admin privileges of this module (run with sudo)
