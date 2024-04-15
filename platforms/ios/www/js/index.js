/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
    
//    var AwesomePlugin = {
//      kungfuGripAction = function("com.example.hello", successCallback, failureCallback) {
//        return cordova.exec(
//          successCallback,
//          failureCallback,
//          'Chromecast',
//          'initialize',
//          "com.example.hello"
//        );
//      }
//    };
    
//    console.log("Here is the result of an result: - " + AwesomePlugin);
    
    window.echo = cordova.exec(function(winParams) {},
                 function(error) {},
                 "Chromecast",
                 "initialize",
                 ["com.example.hello"]);
    console.log("Here is the result of an method: - " + window.echo);
    
//    
//    window.echo = cordova.exec(function(winParams) {},
//                 function(error) {},
//                 "Chromecast",
//                 "stopRouteScan",
//                 ["com.example.hello"]);
//    console.log("Here is the result of an method stopRouteScan: - " + window.echo);
//    
//    window.echo = function(str, callback) {
//        cordova.exec(callback, function(err) {
//            callback('Nothing to echo.');
//        }, "Chromecast", "echo", [str]);
//    };
//    console.log("Here is the result of an method: - " + window.echo.callback);
//
//
//    window.listDevices = function(callback) {
//      cordova.exec(callback, function(err) { callback('Cannot enumerate devices'); }, "Chromecast", "listDevices", []);
//    }
//    console.log("Here is the result of an method: - " + window.listDevices.callback);

}

//function successCallback {
//    console.log("Here is the result of an success: - ");
//}
//
//function failureCallback {
//    console.log("Here is the result of an failure: - ");
//}
