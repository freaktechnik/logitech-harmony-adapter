# logitech-harmony-adapter

> Adapter may not be working as expected due to a Logitech security fix: https://www.home-assistant.io/blog/2018/12/17/logitech-harmony-removes-local-api/

Logitech Harmony Hub adapter for the [Mozilla IoT gateway](https://iot.mozilla.org).

Bridges the Harmony hub to the gateway so it can start activities and interact with
IR devices connected to the hub.

## Usage
Normally you will just want to install this from the add-ons list provided by
the gateway.

## Building
Before building, make sure to install the node packages without native extensions
by running `npm ci --ignore-scripts`. After that, build the package using `build.sh`.
