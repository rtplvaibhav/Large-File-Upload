cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-chromecast.ChromecastApi",
      "file": "plugins/cordova-plugin-chromecast/www/chrome.cast.js",
      "pluginId": "cordova-plugin-chromecast",
      "clobbers": [
        "chrome.cast"
      ]
    },
    {
      "id": "cordova-plugin-chromecast.EventEmitter",
      "file": "plugins/cordova-plugin-chromecast/www/EventEmitter.js",
      "pluginId": "cordova-plugin-chromecast"
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-chromecast": "2.0.1"
  };
});