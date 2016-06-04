(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.CCWCVRControllerVisualizer = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.default = {
        samples: [{
                "accelerometer": { "enabled": true },
                "magnetometer": { "enabled": true },
                "gyroscope": { "enabled": true }
        }, {
                "accelerometer": { "enabled": true },
                "magnetometer": { "enabled": true },
                "gyroscope": { "enabled": true },
                "buttons": { "enabled": true }
        }, {
                "accelerometer": { "enabled": true },
                "magnetometer": { "enabled": true },
                "gyroscope": { "enabled": true },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true },
                "magnetometer": { "enabled": true },
                "gyroscope": { "enabled": true, "active": true },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true },
                "magnetometer": { "enabled": true },
                "gyroscope": { "enabled": true, "active": true },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true },
                "magnetometer": { "enabled": true },
                "gyroscope": { "enabled": true, "active": true, "x": "-3.0", "y": "0.8", "z": "-2.2" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "0.4", "y": "0.6", "z": "3.9" },
                "magnetometer": { "enabled": true },
                "gyroscope": { "enabled": true, "active": true, "x": "-3.0", "y": "0.8", "z": "-2.2" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "0.3", "y": "0.6", "z": "3.9" },
                "magnetometer": { "enabled": true },
                "gyroscope": { "enabled": true, "active": true, "x": "-3.0", "y": "0.8", "z": "-2.2" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "0.3", "y": "0.6", "z": "3.9" },
                "magnetometer": { "enabled": true, "active": true },
                "gyroscope": { "enabled": true, "active": true, "x": "-3.0", "y": "0.8", "z": "-2.2" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "0.3", "y": "0.6", "z": "3.9" },
                "magnetometer": { "enabled": true, "active": true, "x": "-35.9", "y": "3.2", "z": "50.4" },
                "gyroscope": { "enabled": true, "active": true, "x": "-3.0", "y": "0.8", "z": "-2.2" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "0.4", "y": "0.6", "z": "3.9" },
                "magnetometer": { "enabled": true, "active": true, "x": "-35.9", "y": "3.2", "z": "50.4" },
                "gyroscope": { "enabled": true, "active": true, "x": "-3.0", "y": "0.8", "z": "-2.2" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "0.4", "y": "0.6", "z": "3.9" },
                "magnetometer": { "enabled": true, "active": true, "x": "-36.0", "y": "3.2", "z": "53.0" },
                "gyroscope": { "enabled": true, "active": true, "x": "-3.0", "y": "0.8", "z": "-2.2" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "0.4", "y": "0.6", "z": "3.9" },
                "magnetometer": { "enabled": true, "active": true, "x": "-36.0", "y": "3.2", "z": "53.0" },
                "gyroscope": { "enabled": true, "active": true, "x": "-3.0", "y": "0.8", "z": "-2.2" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "0.4", "y": "0.6", "z": "3.9" },
                "magnetometer": { "enabled": true, "active": true, "x": "-35.7", "y": "3.0", "z": "51.4" },
                "gyroscope": { "enabled": true, "active": true, "x": "-3.0", "y": "0.8", "z": "-2.2" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "0.1", "y": "0.3", "z": "4.1" },
                "magnetometer": { "enabled": true, "active": true, "x": "-35.7", "y": "3.0", "z": "51.4" },
                "gyroscope": { "enabled": true, "active": true, "x": "-3.0", "y": "0.8", "z": "-2.2" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "0.1", "y": "0.3", "z": "4.1" },
                "magnetometer": { "enabled": true, "active": true, "x": "-35.7", "y": "3.0", "z": "51.4" },
                "gyroscope": { "enabled": true, "active": true, "x": "18.8", "y": "10.5", "z": "-128.0" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "0.1", "y": "0.3", "z": "4.1" },
                "magnetometer": { "enabled": true, "active": true, "x": "-34.2", "y": "2.2", "z": "53.0" },
                "gyroscope": { "enabled": true, "active": true, "x": "18.8", "y": "10.5", "z": "-128.0" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "0.1", "y": "0.6", "z": "3.8" },
                "magnetometer": { "enabled": true, "active": true, "x": "-34.2", "y": "2.2", "z": "53.0" },
                "gyroscope": { "enabled": true, "active": true, "x": "18.8", "y": "10.5", "z": "-128.0" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "0.1", "y": "0.6", "z": "3.8" },
                "magnetometer": { "enabled": true, "active": true, "x": "-31.8", "y": "1.3", "z": "51.6" },
                "gyroscope": { "enabled": true, "active": true, "x": "18.8", "y": "10.5", "z": "-128.0" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "0.7", "y": "0.7", "z": "3.8" },
                "magnetometer": { "enabled": true, "active": true, "x": "-31.8", "y": "1.3", "z": "51.6" },
                "gyroscope": { "enabled": true, "active": true, "x": "18.8", "y": "10.5", "z": "-128.0" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "0.7", "y": "0.7", "z": "3.8" },
                "magnetometer": { "enabled": true, "active": true, "x": "-30.5", "y": "1.2", "z": "56.3" },
                "gyroscope": { "enabled": true, "active": true, "x": "18.8", "y": "10.5", "z": "-128.0" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "0.9", "y": "0.9", "z": "3.8" },
                "magnetometer": { "enabled": true, "active": true, "x": "-30.5", "y": "1.2", "z": "56.3" },
                "gyroscope": { "enabled": true, "active": true, "x": "18.8", "y": "10.5", "z": "-128.0" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "0.9", "y": "0.9", "z": "3.8" },
                "magnetometer": { "enabled": true, "active": true, "x": "-30.1", "y": "1.4", "z": "57.2" },
                "gyroscope": { "enabled": true, "active": true, "x": "18.8", "y": "10.5", "z": "-128.0" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "0.9", "y": "0.9", "z": "3.8" },
                "magnetometer": { "enabled": true, "active": true, "x": "-30.1", "y": "1.4", "z": "57.2" },
                "gyroscope": { "enabled": true, "active": true, "x": "18.8", "y": "10.5", "z": "-128.0" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "0.9", "y": "0.9", "z": "3.8" },
                "magnetometer": { "enabled": true, "active": true, "x": "-30.3", "y": "1.4", "z": "58.7" },
                "gyroscope": { "enabled": true, "active": true, "x": "18.8", "y": "10.5", "z": "-128.0" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "0.9", "y": "0.8", "z": "3.9" },
                "magnetometer": { "enabled": true, "active": true, "x": "-30.3", "y": "1.4", "z": "58.7" },
                "gyroscope": { "enabled": true, "active": true, "x": "18.8", "y": "10.5", "z": "-128.0" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "0.9", "y": "0.8", "z": "3.9" },
                "magnetometer": { "enabled": true, "active": true, "x": "-30.3", "y": "1.4", "z": "58.7" },
                "gyroscope": { "enabled": true, "active": true, "x": "-26.2", "y": "15.1", "z": "86.2" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "0.9", "y": "0.8", "z": "3.9" },
                "magnetometer": { "enabled": true, "active": true, "x": "-31.6", "y": "1.3", "z": "59.1" },
                "gyroscope": { "enabled": true, "active": true, "x": "-26.2", "y": "15.1", "z": "86.2" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "0.4", "y": "0.3", "z": "3.9" },
                "magnetometer": { "enabled": true, "active": true, "x": "-31.6", "y": "1.3", "z": "59.1" },
                "gyroscope": { "enabled": true, "active": true, "x": "-26.2", "y": "15.1", "z": "86.2" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "0.4", "y": "0.3", "z": "3.9" },
                "magnetometer": { "enabled": true, "active": true, "x": "-32.5", "y": "1.3", "z": "48.0" },
                "gyroscope": { "enabled": true, "active": true, "x": "-26.2", "y": "15.1", "z": "86.2" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "0.3", "y": "-0.1", "z": "3.9" },
                "magnetometer": { "enabled": true, "active": true, "x": "-32.5", "y": "1.3", "z": "48.0" },
                "gyroscope": { "enabled": true, "active": true, "x": "-26.2", "y": "15.1", "z": "86.2" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "0.3", "y": "-0.1", "z": "3.9" },
                "magnetometer": { "enabled": true, "active": true, "x": "-32.8", "y": "0.9", "z": "52.9" },
                "gyroscope": { "enabled": true, "active": true, "x": "-26.2", "y": "15.1", "z": "86.2" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.3", "y": "-0.4", "z": "3.8" },
                "magnetometer": { "enabled": true, "active": true, "x": "-32.8", "y": "0.9", "z": "52.9" },
                "gyroscope": { "enabled": true, "active": true, "x": "-26.2", "y": "15.1", "z": "86.2" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.3", "y": "-0.4", "z": "3.8" },
                "magnetometer": { "enabled": true, "active": true, "x": "-33.7", "y": "1.3", "z": "51.4" },
                "gyroscope": { "enabled": true, "active": true, "x": "-26.2", "y": "15.1", "z": "86.2" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.4", "y": "-0.4", "z": "3.8" },
                "magnetometer": { "enabled": true, "active": true, "x": "-33.7", "y": "1.3", "z": "51.4" },
                "gyroscope": { "enabled": true, "active": true, "x": "-26.2", "y": "15.1", "z": "86.2" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.4", "y": "-0.4", "z": "3.8" },
                "magnetometer": { "enabled": true, "active": true, "x": "-34.7", "y": "2.3", "z": "52.5" },
                "gyroscope": { "enabled": true, "active": true, "x": "-26.2", "y": "15.1", "z": "86.2" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-1.9", "y": "-0.3", "z": "3.2" },
                "magnetometer": { "enabled": true, "active": true, "x": "-34.7", "y": "2.3", "z": "52.5" },
                "gyroscope": { "enabled": true, "active": true, "x": "-26.2", "y": "15.1", "z": "86.2" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-1.9", "y": "-0.3", "z": "3.2" },
                "magnetometer": { "enabled": true, "active": true, "x": "-34.7", "y": "2.3", "z": "52.5" },
                "gyroscope": { "enabled": true, "active": true, "x": "11.9", "y": "-74.1", "z": "-137.5" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-1.9", "y": "-0.3", "z": "3.2" },
                "magnetometer": { "enabled": true, "active": true, "x": "-35.8", "y": "2.6", "z": "38.1" },
                "gyroscope": { "enabled": true, "active": true, "x": "11.9", "y": "-74.1", "z": "-137.5" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "0.3", "y": "0.9", "z": "4.9" },
                "magnetometer": { "enabled": true, "active": true, "x": "-35.8", "y": "2.6", "z": "38.1" },
                "gyroscope": { "enabled": true, "active": true, "x": "11.9", "y": "-74.1", "z": "-137.5" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "0.3", "y": "0.9", "z": "4.9" },
                "magnetometer": { "enabled": true, "active": true, "x": "-35.3", "y": "1.0", "z": "45.0" },
                "gyroscope": { "enabled": true, "active": true, "x": "11.9", "y": "-74.1", "z": "-137.5" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.9", "y": "0.1", "z": "4.6" },
                "magnetometer": { "enabled": true, "active": true, "x": "-35.3", "y": "1.0", "z": "45.0" },
                "gyroscope": { "enabled": true, "active": true, "x": "11.9", "y": "-74.1", "z": "-137.5" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.9", "y": "0.1", "z": "4.6" },
                "magnetometer": { "enabled": true, "active": true, "x": "-30.5", "y": "-0.9", "z": "50.4" },
                "gyroscope": { "enabled": true, "active": true, "x": "11.9", "y": "-74.1", "z": "-137.5" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.3", "y": "-2.0", "z": "3.0" },
                "magnetometer": { "enabled": true, "active": true, "x": "-30.5", "y": "-0.9", "z": "50.4" },
                "gyroscope": { "enabled": true, "active": true, "x": "11.9", "y": "-74.1", "z": "-137.5" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.3", "y": "-2.0", "z": "3.0" },
                "magnetometer": { "enabled": true, "active": true, "x": "-23.9", "y": "-1.7", "z": "50.6" },
                "gyroscope": { "enabled": true, "active": true, "x": "11.9", "y": "-74.1", "z": "-137.5" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.1", "y": "-3.6", "z": "1.7" },
                "magnetometer": { "enabled": true, "active": true, "x": "-23.9", "y": "-1.7", "z": "50.6" },
                "gyroscope": { "enabled": true, "active": true, "x": "11.9", "y": "-74.1", "z": "-137.5" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.1", "y": "-3.6", "z": "1.7" },
                "magnetometer": { "enabled": true, "active": true, "x": "-20.4", "y": "-1.8", "z": "48.0" },
                "gyroscope": { "enabled": true, "active": true, "x": "11.9", "y": "-74.1", "z": "-137.5" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "0.8", "y": "-3.7", "z": "0.3" },
                "magnetometer": { "enabled": true, "active": true, "x": "-20.4", "y": "-1.8", "z": "48.0" },
                "gyroscope": { "enabled": true, "active": true, "x": "11.9", "y": "-74.1", "z": "-137.5" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "0.8", "y": "-3.7", "z": "0.3" },
                "magnetometer": { "enabled": true, "active": true, "x": "-20.4", "y": "-1.8", "z": "48.0" },
                "gyroscope": { "enabled": true, "active": true, "x": "3.3", "y": "2.2", "z": "4.3" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "0.8", "y": "-3.7", "z": "0.3" },
                "magnetometer": { "enabled": true, "active": true, "x": "-19.4", "y": "-1.3", "z": "41.8" },
                "gyroscope": { "enabled": true, "active": true, "x": "3.3", "y": "2.2", "z": "4.3" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "0.8", "y": "-3.4", "z": "-0.6" },
                "magnetometer": { "enabled": true, "active": true, "x": "-19.4", "y": "-1.3", "z": "41.8" },
                "gyroscope": { "enabled": true, "active": true, "x": "3.3", "y": "2.2", "z": "4.3" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "0.8", "y": "-3.4", "z": "-0.6" },
                "magnetometer": { "enabled": true, "active": true, "x": "-19.3", "y": "-1.3", "z": "43.7" },
                "gyroscope": { "enabled": true, "active": true, "x": "3.3", "y": "2.2", "z": "4.3" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.1", "y": "-3.6", "z": "1.2" },
                "magnetometer": { "enabled": true, "active": true, "x": "-19.3", "y": "-1.3", "z": "43.7" },
                "gyroscope": { "enabled": true, "active": true, "x": "3.3", "y": "2.2", "z": "4.3" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.1", "y": "-3.6", "z": "1.2" },
                "magnetometer": { "enabled": true, "active": true, "x": "-21.2", "y": "-2.7", "z": "52.2" },
                "gyroscope": { "enabled": true, "active": true, "x": "3.3", "y": "2.2", "z": "4.3" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.4", "y": "-3.1", "z": "3.1" },
                "magnetometer": { "enabled": true, "active": true, "x": "-21.2", "y": "-2.7", "z": "52.2" },
                "gyroscope": { "enabled": true, "active": true, "x": "3.3", "y": "2.2", "z": "4.3" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.4", "y": "-3.1", "z": "3.1" },
                "magnetometer": { "enabled": true, "active": true, "x": "-26.1", "y": "-2.4", "z": "54.8" },
                "gyroscope": { "enabled": true, "active": true, "x": "3.3", "y": "2.2", "z": "4.3" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.8", "y": "-1.6", "z": "3.8" },
                "magnetometer": { "enabled": true, "active": true, "x": "-26.1", "y": "-2.4", "z": "54.8" },
                "gyroscope": { "enabled": true, "active": true, "x": "3.3", "y": "2.2", "z": "4.3" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.8", "y": "-1.6", "z": "3.8" },
                "magnetometer": { "enabled": true, "active": true, "x": "-29.1", "y": "-2.1", "z": "46.6" },
                "gyroscope": { "enabled": true, "active": true, "x": "3.3", "y": "2.2", "z": "4.3" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.8", "y": "-0.5", "z": "3.9" },
                "magnetometer": { "enabled": true, "active": true, "x": "-29.1", "y": "-2.1", "z": "46.6" },
                "gyroscope": { "enabled": true, "active": true, "x": "3.3", "y": "2.2", "z": "4.3" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.8", "y": "-0.5", "z": "3.9" },
                "magnetometer": { "enabled": true, "active": true, "x": "-29.1", "y": "-2.1", "z": "46.6" },
                "gyroscope": { "enabled": true, "active": true, "x": "-4.3", "y": "-29.2", "z": "7.7" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.8", "y": "-0.5", "z": "3.9" },
                "magnetometer": { "enabled": true, "active": true, "x": "-31.3", "y": "-1.7", "z": "47.7" },
                "gyroscope": { "enabled": true, "active": true, "x": "-4.3", "y": "-29.2", "z": "7.7" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.9", "y": "0.0", "z": "3.6" },
                "magnetometer": { "enabled": true, "active": true, "x": "-31.3", "y": "-1.7", "z": "47.7" },
                "gyroscope": { "enabled": true, "active": true, "x": "-4.3", "y": "-29.2", "z": "7.7" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.9", "y": "0.0", "z": "3.6" },
                "magnetometer": { "enabled": true, "active": true, "x": "-32.4", "y": "-1.2", "z": "50.7" },
                "gyroscope": { "enabled": true, "active": true, "x": "-4.3", "y": "-29.2", "z": "7.7" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.8", "y": "0.6", "z": "4.5" },
                "magnetometer": { "enabled": true, "active": true, "x": "-32.4", "y": "-1.2", "z": "50.7" },
                "gyroscope": { "enabled": true, "active": true, "x": "-4.3", "y": "-29.2", "z": "7.7" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.8", "y": "0.6", "z": "4.5" },
                "magnetometer": { "enabled": true, "active": true, "x": "-32.4", "y": "-1.1", "z": "47.9" },
                "gyroscope": { "enabled": true, "active": true, "x": "-4.3", "y": "-29.2", "z": "7.7" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.3", "y": "0.1", "z": "3.8" },
                "magnetometer": { "enabled": true, "active": true, "x": "-32.4", "y": "-1.1", "z": "47.9" },
                "gyroscope": { "enabled": true, "active": true, "x": "-4.3", "y": "-29.2", "z": "7.7" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.3", "y": "0.1", "z": "3.8" },
                "magnetometer": { "enabled": true, "active": true, "x": "-32.7", "y": "-0.9", "z": "57.8" },
                "gyroscope": { "enabled": true, "active": true, "x": "-4.3", "y": "-29.2", "z": "7.7" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-1.2", "y": "-0.2", "z": "3.4" },
                "magnetometer": { "enabled": true, "active": true, "x": "-32.7", "y": "-0.9", "z": "57.8" },
                "gyroscope": { "enabled": true, "active": true, "x": "-4.3", "y": "-29.2", "z": "7.7" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-1.2", "y": "-0.2", "z": "3.4" },
                "magnetometer": { "enabled": true, "active": true, "x": "-34.3", "y": "0.5", "z": "43.1" },
                "gyroscope": { "enabled": true, "active": true, "x": "-4.3", "y": "-29.2", "z": "7.7" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-1.9", "y": "-0.1", "z": "3.6" },
                "magnetometer": { "enabled": true, "active": true, "x": "-34.3", "y": "0.5", "z": "43.1" },
                "gyroscope": { "enabled": true, "active": true, "x": "-4.3", "y": "-29.2", "z": "7.7" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-1.9", "y": "-0.1", "z": "3.6" },
                "magnetometer": { "enabled": true, "active": true, "x": "-34.3", "y": "0.5", "z": "43.1" },
                "gyroscope": { "enabled": true, "active": true, "x": "-11.5", "y": "-17.7", "z": "-45.5" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-1.9", "y": "-0.1", "z": "3.6" },
                "magnetometer": { "enabled": true, "active": true, "x": "-35.3", "y": "1.6", "z": "50.6" },
                "gyroscope": { "enabled": true, "active": true, "x": "-11.5", "y": "-17.7", "z": "-45.5" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-1.9", "y": "0.2", "z": "4.6" },
                "magnetometer": { "enabled": true, "active": true, "x": "-35.3", "y": "1.6", "z": "50.6" },
                "gyroscope": { "enabled": true, "active": true, "x": "-11.5", "y": "-17.7", "z": "-45.5" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-1.9", "y": "0.2", "z": "4.6" },
                "magnetometer": { "enabled": true, "active": true, "x": "-34.3", "y": "0.9", "z": "51.8" },
                "gyroscope": { "enabled": true, "active": true, "x": "-11.5", "y": "-17.7", "z": "-45.5" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.1", "y": "-0.6", "z": "3.1" },
                "magnetometer": { "enabled": true, "active": true, "x": "-34.3", "y": "0.9", "z": "51.8" },
                "gyroscope": { "enabled": true, "active": true, "x": "-11.5", "y": "-17.7", "z": "-45.5" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.1", "y": "-0.6", "z": "3.1" },
                "magnetometer": { "enabled": true, "active": true, "x": "-33.6", "y": "0.4", "z": "48.7" },
                "gyroscope": { "enabled": true, "active": true, "x": "-11.5", "y": "-17.7", "z": "-45.5" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.9", "y": "0.5", "z": "3.4" },
                "magnetometer": { "enabled": true, "active": true, "x": "-33.6", "y": "0.4", "z": "48.7" },
                "gyroscope": { "enabled": true, "active": true, "x": "-11.5", "y": "-17.7", "z": "-45.5" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.9", "y": "0.5", "z": "3.4" },
                "magnetometer": { "enabled": true, "active": true, "x": "-35.9", "y": "0.5", "z": "49.9" },
                "gyroscope": { "enabled": true, "active": true, "x": "-11.5", "y": "-17.7", "z": "-45.5" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-1.0", "y": "2.2", "z": "3.5" },
                "magnetometer": { "enabled": true, "active": true, "x": "-35.9", "y": "0.5", "z": "49.9" },
                "gyroscope": { "enabled": true, "active": true, "x": "-11.5", "y": "-17.7", "z": "-45.5" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-1.0", "y": "2.2", "z": "3.5" },
                "magnetometer": { "enabled": true, "active": true, "x": "-37.7", "y": "0.5", "z": "39.9" },
                "gyroscope": { "enabled": true, "active": true, "x": "-11.5", "y": "-17.7", "z": "-45.5" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-1.6", "y": "2.9", "z": "3.1" },
                "magnetometer": { "enabled": true, "active": true, "x": "-37.7", "y": "0.5", "z": "39.9" },
                "gyroscope": { "enabled": true, "active": true, "x": "-11.5", "y": "-17.7", "z": "-45.5" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-1.6", "y": "2.9", "z": "3.1" },
                "magnetometer": { "enabled": true, "active": true, "x": "-37.7", "y": "0.5", "z": "39.9" },
                "gyroscope": { "enabled": true, "active": true, "x": "22.1", "y": "50.8", "z": "6.1" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-1.6", "y": "2.9", "z": "3.1" },
                "magnetometer": { "enabled": true, "active": true, "x": "-38.2", "y": "0.2", "z": "43.5" },
                "gyroscope": { "enabled": true, "active": true, "x": "22.1", "y": "50.8", "z": "6.1" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-1.5", "y": "3.0", "z": "3.2" },
                "magnetometer": { "enabled": true, "active": true, "x": "-38.2", "y": "0.2", "z": "43.5" },
                "gyroscope": { "enabled": true, "active": true, "x": "22.1", "y": "50.8", "z": "6.1" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-1.5", "y": "3.0", "z": "3.2" },
                "magnetometer": { "enabled": true, "active": true, "x": "-36.3", "y": "0.1", "z": "51.2" },
                "gyroscope": { "enabled": true, "active": true, "x": "22.1", "y": "50.8", "z": "6.1" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.5", "y": "1.1", "z": "3.4" },
                "magnetometer": { "enabled": true, "active": true, "x": "-36.3", "y": "0.1", "z": "51.2" },
                "gyroscope": { "enabled": true, "active": true, "x": "22.1", "y": "50.8", "z": "6.1" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.5", "y": "1.1", "z": "3.4" },
                "magnetometer": { "enabled": true, "active": true, "x": "-34.3", "y": "-0.4", "z": "46.5" },
                "gyroscope": { "enabled": true, "active": true, "x": "22.1", "y": "50.8", "z": "6.1" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.4", "y": "-0.1", "z": "2.8" },
                "magnetometer": { "enabled": true, "active": true, "x": "-34.3", "y": "-0.4", "z": "46.5" },
                "gyroscope": { "enabled": true, "active": true, "x": "22.1", "y": "50.8", "z": "6.1" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.4", "y": "-0.1", "z": "2.8" },
                "magnetometer": { "enabled": true, "active": true, "x": "-32.5", "y": "-0.7", "z": "53.3" },
                "gyroscope": { "enabled": true, "active": true, "x": "22.1", "y": "50.8", "z": "6.1" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.5", "y": "0.2", "z": "3.9" },
                "magnetometer": { "enabled": true, "active": true, "x": "-32.5", "y": "-0.7", "z": "53.3" },
                "gyroscope": { "enabled": true, "active": true, "x": "22.1", "y": "50.8", "z": "6.1" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.5", "y": "0.2", "z": "3.9" },
                "magnetometer": { "enabled": true, "active": true, "x": "-33.0", "y": "-0.5", "z": "49.9" },
                "gyroscope": { "enabled": true, "active": true, "x": "22.1", "y": "50.8", "z": "6.1" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.8", "y": "0.2", "z": "4.1" },
                "magnetometer": { "enabled": true, "active": true, "x": "-33.0", "y": "-0.5", "z": "49.9" },
                "gyroscope": { "enabled": true, "active": true, "x": "22.1", "y": "50.8", "z": "6.1" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.8", "y": "0.2", "z": "4.1" },
                "magnetometer": { "enabled": true, "active": true, "x": "-33.0", "y": "-0.5", "z": "49.9" },
                "gyroscope": { "enabled": true, "active": true, "x": "119.0", "y": "6.6", "z": "-0.6" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.8", "y": "0.2", "z": "4.1" },
                "magnetometer": { "enabled": true, "active": true, "x": "-33.6", "y": "2.3", "z": "48.4" },
                "gyroscope": { "enabled": true, "active": true, "x": "119.0", "y": "6.6", "z": "-0.6" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "1.6", "y": "0.1", "z": "4.0" },
                "magnetometer": { "enabled": true, "active": true, "x": "-33.6", "y": "2.3", "z": "48.4" },
                "gyroscope": { "enabled": true, "active": true, "x": "119.0", "y": "6.6", "z": "-0.6" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "1.6", "y": "0.1", "z": "4.0" },
                "magnetometer": { "enabled": true, "active": true, "x": "-34.3", "y": "6.0", "z": "47.0" },
                "gyroscope": { "enabled": true, "active": true, "x": "119.0", "y": "6.6", "z": "-0.6" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "2.5", "y": "0.0", "z": "3.0" },
                "magnetometer": { "enabled": true, "active": true, "x": "-34.3", "y": "6.0", "z": "47.0" },
                "gyroscope": { "enabled": true, "active": true, "x": "119.0", "y": "6.6", "z": "-0.6" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "2.5", "y": "0.0", "z": "3.0" },
                "magnetometer": { "enabled": true, "active": true, "x": "-35.0", "y": "9.4", "z": "46.1" },
                "gyroscope": { "enabled": true, "active": true, "x": "119.0", "y": "6.6", "z": "-0.6" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "3.8", "y": "0.1", "z": "1.9" },
                "magnetometer": { "enabled": true, "active": true, "x": "-35.0", "y": "9.4", "z": "46.1" },
                "gyroscope": { "enabled": true, "active": true, "x": "119.0", "y": "6.6", "z": "-0.6" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "3.8", "y": "0.1", "z": "1.9" },
                "magnetometer": { "enabled": true, "active": true, "x": "-36.1", "y": "11.8", "z": "37.3" },
                "gyroscope": { "enabled": true, "active": true, "x": "119.0", "y": "6.6", "z": "-0.6" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "3.6", "y": "-0.1", "z": "1.3" },
                "magnetometer": { "enabled": true, "active": true, "x": "-36.1", "y": "11.8", "z": "37.3" },
                "gyroscope": { "enabled": true, "active": true, "x": "119.0", "y": "6.6", "z": "-0.6" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "3.6", "y": "-0.1", "z": "1.3" },
                "magnetometer": { "enabled": true, "active": true, "x": "-35.9", "y": "11.5", "z": "39.8" },
                "gyroscope": { "enabled": true, "active": true, "x": "119.0", "y": "6.6", "z": "-0.6" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "2.6", "y": "0.0", "z": "2.3" },
                "magnetometer": { "enabled": true, "active": true, "x": "-35.9", "y": "11.5", "z": "39.8" },
                "gyroscope": { "enabled": true, "active": true, "x": "119.0", "y": "6.6", "z": "-0.6" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "2.6", "y": "0.0", "z": "2.3" },
                "magnetometer": { "enabled": true, "active": true, "x": "-35.9", "y": "11.5", "z": "39.8" },
                "gyroscope": { "enabled": true, "active": true, "x": "-181.9", "y": "14.5", "z": "-31.0" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "2.6", "y": "0.0", "z": "2.3" },
                "magnetometer": { "enabled": true, "active": true, "x": "-34.5", "y": "6.1", "z": "45.7" },
                "gyroscope": { "enabled": true, "active": true, "x": "-181.9", "y": "14.5", "z": "-31.0" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.2", "y": "0.1", "z": "4.2" },
                "magnetometer": { "enabled": true, "active": true, "x": "-34.5", "y": "6.1", "z": "45.7" },
                "gyroscope": { "enabled": true, "active": true, "x": "-181.9", "y": "14.5", "z": "-31.0" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.2", "y": "0.1", "z": "4.2" },
                "magnetometer": { "enabled": true, "active": true, "x": "-31.7", "y": "-0.2", "z": "46.7" },
                "gyroscope": { "enabled": true, "active": true, "x": "-181.9", "y": "14.5", "z": "-31.0" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.8", "y": "0.0", "z": "4.3" },
                "magnetometer": { "enabled": true, "active": true, "x": "-31.7", "y": "-0.2", "z": "46.7" },
                "gyroscope": { "enabled": true, "active": true, "x": "-181.9", "y": "14.5", "z": "-31.0" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.8", "y": "0.0", "z": "4.3" },
                "magnetometer": { "enabled": true, "active": true, "x": "-31.1", "y": "-1.5", "z": "50.7" },
                "gyroscope": { "enabled": true, "active": true, "x": "-181.9", "y": "14.5", "z": "-31.0" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.9", "y": "-0.4", "z": "3.1" },
                "magnetometer": { "enabled": true, "active": true, "x": "-31.1", "y": "-1.5", "z": "50.7" },
                "gyroscope": { "enabled": true, "active": true, "x": "-181.9", "y": "14.5", "z": "-31.0" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-0.9", "y": "-0.4", "z": "3.1" },
                "magnetometer": { "enabled": true, "active": true, "x": "-29.3", "y": "-3.7", "z": "47.6" },
                "gyroscope": { "enabled": true, "active": true, "x": "-181.9", "y": "14.5", "z": "-31.0" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-1.9", "y": "-0.4", "z": "3.1" },
                "magnetometer": { "enabled": true, "active": true, "x": "-29.3", "y": "-3.7", "z": "47.6" },
                "gyroscope": { "enabled": true, "active": true, "x": "-181.9", "y": "14.5", "z": "-31.0" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-1.9", "y": "-0.4", "z": "3.1" },
                "magnetometer": { "enabled": true, "active": true, "x": "-29.8", "y": "-4.8", "z": "50.0" },
                "gyroscope": { "enabled": true, "active": true, "x": "-181.9", "y": "14.5", "z": "-31.0" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-3.5", "y": "-0.3", "z": "2.1" },
                "magnetometer": { "enabled": true, "active": true, "x": "-29.8", "y": "-4.8", "z": "50.0" },
                "gyroscope": { "enabled": true, "active": true, "x": "-181.9", "y": "14.5", "z": "-31.0" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-3.5", "y": "-0.3", "z": "2.1" },
                "magnetometer": { "enabled": true, "active": true, "x": "-29.8", "y": "-4.8", "z": "50.0" },
                "gyroscope": { "enabled": true, "active": true, "x": "-25.8", "y": "10.3", "z": "12.2" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-3.5", "y": "-0.3", "z": "2.1" },
                "magnetometer": { "enabled": true, "active": true, "x": "-31.3", "y": "-5.0", "z": "49.4" },
                "gyroscope": { "enabled": true, "active": true, "x": "-25.8", "y": "10.3", "z": "12.2" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-3.9", "y": "-0.3", "z": "1.6" },
                "magnetometer": { "enabled": true, "active": true, "x": "-31.3", "y": "-5.0", "z": "49.4" },
                "gyroscope": { "enabled": true, "active": true, "x": "-25.8", "y": "10.3", "z": "12.2" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-3.9", "y": "-0.3", "z": "1.6" },
                "magnetometer": { "enabled": true, "active": true, "x": "-31.5", "y": "-4.9", "z": "42.5" },
                "gyroscope": { "enabled": true, "active": true, "x": "-25.8", "y": "10.3", "z": "12.2" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-3.6", "y": "-0.1", "z": "1.8" },
                "magnetometer": { "enabled": true, "active": true, "x": "-31.5", "y": "-4.9", "z": "42.5" },
                "gyroscope": { "enabled": true, "active": true, "x": "-25.8", "y": "10.3", "z": "12.2" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-3.6", "y": "-0.1", "z": "1.8" },
                "magnetometer": { "enabled": true, "active": true, "x": "-31.6", "y": "-4.9", "z": "42.0" },
                "gyroscope": { "enabled": true, "active": true, "x": "-25.8", "y": "10.3", "z": "12.2" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-3.1", "y": "-0.3", "z": "2.2" },
                "magnetometer": { "enabled": true, "active": true, "x": "-31.6", "y": "-4.9", "z": "42.0" },
                "gyroscope": { "enabled": true, "active": true, "x": "-25.8", "y": "10.3", "z": "12.2" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-3.1", "y": "-0.3", "z": "2.2" },
                "magnetometer": { "enabled": true, "active": true, "x": "-31.0", "y": "-4.0", "z": "42.8" },
                "gyroscope": { "enabled": true, "active": true, "x": "-25.8", "y": "10.3", "z": "12.2" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-2.9", "y": "-0.3", "z": "3.6" },
                "magnetometer": { "enabled": true, "active": true, "x": "-31.0", "y": "-4.0", "z": "42.8" },
                "gyroscope": { "enabled": true, "active": true, "x": "-25.8", "y": "10.3", "z": "12.2" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-2.9", "y": "-0.3", "z": "3.6" },
                "magnetometer": { "enabled": true, "active": true, "x": "-31.4", "y": "-3.1", "z": "46.9" },
                "gyroscope": { "enabled": true, "active": true, "x": "-25.8", "y": "10.3", "z": "12.2" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-2.4", "y": "-0.5", "z": "3.9" },
                "magnetometer": { "enabled": true, "active": true, "x": "-31.4", "y": "-3.1", "z": "46.9" },
                "gyroscope": { "enabled": true, "active": true, "x": "-25.8", "y": "10.3", "z": "12.2" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-2.4", "y": "-0.5", "z": "3.9" },
                "magnetometer": { "enabled": true, "active": true, "x": "-31.4", "y": "-3.1", "z": "46.9" },
                "gyroscope": { "enabled": true, "active": true, "x": "7.5", "y": "-20.1", "z": "-16.3" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-2.4", "y": "-0.5", "z": "3.9" },
                "magnetometer": { "enabled": true, "active": true, "x": "-32.5", "y": "-1.4", "z": "49.3" },
                "gyroscope": { "enabled": true, "active": true, "x": "7.5", "y": "-20.1", "z": "-16.3" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-1.0", "y": "-0.2", "z": "3.8" },
                "magnetometer": { "enabled": true, "active": true, "x": "-32.5", "y": "-1.4", "z": "49.3" },
                "gyroscope": { "enabled": true, "active": true, "x": "7.5", "y": "-20.1", "z": "-16.3" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-1.0", "y": "-0.2", "z": "3.8" },
                "magnetometer": { "enabled": true, "active": true, "x": "-32.5", "y": "-1.3", "z": "50.5" },
                "gyroscope": { "enabled": true, "active": true, "x": "7.5", "y": "-20.1", "z": "-16.3" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-1.1", "y": "0.2", "z": "3.9" },
                "magnetometer": { "enabled": true, "active": true, "x": "-32.5", "y": "-1.3", "z": "50.5" },
                "gyroscope": { "enabled": true, "active": true, "x": "7.5", "y": "-20.1", "z": "-16.3" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-1.1", "y": "0.2", "z": "3.9" },
                "magnetometer": { "enabled": true, "active": true, "x": "-33.2", "y": "-1.1", "z": "46.0" },
                "gyroscope": { "enabled": true, "active": true, "x": "7.5", "y": "-20.1", "z": "-16.3" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-1.3", "y": "0.1", "z": "3.8" },
                "magnetometer": { "enabled": true, "active": true, "x": "-33.2", "y": "-1.1", "z": "46.0" },
                "gyroscope": { "enabled": true, "active": true, "x": "7.5", "y": "-20.1", "z": "-16.3" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-1.3", "y": "0.1", "z": "3.8" },
                "magnetometer": { "enabled": true, "active": true, "x": "-34.2", "y": "-0.3", "z": "49.1" },
                "gyroscope": { "enabled": true, "active": true, "x": "7.5", "y": "-20.1", "z": "-16.3" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-1.1", "y": "0.2", "z": "3.9" },
                "magnetometer": { "enabled": true, "active": true, "x": "-34.2", "y": "-0.3", "z": "49.1" },
                "gyroscope": { "enabled": true, "active": true, "x": "7.5", "y": "-20.1", "z": "-16.3" },
                "buttons": { "enabled": true, "active": true }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-1.1", "y": "0.2", "z": "3.9" },
                "magnetometer": { "enabled": true, "active": true, "x": "-34.2", "y": "-0.3", "z": "49.1" },
                "gyroscope": { "enabled": true, "active": true, "x": "7.5", "y": "-20.1", "z": "-16.3" },
                "buttons": { "left": false, "right": false }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-1.1", "y": "0.2", "z": "3.9" },
                "magnetometer": { "enabled": true, "active": true, "x": "-34.1", "y": "-0.1", "z": "53.7" },
                "gyroscope": { "enabled": true, "active": true, "x": "7.5", "y": "-20.1", "z": "-16.3" },
                "buttons": { "left": false, "right": false }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-1.6", "y": "-0.1", "z": "3.6" },
                "magnetometer": { "enabled": true, "active": true, "x": "-34.1", "y": "-0.1", "z": "53.7" },
                "gyroscope": { "enabled": true, "active": true, "x": "7.5", "y": "-20.1", "z": "-16.3" },
                "buttons": { "left": false, "right": false }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-1.6", "y": "-0.1", "z": "3.6" },
                "magnetometer": { "enabled": true, "active": true, "x": "-34.1", "y": "-0.1", "z": "53.7" },
                "gyroscope": { "enabled": true, "active": true, "x": "6.5", "y": "6.0", "z": "-3.6" },
                "buttons": { "left": false, "right": false }
        }, {
                "accelerometer": { "enabled": true, "active": true, "x": "-1.6", "y": "-0.1", "z": "3.6" },
                "magnetometer": { "enabled": true, "active": true, "x": "-33.6", "y": "0.0", "z": "47.0" },
                "gyroscope": { "enabled": true, "active": true, "x": "6.5", "y": "6.0", "z": "-3.6" },
                "buttons": { "left": false, "right": false }
        }]
};

},{}],2:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _tisensortag = require('./devices/tisensortag.es6');

var _tisensortag2 = _interopRequireDefault(_tisensortag);

var _simulator = require('./devices/simulator.es6');

var _simulator2 = _interopRequireDefault(_simulator);

var _laptop = require('./devices/laptop.es6');

var _laptop2 = _interopRequireDefault(_laptop);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * Sensor tag visualizer component
 */

var _class = function (_HTMLElement) {
    _inherits(_class, _HTMLElement);

    function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
    }

    _createClass(_class, [{
        key: 'setProperties',

        /**
         * initialize default class properties
         * @private
         */
        value: function setProperties() {
            /**
             * sensor
             * @type {Device}
             */
            this._sensor = null;

            /**
             * sensor type
             * @type {String}
             */
            this._sensorType = 'none';

            /**
             * sample data for simulator
             * @type {String}
             */
            this._sampleData = '';

            /**
             * 3D cursor (cube thingy) to control with sensor input
             * @type {null}
             */
            this.cursor = null;

            /**
             * three renderer
             * @type {null}
             */
            this.renderer = null;

            /**
             * three scene
             * @type {null}
             */
            this.scene = null;

            /**
             * three camera
             * @type {null}
             */
            this.camera = null;
        }

        /**
         * on sensor update
         * @param data
         */

    }, {
        key: 'onSensorUpdate',
        value: function onSensorUpdate(eventtype, data) {
            if (data.sensors.orientation) {
                this.cursor.quaternion.fromArray(data.sensors.orientation);
            }
        }

        /**
         * connect to sensortag
         */

    }, {
        key: 'connect',
        value: function connect(sensor) {
            var _this2 = this;

            if (sensor) {
                this._sensor = sensor;
            } else {
                switch (this._sensorType) {
                    case 'simulator':
                        if (this._sampleData) {
                            var xobj = new XMLHttpRequest();
                            xobj.open('GET', this._sampleData, true);
                            xobj.onreadystatechange = function () {
                                if (xobj.readyState == 4 && xobj.status == '200') {
                                    _this2._sensor = new _simulator2.default(JSON.parse(xobj.responseText).samples);
                                    _this2._sensor.connect(function (eventtype, data) {
                                        return _this2.onSensorUpdate(eventtype, data);
                                    });
                                }
                            };
                            xobj.send(null);
                        } else {
                            throw new Error('Simulator requires using sampledata parameter to pass in a URI with samples');
                        }
                        break;

                    case 'laptop':
                        this._sensor = new _laptop2.default();
                        this._sensor.connect(function (eventtype, data) {
                            return _this2.onSensorUpdate(eventtype, data);
                        });
                        break;

                    case 'tisensortag':
                        this._sensor = new _tisensortag2.default();
                        this._sensor.connect(function (eventtype, data) {
                            return _this2.onSensorUpdate(eventtype, data);
                        });
                        break;

                    case 'webvr':
                        navigator.getVRDisplays().then(function (displays) {
                            _this2.display = displays[0];
                        });
                        break;
                }
            }
        }

        /**
         * parse attributes on element
         * @private
         */

    }, {
        key: 'parseAttributes',
        value: function parseAttributes() {
            if (this.hasAttribute('sensor')) {
                this._sensorType = this.getAttribute('sensor');
            }

            if (this.hasAttribute('sampledata')) {
                this._sampleData = this.getAttribute('sampledata');
            }
        }
    }, {
        key: 'createdCallback',

        /**
         * element created callback
         * @private
         */
        value: function createdCallback() {
            this.setProperties();
            this.parseAttributes();
        }
    }, {
        key: 'attachedCallback',

        /**
         * element attached callback
         * @private
         */
        value: function attachedCallback() {
            var _this3 = this;

            var template = this.owner.querySelector('template');
            var clone = template.content.cloneNode(true);
            this.root = this.createShadowRoot();
            this.root.appendChild(clone);

            this.dom = {};
            this.dom.scene = this.root.querySelector('.threecontainer');
            setTimeout(function () {
                _this3.init3DScene();
                _this3.render();
            }, 100);
        }

        /**
         * render
         */

    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            if (this.display) {
                var orientation = this.display.getPose().orientation;
                this.cursor.quaternion.fromArray(orientation);
            }

            this.renderer.render(this.scene, this.camera);
            window.requestAnimationFrame(function (e) {
                return _this4.render();
            });
        }

        /**
         * initialize 3D scene
         */

    }, {
        key: 'init3DScene',
        value: function init3DScene() {
            this.scene = new THREE.Scene();
            var SCREEN_WIDTH = this.offsetWidth,
                SCREEN_HEIGHT = this.offsetHeight;
            var VIEW_ANGLE = 45,
                ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT,
                NEAR = 0.1,
                FAR = 20000;
            this.camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
            this.scene.add(this.camera);
            this.camera.position.set(0, 150, 400);
            this.camera.lookAt(this.scene.position);
            this.renderer = new THREE.WebGLRenderer({ antialias: true });
            this.renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
            this.dom.scene.appendChild(this.renderer.domElement);

            var light = new THREE.PointLight(0xffffff);
            light.position.set(100, 250, 100);
            this.scene.add(light);

            // SKYBOX
            var skyBoxGeometry = new THREE.CubeGeometry(10000, 10000, 10000);
            var skyBoxMaterial = new THREE.MeshBasicMaterial({ color: 0x9999ff, side: THREE.BackSide });
            var skyBox = new THREE.Mesh(skyBoxGeometry, skyBoxMaterial);
            this.scene.add(skyBox);

            var geom = new THREE.CubeGeometry(30, 32, 16);
            var material = new THREE.MeshLambertMaterial({ color: 0xff0000 });
            this.cursor = new THREE.Mesh(geom, material);
            this.cursor.position.set(40, 40, 40);
            this.scene.add(this.cursor);

            var axes = new THREE.AxisHelper(50);
            //axes.position = this.cursor.position;
            this.scene.add(axes);

            var gridXZ = new THREE.GridHelper(200, 10);
            this.scene.add(gridXZ);

            // direction (normalized), origin, length, color(hex)
            var origin = new THREE.Vector3(50, 100, 50);
            var terminus = new THREE.Vector3(75, 75, 75);
            var direction = new THREE.Vector3().subVectors(terminus, origin).normalize();
            var arrow = new THREE.ArrowHelper(direction, origin, 50, 0x884400);
            this.scene.add(arrow);
        }

        /**
         * element detached callback
         * @private
         */

    }, {
        key: 'detachedCallback',
        value: function detachedCallback() {}
    }, {
        key: 'attributeChangedCallback',

        /**
         * attributeChangedCallback
         * @private
         * @param {String} attr attribute changed
         * @param {*} oldVal old value
         * @param {*} newVal new value
         */
        value: function attributeChangedCallback(attr, oldVal, newVal) {}
    }]);

    return _class;
}(HTMLElement);

exports.default = _class;

},{"./devices/laptop.es6":4,"./devices/simulator.es6":5,"./devices/tisensortag.es6":6}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _fusionPoseSensor = require('../sensorfusion/fusion-pose-sensor.es6');

var _fusionPoseSensor2 = _interopRequireDefault(_fusionPoseSensor);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var _class = function () {
    function _class() {
        _classCallCheck(this, _class);

        /**
         * sensor fusion
         */
        this._sensorfusion = new _fusionPoseSensor2.default();

        /**
         * if already connected
         * @type {Boolean}
         */
        this._connected = false;

        /**
         * event listeners
         * @type {Array}
         * @private
         */
        this._eventListeners = [];
    }

    /**
     * connect to sensortag
     * @param cb callback
     */

    _createClass(_class, [{
        key: 'connect',
        value: function connect(cb) {
            this._eventListeners.push(cb);
            if (this._connected) {
                return;
            }
        }

        /**
         * disconnect
         * @param cb
         */

    }, {
        key: 'disconnect',
        value: function disconnect(cb) {
            for (var c = 0; c < this._eventListeners.length; c++) {
                if (this._eventListeners[c] === cb) {
                    this._eventListeners.splice(c, 1);
                }
            }
        }

        /**
         * update listeners with data
         * @param data
         */

    }, {
        key: 'update',
        value: function update(data) {
            this._sensorfusion.updateSensorData(data);
            data.sensors.orientation = this._sensorfusion.getOrientation();
            for (var c = 0; c < this._eventListeners.length; c++) {
                this._eventListeners[c]('motionupdate', data);
            }
        }
    }]);

    return _class;
}();

exports.default = _class;

},{"../sensorfusion/fusion-pose-sensor.es6":12}],4:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);if (parent === null) {
            return undefined;
        } else {
            return get(parent, property, receiver);
        }
    } else if ("value" in desc) {
        return desc.value;
    } else {
        var getter = desc.get;if (getter === undefined) {
            return undefined;
        }return getter.call(receiver);
    }
};

var _device = require('./device.es6');

var _device2 = _interopRequireDefault(_device);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var _class = function (_Device) {
    _inherits(_class, _Device);

    function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this));
    }

    /**
     * connect to sensortag
     * @param cb callback
     */

    _createClass(_class, [{
        key: 'connect',
        value: function connect(cb) {
            var _this2 = this;

            _get(Object.getPrototypeOf(_class.prototype), 'connect', this).call(this, cb);
            window.addEventListener('devicemotion', function (event) {
                return _this2.onMotionEvent(event);
            });
        }

        /**
         * disconnect
         * @param cb
         */

    }, {
        key: 'disconnect',
        value: function disconnect(cb) {
            var _this3 = this;

            _get(Object.getPrototypeOf(_class.prototype), 'disconnect', this).call(this, cb);
            if (this._eventListeners.length === 0) {
                window.removeEventListener('devicemotion', function (event) {
                    return _this3.onMotionEvent(event);
                });
            }
        }

        /**
         * on motion event
         * @param event
         */

    }, {
        key: 'onMotionEvent',
        value: function onMotionEvent(event) {
            var data = {
                sensors: {
                    interval: event.interval,
                    timestamp: event.timeStamp,
                    accelerometer: {
                        x: event.accelerationIncludingGravity.x,
                        y: event.accelerationIncludingGravity.y,
                        z: event.accelerationIncludingGravity.z
                    },
                    gyroscope: {
                        alpha: event.rotationRate.alpha,
                        beta: event.rotationRate.beta,
                        gamma: event.rotationRate.gamma
                    }
                }
            };
            this.update(data);
        }
    }]);

    return _class;
}(_device2.default);

exports.default = _class;

},{"./device.es6":3}],5:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);if (parent === null) {
            return undefined;
        } else {
            return get(parent, property, receiver);
        }
    } else if ("value" in desc) {
        return desc.value;
    } else {
        var getter = desc.get;if (getter === undefined) {
            return undefined;
        }return getter.call(receiver);
    }
};

var _device = require('./device.es6');

var _device2 = _interopRequireDefault(_device);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var _class = function (_Device) {
    _inherits(_class, _Device);

    function _class(sampledata) {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this));

        _this.data = sampledata;

        /**
         * index of current sensor snapshot in sim mode
         * @type {number}
         * @private
         */
        _this._simIndex = 0;
        return _this;
    }

    /**
     * set data
     * @param sampledata
     */

    _createClass(_class, [{
        key: 'connect',

        /**
         * connect to sensortag
         * @param cb callback
         */
        value: function connect(cb) {
            var _this2 = this;

            _get(Object.getPrototypeOf(_class.prototype), 'connect', this).call(this, cb);
            this.interval = setInterval(function () {
                _this2.update(_this2.getSimulatedSensors());
            }, this._refreshInterval);
        }

        /**
         * disconnect
         * @param cb
         */

    }, {
        key: 'disconnect',
        value: function disconnect(cb) {
            _get(Object.getPrototypeOf(_class.prototype), 'disconnect', this).call(this, cb);
            clearInterval(this.interval);
        }

        /**
         * get simulated sensor data object
         */

    }, {
        key: 'getSimulatedSensors',
        value: function getSimulatedSensors() {
            var sim = {
                connected: true,
                device: {
                    systemid: 'xxxxx',
                    firmware: 'xxxxx',
                    manufacturer: 'xxxxx'
                }
            };
            var accelerometer = this._data[this._simIndex].accelerometer;
            var gyroscope = this._data[this._simIndex].gyroscope;

            sim.sensors = {
                interval: this._data[this._simIndex].interval,
                timestamp: this._data[this._simIndex].timestamp,
                accelerometer: {
                    x: accelerometer.x,
                    y: accelerometer.y,
                    z: accelerometer.z
                },
                gyroscope: {
                    alpha: gyroscope.alpha,
                    beta: gyroscope.beta,
                    gamma: gyroscope.gamma
                }
            };
            this._simIndex++;
            if (this._simIndex >= this._data.length) {
                this._simIndex = 0;
            }
            return sim;
        }

        /**
         * get simulated button data object
         */

    }, {
        key: 'getSimulatedButtons',
        value: function getSimulatedButtons() {
            var data = this.getSimulatedSensors();
            data.sensors.buttons = { active: true, enabled: true };
            data.sensors.buttons.left = Math.random() > .5;
            data.sensors.buttons.right = Math.random() > .5;
            return data;
        }
    }, {
        key: 'data',
        set: function set(sampledata) {
            this._data = sampledata;
            var intervalTTL = 0;
            for (var c = 0; c < this._data.length; c++) {
                intervalTTL += this._data[c].interval;
            }
            this._refreshInterval = intervalTTL / this._data.length;
        }
    }]);

    return _class;
}(_device2.default);

exports.default = _class;

},{"./device.es6":3}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _recording = require('../../recording.es6');

var _recording2 = _interopRequireDefault(_recording);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var _class = function () {
    function _class() {
        _classCallCheck(this, _class);

        /**
         * index of current sensor snapshot in sim mode
         * @type {number}
         * @private
         */
        this._simIndex = 0;

        /**
         * socket connection
         * @type {null}
         */
        this.socket = null;

        /**
         * if already connected
         * @type {Boolean}
         */
        this._connected = false;

        /**
         * event listeners
         * @type {Array}
         * @private
         */
        this._eventListeners = [];

        /**
         * base UUID
         */
        this._baseUUID = ['f000', '-0451-4000-b000-000000000000'];

        /**
         * service UUIDS
         * @type {{}}
         * @private
         */
        this._uuid = {};
        this._uuid.temperature = this._baseUUID[0] + 'aa00' + this._baseUUID[1];
        this._uuid.temperatureData = this._baseUUID[0] + 'aa01' + this._baseUUID[1];
        this._uuid.temperatureConfiguration = this._baseUUID[0] + 'aa02' + this._baseUUID[1];
        this._uuid.temperaturePeriod = this._baseUUID[0] + 'aa03' + this._baseUUID[1];

        this._uuid.accelerometer = this._baseUUID[0] + 'aa10' + this._baseUUID[1];
        this._uuid.accelerometerData = this._baseUUID[0] + 'aa11' + this._baseUUID[1];
        this._uuid.accelerometerConfiguration = this._baseUUID[0] + 'aa12' + this._baseUUID[1];
        this._uuid.accelerometerPeriod = this._baseUUID[0] + 'aa13' + this._baseUUID[1];

        this._uuid.humidity = this._baseUUID[0] + 'aa20' + this._baseUUID[1];
        this._uuid.humidityData = this._baseUUID[0] + 'aa21' + this._baseUUID[1];
        this._uuid.humidityConfiguration = this._baseUUID[0] + 'aa22' + this._baseUUID[1];
        this._uuid.humidityPeriod = this._baseUUID[0] + 'aa23' + this._baseUUID[1];
    }

    /**
     * connect to sensortag
     * @param cb callback
     * @param {Boolean} simluate data
     */

    _createClass(_class, [{
        key: 'connect',
        value: function connect(cb, simulate) {
            var _this = this;

            this._eventListeners.push(cb);
            if (this._connected) {
                return;
            }
            this.connected = true;
            if (simulate) {
                setInterval(function () {
                    cb('update', _this.getSimulatedSensors());
                }, 200);

                setInterval(function () {
                    cb('update', _this.getSimulatedButtons());
                }, Math.random() * 10000 + 2000);
            } else if (!navigator.bluetooth) {
                console.log('no bluetooth support in your browser, trying websockets from a local node server');
                this.socket = new WebSocket('ws://localhost:8080');
                this.socket.onerror = function (error) {
                    console.log('WebSocket Error ' + error);
                };

                this.socket.onmessage = function (e) {
                    var msg = JSON.parse(e.data);
                    for (var c = 0; c < _this._eventListeners.length; c++) {
                        _this._eventListeners[c]('update', msg);
                    }
                };

                this.socket.onopen = function (e) {
                    _this.socket.send('connect');
                };
            } else {
                navigator.bluetooth.requestDevice({ filters: [{ name: 'SensorTag' }, { services: [this._uuid.temperature, this._uuid.accelerometer, this._uuid.humidity] }],
                    optionalServices: [this._uuid.temperature, this._uuid.accelerometer, this._uuid.humidity] }).then(function (device) {
                    console.log('Got device:', device);
                    console.log('id:', device.id);
                    var connected = Promise.resolve();
                    if (!device.connected) {
                        connected = device.gatt.connect();
                    }
                    _this.device = device;
                    return connected;
                }).then(function (server) {
                    console.log('Getting Service…', server);
                    //return server.getPrimaryService('f000aa10-0451-4000-b000-000000000000');
                }).catch(function (error) {
                    return _this.onDeviceError(error);
                });
            }
        }

        /**
         * get simulated sensor data object
         */

    }, {
        key: 'getSimulatedSensors',
        value: function getSimulatedSensors() {
            var sim = {
                connected: true,
                device: {
                    systemid: 'xxxxx',
                    firmware: 'xxxxx',
                    manufacturer: 'xxxxx'
                }
            };
            var accelerometer = _recording2.default.samples[this._simIndex].accelerometer;
            var gyroscope = _recording2.default.samples[this._simIndex].gyroscope;

            sim.sensors = {
                accelerometer: {
                    x: accelerometer.x,
                    y: accelerometer.y,
                    z: accelerometer.z
                },
                gyroscope: {
                    x: gyroscope.x / 10,
                    y: gyroscope.y / 10,
                    z: gyroscope.z / 10
                }
            };
            this._simIndex++;
            if (this._simIndex >= _recording2.default.samples.length) {
                this._simIndex = 0;
            }
            sim.timeStamp - this._simIndex * 15;
            return sim;
        }

        /**
         * get simulated button data object
         */

    }, {
        key: 'getSimulatedButtons',
        value: function getSimulatedButtons() {
            var data = this.getSimulatedSensors();
            data.sensors.buttons = { active: true, enabled: true };
            data.sensors.buttons.left = Math.random() > .5;
            data.sensors.buttons.right = Math.random() > .5;
            return data;
        }

        /**
         * on device requested success
         * @param device
         */

    }, {
        key: 'onDeviceRequestedSuccess',
        value: function onDeviceRequestedSuccess(device) {
            this.connected = device.gatt.connect();
        }

        /**
         * on device requested error
         * @param device
         */

    }, {
        key: 'onDeviceError',
        value: function onDeviceError(err) {
            console.log(err);
        }
    }]);

    return _class;
}();

exports.default = _class;

},{"../../recording.es6":1}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}(); /**
      * Heavily lifted from WebVR-Polyfill project by Boris Smus: https://github.com/borismus/webvr-polyfill
      * but refactored to use different data source provided over BLE by the TI Sensor Tag
      *
      * This piece in particular was also pulled by Boris from ThreeJS math
      *
      * original license from WebVR-Polyfill is as follows:
      * Copyright 2015 Google Inc. All Rights Reserved.
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *     http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */

var _vector = require('./vector3.es6');

var _vector2 = _interopRequireDefault(_vector);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var _class = function () {
    function _class(x, y, z, w) {
        _classCallCheck(this, _class);

        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
        this.w = w !== undefined ? w : 1;
    }

    _createClass(_class, [{
        key: 'set',
        value: function set(x, y, z, w) {
            this.x = x;
            this.y = y;
            this.z = z;
            this.w = w;

            return this;
        }
    }, {
        key: 'copy',
        value: function copy(quaternion) {
            this.x = quaternion.x;
            this.y = quaternion.y;
            this.z = quaternion.z;
            this.w = quaternion.w;

            return this;
        }
    }, {
        key: 'setFromEulerXYZ',
        value: function setFromEulerXYZ(x, y, z) {
            var c1 = Math.cos(x / 2);
            var c2 = Math.cos(y / 2);
            var c3 = Math.cos(z / 2);
            var s1 = Math.sin(x / 2);
            var s2 = Math.sin(y / 2);
            var s3 = Math.sin(z / 2);

            this.x = s1 * c2 * c3 + c1 * s2 * s3;
            this.y = c1 * s2 * c3 - s1 * c2 * s3;
            this.z = c1 * c2 * s3 + s1 * s2 * c3;
            this.w = c1 * c2 * c3 - s1 * s2 * s3;

            return this;
        }
    }, {
        key: 'setFromEulerYXZ',
        value: function setFromEulerYXZ(x, y, z) {
            var c1 = Math.cos(x / 2);
            var c2 = Math.cos(y / 2);
            var c3 = Math.cos(z / 2);
            var s1 = Math.sin(x / 2);
            var s2 = Math.sin(y / 2);
            var s3 = Math.sin(z / 2);

            this.x = s1 * c2 * c3 + c1 * s2 * s3;
            this.y = c1 * s2 * c3 - s1 * c2 * s3;
            this.z = c1 * c2 * s3 - s1 * s2 * c3;
            this.w = c1 * c2 * c3 + s1 * s2 * s3;

            return this;
        }
    }, {
        key: 'setFromAxisAngle',
        value: function setFromAxisAngle(axis, angle) {
            // http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm
            // assumes axis is normalized

            var halfAngle = angle / 2,
                s = Math.sin(halfAngle);

            this.x = axis.x * s;
            this.y = axis.y * s;
            this.z = axis.z * s;
            this.w = Math.cos(halfAngle);

            return this;
        }
    }, {
        key: 'multiply',
        value: function multiply(q) {
            return this.multiplyQuaternions(this, q);
        }
    }, {
        key: 'multiplyQuaternions',
        value: function multiplyQuaternions(a, b) {
            // from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm

            var qax = a.x,
                qay = a.y,
                qaz = a.z,
                qaw = a.w;
            var qbx = b.x,
                qby = b.y,
                qbz = b.z,
                qbw = b.w;

            this.x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
            this.y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
            this.z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
            this.w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;

            return this;
        }
    }, {
        key: 'inverse',
        value: function inverse() {
            this.x *= -1;
            this.y *= -1;
            this.z *= -1;

            this.normalize();

            return this;
        }
    }, {
        key: 'normalize',
        value: function normalize() {
            var l = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);

            if (l === 0) {
                this.x = 0;
                this.y = 0;
                this.z = 0;
                this.w = 1;
            } else {
                l = 1 / l;

                this.x = this.x * l;
                this.y = this.y * l;
                this.z = this.z * l;
                this.w = this.w * l;
            }

            return this;
        }
    }, {
        key: 'slerp',
        value: function slerp(qb, t) {
            if (t === 0) return this;
            if (t === 1) return this.copy(qb);

            var x = this.x,
                y = this.y,
                z = this.z,
                w = this.w;

            // http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/

            var cosHalfTheta = w * qb.w + x * qb.x + y * qb.y + z * qb.z;

            if (cosHalfTheta < 0) {
                this.w = -qb.w;
                this.x = -qb.x;
                this.y = -qb.y;
                this.z = -qb.z;

                cosHalfTheta = -cosHalfTheta;
            } else {
                this.copy(qb);
            }

            if (cosHalfTheta >= 1.0) {
                this.w = w;
                this.x = x;
                this.y = y;
                this.z = z;

                return this;
            }

            var halfTheta = Math.acos(cosHalfTheta);
            var sinHalfTheta = Math.sqrt(1.0 - cosHalfTheta * cosHalfTheta);

            if (Math.abs(sinHalfTheta) < 0.001) {
                this.w = 0.5 * (w + this.w);
                this.x = 0.5 * (x + this.x);
                this.y = 0.5 * (y + this.y);
                this.z = 0.5 * (z + this.z);

                return this;
            }

            var ratioA = Math.sin((1 - t) * halfTheta) / sinHalfTheta,
                ratioB = Math.sin(t * halfTheta) / sinHalfTheta;

            this.w = w * ratioA + this.w * ratioB;
            this.x = x * ratioA + this.x * ratioB;
            this.y = y * ratioA + this.y * ratioB;
            this.z = z * ratioA + this.z * ratioB;

            return this;
        }
    }, {
        key: 'setFromUnitVectors',
        value: function setFromUnitVectors(vFrom, vTo) {
            // http://lolengine.net/blog/2014/02/24/quaternion-from-two-vectors-final
            // assumes direction vectors vFrom and vTo are normalized
            var v1, r;
            var EPS = 0.000001;

            if (v1 === undefined) v1 = new _vector2.default();

            r = vFrom.dot(vTo) + 1;

            if (r < EPS) {
                r = 0;

                if (Math.abs(vFrom.x) > Math.abs(vFrom.z)) {
                    v1.set(-vFrom.y, vFrom.x, 0);
                } else {
                    v1.set(0, -vFrom.z, vFrom.y);
                }
            } else {
                v1.crossVectors(vFrom, vTo);
            }

            this.x = v1.x;
            this.y = v1.y;
            this.z = v1.z;
            this.w = r;

            this.normalize();
        }
    }]);

    return _class;
}();

exports.default = _class;

},{"./vector3.es6":9}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Heavily lifted from WebVR-Polyfill project by Boris Smus: https://github.com/borismus/webvr-polyfill
 * but refactored to use different data source provided over BLE by the TI Sensor Tag
 *
 * This piece in particular was also pulled by Boris from ThreeJS math
 *
 * original license from WebVR-Polyfill is as follows:
 * Copyright 2015 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
exports.default = {
    degToRad: Math.PI / 180,
    radToDeg: 180 / Math.PI,
    MIN_TIMESTEP: 0.001,
    MAX_TIMESTEP: 1,

    // Helper method to validate the time steps of sensor timestamps.
    isTimestampDeltaValid: function isTimestampDeltaValid(timestampDeltaS) {
        if (isNaN(timestampDeltaS)) {
            return false;
        }
        if (timestampDeltaS <= this.MIN_TIMESTEP) {
            return false;
        }
        if (timestampDeltaS > this.MAX_TIMESTEP) {
            return false;
        }
        return true;
    }
};

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

/**
 * Heavily lifted from WebVR-Polyfill project by Boris Smus: https://github.com/borismus/webvr-polyfill
 * but refactored to use different data source provided over BLE by the TI Sensor Tag
 *
 * This piece in particular was also pulled by Boris from ThreeJS math
 *
 * original license from WebVR-Polyfill is as follows:
 * Copyright 2015 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _class = function () {
    function _class(x, y, z) {
        _classCallCheck(this, _class);

        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
    }

    _createClass(_class, [{
        key: "set",
        value: function set(x, y, z) {
            this.x = x;
            this.y = y;
            this.z = z;

            return this;
        }
    }, {
        key: "copy",
        value: function copy(v) {
            this.x = v.x;
            this.y = v.y;
            this.z = v.z;

            return this;
        }
    }, {
        key: "length",
        value: function length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        }
    }, {
        key: "normalize",
        value: function normalize() {
            var scalar = this.length();

            if (scalar !== 0) {
                var invScalar = 1 / scalar;

                this.multiplyScalar(invScalar);
            } else {
                this.x = 0;
                this.y = 0;
                this.z = 0;
            }

            return this;
        }
    }, {
        key: "multiplyScalar",
        value: function multiplyScalar(scalar) {
            this.x *= scalar;
            this.y *= scalar;
            this.z *= scalar;
        }
    }, {
        key: "applyQuaternion",
        value: function applyQuaternion(q) {
            var x = this.x;
            var y = this.y;
            var z = this.z;

            var qx = q.x;
            var qy = q.y;
            var qz = q.z;
            var qw = q.w;

            // calculate quat * vector
            var ix = qw * x + qy * z - qz * y;
            var iy = qw * y + qz * x - qx * z;
            var iz = qw * z + qx * y - qy * x;
            var iw = -qx * x - qy * y - qz * z;

            // calculate result * inverse quat
            this.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
            this.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
            this.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;

            return this;
        }
    }, {
        key: "dot",
        value: function dot(v) {
            return this.x * v.x + this.y * v.y + this.z * v.z;
        }
    }, {
        key: "crossVectors",
        value: function crossVectors(a, b) {
            var ax = a.x,
                ay = a.y,
                az = a.z;
            var bx = b.x,
                by = b.y,
                bz = b.z;

            this.x = ay * bz - az * by;
            this.y = az * bx - ax * bz;
            this.z = ax * by - ay * bx;

            return this;
        }
    }]);

    return _class;
}();

exports.default = _class;
;

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}(); /**
      * Heavily lifted from WebVR-Polyfill project by Boris Smus: https://github.com/borismus/webvr-polyfill
      * but refactored to use different data source provided over BLE by the TI Sensor Tag
      *
      * original license from WebVR-Polyfill is as follows:
      * Copyright 2015 Google Inc. All Rights Reserved.
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *     http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */

/**
 * TODO: Fix up all "new THREE" instantiations to improve performance.
 */

var _sensorSample = require('./sensor-sample.es6');

var _sensorSample2 = _interopRequireDefault(_sensorSample);

var _quaternion = require('../math/quaternion.es6');

var _quaternion2 = _interopRequireDefault(_quaternion);

var _vector = require('../math/vector3.es6');

var _vector2 = _interopRequireDefault(_vector);

var _util = require('../math/util.es6');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

/**
 * An implementation of a simple complementary filter, which fuses gyroscope and
 * accelerometer data from the 'devicemotion' event.
 *
 * Accelerometer data is very noisy, but stable over the long term.
 * Gyroscope data is smooth, but tends to drift over the long term.
 *
 * This fusion is relatively simple:
 * 1. Get orientation estimates from accelerometer by applying a low-pass filter
 *    on that data.
 * 2. Get orientation estimates from gyroscope by integrating over time.
 * 3. Combine the two estimates, weighing (1) in the long term, but (2) for the
 *    short term.
 */

var _class = function () {
    function _class(kFilter) {
        _classCallCheck(this, _class);

        this.kFilter = kFilter;

        // Raw sensor measurements.
        this.currentAccelMeasurement = new _sensorSample2.default();
        this.currentGyroMeasurement = new _sensorSample2.default();
        this.previousGyroMeasurement = new _sensorSample2.default();

        // Current filter orientation
        this.filterQ = new _quaternion2.default();
        this.previousFilterQ = new _quaternion2.default();

        // Orientation based on the accelerometer.
        this.accelQ = new _quaternion2.default();
        // Whether or not the orientation has been initialized.
        this.isOrientationInitialized = false;
        // Running estimate of gravity based on the current orientation.
        this.estimatedGravity = new _vector2.default();
        // Measured gravity based on accelerometer.
        this.measuredGravity = new _vector2.default();

        // Debug only quaternion of gyro-based orientation.
        this.gyroIntegralQ = new _quaternion2.default();
    }

    _createClass(_class, [{
        key: 'addAccelMeasurement',
        value: function addAccelMeasurement(vector, timestampS) {
            this.currentAccelMeasurement.set(vector, timestampS);
        }
    }, {
        key: 'addGyroMeasurement',
        value: function addGyroMeasurement(vector, timestampS) {
            this.currentGyroMeasurement.set(vector, timestampS);

            var deltaT = timestampS - this.previousGyroMeasurement.timestampS;
            if (_util2.default.isTimestampDeltaValid(deltaT)) {
                this.run_();
            }

            this.previousGyroMeasurement.copy(this.currentGyroMeasurement);
        }
    }, {
        key: 'run_',
        value: function run_() {
            if (!this.isOrientationInitialized) {
                this.accelQ = this.accelToQuaternion_(this.currentAccelMeasurement.sample);
                this.previousFilterQ.copy(this.accelQ);
                this.isOrientationInitialized = true;
                return;
            }

            var deltaT = this.currentGyroMeasurement.timestampS - this.previousGyroMeasurement.timestampS;

            // Convert gyro rotation vector to a quaternion delta.
            var gyroDeltaQ = this.gyroToQuaternionDelta_(this.currentGyroMeasurement.sample, deltaT);
            this.gyroIntegralQ.multiply(gyroDeltaQ);

            // filter_1 = K * (filter_0 + gyro * dT) + (1 - K) * accel.
            this.filterQ.copy(this.previousFilterQ);
            this.filterQ.multiply(gyroDeltaQ);

            // Calculate the delta between the current estimated gravity and the real
            // gravity vector from accelerometer.
            var invFilterQ = new _quaternion2.default();
            invFilterQ.copy(this.filterQ);
            invFilterQ.inverse();

            this.estimatedGravity.set(0, 0, -1);
            this.estimatedGravity.applyQuaternion(invFilterQ);
            this.estimatedGravity.normalize();

            this.measuredGravity.copy(this.currentAccelMeasurement.sample);
            this.measuredGravity.normalize();

            // Compare estimated gravity with measured gravity, get the delta quaternion
            // between the two.
            var deltaQ = new _quaternion2.default();
            deltaQ.setFromUnitVectors(this.estimatedGravity, this.measuredGravity);
            deltaQ.inverse();

            /*if (DEBUG) {
                console.log('Delta: %d deg, G_est: (%s, %s, %s), G_meas: (%s, %s, %s)',
                    MathUtil.radToDeg * Util.getQuaternionAngle(deltaQ),
                    (this.estimatedGravity.x).toFixed(1),
                    (this.estimatedGravity.y).toFixed(1),
                    (this.estimatedGravity.z).toFixed(1),
                    (this.measuredGravity.x).toFixed(1),
                    (this.measuredGravity.y).toFixed(1),
                    (this.measuredGravity.z).toFixed(1));
            }*/

            // Calculate the SLERP target: current orientation plus the measured-estimated
            // quaternion delta.
            var targetQ = new _quaternion2.default();
            targetQ.copy(this.filterQ);
            targetQ.multiply(deltaQ);

            // SLERP factor: 0 is pure gyro, 1 is pure accel.
            this.filterQ.slerp(targetQ, 1 - this.kFilter);

            this.previousFilterQ.copy(this.filterQ);
        }
    }, {
        key: 'getOrientation',
        value: function getOrientation() {
            return this.filterQ;
        }
    }, {
        key: 'accelToQuaternion_',
        value: function accelToQuaternion_(accel) {
            var normAccel = new _vector2.default();
            normAccel.copy(accel);
            normAccel.normalize();
            var quat = new _quaternion2.default();
            quat.setFromUnitVectors(new _vector2.default(0, 0, -1), normAccel);
            quat.inverse();
            return quat;
        }
    }, {
        key: 'gyroToQuaternionDelta_',
        value: function gyroToQuaternionDelta_(gyro, dt) {
            // Extract axis and angle from the gyroscope data.
            var quat = new _quaternion2.default();
            var axis = new _vector2.default();
            axis.copy(gyro);
            axis.normalize();
            quat.setFromAxisAngle(axis, gyro.length() * dt);
            return quat;
        }
    }]);

    return _class;
}();

exports.default = _class;

},{"../math/quaternion.es6":7,"../math/util.es6":8,"../math/vector3.es6":9,"./sensor-sample.es6":14}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    K_FILTER: 0.98, // Default: 0.98.

    // How far into the future to predict during fast motion (in seconds).
    PREDICTION_TIME_S: 0.040, // Default: 0.040.

    YAW_ONLY: true
};

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}(); /**
      * Heavily lifted from WebVR-Polyfill project by Boris Smus: https://github.com/borismus/webvr-polyfill
      * but refactored to use different data source provided over BLE by the TI Sensor Tag
      *
      * original license from WebVR-Polyfill is as follows:
      * Copyright 2015 Google Inc. All Rights Reserved.
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *     http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */

//import TouchPanner from '../touch-panner.es6';

var _complementaryFilter = require('./complementary-filter.es6');

var _complementaryFilter2 = _interopRequireDefault(_complementaryFilter);

var _posePredictor = require('./pose-predictor.es6');

var _posePredictor2 = _interopRequireDefault(_posePredictor);

var _util = require('../math/util.es6');

var _util2 = _interopRequireDefault(_util);

var _vector = require('../math/vector3.es6');

var _vector2 = _interopRequireDefault(_vector);

var _quaternion = require('../math/quaternion.es6');

var _quaternion2 = _interopRequireDefault(_quaternion);

var _config = require('./config.es6');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

/**
 * The pose sensor, implemented using DeviceMotion APIs.
 */

var _class = function () {
    function _class() {
        _classCallCheck(this, _class);

        this.deviceId = 'webvr-polyfill:fused';
        this.deviceName = 'VR Position Device (webvr-polyfill:fused)';

        this.accelerometer = new _vector2.default();
        this.gyroscope = new _vector2.default();

        //window.addEventListener('devicemotion', this.onDeviceMotionChange_.bind(this));
        //window.addEventListener('orientationchange', this.onScreenOrientationChange_.bind(this));

        this.filter = new _complementaryFilter2.default(_config2.default.K_FILTER);
        this.posePredictor = new _posePredictor2.default(_config2.default.PREDICTION_TIME_S);
        //   this.touchPanner = new TouchPanner();

        this.filterToWorldQ = new _quaternion2.default();

        // Set the filter to world transform, depending on OS.
        //if (Util.isIOS()) {
        // this.filterToWorldQ.setFromAxisAngle(new Vector3(1, 0, 0), Math.PI / 2);
        //} else {
        this.filterToWorldQ.setFromAxisAngle(new _vector2.default(1, 0, 0), -Math.PI / 2);
        //}

        this.inverseWorldToScreenQ = new _quaternion2.default();
        this.worldToScreenQ = new _quaternion2.default();
        this.originalPoseAdjustQ = new _quaternion2.default();
        this.originalPoseAdjustQ.setFromAxisAngle(new _vector2.default(0, 0, 1), -window.orientation * Math.PI / 180);

        //this.setScreenTransform_();
        // Adjust this filter for being in landscape mode.
        //if (Util.isLandscapeMode()) {
        //  this.filterToWorldQ.multiply(this.inverseWorldToScreenQ);
        //}

        // Keep track of a reset transform for resetSensor.
        this.resetQ = new _quaternion2.default();

        //this.isFirefoxAndroid = Util.isFirefoxAndroid();
        //this.isIOS = Util.isIOS();

        this.orientationOut_ = new Float32Array(4);
    }

    _createClass(_class, [{
        key: 'getPosition',
        value: function getPosition() {
            // This PoseSensor doesn't support position
            return null;
        }
    }, {
        key: 'getOrientation',
        value: function getOrientation() {
            // Convert from filter space to the the same system used by the
            // deviceorientation event.
            var orientation = this.filter.getOrientation();

            // Predict orientation.
            this.predictedQ = this.posePredictor.getPrediction(orientation, this.gyroscope, this.previousTimestampS);

            // Convert to THREE coordinate system: -Z forward, Y up, X right.
            var out = new _quaternion2.default();
            out.copy(this.filterToWorldQ);
            out.multiply(this.resetQ);
            out.multiply(this.predictedQ);
            out.multiply(this.worldToScreenQ);

            this.orientationOut_[0] = out.x;
            this.orientationOut_[1] = out.y;
            this.orientationOut_[2] = out.z;
            this.orientationOut_[3] = out.w;
            return this.orientationOut_;
        }
    }, {
        key: 'resetPose',
        value: function resetPose() {
            // Reduce to inverted yaw-only.
            this.resetQ.copy(this.filter.getOrientation());
            this.resetQ.x = 0;
            this.resetQ.y = 0;
            this.resetQ.z *= -1;
            this.resetQ.normalize();

            // Take into account original pose.
            this.resetQ.multiply(this.originalPoseAdjustQ);
        }
    }, {
        key: 'updateSensorData',
        value: function updateSensorData(data) {
            if (data.sensors && data.sensors.accelerometer && data.sensors.gyroscope) {
                var accGravity = data.sensors.accelerometer; //todo: gravity!
                var rotRate = data.sensors.gyroscope;

                //var accGravity = data.accelerationIncludingGravity; //todo: gravity!
                //var rotRate = data.rotationRate;
                var timestampS = data.sensors.timestamp / 1000;

                var deltaS = timestampS - this.previousTimestampS;
                if (deltaS <= _util2.default.MIN_TIMESTEP || deltaS > _util2.default.MAX_TIMESTEP) {
                    console.warn('Invalid timestamps detected. Time step between successive ' + 'gyroscope sensor samples is very small or not monotonic');
                    this.previousTimestampS = timestampS;
                    return;
                }

                this.accelerometer.set(-accGravity.x, -accGravity.y, -accGravity.z);
                this.gyroscope.set(rotRate.alpha, rotRate.beta, rotRate.gamma);
                this.gyroscope.multiplyScalar(Math.PI / 180);

                this.filter.addAccelMeasurement(this.accelerometer, timestampS);
                this.filter.addGyroMeasurement(this.gyroscope, timestampS);

                this.previousTimestampS = timestampS;
            }
        }
    }]);

    return _class;
}();

exports.default = _class;

},{"../math/quaternion.es6":7,"../math/util.es6":8,"../math/vector3.es6":9,"./complementary-filter.es6":10,"./config.es6":11,"./pose-predictor.es6":13}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _createClass = function () {
        function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
        }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
}(); /**
      * Heavily lifted from WebVR-Polyfill project by Boris Smus: https://github.com/borismus/webvr-polyfill
      * but refactored to use different data source provided over BLE by the TI Sensor Tag
      *
      * original license from WebVR-Polyfill is as follows:
      * Copyright 2015 Google Inc. All Rights Reserved.
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *     http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */

var _quaternion = require('../math/quaternion.es6');

var _quaternion2 = _interopRequireDefault(_quaternion);

var _vector = require('../math/vector3.es6');

var _vector2 = _interopRequireDefault(_vector);

var _util = require('../math/util.es6');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
        }
}

/**
 * Given an orientation and the gyroscope data, predicts the future orientation
 * of the head. This makes rendering appear faster.
 *
 * Also see: http://msl.cs.uiuc.edu/~lavalle/papers/LavYerKatAnt14.pdf
 *
 * @param {Number} predictionTimeS time from head movement to the appearance of
 * the corresponding image.
 */

var _class = function () {
        function _class(predictionTimeS) {
                _classCallCheck(this, _class);

                this.predictionTimeS = predictionTimeS;

                // The quaternion corresponding to the previous state.
                this.previousQ = new _quaternion2.default();
                // Previous time a prediction occurred.
                this.previousTimestampS = null;

                // The delta quaternion that adjusts the current pose.
                this.deltaQ = new _quaternion2.default();
                // The output quaternion.
                this.outQ = new _quaternion2.default();
        }

        _createClass(_class, [{
                key: 'getPrediction',
                value: function getPrediction(currentQ, gyro, timestampS) {
                        if (!this.previousTimestampS) {
                                this.previousQ.copy(currentQ);
                                this.previousTimestampS = timestampS;
                                return currentQ;
                        }

                        // Calculate axis and angle based on gyroscope rotation rate data.
                        var axis = new _vector2.default();
                        axis.copy(gyro);
                        axis.normalize();

                        var angularSpeed = gyro.length();

                        // If we're rotating slowly, don't do prediction.
                        if (angularSpeed < _util2.default.degToRad * 20) {
                                //if (DEBUG) {
                                console.log('Moving slowly, at %s deg/s: no prediction', (_util2.default.radToDeg * angularSpeed).toFixed(1));
                                //}
                                this.outQ.copy(currentQ);
                                this.previousQ.copy(currentQ);
                                return this.outQ;
                        }

                        // Get the predicted angle based on the time delta and latency.
                        var deltaT = timestampS - this.previousTimestampS;
                        var predictAngle = angularSpeed * this.predictionTimeS;

                        this.deltaQ.setFromAxisAngle(axis, predictAngle);
                        this.outQ.copy(this.previousQ);
                        this.outQ.multiply(this.deltaQ);

                        this.previousQ.copy(currentQ);

                        return this.outQ;
                }
        }]);

        return _class;
}();

exports.default = _class;
;

},{"../math/quaternion.es6":7,"../math/util.es6":8,"../math/vector3.es6":9}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

/**
 * Heavily lifted from WebVR-Polyfill project by Boris Smus: https://github.com/borismus/webvr-polyfill
 * but refactored to use different data source provided over BLE by the TI Sensor Tag
 *
 * original license from WebVR-Polyfill is as follows:
 * Copyright 2015 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _class = function () {
    function _class(sample, timestampS) {
        _classCallCheck(this, _class);

        this.set(sample, timestampS);
    }

    _createClass(_class, [{
        key: "set",
        value: function set(sample, timestampS) {
            this.sample = sample;
            this.timestampS = timestampS;
        }
    }, {
        key: "copy",
        value: function copy(sensorSample) {
            this.set(sensorSample.sample, sensorSample.timestampS);
        }
    }]);

    return _class;
}();

exports.default = _class;

},{}]},{},[2])(2)
});


//# sourceMappingURL=ccwc-vrcontroller-visualizer.js.map
