"use strict";

// See https://gist.github.com/freaktechnik/53e8bf5d80fcf3ab44361cc240acdbd6

const { Device } = require('gateway-addon');
const Property = require('./property');

const MAX_BRIGHTNESS = 255;

class HarmonyBulb extends Device {
    constructor(adapter, hub, id, info) {
        super(adapter, id);
        this.hub = hub;
        this.type = "dimmableColorLight";
        this["@type"] = [ "OnOffSwitch", "Light" ];
        //TODO human readable name is missing from API.

        this.properties.set('on', new Property(this, 'on', {
            label: "On/Off",
            type: "boolean",
            "@type": "OnOffProperty"
        }, info.on));
        this.properties.set('level', new Property(this, 'level', {
            label: "Brightness",
            type: "number",
            unit: "percent",
            "@type": "BrightnessProperty"
        }, this.getBrightness(info.birghtness)));
        this.properties.set('color', new Property(this, 'color', {
            label: "Color",
            type: "string",
            "@type": "ColorProperty"
        }, this.getHex(info.color)));

        this.adapter.handleDeviceAdded(this);
    }

    getBrightness(brightness) {
        return Math.floor((brightness / MAX_BRIGHTNESS) * 100);
    }

    getHex(colorSpec) {
        if("hueSat" in colorSpec) {
            //Probably easiest way to get a hex?
            return "#ffffff";
        }
    }
}

module.exports = HarmonyBulb;
