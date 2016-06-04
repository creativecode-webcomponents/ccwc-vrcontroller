(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ccwc = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"../../recording.es6":1}],3:[function(require,module,exports){
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

},{"./vector3.es6":5}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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

},{"../math/quaternion.es6":3,"../math/util.es6":4,"../math/vector3.es6":5,"./sensor-sample.es6":10}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

},{"../math/quaternion.es6":3,"../math/util.es6":4,"../math/vector3.es6":5,"./complementary-filter.es6":6,"./config.es6":7,"./pose-predictor.es6":9}],9:[function(require,module,exports){
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

},{"../math/quaternion.es6":3,"../math/util.es6":4,"../math/vector3.es6":5}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
'use strict';

var _tisensortag = require('./devices/tisensortag.es6');

var _tisensortag2 = _interopRequireDefault(_tisensortag);

var _complementaryFilter = require('./sensorfusion/complementary-filter.es6');

var _complementaryFilter2 = _interopRequireDefault(_complementaryFilter);

var _fusionPoseSensor = require('./sensorfusion/fusion-pose-sensor.es6');

var _fusionPoseSensor2 = _interopRequireDefault(_fusionPoseSensor);

var _posePredictor = require('./sensorfusion/pose-predictor.es6');

var _posePredictor2 = _interopRequireDefault(_posePredictor);

var _sensorSample = require('./sensorfusion/sensor-sample.es6');

var _sensorSample2 = _interopRequireDefault(_sensorSample);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

exports.tisensortag = _tisensortag2.default;
exports.sensorfusion = {
    complementaryfilter: _complementaryFilter2.default,
    fusionposesensor: _fusionPoseSensor2.default,
    posepredictor: _posePredictor2.default
};

},{"./devices/tisensortag.es6":2,"./sensorfusion/complementary-filter.es6":6,"./sensorfusion/fusion-pose-sensor.es6":8,"./sensorfusion/pose-predictor.es6":9,"./sensorfusion/sensor-sample.es6":10}]},{},[11])(11)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJyZWNvcmRpbmcuZXM2Iiwic3JjXFxkZXZpY2VzXFx0aXNlbnNvcnRhZy5lczYiLCJzcmNcXG1hdGhcXHF1YXRlcm5pb24uZXM2Iiwic3JjXFxtYXRoXFx1dGlsLmVzNiIsInNyY1xcbWF0aFxcdmVjdG9yMy5lczYiLCJzcmNcXHNlbnNvcmZ1c2lvblxcY29tcGxlbWVudGFyeS1maWx0ZXIuZXM2Iiwic3JjXFxzZW5zb3JmdXNpb25cXGNvbmZpZy5lczYiLCJzcmNcXHNlbnNvcmZ1c2lvblxcZnVzaW9uLXBvc2Utc2Vuc29yLmVzNiIsInNyY1xcc2Vuc29yZnVzaW9uXFxwb3NlLXByZWRpY3Rvci5lczYiLCJzcmNcXHNlbnNvcmZ1c2lvblxcc2Vuc29yLXNhbXBsZS5lczYiLCJzcmNcXHZyY29udHJvbGxlci5lczYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O2lDQ0VpQyxFQUFDLFdBRGhCLEFBQ2UsQUFBWSxBQUM3QjtnQ0FBZ0IsRUFBQyxXQUZmLEFBRWMsQUFBWSxBQUM1Qjs2QkFBYSxFQUFDLFdBSGIsQUFBQyxBQUdXLEFBQVk7QUFIdkIsQUFDRixTQURDO2lDQUtnQixFQUFDLFdBRHZCLEFBQ3NCLEFBQVksQUFDN0I7Z0NBQWdCLEVBQUMsV0FGdEIsQUFFcUIsQUFBWSxBQUM1Qjs2QkFBYSxFQUFDLFdBSG5CLEFBR2tCLEFBQVksQUFDekI7MkJBQVcsRUFBQyxXQVJYLEFBSU4sQUFJZ0IsQUFBWTtBQUo1QixBQUNLO2lDQUtpQixFQUFDLFdBRHZCLEFBQ3NCLEFBQVksQUFDN0I7Z0NBQWdCLEVBQUMsV0FGdEIsQUFFcUIsQUFBWSxBQUM1Qjs2QkFBYSxFQUFDLFdBSG5CLEFBR2tCLEFBQVksQUFDekI7MkJBQVcsRUFBQyxXQUFELEFBQVksTUFBTSxVQWI1QixBQVNOLEFBSWdCLEFBQTRCO0FBSjVDLEFBQ0s7aUNB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QUFHLEdBQUksQUFDdkI7Z0JBQUksS0FBSyxLQUFBLEFBQUssSUFBSyxJQUFuQixBQUFTLEFBQWMsQUFDdkI7Z0JBQUksS0FBSyxLQUFBLEFBQUssSUFBSyxJQUFuQixBQUFTLEFBQWMsQUFDdkI7Z0JBQUksS0FBSyxLQUFBLEFBQUssSUFBSyxJQUFuQixBQUFTLEFBQWMsQUFDdkI7Z0JBQUksS0FBSyxLQUFBLEFBQUssSUFBSyxJQUFuQixBQUFTLEFBQWMsQUFDdkI7Z0JBQUksS0FBSyxLQUFBLEFBQUssSUFBSyxJQUFuQixBQUFTLEFBQWMsQUFDdkI7Z0JBQUksS0FBSyxLQUFBLEFBQUssSUFBSyxJQUFuQixBQUFTLEFBQWMsQUFFdkI7O2lCQUFBLEFBQUssSUFBSSxLQUFBLEFBQUssS0FBTCxBQUFVLEtBQUssS0FBQSxBQUFLLEtBQTdCLEFBQWtDLEFBQ2xDO2lCQUFBLEFBQUssSUFBSSxLQUFBLEFBQUssS0FBTCxBQUFVLEtBQUssS0FBQSxBQUFLLEtBQTdCLEFBQWtDLEFBQ2xDO2lCQUFBLEFBQUssSUFBSSxLQUFBLEFBQUssS0FBTCxBQUFVLEtBQUssS0FBQSxBQUFLLEtBQTdCLEFBQWtDLEFBQ2xDO2lCQUFBLEFBQUssSUFBSSxLQUFBLEFBQUssS0FBTCxBQUFVLEtBQUssS0FBQSxBQUFLLEtBQTdCLEFBQWtDLEFBRWxDOzttQkFBQSxBQUFPLEFBQ1Y7Ozs7d0MsQUFFZ0IsRyxBQUFHLEcsQUFBRyxHQUFJLEFBQ3ZCO2dCQUFJLEtBQUssS0FBQSxBQUFLLElBQUssSUFBbkIsQUFBUyxBQUFjLEFBQ3ZCO2dCQUFJLEtBQUssS0FBQSxBQUFLLElBQUssSUFBbkIsQUFBUyxBQUFjLEFBQ3ZCO2dCQUFJLEtBQUssS0FBQSxBQUFLLElBQUssSUFBbkIsQUFBUyxBQUFjLEFBQ3ZCO2dCQUFJLEtBQUssS0FBQSxBQUFLLElBQUssSUFBbkIsQUFBUyxBQUFjLEFBQ3ZCO2dCQUFJLEtBQUssS0FBQSxBQUFLLElBQUssSUFBbkIsQUFBUyxBQUFjLEFBQ3ZCO2dCQUFJLEtBQUssS0FBQSxBQUFLLElBQUss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QUFDOUM7Ozs7Ozs7Ozs7OztBQy9CTDs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLFFBQUEsQUFBUTtBQUNSLFFBQUEsQUFBUTsrQ0FBZSxBQUVuQjt5Q0FGbUIsQUFHbkI7bUNBSEosQUFBdUI7QUFBQSxBQUNuQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgc2FtcGxlczogW3tcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zLjBcIiwgXCJ5XCI6IFwiMC44XCIsIFwielwiOiBcIi0yLjJcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjAuNFwiLCBcInlcIjogXCIwLjZcIiwgXCJ6XCI6IFwiMy45XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlfSxcclxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMuMFwiLCBcInlcIjogXCIwLjhcIiwgXCJ6XCI6IFwiLTIuMlwifSxcclxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMC4zXCIsIFwieVwiOiBcIjAuNlwiLCBcInpcIjogXCIzLjlcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWV9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMy4wXCIsIFwieVwiOiBcIjAuOFwiLCBcInpcIjogXCItMi4yXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIwLjNcIiwgXCJ5XCI6IFwiMC42XCIsIFwielwiOiBcIjMuOVwifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zLjBcIiwgXCJ5XCI6IFwiMC44XCIsIFwielwiOiBcIi0yLjJcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjAuM1wiLCBcInlcIjogXCIwLjZcIiwgXCJ6XCI6IFwiMy45XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzUuOVwiLCBcInlcIjogXCIzLjJcIiwgXCJ6XCI6IFwiNTAuNFwifSxcclxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMuMFwiLCBcInlcIjogXCIwLjhcIiwgXCJ6XCI6IFwiLTIuMlwifSxcclxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMC40XCIsIFwieVwiOiBcIjAuNlwiLCBcInpcIjogXCIzLjlcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zNS45XCIsIFwieVwiOiBcIjMuMlwiLCBcInpcIjogXCI1MC40XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMy4wXCIsIFwieVwiOiBcIjAuOFwiLCBcInpcIjogXCItMi4yXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIwLjRcIiwgXCJ5XCI6IFwiMC42XCIsIFwielwiOiBcIjMuOVwifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTM2LjBcIiwgXCJ5XCI6IFwiMy4yXCIsIFwielwiOiBcIjUzLjBcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zLjBcIiwgXCJ5XCI6IFwiMC44XCIsIFwielwiOiBcIi0yLjJcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjAuNFwiLCBcInlcIjogXCIwLjZcIiwgXCJ6XCI6IFwiMy45XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzYuMFwiLCBcInlcIjogXCIzLjJcIiwgXCJ6XCI6IFwiNTMuMFwifSxcclxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMuMFwiLCBcInlcIjogXCIwLjhcIiwgXCJ6XCI6IFwiLTIuMlwifSxcclxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMC40XCIsIFwieVwiOiBcIjAuNlwiLCBcInpcIjogXCIzLjlcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zNS43XCIsIFwieVwiOiBcIjMuMFwiLCBcInpcIjogXCI1MS40XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMy4wXCIsIFwieVwiOiBcIjAuOFwiLCBcInpcIjogXCItMi4yXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIwLjFcIiwgXCJ5XCI6IFwiMC4zXCIsIFwielwiOiBcIjQuMVwifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTM1LjdcIiwgXCJ5XCI6IFwiMy4wXCIsIFwielwiOiBcIjUxLjRcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zLjBcIiwgXCJ5XCI6IFwiMC44XCIsIFwielwiOiBcIi0yLjJcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjAuMVwiLCBcInlcIjogXCIwLjNcIiwgXCJ6XCI6IFwiNC4xXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzUuN1wiLCBcInlcIjogXCIzLjBcIiwgXCJ6XCI6IFwiNTEuNFwifSxcclxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMTguOFwiLCBcInlcIjogXCIxMC41XCIsIFwielwiOiBcIi0xMjguMFwifSxcclxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMC4xXCIsIFwieVwiOiBcIjAuM1wiLCBcInpcIjogXCI0LjFcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zNC4yXCIsIFwieVwiOiBcIjIuMlwiLCBcInpcIjogXCI1My4wXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIxOC44XCIsIFwieVwiOiBcIjEwLjVcIiwgXCJ6XCI6IFwiLTEyOC4wXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIwLjFcIiwgXCJ5XCI6IFwiMC42XCIsIFwielwiOiBcIjMuOFwifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTM0LjJcIiwgXCJ5XCI6IFwiMi4yXCIsIFwielwiOiBcIjUzLjBcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjE4LjhcIiwgXCJ5XCI6IFwiMTAuNVwiLCBcInpcIjogXCItMTI4LjBcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjAuMVwiLCBcInlcIjogXCIwLjZcIiwgXCJ6XCI6IFwiMy44XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzEuOFwiLCBcInlcIjogXCIxLjNcIiwgXCJ6XCI6IFwiNTEuNlwifSxcclxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMTguOFwiLCBcInlcIjogXCIxMC41XCIsIFwielwiOiBcIi0xMjguMFwifSxcclxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMC43XCIsIFwieVwiOiBcIjAuN1wiLCBcInpcIjogXCIzLjhcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMS44XCIsIFwieVwiOiBcIjEuM1wiLCBcInpcIjogXCI1MS42XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIxOC44XCIsIFwieVwiOiBcIjEwLjVcIiwgXCJ6XCI6IFwiLTEyOC4wXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIwLjdcIiwgXCJ5XCI6IFwiMC43XCIsIFwielwiOiBcIjMuOFwifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMwLjVcIiwgXCJ5XCI6IFwiMS4yXCIsIFwielwiOiBcIjU2LjNcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjE4LjhcIiwgXCJ5XCI6IFwiMTAuNVwiLCBcInpcIjogXCItMTI4LjBcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjAuOVwiLCBcInlcIjogXCIwLjlcIiwgXCJ6XCI6IFwiMy44XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzAuNVwiLCBcInlcIjogXCIxLjJcIiwgXCJ6XCI6IFwiNTYuM1wifSxcclxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMTguOFwiLCBcInlcIjogXCIxMC41XCIsIFwielwiOiBcIi0xMjguMFwifSxcclxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMC45XCIsIFwieVwiOiBcIjAuOVwiLCBcInpcIjogXCIzLjhcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMC4xXCIsIFwieVwiOiBcIjEuNFwiLCBcInpcIjogXCI1Ny4yXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIxOC44XCIsIFwieVwiOiBcIjEwLjVcIiwgXCJ6XCI6IFwiLTEyOC4wXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIwLjlcIiwgXCJ5XCI6IFwiMC45XCIsIFwielwiOiBcIjMuOFwifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMwLjFcIiwgXCJ5XCI6IFwiMS40XCIsIFwielwiOiBcIjU3LjJcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjE4LjhcIiwgXCJ5XCI6IFwiMTAuNVwiLCBcInpcIjogXCItMTI4LjBcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjAuOVwiLCBcInlcIjogXCIwLjlcIiwgXCJ6XCI6IFwiMy44XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzAuM1wiLCBcInlcIjogXCIxLjRcIiwgXCJ6XCI6IFwiNTguN1wifSxcclxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMTguOFwiLCBcInlcIjogXCIxMC41XCIsIFwielwiOiBcIi0xMjguMFwifSxcclxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMC45XCIsIFwieVwiOiBcIjAuOFwiLCBcInpcIjogXCIzLjlcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMC4zXCIsIFwieVwiOiBcIjEuNFwiLCBcInpcIjogXCI1OC43XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIxOC44XCIsIFwieVwiOiBcIjEwLjVcIiwgXCJ6XCI6IFwiLTEyOC4wXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIwLjlcIiwgXCJ5XCI6IFwiMC44XCIsIFwielwiOiBcIjMuOVwifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMwLjNcIiwgXCJ5XCI6IFwiMS40XCIsIFwielwiOiBcIjU4LjdcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0yNi4yXCIsIFwieVwiOiBcIjE1LjFcIiwgXCJ6XCI6IFwiODYuMlwifSxcclxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMC45XCIsIFwieVwiOiBcIjAuOFwiLCBcInpcIjogXCIzLjlcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMS42XCIsIFwieVwiOiBcIjEuM1wiLCBcInpcIjogXCI1OS4xXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMjYuMlwiLCBcInlcIjogXCIxNS4xXCIsIFwielwiOiBcIjg2LjJcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjAuNFwiLCBcInlcIjogXCIwLjNcIiwgXCJ6XCI6IFwiMy45XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzEuNlwiLCBcInlcIjogXCIxLjNcIiwgXCJ6XCI6IFwiNTkuMVwifSxcclxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTI2LjJcIiwgXCJ5XCI6IFwiMTUuMVwiLCBcInpcIjogXCI4Ni4yXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIwLjRcIiwgXCJ5XCI6IFwiMC4zXCIsIFwielwiOiBcIjMuOVwifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMyLjVcIiwgXCJ5XCI6IFwiMS4zXCIsIFwielwiOiBcIjQ4LjBcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0yNi4yXCIsIFwieVwiOiBcIjE1LjFcIiwgXCJ6XCI6IFwiODYuMlwifSxcclxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMC4zXCIsIFwieVwiOiBcIi0wLjFcIiwgXCJ6XCI6IFwiMy45XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzIuNVwiLCBcInlcIjogXCIxLjNcIiwgXCJ6XCI6IFwiNDguMFwifSxcclxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTI2LjJcIiwgXCJ5XCI6IFwiMTUuMVwiLCBcInpcIjogXCI4Ni4yXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIwLjNcIiwgXCJ5XCI6IFwiLTAuMVwiLCBcInpcIjogXCIzLjlcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMi44XCIsIFwieVwiOiBcIjAuOVwiLCBcInpcIjogXCI1Mi45XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMjYuMlwiLCBcInlcIjogXCIxNS4xXCIsIFwielwiOiBcIjg2LjJcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0wLjNcIiwgXCJ5XCI6IFwiLTAuNFwiLCBcInpcIjogXCIzLjhcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMi44XCIsIFwieVwiOiBcIjAuOVwiLCBcInpcIjogXCI1Mi45XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMjYuMlwiLCBcInlcIjogXCIxNS4xXCIsIFwielwiOiBcIjg2LjJcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0wLjNcIiwgXCJ5XCI6IFwiLTAuNFwiLCBcInpcIjogXCIzLjhcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMy43XCIsIFwieVwiOiBcIjEuM1wiLCBcInpcIjogXCI1MS40XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMjYuMlwiLCBcInlcIjogXCIxNS4xXCIsIFwielwiOiBcIjg2LjJcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0wLjRcIiwgXCJ5XCI6IFwiLTAuNFwiLCBcInpcIjogXCIzLjhcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMy43XCIsIFwieVwiOiBcIjEuM1wiLCBcInpcIjogXCI1MS40XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMjYuMlwiLCBcInlcIjogXCIxNS4xXCIsIFwielwiOiBcIjg2LjJcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0wLjRcIiwgXCJ5XCI6IFwiLTAuNFwiLCBcInpcIjogXCIzLjhcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zNC43XCIsIFwieVwiOiBcIjIuM1wiLCBcInpcIjogXCI1Mi41XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMjYuMlwiLCBcInlcIjogXCIxNS4xXCIsIFwielwiOiBcIjg2LjJcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0xLjlcIiwgXCJ5XCI6IFwiLTAuM1wiLCBcInpcIjogXCIzLjJcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zNC43XCIsIFwieVwiOiBcIjIuM1wiLCBcInpcIjogXCI1Mi41XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMjYuMlwiLCBcInlcIjogXCIxNS4xXCIsIFwielwiOiBcIjg2LjJcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0xLjlcIiwgXCJ5XCI6IFwiLTAuM1wiLCBcInpcIjogXCIzLjJcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zNC43XCIsIFwieVwiOiBcIjIuM1wiLCBcInpcIjogXCI1Mi41XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIxMS45XCIsIFwieVwiOiBcIi03NC4xXCIsIFwielwiOiBcIi0xMzcuNVwifSxcclxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTEuOVwiLCBcInlcIjogXCItMC4zXCIsIFwielwiOiBcIjMuMlwifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTM1LjhcIiwgXCJ5XCI6IFwiMi42XCIsIFwielwiOiBcIjM4LjFcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjExLjlcIiwgXCJ5XCI6IFwiLTc0LjFcIiwgXCJ6XCI6IFwiLTEzNy41XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIwLjNcIiwgXCJ5XCI6IFwiMC45XCIsIFwielwiOiBcIjQuOVwifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTM1LjhcIiwgXCJ5XCI6IFwiMi42XCIsIFwielwiOiBcIjM4LjFcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjExLjlcIiwgXCJ5XCI6IFwiLTc0LjFcIiwgXCJ6XCI6IFwiLTEzNy41XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIwLjNcIiwgXCJ5XCI6IFwiMC45XCIsIFwielwiOiBcIjQuOVwifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTM1LjNcIiwgXCJ5XCI6IFwiMS4wXCIsIFwielwiOiBcIjQ1LjBcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjExLjlcIiwgXCJ5XCI6IFwiLTc0LjFcIiwgXCJ6XCI6IFwiLTEzNy41XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMC45XCIsIFwieVwiOiBcIjAuMVwiLCBcInpcIjogXCI0LjZcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zNS4zXCIsIFwieVwiOiBcIjEuMFwiLCBcInpcIjogXCI0NS4wXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIxMS45XCIsIFwieVwiOiBcIi03NC4xXCIsIFwielwiOiBcIi0xMzcuNVwifSxcclxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTAuOVwiLCBcInlcIjogXCIwLjFcIiwgXCJ6XCI6IFwiNC42XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzAuNVwiLCBcInlcIjogXCItMC45XCIsIFwielwiOiBcIjUwLjRcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjExLjlcIiwgXCJ5XCI6IFwiLTc0LjFcIiwgXCJ6XCI6IFwiLTEzNy41XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMC4zXCIsIFwieVwiOiBcIi0yLjBcIiwgXCJ6XCI6IFwiMy4wXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzAuNVwiLCBcInlcIjogXCItMC45XCIsIFwielwiOiBcIjUwLjRcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjExLjlcIiwgXCJ5XCI6IFwiLTc0LjFcIiwgXCJ6XCI6IFwiLTEzNy41XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMC4zXCIsIFwieVwiOiBcIi0yLjBcIiwgXCJ6XCI6IFwiMy4wXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMjMuOVwiLCBcInlcIjogXCItMS43XCIsIFwielwiOiBcIjUwLjZcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjExLjlcIiwgXCJ5XCI6IFwiLTc0LjFcIiwgXCJ6XCI6IFwiLTEzNy41XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMC4xXCIsIFwieVwiOiBcIi0zLjZcIiwgXCJ6XCI6IFwiMS43XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMjMuOVwiLCBcInlcIjogXCItMS43XCIsIFwielwiOiBcIjUwLjZcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjExLjlcIiwgXCJ5XCI6IFwiLTc0LjFcIiwgXCJ6XCI6IFwiLTEzNy41XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMC4xXCIsIFwieVwiOiBcIi0zLjZcIiwgXCJ6XCI6IFwiMS43XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMjAuNFwiLCBcInlcIjogXCItMS44XCIsIFwielwiOiBcIjQ4LjBcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjExLjlcIiwgXCJ5XCI6IFwiLTc0LjFcIiwgXCJ6XCI6IFwiLTEzNy41XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIwLjhcIiwgXCJ5XCI6IFwiLTMuN1wiLCBcInpcIjogXCIwLjNcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0yMC40XCIsIFwieVwiOiBcIi0xLjhcIiwgXCJ6XCI6IFwiNDguMFwifSxcclxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMTEuOVwiLCBcInlcIjogXCItNzQuMVwiLCBcInpcIjogXCItMTM3LjVcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjAuOFwiLCBcInlcIjogXCItMy43XCIsIFwielwiOiBcIjAuM1wifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTIwLjRcIiwgXCJ5XCI6IFwiLTEuOFwiLCBcInpcIjogXCI0OC4wXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIzLjNcIiwgXCJ5XCI6IFwiMi4yXCIsIFwielwiOiBcIjQuM1wifSxcclxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMC44XCIsIFwieVwiOiBcIi0zLjdcIiwgXCJ6XCI6IFwiMC4zXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMTkuNFwiLCBcInlcIjogXCItMS4zXCIsIFwielwiOiBcIjQxLjhcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjMuM1wiLCBcInlcIjogXCIyLjJcIiwgXCJ6XCI6IFwiNC4zXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIwLjhcIiwgXCJ5XCI6IFwiLTMuNFwiLCBcInpcIjogXCItMC42XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMTkuNFwiLCBcInlcIjogXCItMS4zXCIsIFwielwiOiBcIjQxLjhcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjMuM1wiLCBcInlcIjogXCIyLjJcIiwgXCJ6XCI6IFwiNC4zXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIwLjhcIiwgXCJ5XCI6IFwiLTMuNFwiLCBcInpcIjogXCItMC42XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMTkuM1wiLCBcInlcIjogXCItMS4zXCIsIFwielwiOiBcIjQzLjdcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjMuM1wiLCBcInlcIjogXCIyLjJcIiwgXCJ6XCI6IFwiNC4zXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMC4xXCIsIFwieVwiOiBcIi0zLjZcIiwgXCJ6XCI6IFwiMS4yXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMTkuM1wiLCBcInlcIjogXCItMS4zXCIsIFwielwiOiBcIjQzLjdcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjMuM1wiLCBcInlcIjogXCIyLjJcIiwgXCJ6XCI6IFwiNC4zXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMC4xXCIsIFwieVwiOiBcIi0zLjZcIiwgXCJ6XCI6IFwiMS4yXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMjEuMlwiLCBcInlcIjogXCItMi43XCIsIFwielwiOiBcIjUyLjJcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjMuM1wiLCBcInlcIjogXCIyLjJcIiwgXCJ6XCI6IFwiNC4zXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMC40XCIsIFwieVwiOiBcIi0zLjFcIiwgXCJ6XCI6IFwiMy4xXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMjEuMlwiLCBcInlcIjogXCItMi43XCIsIFwielwiOiBcIjUyLjJcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjMuM1wiLCBcInlcIjogXCIyLjJcIiwgXCJ6XCI6IFwiNC4zXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMC40XCIsIFwieVwiOiBcIi0zLjFcIiwgXCJ6XCI6IFwiMy4xXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMjYuMVwiLCBcInlcIjogXCItMi40XCIsIFwielwiOiBcIjU0LjhcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjMuM1wiLCBcInlcIjogXCIyLjJcIiwgXCJ6XCI6IFwiNC4zXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMC44XCIsIFwieVwiOiBcIi0xLjZcIiwgXCJ6XCI6IFwiMy44XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMjYuMVwiLCBcInlcIjogXCItMi40XCIsIFwielwiOiBcIjU0LjhcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjMuM1wiLCBcInlcIjogXCIyLjJcIiwgXCJ6XCI6IFwiNC4zXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMC44XCIsIFwieVwiOiBcIi0xLjZcIiwgXCJ6XCI6IFwiMy44XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMjkuMVwiLCBcInlcIjogXCItMi4xXCIsIFwielwiOiBcIjQ2LjZcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjMuM1wiLCBcInlcIjogXCIyLjJcIiwgXCJ6XCI6IFwiNC4zXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMC44XCIsIFwieVwiOiBcIi0wLjVcIiwgXCJ6XCI6IFwiMy45XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMjkuMVwiLCBcInlcIjogXCItMi4xXCIsIFwielwiOiBcIjQ2LjZcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjMuM1wiLCBcInlcIjogXCIyLjJcIiwgXCJ6XCI6IFwiNC4zXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMC44XCIsIFwieVwiOiBcIi0wLjVcIiwgXCJ6XCI6IFwiMy45XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMjkuMVwiLCBcInlcIjogXCItMi4xXCIsIFwielwiOiBcIjQ2LjZcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi00LjNcIiwgXCJ5XCI6IFwiLTI5LjJcIiwgXCJ6XCI6IFwiNy43XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMC44XCIsIFwieVwiOiBcIi0wLjVcIiwgXCJ6XCI6IFwiMy45XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzEuM1wiLCBcInlcIjogXCItMS43XCIsIFwielwiOiBcIjQ3LjdcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi00LjNcIiwgXCJ5XCI6IFwiLTI5LjJcIiwgXCJ6XCI6IFwiNy43XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMC45XCIsIFwieVwiOiBcIjAuMFwiLCBcInpcIjogXCIzLjZcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMS4zXCIsIFwieVwiOiBcIi0xLjdcIiwgXCJ6XCI6IFwiNDcuN1wifSxcclxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTQuM1wiLCBcInlcIjogXCItMjkuMlwiLCBcInpcIjogXCI3LjdcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0wLjlcIiwgXCJ5XCI6IFwiMC4wXCIsIFwielwiOiBcIjMuNlwifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMyLjRcIiwgXCJ5XCI6IFwiLTEuMlwiLCBcInpcIjogXCI1MC43XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItNC4zXCIsIFwieVwiOiBcIi0yOS4yXCIsIFwielwiOiBcIjcuN1wifSxcclxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTAuOFwiLCBcInlcIjogXCIwLjZcIiwgXCJ6XCI6IFwiNC41XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzIuNFwiLCBcInlcIjogXCItMS4yXCIsIFwielwiOiBcIjUwLjdcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi00LjNcIiwgXCJ5XCI6IFwiLTI5LjJcIiwgXCJ6XCI6IFwiNy43XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMC44XCIsIFwieVwiOiBcIjAuNlwiLCBcInpcIjogXCI0LjVcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMi40XCIsIFwieVwiOiBcIi0xLjFcIiwgXCJ6XCI6IFwiNDcuOVwifSxcclxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTQuM1wiLCBcInlcIjogXCItMjkuMlwiLCBcInpcIjogXCI3LjdcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0wLjNcIiwgXCJ5XCI6IFwiMC4xXCIsIFwielwiOiBcIjMuOFwifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMyLjRcIiwgXCJ5XCI6IFwiLTEuMVwiLCBcInpcIjogXCI0Ny45XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItNC4zXCIsIFwieVwiOiBcIi0yOS4yXCIsIFwielwiOiBcIjcuN1wifSxcclxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTAuM1wiLCBcInlcIjogXCIwLjFcIiwgXCJ6XCI6IFwiMy44XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzIuN1wiLCBcInlcIjogXCItMC45XCIsIFwielwiOiBcIjU3LjhcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi00LjNcIiwgXCJ5XCI6IFwiLTI5LjJcIiwgXCJ6XCI6IFwiNy43XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMS4yXCIsIFwieVwiOiBcIi0wLjJcIiwgXCJ6XCI6IFwiMy40XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzIuN1wiLCBcInlcIjogXCItMC45XCIsIFwielwiOiBcIjU3LjhcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi00LjNcIiwgXCJ5XCI6IFwiLTI5LjJcIiwgXCJ6XCI6IFwiNy43XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMS4yXCIsIFwieVwiOiBcIi0wLjJcIiwgXCJ6XCI6IFwiMy40XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzQuM1wiLCBcInlcIjogXCIwLjVcIiwgXCJ6XCI6IFwiNDMuMVwifSxcclxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTQuM1wiLCBcInlcIjogXCItMjkuMlwiLCBcInpcIjogXCI3LjdcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0xLjlcIiwgXCJ5XCI6IFwiLTAuMVwiLCBcInpcIjogXCIzLjZcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zNC4zXCIsIFwieVwiOiBcIjAuNVwiLCBcInpcIjogXCI0My4xXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItNC4zXCIsIFwieVwiOiBcIi0yOS4yXCIsIFwielwiOiBcIjcuN1wifSxcclxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTEuOVwiLCBcInlcIjogXCItMC4xXCIsIFwielwiOiBcIjMuNlwifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTM0LjNcIiwgXCJ5XCI6IFwiMC41XCIsIFwielwiOiBcIjQzLjFcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0xMS41XCIsIFwieVwiOiBcIi0xNy43XCIsIFwielwiOiBcIi00NS41XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMS45XCIsIFwieVwiOiBcIi0wLjFcIiwgXCJ6XCI6IFwiMy42XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzUuM1wiLCBcInlcIjogXCIxLjZcIiwgXCJ6XCI6IFwiNTAuNlwifSxcclxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTExLjVcIiwgXCJ5XCI6IFwiLTE3LjdcIiwgXCJ6XCI6IFwiLTQ1LjVcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0xLjlcIiwgXCJ5XCI6IFwiMC4yXCIsIFwielwiOiBcIjQuNlwifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTM1LjNcIiwgXCJ5XCI6IFwiMS42XCIsIFwielwiOiBcIjUwLjZcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0xMS41XCIsIFwieVwiOiBcIi0xNy43XCIsIFwielwiOiBcIi00NS41XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMS45XCIsIFwieVwiOiBcIjAuMlwiLCBcInpcIjogXCI0LjZcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zNC4zXCIsIFwieVwiOiBcIjAuOVwiLCBcInpcIjogXCI1MS44XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMTEuNVwiLCBcInlcIjogXCItMTcuN1wiLCBcInpcIjogXCItNDUuNVwifSxcclxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTAuMVwiLCBcInlcIjogXCItMC42XCIsIFwielwiOiBcIjMuMVwifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTM0LjNcIiwgXCJ5XCI6IFwiMC45XCIsIFwielwiOiBcIjUxLjhcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0xMS41XCIsIFwieVwiOiBcIi0xNy43XCIsIFwielwiOiBcIi00NS41XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMC4xXCIsIFwieVwiOiBcIi0wLjZcIiwgXCJ6XCI6IFwiMy4xXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzMuNlwiLCBcInlcIjogXCIwLjRcIiwgXCJ6XCI6IFwiNDguN1wifSxcclxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTExLjVcIiwgXCJ5XCI6IFwiLTE3LjdcIiwgXCJ6XCI6IFwiLTQ1LjVcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0wLjlcIiwgXCJ5XCI6IFwiMC41XCIsIFwielwiOiBcIjMuNFwifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMzLjZcIiwgXCJ5XCI6IFwiMC40XCIsIFwielwiOiBcIjQ4LjdcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0xMS41XCIsIFwieVwiOiBcIi0xNy43XCIsIFwielwiOiBcIi00NS41XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMC45XCIsIFwieVwiOiBcIjAuNVwiLCBcInpcIjogXCIzLjRcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zNS45XCIsIFwieVwiOiBcIjAuNVwiLCBcInpcIjogXCI0OS45XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMTEuNVwiLCBcInlcIjogXCItMTcuN1wiLCBcInpcIjogXCItNDUuNVwifSxcclxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTEuMFwiLCBcInlcIjogXCIyLjJcIiwgXCJ6XCI6IFwiMy41XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzUuOVwiLCBcInlcIjogXCIwLjVcIiwgXCJ6XCI6IFwiNDkuOVwifSxcclxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTExLjVcIiwgXCJ5XCI6IFwiLTE3LjdcIiwgXCJ6XCI6IFwiLTQ1LjVcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0xLjBcIiwgXCJ5XCI6IFwiMi4yXCIsIFwielwiOiBcIjMuNVwifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTM3LjdcIiwgXCJ5XCI6IFwiMC41XCIsIFwielwiOiBcIjM5LjlcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0xMS41XCIsIFwieVwiOiBcIi0xNy43XCIsIFwielwiOiBcIi00NS41XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMS42XCIsIFwieVwiOiBcIjIuOVwiLCBcInpcIjogXCIzLjFcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zNy43XCIsIFwieVwiOiBcIjAuNVwiLCBcInpcIjogXCIzOS45XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMTEuNVwiLCBcInlcIjogXCItMTcuN1wiLCBcInpcIjogXCItNDUuNVwifSxcclxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTEuNlwiLCBcInlcIjogXCIyLjlcIiwgXCJ6XCI6IFwiMy4xXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzcuN1wiLCBcInlcIjogXCIwLjVcIiwgXCJ6XCI6IFwiMzkuOVwifSxcclxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMjIuMVwiLCBcInlcIjogXCI1MC44XCIsIFwielwiOiBcIjYuMVwifSxcclxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTEuNlwiLCBcInlcIjogXCIyLjlcIiwgXCJ6XCI6IFwiMy4xXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzguMlwiLCBcInlcIjogXCIwLjJcIiwgXCJ6XCI6IFwiNDMuNVwifSxcclxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMjIuMVwiLCBcInlcIjogXCI1MC44XCIsIFwielwiOiBcIjYuMVwifSxcclxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTEuNVwiLCBcInlcIjogXCIzLjBcIiwgXCJ6XCI6IFwiMy4yXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzguMlwiLCBcInlcIjogXCIwLjJcIiwgXCJ6XCI6IFwiNDMuNVwifSxcclxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMjIuMVwiLCBcInlcIjogXCI1MC44XCIsIFwielwiOiBcIjYuMVwifSxcclxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTEuNVwiLCBcInlcIjogXCIzLjBcIiwgXCJ6XCI6IFwiMy4yXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzYuM1wiLCBcInlcIjogXCIwLjFcIiwgXCJ6XCI6IFwiNTEuMlwifSxcclxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMjIuMVwiLCBcInlcIjogXCI1MC44XCIsIFwielwiOiBcIjYuMVwifSxcclxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTAuNVwiLCBcInlcIjogXCIxLjFcIiwgXCJ6XCI6IFwiMy40XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzYuM1wiLCBcInlcIjogXCIwLjFcIiwgXCJ6XCI6IFwiNTEuMlwifSxcclxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMjIuMVwiLCBcInlcIjogXCI1MC44XCIsIFwielwiOiBcIjYuMVwifSxcclxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTAuNVwiLCBcInlcIjogXCIxLjFcIiwgXCJ6XCI6IFwiMy40XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzQuM1wiLCBcInlcIjogXCItMC40XCIsIFwielwiOiBcIjQ2LjVcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjIyLjFcIiwgXCJ5XCI6IFwiNTAuOFwiLCBcInpcIjogXCI2LjFcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0wLjRcIiwgXCJ5XCI6IFwiLTAuMVwiLCBcInpcIjogXCIyLjhcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zNC4zXCIsIFwieVwiOiBcIi0wLjRcIiwgXCJ6XCI6IFwiNDYuNVwifSxcclxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMjIuMVwiLCBcInlcIjogXCI1MC44XCIsIFwielwiOiBcIjYuMVwifSxcclxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTAuNFwiLCBcInlcIjogXCItMC4xXCIsIFwielwiOiBcIjIuOFwifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMyLjVcIiwgXCJ5XCI6IFwiLTAuN1wiLCBcInpcIjogXCI1My4zXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIyMi4xXCIsIFwieVwiOiBcIjUwLjhcIiwgXCJ6XCI6IFwiNi4xXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMC41XCIsIFwieVwiOiBcIjAuMlwiLCBcInpcIjogXCIzLjlcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMi41XCIsIFwieVwiOiBcIi0wLjdcIiwgXCJ6XCI6IFwiNTMuM1wifSxcclxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMjIuMVwiLCBcInlcIjogXCI1MC44XCIsIFwielwiOiBcIjYuMVwifSxcclxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTAuNVwiLCBcInlcIjogXCIwLjJcIiwgXCJ6XCI6IFwiMy45XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzMuMFwiLCBcInlcIjogXCItMC41XCIsIFwielwiOiBcIjQ5LjlcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjIyLjFcIiwgXCJ5XCI6IFwiNTAuOFwiLCBcInpcIjogXCI2LjFcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0wLjhcIiwgXCJ5XCI6IFwiMC4yXCIsIFwielwiOiBcIjQuMVwifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMzLjBcIiwgXCJ5XCI6IFwiLTAuNVwiLCBcInpcIjogXCI0OS45XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIyMi4xXCIsIFwieVwiOiBcIjUwLjhcIiwgXCJ6XCI6IFwiNi4xXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMC44XCIsIFwieVwiOiBcIjAuMlwiLCBcInpcIjogXCI0LjFcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMy4wXCIsIFwieVwiOiBcIi0wLjVcIiwgXCJ6XCI6IFwiNDkuOVwifSxcclxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMTE5LjBcIiwgXCJ5XCI6IFwiNi42XCIsIFwielwiOiBcIi0wLjZcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0wLjhcIiwgXCJ5XCI6IFwiMC4yXCIsIFwielwiOiBcIjQuMVwifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMzLjZcIiwgXCJ5XCI6IFwiMi4zXCIsIFwielwiOiBcIjQ4LjRcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjExOS4wXCIsIFwieVwiOiBcIjYuNlwiLCBcInpcIjogXCItMC42XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIxLjZcIiwgXCJ5XCI6IFwiMC4xXCIsIFwielwiOiBcIjQuMFwifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMzLjZcIiwgXCJ5XCI6IFwiMi4zXCIsIFwielwiOiBcIjQ4LjRcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjExOS4wXCIsIFwieVwiOiBcIjYuNlwiLCBcInpcIjogXCItMC42XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIxLjZcIiwgXCJ5XCI6IFwiMC4xXCIsIFwielwiOiBcIjQuMFwifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTM0LjNcIiwgXCJ5XCI6IFwiNi4wXCIsIFwielwiOiBcIjQ3LjBcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjExOS4wXCIsIFwieVwiOiBcIjYuNlwiLCBcInpcIjogXCItMC42XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIyLjVcIiwgXCJ5XCI6IFwiMC4wXCIsIFwielwiOiBcIjMuMFwifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTM0LjNcIiwgXCJ5XCI6IFwiNi4wXCIsIFwielwiOiBcIjQ3LjBcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjExOS4wXCIsIFwieVwiOiBcIjYuNlwiLCBcInpcIjogXCItMC42XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIyLjVcIiwgXCJ5XCI6IFwiMC4wXCIsIFwielwiOiBcIjMuMFwifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTM1LjBcIiwgXCJ5XCI6IFwiOS40XCIsIFwielwiOiBcIjQ2LjFcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjExOS4wXCIsIFwieVwiOiBcIjYuNlwiLCBcInpcIjogXCItMC42XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIzLjhcIiwgXCJ5XCI6IFwiMC4xXCIsIFwielwiOiBcIjEuOVwifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTM1LjBcIiwgXCJ5XCI6IFwiOS40XCIsIFwielwiOiBcIjQ2LjFcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjExOS4wXCIsIFwieVwiOiBcIjYuNlwiLCBcInpcIjogXCItMC42XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIzLjhcIiwgXCJ5XCI6IFwiMC4xXCIsIFwielwiOiBcIjEuOVwifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTM2LjFcIiwgXCJ5XCI6IFwiMTEuOFwiLCBcInpcIjogXCIzNy4zXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIxMTkuMFwiLCBcInlcIjogXCI2LjZcIiwgXCJ6XCI6IFwiLTAuNlwifSxcclxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMy42XCIsIFwieVwiOiBcIi0wLjFcIiwgXCJ6XCI6IFwiMS4zXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzYuMVwiLCBcInlcIjogXCIxMS44XCIsIFwielwiOiBcIjM3LjNcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjExOS4wXCIsIFwieVwiOiBcIjYuNlwiLCBcInpcIjogXCItMC42XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIzLjZcIiwgXCJ5XCI6IFwiLTAuMVwiLCBcInpcIjogXCIxLjNcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zNS45XCIsIFwieVwiOiBcIjExLjVcIiwgXCJ6XCI6IFwiMzkuOFwifSxcclxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMTE5LjBcIiwgXCJ5XCI6IFwiNi42XCIsIFwielwiOiBcIi0wLjZcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjIuNlwiLCBcInlcIjogXCIwLjBcIiwgXCJ6XCI6IFwiMi4zXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzUuOVwiLCBcInlcIjogXCIxMS41XCIsIFwielwiOiBcIjM5LjhcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjExOS4wXCIsIFwieVwiOiBcIjYuNlwiLCBcInpcIjogXCItMC42XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIyLjZcIiwgXCJ5XCI6IFwiMC4wXCIsIFwielwiOiBcIjIuM1wifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTM1LjlcIiwgXCJ5XCI6IFwiMTEuNVwiLCBcInpcIjogXCIzOS44XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMTgxLjlcIiwgXCJ5XCI6IFwiMTQuNVwiLCBcInpcIjogXCItMzEuMFwifSxcclxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMi42XCIsIFwieVwiOiBcIjAuMFwiLCBcInpcIjogXCIyLjNcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zNC41XCIsIFwieVwiOiBcIjYuMVwiLCBcInpcIjogXCI0NS43XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMTgxLjlcIiwgXCJ5XCI6IFwiMTQuNVwiLCBcInpcIjogXCItMzEuMFwifSxcclxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTAuMlwiLCBcInlcIjogXCIwLjFcIiwgXCJ6XCI6IFwiNC4yXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzQuNVwiLCBcInlcIjogXCI2LjFcIiwgXCJ6XCI6IFwiNDUuN1wifSxcclxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTE4MS45XCIsIFwieVwiOiBcIjE0LjVcIiwgXCJ6XCI6IFwiLTMxLjBcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0wLjJcIiwgXCJ5XCI6IFwiMC4xXCIsIFwielwiOiBcIjQuMlwifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMxLjdcIiwgXCJ5XCI6IFwiLTAuMlwiLCBcInpcIjogXCI0Ni43XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMTgxLjlcIiwgXCJ5XCI6IFwiMTQuNVwiLCBcInpcIjogXCItMzEuMFwifSxcclxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTAuOFwiLCBcInlcIjogXCIwLjBcIiwgXCJ6XCI6IFwiNC4zXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzEuN1wiLCBcInlcIjogXCItMC4yXCIsIFwielwiOiBcIjQ2LjdcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0xODEuOVwiLCBcInlcIjogXCIxNC41XCIsIFwielwiOiBcIi0zMS4wXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMC44XCIsIFwieVwiOiBcIjAuMFwiLCBcInpcIjogXCI0LjNcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMS4xXCIsIFwieVwiOiBcIi0xLjVcIiwgXCJ6XCI6IFwiNTAuN1wifSxcclxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTE4MS45XCIsIFwieVwiOiBcIjE0LjVcIiwgXCJ6XCI6IFwiLTMxLjBcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0wLjlcIiwgXCJ5XCI6IFwiLTAuNFwiLCBcInpcIjogXCIzLjFcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMS4xXCIsIFwieVwiOiBcIi0xLjVcIiwgXCJ6XCI6IFwiNTAuN1wifSxcclxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTE4MS45XCIsIFwieVwiOiBcIjE0LjVcIiwgXCJ6XCI6IFwiLTMxLjBcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0wLjlcIiwgXCJ5XCI6IFwiLTAuNFwiLCBcInpcIjogXCIzLjFcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0yOS4zXCIsIFwieVwiOiBcIi0zLjdcIiwgXCJ6XCI6IFwiNDcuNlwifSxcclxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTE4MS45XCIsIFwieVwiOiBcIjE0LjVcIiwgXCJ6XCI6IFwiLTMxLjBcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0xLjlcIiwgXCJ5XCI6IFwiLTAuNFwiLCBcInpcIjogXCIzLjFcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0yOS4zXCIsIFwieVwiOiBcIi0zLjdcIiwgXCJ6XCI6IFwiNDcuNlwifSxcclxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTE4MS45XCIsIFwieVwiOiBcIjE0LjVcIiwgXCJ6XCI6IFwiLTMxLjBcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0xLjlcIiwgXCJ5XCI6IFwiLTAuNFwiLCBcInpcIjogXCIzLjFcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0yOS44XCIsIFwieVwiOiBcIi00LjhcIiwgXCJ6XCI6IFwiNTAuMFwifSxcclxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTE4MS45XCIsIFwieVwiOiBcIjE0LjVcIiwgXCJ6XCI6IFwiLTMxLjBcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zLjVcIiwgXCJ5XCI6IFwiLTAuM1wiLCBcInpcIjogXCIyLjFcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0yOS44XCIsIFwieVwiOiBcIi00LjhcIiwgXCJ6XCI6IFwiNTAuMFwifSxcclxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTE4MS45XCIsIFwieVwiOiBcIjE0LjVcIiwgXCJ6XCI6IFwiLTMxLjBcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zLjVcIiwgXCJ5XCI6IFwiLTAuM1wiLCBcInpcIjogXCIyLjFcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0yOS44XCIsIFwieVwiOiBcIi00LjhcIiwgXCJ6XCI6IFwiNTAuMFwifSxcclxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTI1LjhcIiwgXCJ5XCI6IFwiMTAuM1wiLCBcInpcIjogXCIxMi4yXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMy41XCIsIFwieVwiOiBcIi0wLjNcIiwgXCJ6XCI6IFwiMi4xXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzEuM1wiLCBcInlcIjogXCItNS4wXCIsIFwielwiOiBcIjQ5LjRcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0yNS44XCIsIFwieVwiOiBcIjEwLjNcIiwgXCJ6XCI6IFwiMTIuMlwifSxcclxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMuOVwiLCBcInlcIjogXCItMC4zXCIsIFwielwiOiBcIjEuNlwifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMxLjNcIiwgXCJ5XCI6IFwiLTUuMFwiLCBcInpcIjogXCI0OS40XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMjUuOFwiLCBcInlcIjogXCIxMC4zXCIsIFwielwiOiBcIjEyLjJcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zLjlcIiwgXCJ5XCI6IFwiLTAuM1wiLCBcInpcIjogXCIxLjZcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMS41XCIsIFwieVwiOiBcIi00LjlcIiwgXCJ6XCI6IFwiNDIuNVwifSxcclxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTI1LjhcIiwgXCJ5XCI6IFwiMTAuM1wiLCBcInpcIjogXCIxMi4yXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMy42XCIsIFwieVwiOiBcIi0wLjFcIiwgXCJ6XCI6IFwiMS44XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzEuNVwiLCBcInlcIjogXCItNC45XCIsIFwielwiOiBcIjQyLjVcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0yNS44XCIsIFwieVwiOiBcIjEwLjNcIiwgXCJ6XCI6IFwiMTIuMlwifSxcclxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMuNlwiLCBcInlcIjogXCItMC4xXCIsIFwielwiOiBcIjEuOFwifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMxLjZcIiwgXCJ5XCI6IFwiLTQuOVwiLCBcInpcIjogXCI0Mi4wXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMjUuOFwiLCBcInlcIjogXCIxMC4zXCIsIFwielwiOiBcIjEyLjJcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zLjFcIiwgXCJ5XCI6IFwiLTAuM1wiLCBcInpcIjogXCIyLjJcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMS42XCIsIFwieVwiOiBcIi00LjlcIiwgXCJ6XCI6IFwiNDIuMFwifSxcclxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTI1LjhcIiwgXCJ5XCI6IFwiMTAuM1wiLCBcInpcIjogXCIxMi4yXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMy4xXCIsIFwieVwiOiBcIi0wLjNcIiwgXCJ6XCI6IFwiMi4yXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzEuMFwiLCBcInlcIjogXCItNC4wXCIsIFwielwiOiBcIjQyLjhcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0yNS44XCIsIFwieVwiOiBcIjEwLjNcIiwgXCJ6XCI6IFwiMTIuMlwifSxcclxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTIuOVwiLCBcInlcIjogXCItMC4zXCIsIFwielwiOiBcIjMuNlwifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMxLjBcIiwgXCJ5XCI6IFwiLTQuMFwiLCBcInpcIjogXCI0Mi44XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMjUuOFwiLCBcInlcIjogXCIxMC4zXCIsIFwielwiOiBcIjEyLjJcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0yLjlcIiwgXCJ5XCI6IFwiLTAuM1wiLCBcInpcIjogXCIzLjZcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMS40XCIsIFwieVwiOiBcIi0zLjFcIiwgXCJ6XCI6IFwiNDYuOVwifSxcclxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTI1LjhcIiwgXCJ5XCI6IFwiMTAuM1wiLCBcInpcIjogXCIxMi4yXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMi40XCIsIFwieVwiOiBcIi0wLjVcIiwgXCJ6XCI6IFwiMy45XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzEuNFwiLCBcInlcIjogXCItMy4xXCIsIFwielwiOiBcIjQ2LjlcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0yNS44XCIsIFwieVwiOiBcIjEwLjNcIiwgXCJ6XCI6IFwiMTIuMlwifSxcclxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTIuNFwiLCBcInlcIjogXCItMC41XCIsIFwielwiOiBcIjMuOVwifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMxLjRcIiwgXCJ5XCI6IFwiLTMuMVwiLCBcInpcIjogXCI0Ni45XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCI3LjVcIiwgXCJ5XCI6IFwiLTIwLjFcIiwgXCJ6XCI6IFwiLTE2LjNcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0yLjRcIiwgXCJ5XCI6IFwiLTAuNVwiLCBcInpcIjogXCIzLjlcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMi41XCIsIFwieVwiOiBcIi0xLjRcIiwgXCJ6XCI6IFwiNDkuM1wifSxcclxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiNy41XCIsIFwieVwiOiBcIi0yMC4xXCIsIFwielwiOiBcIi0xNi4zXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMS4wXCIsIFwieVwiOiBcIi0wLjJcIiwgXCJ6XCI6IFwiMy44XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzIuNVwiLCBcInlcIjogXCItMS40XCIsIFwielwiOiBcIjQ5LjNcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjcuNVwiLCBcInlcIjogXCItMjAuMVwiLCBcInpcIjogXCItMTYuM1wifSxcclxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTEuMFwiLCBcInlcIjogXCItMC4yXCIsIFwielwiOiBcIjMuOFwifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMyLjVcIiwgXCJ5XCI6IFwiLTEuM1wiLCBcInpcIjogXCI1MC41XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCI3LjVcIiwgXCJ5XCI6IFwiLTIwLjFcIiwgXCJ6XCI6IFwiLTE2LjNcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0xLjFcIiwgXCJ5XCI6IFwiMC4yXCIsIFwielwiOiBcIjMuOVwifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMyLjVcIiwgXCJ5XCI6IFwiLTEuM1wiLCBcInpcIjogXCI1MC41XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCI3LjVcIiwgXCJ5XCI6IFwiLTIwLjFcIiwgXCJ6XCI6IFwiLTE2LjNcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0xLjFcIiwgXCJ5XCI6IFwiMC4yXCIsIFwielwiOiBcIjMuOVwifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMzLjJcIiwgXCJ5XCI6IFwiLTEuMVwiLCBcInpcIjogXCI0Ni4wXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCI3LjVcIiwgXCJ5XCI6IFwiLTIwLjFcIiwgXCJ6XCI6IFwiLTE2LjNcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0xLjNcIiwgXCJ5XCI6IFwiMC4xXCIsIFwielwiOiBcIjMuOFwifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMzLjJcIiwgXCJ5XCI6IFwiLTEuMVwiLCBcInpcIjogXCI0Ni4wXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCI3LjVcIiwgXCJ5XCI6IFwiLTIwLjFcIiwgXCJ6XCI6IFwiLTE2LjNcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0xLjNcIiwgXCJ5XCI6IFwiMC4xXCIsIFwielwiOiBcIjMuOFwifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTM0LjJcIiwgXCJ5XCI6IFwiLTAuM1wiLCBcInpcIjogXCI0OS4xXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCI3LjVcIiwgXCJ5XCI6IFwiLTIwLjFcIiwgXCJ6XCI6IFwiLTE2LjNcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0xLjFcIiwgXCJ5XCI6IFwiMC4yXCIsIFwielwiOiBcIjMuOVwifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTM0LjJcIiwgXCJ5XCI6IFwiLTAuM1wiLCBcInpcIjogXCI0OS4xXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCI3LjVcIiwgXCJ5XCI6IFwiLTIwLjFcIiwgXCJ6XCI6IFwiLTE2LjNcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0xLjFcIiwgXCJ5XCI6IFwiMC4yXCIsIFwielwiOiBcIjMuOVwifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTM0LjJcIiwgXCJ5XCI6IFwiLTAuM1wiLCBcInpcIjogXCI0OS4xXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCI3LjVcIiwgXCJ5XCI6IFwiLTIwLjFcIiwgXCJ6XCI6IFwiLTE2LjNcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wibGVmdFwiOiBmYWxzZSwgXCJyaWdodFwiOiBmYWxzZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMS4xXCIsIFwieVwiOiBcIjAuMlwiLCBcInpcIjogXCIzLjlcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zNC4xXCIsIFwieVwiOiBcIi0wLjFcIiwgXCJ6XCI6IFwiNTMuN1wifSxcclxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiNy41XCIsIFwieVwiOiBcIi0yMC4xXCIsIFwielwiOiBcIi0xNi4zXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImxlZnRcIjogZmFsc2UsIFwicmlnaHRcIjogZmFsc2V9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTEuNlwiLCBcInlcIjogXCItMC4xXCIsIFwielwiOiBcIjMuNlwifSxcclxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTM0LjFcIiwgXCJ5XCI6IFwiLTAuMVwiLCBcInpcIjogXCI1My43XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCI3LjVcIiwgXCJ5XCI6IFwiLTIwLjFcIiwgXCJ6XCI6IFwiLTE2LjNcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wibGVmdFwiOiBmYWxzZSwgXCJyaWdodFwiOiBmYWxzZX1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMS42XCIsIFwieVwiOiBcIi0wLjFcIiwgXCJ6XCI6IFwiMy42XCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzQuMVwiLCBcInlcIjogXCItMC4xXCIsIFwielwiOiBcIjUzLjdcIn0sXHJcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjYuNVwiLCBcInlcIjogXCI2LjBcIiwgXCJ6XCI6IFwiLTMuNlwifSxcclxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJsZWZ0XCI6IGZhbHNlLCBcInJpZ2h0XCI6IGZhbHNlfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0xLjZcIiwgXCJ5XCI6IFwiLTAuMVwiLCBcInpcIjogXCIzLjZcIn0sXHJcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMy42XCIsIFwieVwiOiBcIjAuMFwiLCBcInpcIjogXCI0Ny4wXCJ9LFxyXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCI2LjVcIiwgXCJ5XCI6IFwiNi4wXCIsIFwielwiOiBcIi0zLjZcIn0sXHJcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wibGVmdFwiOiBmYWxzZSwgXCJyaWdodFwiOiBmYWxzZX1cclxuICAgICAgICB9XVxyXG59IiwiaW1wb3J0IFNhbXBsZURhdGEgZnJvbSAnLi4vLi4vcmVjb3JkaW5nLmVzNic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBpbmRleCBvZiBjdXJyZW50IHNlbnNvciBzbmFwc2hvdCBpbiBzaW0gbW9kZVxyXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLl9zaW1JbmRleCA9IDA7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHNvY2tldCBjb25uZWN0aW9uXHJcbiAgICAgICAgICogQHR5cGUge251bGx9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5zb2NrZXQgPSBudWxsO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBpZiBhbHJlYWR5IGNvbm5lY3RlZFxyXG4gICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuX2Nvbm5lY3RlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBldmVudCBsaXN0ZW5lcnNcclxuICAgICAgICAgKiBAdHlwZSB7QXJyYXl9XHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVycyA9IFtdO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBiYXNlIFVVSURcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLl9iYXNlVVVJRCA9IFsnZjAwMCcsICctMDQ1MS00MDAwLWIwMDAtMDAwMDAwMDAwMDAwJ107XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIHNlcnZpY2UgVVVJRFNcclxuICAgICAgICAgKiBAdHlwZSB7e319XHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLl91dWlkID0ge307XHJcbiAgICAgICAgdGhpcy5fdXVpZC50ZW1wZXJhdHVyZSA9IHRoaXMuX2Jhc2VVVUlEWzBdICsgJ2FhMDAnICsgdGhpcy5fYmFzZVVVSURbMV07XHJcbiAgICAgICAgdGhpcy5fdXVpZC50ZW1wZXJhdHVyZURhdGEgPSB0aGlzLl9iYXNlVVVJRFswXSArICdhYTAxJyArIHRoaXMuX2Jhc2VVVUlEWzFdO1xyXG4gICAgICAgIHRoaXMuX3V1aWQudGVtcGVyYXR1cmVDb25maWd1cmF0aW9uID0gdGhpcy5fYmFzZVVVSURbMF0gKyAnYWEwMicgKyB0aGlzLl9iYXNlVVVJRFsxXTtcclxuICAgICAgICB0aGlzLl91dWlkLnRlbXBlcmF0dXJlUGVyaW9kID0gdGhpcy5fYmFzZVVVSURbMF0gKyAnYWEwMycgKyB0aGlzLl9iYXNlVVVJRFsxXTtcclxuXHJcbiAgICAgICAgdGhpcy5fdXVpZC5hY2NlbGVyb21ldGVyID0gdGhpcy5fYmFzZVVVSURbMF0gKyAnYWExMCcgKyB0aGlzLl9iYXNlVVVJRFsxXTtcclxuICAgICAgICB0aGlzLl91dWlkLmFjY2VsZXJvbWV0ZXJEYXRhID0gdGhpcy5fYmFzZVVVSURbMF0gKyAnYWExMScgKyB0aGlzLl9iYXNlVVVJRFsxXTtcclxuICAgICAgICB0aGlzLl91dWlkLmFjY2VsZXJvbWV0ZXJDb25maWd1cmF0aW9uID0gdGhpcy5fYmFzZVVVSURbMF0gKyAnYWExMicgKyB0aGlzLl9iYXNlVVVJRFsxXTtcclxuICAgICAgICB0aGlzLl91dWlkLmFjY2VsZXJvbWV0ZXJQZXJpb2QgPSB0aGlzLl9iYXNlVVVJRFswXSArICdhYTEzJyArIHRoaXMuX2Jhc2VVVUlEWzFdO1xyXG5cclxuICAgICAgICB0aGlzLl91dWlkLmh1bWlkaXR5ID0gdGhpcy5fYmFzZVVVSURbMF0gKyAnYWEyMCcgKyB0aGlzLl9iYXNlVVVJRFsxXTtcclxuICAgICAgICB0aGlzLl91dWlkLmh1bWlkaXR5RGF0YSA9IHRoaXMuX2Jhc2VVVUlEWzBdICsgJ2FhMjEnICsgdGhpcy5fYmFzZVVVSURbMV07XHJcbiAgICAgICAgdGhpcy5fdXVpZC5odW1pZGl0eUNvbmZpZ3VyYXRpb24gPSB0aGlzLl9iYXNlVVVJRFswXSArICdhYTIyJyArIHRoaXMuX2Jhc2VVVUlEWzFdO1xyXG4gICAgICAgIHRoaXMuX3V1aWQuaHVtaWRpdHlQZXJpb2QgPSB0aGlzLl9iYXNlVVVJRFswXSArICdhYTIzJyArIHRoaXMuX2Jhc2VVVUlEWzFdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY29ubmVjdCB0byBzZW5zb3J0YWdcclxuICAgICAqIEBwYXJhbSBjYiBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBzaW1sdWF0ZSBkYXRhXHJcbiAgICAgKi9cclxuICAgIGNvbm5lY3QoY2IsIHNpbXVsYXRlKSB7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnMucHVzaChjYik7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3RlZCkgeyByZXR1cm47IH1cclxuICAgICAgICB0aGlzLmNvbm5lY3RlZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKHNpbXVsYXRlKSB7XHJcbiAgICAgICAgICAgIHNldEludGVydmFsKCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYigndXBkYXRlJywgdGhpcy5nZXRTaW11bGF0ZWRTZW5zb3JzKCkpO1xyXG4gICAgICAgICAgICB9LCAyMDApO1xyXG5cclxuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNiKCd1cGRhdGUnLCB0aGlzLmdldFNpbXVsYXRlZEJ1dHRvbnMoKSk7XHJcbiAgICAgICAgICAgIH0sIE1hdGgucmFuZG9tKCkgKiAxMDAwMCArIDIwMDApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIW5hdmlnYXRvci5ibHVldG9vdGgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIGJsdWV0b290aCBzdXBwb3J0IGluIHlvdXIgYnJvd3NlciwgdHJ5aW5nIHdlYnNvY2tldHMgZnJvbSBhIGxvY2FsIG5vZGUgc2VydmVyJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0ID0gbmV3IFdlYlNvY2tldCgnd3M6Ly9sb2NhbGhvc3Q6ODA4MCcpO1xyXG4gICAgICAgICAgICB0aGlzLnNvY2tldC5vbmVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7IGNvbnNvbGUubG9nKCdXZWJTb2NrZXQgRXJyb3IgJyArIGVycm9yKTsgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0Lm9ubWVzc2FnZSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbXNnID0gSlNPTi5wYXJzZShlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCB0aGlzLl9ldmVudExpc3RlbmVycy5sZW5ndGg7IGMrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJzW2NdKCd1cGRhdGUnLCBtc2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQub25vcGVuID0gKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc29ja2V0LnNlbmQoJ2Nvbm5lY3QnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuYXZpZ2F0b3IuYmx1ZXRvb3RoLnJlcXVlc3REZXZpY2UoXHJcbiAgICAgICAgICAgICAgICB7ICAgZmlsdGVyczogWyB7bmFtZTogJ1NlbnNvclRhZyd9LCB7IHNlcnZpY2VzOiBbIHRoaXMuX3V1aWQudGVtcGVyYXR1cmUsIHRoaXMuX3V1aWQuYWNjZWxlcm9tZXRlciwgdGhpcy5fdXVpZC5odW1pZGl0eSBdIH1dLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsU2VydmljZXM6IFsgdGhpcy5fdXVpZC50ZW1wZXJhdHVyZSwgdGhpcy5fdXVpZC5hY2NlbGVyb21ldGVyLCB0aGlzLl91dWlkLmh1bWlkaXR5IF0gfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGRldmljZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dvdCBkZXZpY2U6JywgZGV2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaWQ6JywgZGV2aWNlLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29ubmVjdGVkID0gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkZXZpY2UuY29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3RlZCA9IGRldmljZS5nYXR0LmNvbm5lY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXZpY2UgPSBkZXZpY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbm5lY3RlZDtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihzZXJ2ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHZXR0aW5nIFNlcnZpY2XigKYnLCBzZXJ2ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vcmV0dXJuIHNlcnZlci5nZXRQcmltYXJ5U2VydmljZSgnZjAwMGFhMTAtMDQ1MS00MDAwLWIwMDAtMDAwMDAwMDAwMDAwJyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHRoaXMub25EZXZpY2VFcnJvcihlcnJvcikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldCBzaW11bGF0ZWQgc2Vuc29yIGRhdGEgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIGdldFNpbXVsYXRlZFNlbnNvcnMoKSB7XHJcbiAgICAgICAgdmFyIHNpbSA9IHtcclxuICAgICAgICAgICAgY29ubmVjdGVkOiB0cnVlLFxyXG4gICAgICAgICAgICBkZXZpY2U6IHtcclxuICAgICAgICAgICAgICAgIHN5c3RlbWlkOiAneHh4eHgnLFxyXG4gICAgICAgICAgICAgICAgZmlybXdhcmU6ICd4eHh4eCcsXHJcbiAgICAgICAgICAgICAgICBtYW51ZmFjdHVyZXI6ICd4eHh4eCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGFjY2VsZXJvbWV0ZXIgPSBTYW1wbGVEYXRhLnNhbXBsZXNbdGhpcy5fc2ltSW5kZXhdLmFjY2VsZXJvbWV0ZXI7XHJcbiAgICAgICAgdmFyIGd5cm9zY29wZSA9IFNhbXBsZURhdGEuc2FtcGxlc1t0aGlzLl9zaW1JbmRleF0uZ3lyb3Njb3BlO1xyXG5cclxuICAgICAgICBzaW0uc2Vuc29ycyA9IHtcclxuICAgICAgICAgICAgYWNjZWxlcm9tZXRlcjoge1xyXG4gICAgICAgICAgICAgICAgeDogYWNjZWxlcm9tZXRlci54LFxyXG4gICAgICAgICAgICAgICAgeTogYWNjZWxlcm9tZXRlci55LFxyXG4gICAgICAgICAgICAgICAgejogYWNjZWxlcm9tZXRlci56XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGd5cm9zY29wZToge1xyXG4gICAgICAgICAgICAgICAgeDogZ3lyb3Njb3BlLnggLyAxMCxcclxuICAgICAgICAgICAgICAgIHk6IGd5cm9zY29wZS55IC8gMTAsXHJcbiAgICAgICAgICAgICAgICB6OiBneXJvc2NvcGUueiAvIDEwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX3NpbUluZGV4ICsrO1xyXG4gICAgICAgIGlmICh0aGlzLl9zaW1JbmRleCA+PSBTYW1wbGVEYXRhLnNhbXBsZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NpbUluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2ltLnRpbWVTdGFtcCAtIHRoaXMuX3NpbUluZGV4ICogMTU7XHJcbiAgICAgICAgcmV0dXJuIHNpbTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldCBzaW11bGF0ZWQgYnV0dG9uIGRhdGEgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIGdldFNpbXVsYXRlZEJ1dHRvbnMoKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmdldFNpbXVsYXRlZFNlbnNvcnMoKTtcclxuICAgICAgICBkYXRhLnNlbnNvcnMuYnV0dG9ucyA9IHsgYWN0aXZlOiB0cnVlLCBlbmFibGVkOiB0cnVlIH07XHJcbiAgICAgICAgZGF0YS5zZW5zb3JzLmJ1dHRvbnMubGVmdCA9IE1hdGgucmFuZG9tKCkgPiAuNTtcclxuICAgICAgICBkYXRhLnNlbnNvcnMuYnV0dG9ucy5yaWdodCA9IE1hdGgucmFuZG9tKCkgPiAuNTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG9uIGRldmljZSByZXF1ZXN0ZWQgc3VjY2Vzc1xyXG4gICAgICogQHBhcmFtIGRldmljZVxyXG4gICAgICovXHJcbiAgICBvbkRldmljZVJlcXVlc3RlZFN1Y2Nlc3MoZGV2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0ZWQgPSBkZXZpY2UuZ2F0dC5jb25uZWN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBvbiBkZXZpY2UgcmVxdWVzdGVkIGVycm9yXHJcbiAgICAgKiBAcGFyYW0gZGV2aWNlXHJcbiAgICAgKi9cclxuICAgIG9uRGV2aWNlRXJyb3IoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiBIZWF2aWx5IGxpZnRlZCBmcm9tIFdlYlZSLVBvbHlmaWxsIHByb2plY3QgYnkgQm9yaXMgU211czogaHR0cHM6Ly9naXRodWIuY29tL2JvcmlzbXVzL3dlYnZyLXBvbHlmaWxsXHJcbiAqIGJ1dCByZWZhY3RvcmVkIHRvIHVzZSBkaWZmZXJlbnQgZGF0YSBzb3VyY2UgcHJvdmlkZWQgb3ZlciBCTEUgYnkgdGhlIFRJIFNlbnNvciBUYWdcclxuICpcclxuICogVGhpcyBwaWVjZSBpbiBwYXJ0aWN1bGFyIHdhcyBhbHNvIHB1bGxlZCBieSBCb3JpcyBmcm9tIFRocmVlSlMgbWF0aFxyXG4gKlxyXG4gKiBvcmlnaW5hbCBsaWNlbnNlIGZyb20gV2ViVlItUG9seWZpbGwgaXMgYXMgZm9sbG93czpcclxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5pbXBvcnQgVmVjdG9yMyBmcm9tICcuL3ZlY3RvcjMuZXM2JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuICAgIGNvbnN0cnVjdG9yKCB4LCB5LCB6LCB3ICkge1xyXG4gICAgICAgIHRoaXMueCA9IHggfHwgMDtcclxuICAgICAgICB0aGlzLnkgPSB5IHx8IDA7XHJcbiAgICAgICAgdGhpcy56ID0geiB8fCAwO1xyXG4gICAgICAgIHRoaXMudyA9ICggdyAhPT0gdW5kZWZpbmVkICkgPyB3IDogMTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQoIHgsIHksIHosIHcgKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMueiA9IHo7XHJcbiAgICAgICAgdGhpcy53ID0gdztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY29weSggcXVhdGVybmlvbiApIHtcclxuICAgICAgICB0aGlzLnggPSBxdWF0ZXJuaW9uLng7XHJcbiAgICAgICAgdGhpcy55ID0gcXVhdGVybmlvbi55O1xyXG4gICAgICAgIHRoaXMueiA9IHF1YXRlcm5pb24uejtcclxuICAgICAgICB0aGlzLncgPSBxdWF0ZXJuaW9uLnc7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEZyb21FdWxlclhZWiggeCwgeSwgeiApIHtcclxuICAgICAgICB2YXIgYzEgPSBNYXRoLmNvcyggeCAvIDIgKTtcclxuICAgICAgICB2YXIgYzIgPSBNYXRoLmNvcyggeSAvIDIgKTtcclxuICAgICAgICB2YXIgYzMgPSBNYXRoLmNvcyggeiAvIDIgKTtcclxuICAgICAgICB2YXIgczEgPSBNYXRoLnNpbiggeCAvIDIgKTtcclxuICAgICAgICB2YXIgczIgPSBNYXRoLnNpbiggeSAvIDIgKTtcclxuICAgICAgICB2YXIgczMgPSBNYXRoLnNpbiggeiAvIDIgKTtcclxuXHJcbiAgICAgICAgdGhpcy54ID0gczEgKiBjMiAqIGMzICsgYzEgKiBzMiAqIHMzO1xyXG4gICAgICAgIHRoaXMueSA9IGMxICogczIgKiBjMyAtIHMxICogYzIgKiBzMztcclxuICAgICAgICB0aGlzLnogPSBjMSAqIGMyICogczMgKyBzMSAqIHMyICogYzM7XHJcbiAgICAgICAgdGhpcy53ID0gYzEgKiBjMiAqIGMzIC0gczEgKiBzMiAqIHMzO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRGcm9tRXVsZXJZWFooIHgsIHksIHogKSB7XHJcbiAgICAgICAgdmFyIGMxID0gTWF0aC5jb3MoIHggLyAyICk7XHJcbiAgICAgICAgdmFyIGMyID0gTWF0aC5jb3MoIHkgLyAyICk7XHJcbiAgICAgICAgdmFyIGMzID0gTWF0aC5jb3MoIHogLyAyICk7XHJcbiAgICAgICAgdmFyIHMxID0gTWF0aC5zaW4oIHggLyAyICk7XHJcbiAgICAgICAgdmFyIHMyID0gTWF0aC5zaW4oIHkgLyAyICk7XHJcbiAgICAgICAgdmFyIHMzID0gTWF0aC5zaW4oIHogLyAyICk7XHJcblxyXG4gICAgICAgIHRoaXMueCA9IHMxICogYzIgKiBjMyArIGMxICogczIgKiBzMztcclxuICAgICAgICB0aGlzLnkgPSBjMSAqIHMyICogYzMgLSBzMSAqIGMyICogczM7XHJcbiAgICAgICAgdGhpcy56ID0gYzEgKiBjMiAqIHMzIC0gczEgKiBzMiAqIGMzO1xyXG4gICAgICAgIHRoaXMudyA9IGMxICogYzIgKiBjMyArIHMxICogczIgKiBzMztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RnJvbUF4aXNBbmdsZSggYXhpcywgYW5nbGUgKSB7XHJcbiAgICAgICAgLy8gaHR0cDovL3d3dy5ldWNsaWRlYW5zcGFjZS5jb20vbWF0aHMvZ2VvbWV0cnkvcm90YXRpb25zL2NvbnZlcnNpb25zL2FuZ2xlVG9RdWF0ZXJuaW9uL2luZGV4Lmh0bVxyXG4gICAgICAgIC8vIGFzc3VtZXMgYXhpcyBpcyBub3JtYWxpemVkXHJcblxyXG4gICAgICAgIHZhciBoYWxmQW5nbGUgPSBhbmdsZSAvIDIsIHMgPSBNYXRoLnNpbiggaGFsZkFuZ2xlICk7XHJcblxyXG4gICAgICAgIHRoaXMueCA9IGF4aXMueCAqIHM7XHJcbiAgICAgICAgdGhpcy55ID0gYXhpcy55ICogcztcclxuICAgICAgICB0aGlzLnogPSBheGlzLnogKiBzO1xyXG4gICAgICAgIHRoaXMudyA9IE1hdGguY29zKCBoYWxmQW5nbGUgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbXVsdGlwbHkoIHEgKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubXVsdGlwbHlRdWF0ZXJuaW9ucyggdGhpcywgcSApO1xyXG4gICAgfVxyXG5cclxuICAgIG11bHRpcGx5UXVhdGVybmlvbnMoIGEsIGIgKSB7XHJcbiAgICAgICAgLy8gZnJvbSBodHRwOi8vd3d3LmV1Y2xpZGVhbnNwYWNlLmNvbS9tYXRocy9hbGdlYnJhL3JlYWxOb3JtZWRBbGdlYnJhL3F1YXRlcm5pb25zL2NvZGUvaW5kZXguaHRtXHJcblxyXG4gICAgICAgIHZhciBxYXggPSBhLngsIHFheSA9IGEueSwgcWF6ID0gYS56LCBxYXcgPSBhLnc7XHJcbiAgICAgICAgdmFyIHFieCA9IGIueCwgcWJ5ID0gYi55LCBxYnogPSBiLnosIHFidyA9IGIudztcclxuXHJcbiAgICAgICAgdGhpcy54ID0gcWF4ICogcWJ3ICsgcWF3ICogcWJ4ICsgcWF5ICogcWJ6IC0gcWF6ICogcWJ5O1xyXG4gICAgICAgIHRoaXMueSA9IHFheSAqIHFidyArIHFhdyAqIHFieSArIHFheiAqIHFieCAtIHFheCAqIHFiejtcclxuICAgICAgICB0aGlzLnogPSBxYXogKiBxYncgKyBxYXcgKiBxYnogKyBxYXggKiBxYnkgLSBxYXkgKiBxYng7XHJcbiAgICAgICAgdGhpcy53ID0gcWF3ICogcWJ3IC0gcWF4ICogcWJ4IC0gcWF5ICogcWJ5IC0gcWF6ICogcWJ6O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBpbnZlcnNlKCkge1xyXG4gICAgICAgIHRoaXMueCAqPSAtMTtcclxuICAgICAgICB0aGlzLnkgKj0gLTE7XHJcbiAgICAgICAgdGhpcy56ICo9IC0xO1xyXG5cclxuICAgICAgICB0aGlzLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBub3JtYWxpemUoKSB7XHJcbiAgICAgICAgdmFyIGwgPSBNYXRoLnNxcnQoIHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSArIHRoaXMueiAqIHRoaXMueiArIHRoaXMudyAqIHRoaXMudyApO1xyXG5cclxuICAgICAgICBpZiAoIGwgPT09IDAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMueiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMudyA9IDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbCA9IDEgLyBsO1xyXG5cclxuICAgICAgICAgICAgdGhpcy54ID0gdGhpcy54ICogbDtcclxuICAgICAgICAgICAgdGhpcy55ID0gdGhpcy55ICogbDtcclxuICAgICAgICAgICAgdGhpcy56ID0gdGhpcy56ICogbDtcclxuICAgICAgICAgICAgdGhpcy53ID0gdGhpcy53ICogbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNsZXJwKCBxYiwgdCApIHtcclxuICAgICAgICBpZiAoIHQgPT09IDAgKSByZXR1cm4gdGhpcztcclxuICAgICAgICBpZiAoIHQgPT09IDEgKSByZXR1cm4gdGhpcy5jb3B5KCBxYiApO1xyXG5cclxuICAgICAgICB2YXIgeCA9IHRoaXMueCwgeSA9IHRoaXMueSwgeiA9IHRoaXMueiwgdyA9IHRoaXMudztcclxuXHJcbiAgICAgICAgLy8gaHR0cDovL3d3dy5ldWNsaWRlYW5zcGFjZS5jb20vbWF0aHMvYWxnZWJyYS9yZWFsTm9ybWVkQWxnZWJyYS9xdWF0ZXJuaW9ucy9zbGVycC9cclxuXHJcbiAgICAgICAgdmFyIGNvc0hhbGZUaGV0YSA9IHcgKiBxYi53ICsgeCAqIHFiLnggKyB5ICogcWIueSArIHogKiBxYi56O1xyXG5cclxuICAgICAgICBpZiAoIGNvc0hhbGZUaGV0YSA8IDAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMudyA9IC0gcWIudztcclxuICAgICAgICAgICAgdGhpcy54ID0gLSBxYi54O1xyXG4gICAgICAgICAgICB0aGlzLnkgPSAtIHFiLnk7XHJcbiAgICAgICAgICAgIHRoaXMueiA9IC0gcWIuejtcclxuXHJcbiAgICAgICAgICAgIGNvc0hhbGZUaGV0YSA9IC0gY29zSGFsZlRoZXRhO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29weSggcWIgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggY29zSGFsZlRoZXRhID49IDEuMCApIHtcclxuICAgICAgICAgICAgdGhpcy53ID0gdztcclxuICAgICAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICAgICAgdGhpcy56ID0gejtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGhhbGZUaGV0YSA9IE1hdGguYWNvcyggY29zSGFsZlRoZXRhICk7XHJcbiAgICAgICAgdmFyIHNpbkhhbGZUaGV0YSA9IE1hdGguc3FydCggMS4wIC0gY29zSGFsZlRoZXRhICogY29zSGFsZlRoZXRhICk7XHJcblxyXG4gICAgICAgIGlmICggTWF0aC5hYnMoIHNpbkhhbGZUaGV0YSApIDwgMC4wMDEgKSB7XHJcbiAgICAgICAgICAgIHRoaXMudyA9IDAuNSAqICggdyArIHRoaXMudyApO1xyXG4gICAgICAgICAgICB0aGlzLnggPSAwLjUgKiAoIHggKyB0aGlzLnggKTtcclxuICAgICAgICAgICAgdGhpcy55ID0gMC41ICogKCB5ICsgdGhpcy55ICk7XHJcbiAgICAgICAgICAgIHRoaXMueiA9IDAuNSAqICggeiArIHRoaXMueiApO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgcmF0aW9BID0gTWF0aC5zaW4oICggMSAtIHQgKSAqIGhhbGZUaGV0YSApIC8gc2luSGFsZlRoZXRhLFxyXG4gICAgICAgICAgICByYXRpb0IgPSBNYXRoLnNpbiggdCAqIGhhbGZUaGV0YSApIC8gc2luSGFsZlRoZXRhO1xyXG5cclxuICAgICAgICB0aGlzLncgPSAoIHcgKiByYXRpb0EgKyB0aGlzLncgKiByYXRpb0IgKTtcclxuICAgICAgICB0aGlzLnggPSAoIHggKiByYXRpb0EgKyB0aGlzLnggKiByYXRpb0IgKTtcclxuICAgICAgICB0aGlzLnkgPSAoIHkgKiByYXRpb0EgKyB0aGlzLnkgKiByYXRpb0IgKTtcclxuICAgICAgICB0aGlzLnogPSAoIHogKiByYXRpb0EgKyB0aGlzLnogKiByYXRpb0IgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RnJvbVVuaXRWZWN0b3JzKHZGcm9tLCB2VG8pIHtcclxuICAgICAgICAvLyBodHRwOi8vbG9sZW5naW5lLm5ldC9ibG9nLzIwMTQvMDIvMjQvcXVhdGVybmlvbi1mcm9tLXR3by12ZWN0b3JzLWZpbmFsXHJcbiAgICAgICAgLy8gYXNzdW1lcyBkaXJlY3Rpb24gdmVjdG9ycyB2RnJvbSBhbmQgdlRvIGFyZSBub3JtYWxpemVkXHJcbiAgICAgICAgdmFyIHYxLCByO1xyXG4gICAgICAgIHZhciBFUFMgPSAwLjAwMDAwMTtcclxuXHJcbiAgICAgICAgaWYgKHYxID09PSB1bmRlZmluZWQpIHYxID0gbmV3IFZlY3RvcjMoKTtcclxuXHJcbiAgICAgICAgciA9IHZGcm9tLmRvdCh2VG8pICsgMTtcclxuXHJcbiAgICAgICAgaWYgKHIgPCBFUFMpIHtcclxuICAgICAgICAgICAgciA9IDA7XHJcblxyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnModkZyb20ueCkgPiBNYXRoLmFicyh2RnJvbS56KSkge1xyXG4gICAgICAgICAgICAgICAgdjEuc2V0KC12RnJvbS55LCB2RnJvbS54LCAwKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHYxLnNldCgwLCAtdkZyb20ueiwgdkZyb20ueSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2MS5jcm9zc1ZlY3RvcnModkZyb20sIHZUbyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnggPSB2MS54O1xyXG4gICAgICAgIHRoaXMueSA9IHYxLnk7XHJcbiAgICAgICAgdGhpcy56ID0gdjEuejtcclxuICAgICAgICB0aGlzLncgPSByO1xyXG5cclxuICAgICAgICB0aGlzLm5vcm1hbGl6ZSgpO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIEhlYXZpbHkgbGlmdGVkIGZyb20gV2ViVlItUG9seWZpbGwgcHJvamVjdCBieSBCb3JpcyBTbXVzOiBodHRwczovL2dpdGh1Yi5jb20vYm9yaXNtdXMvd2VidnItcG9seWZpbGxcclxuICogYnV0IHJlZmFjdG9yZWQgdG8gdXNlIGRpZmZlcmVudCBkYXRhIHNvdXJjZSBwcm92aWRlZCBvdmVyIEJMRSBieSB0aGUgVEkgU2Vuc29yIFRhZ1xyXG4gKlxyXG4gKiBUaGlzIHBpZWNlIGluIHBhcnRpY3VsYXIgd2FzIGFsc28gcHVsbGVkIGJ5IEJvcmlzIGZyb20gVGhyZWVKUyBtYXRoXHJcbiAqXHJcbiAqIG9yaWdpbmFsIGxpY2Vuc2UgZnJvbSBXZWJWUi1Qb2x5ZmlsbCBpcyBhcyBmb2xsb3dzOlxyXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRlZ1RvUmFkOiBNYXRoLlBJIC8gMTgwLFxyXG4gICAgcmFkVG9EZWc6IDE4MCAvIE1hdGguUEksXHJcbiAgICBNSU5fVElNRVNURVA6IDAuMDAxLFxyXG4gICAgTUFYX1RJTUVTVEVQOiAxLFxyXG5cclxuICAgIC8vIEhlbHBlciBtZXRob2QgdG8gdmFsaWRhdGUgdGhlIHRpbWUgc3RlcHMgb2Ygc2Vuc29yIHRpbWVzdGFtcHMuXHJcbiAgICBpc1RpbWVzdGFtcERlbHRhVmFsaWQ6IGZ1bmN0aW9uKHRpbWVzdGFtcERlbHRhUykge1xyXG4gICAgICAgIGlmIChpc05hTih0aW1lc3RhbXBEZWx0YVMpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRpbWVzdGFtcERlbHRhUyA8PSB0aGlzLk1JTl9USU1FU1RFUCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aW1lc3RhbXBEZWx0YVMgPiB0aGlzLk1BWF9USU1FU1RFUCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIEhlYXZpbHkgbGlmdGVkIGZyb20gV2ViVlItUG9seWZpbGwgcHJvamVjdCBieSBCb3JpcyBTbXVzOiBodHRwczovL2dpdGh1Yi5jb20vYm9yaXNtdXMvd2VidnItcG9seWZpbGxcclxuICogYnV0IHJlZmFjdG9yZWQgdG8gdXNlIGRpZmZlcmVudCBkYXRhIHNvdXJjZSBwcm92aWRlZCBvdmVyIEJMRSBieSB0aGUgVEkgU2Vuc29yIFRhZ1xyXG4gKlxyXG4gKiBUaGlzIHBpZWNlIGluIHBhcnRpY3VsYXIgd2FzIGFsc28gcHVsbGVkIGJ5IEJvcmlzIGZyb20gVGhyZWVKUyBtYXRoXHJcbiAqXHJcbiAqIG9yaWdpbmFsIGxpY2Vuc2UgZnJvbSBXZWJWUi1Qb2x5ZmlsbCBpcyBhcyBmb2xsb3dzOlxyXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB6KSB7XHJcbiAgICAgICAgdGhpcy54ID0geCB8fCAwO1xyXG4gICAgICAgIHRoaXMueSA9IHkgfHwgMDtcclxuICAgICAgICB0aGlzLnogPSB6IHx8IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0KCB4LCB5LCB6ICkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLnogPSB6O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBjb3B5KCB2ICkge1xyXG4gICAgICAgIHRoaXMueCA9IHYueDtcclxuICAgICAgICB0aGlzLnkgPSB2Lnk7XHJcbiAgICAgICAgdGhpcy56ID0gdi56O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBsZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCggdGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55ICsgdGhpcy56ICogdGhpcy56ICk7XHJcbiAgICB9XHJcblxyXG4gICAgbm9ybWFsaXplKCkge1xyXG4gICAgICAgIHZhciBzY2FsYXIgPSB0aGlzLmxlbmd0aCgpO1xyXG5cclxuICAgICAgICBpZiAoIHNjYWxhciAhPT0gMCApIHtcclxuICAgICAgICAgICAgdmFyIGludlNjYWxhciA9IDEgLyBzY2FsYXI7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm11bHRpcGx5U2NhbGFyKGludlNjYWxhcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy54ID0gMDtcclxuICAgICAgICAgICAgdGhpcy55ID0gMDtcclxuICAgICAgICAgICAgdGhpcy56ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG11bHRpcGx5U2NhbGFyKCBzY2FsYXIgKSB7XHJcbiAgICAgICAgdGhpcy54ICo9IHNjYWxhcjtcclxuICAgICAgICB0aGlzLnkgKj0gc2NhbGFyO1xyXG4gICAgICAgIHRoaXMueiAqPSBzY2FsYXI7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwbHlRdWF0ZXJuaW9uKCBxICkge1xyXG4gICAgICAgIHZhciB4ID0gdGhpcy54O1xyXG4gICAgICAgIHZhciB5ID0gdGhpcy55O1xyXG4gICAgICAgIHZhciB6ID0gdGhpcy56O1xyXG5cclxuICAgICAgICB2YXIgcXggPSBxLng7XHJcbiAgICAgICAgdmFyIHF5ID0gcS55O1xyXG4gICAgICAgIHZhciBxeiA9IHEuejtcclxuICAgICAgICB2YXIgcXcgPSBxLnc7XHJcblxyXG4gICAgICAgIC8vIGNhbGN1bGF0ZSBxdWF0ICogdmVjdG9yXHJcbiAgICAgICAgdmFyIGl4ID0gIHF3ICogeCArIHF5ICogeiAtIHF6ICogeTtcclxuICAgICAgICB2YXIgaXkgPSAgcXcgKiB5ICsgcXogKiB4IC0gcXggKiB6O1xyXG4gICAgICAgIHZhciBpeiA9ICBxdyAqIHogKyBxeCAqIHkgLSBxeSAqIHg7XHJcbiAgICAgICAgdmFyIGl3ID0gLSBxeCAqIHggLSBxeSAqIHkgLSBxeiAqIHo7XHJcblxyXG4gICAgICAgIC8vIGNhbGN1bGF0ZSByZXN1bHQgKiBpbnZlcnNlIHF1YXRcclxuICAgICAgICB0aGlzLnggPSBpeCAqIHF3ICsgaXcgKiAtIHF4ICsgaXkgKiAtIHF6IC0gaXogKiAtIHF5O1xyXG4gICAgICAgIHRoaXMueSA9IGl5ICogcXcgKyBpdyAqIC0gcXkgKyBpeiAqIC0gcXggLSBpeCAqIC0gcXo7XHJcbiAgICAgICAgdGhpcy56ID0gaXogKiBxdyArIGl3ICogLSBxeiArIGl4ICogLSBxeSAtIGl5ICogLSBxeDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZG90KCB2ICkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnggKiB2LnggKyB0aGlzLnkgKiB2LnkgKyB0aGlzLnogKiB2Lno7XHJcbiAgICB9XHJcblxyXG4gICAgY3Jvc3NWZWN0b3JzKCBhLCBiICkge1xyXG4gICAgICAgIHZhciBheCA9IGEueCwgYXkgPSBhLnksIGF6ID0gYS56O1xyXG4gICAgICAgIHZhciBieCA9IGIueCwgYnkgPSBiLnksIGJ6ID0gYi56O1xyXG5cclxuICAgICAgICB0aGlzLnggPSBheSAqIGJ6IC0gYXogKiBieTtcclxuICAgICAgICB0aGlzLnkgPSBheiAqIGJ4IC0gYXggKiBiejtcclxuICAgICAgICB0aGlzLnogPSBheCAqIGJ5IC0gYXkgKiBieDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn07IiwiLyoqXHJcbiAqIEhlYXZpbHkgbGlmdGVkIGZyb20gV2ViVlItUG9seWZpbGwgcHJvamVjdCBieSBCb3JpcyBTbXVzOiBodHRwczovL2dpdGh1Yi5jb20vYm9yaXNtdXMvd2VidnItcG9seWZpbGxcclxuICogYnV0IHJlZmFjdG9yZWQgdG8gdXNlIGRpZmZlcmVudCBkYXRhIHNvdXJjZSBwcm92aWRlZCBvdmVyIEJMRSBieSB0aGUgVEkgU2Vuc29yIFRhZ1xyXG4gKlxyXG4gKiBvcmlnaW5hbCBsaWNlbnNlIGZyb20gV2ViVlItUG9seWZpbGwgaXMgYXMgZm9sbG93czpcclxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuXHJcbi8qKlxyXG4gKiBUT0RPOiBGaXggdXAgYWxsIFwibmV3IFRIUkVFXCIgaW5zdGFudGlhdGlvbnMgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZS5cclxuICovXHJcbmltcG9ydCBTZW5zb3JTYW1wbGUgZnJvbSAnLi9zZW5zb3Itc2FtcGxlLmVzNic7XHJcbmltcG9ydCBRdWF0ZXJuaW9uIGZyb20gICcuLi9tYXRoL3F1YXRlcm5pb24uZXM2JztcclxuaW1wb3J0IFZlY3RvcjMgZnJvbSAgJy4uL21hdGgvdmVjdG9yMy5lczYnO1xyXG5pbXBvcnQgTWF0aFV0aWwgZnJvbSAnLi4vbWF0aC91dGlsLmVzNic7XHJcblxyXG4vKipcclxuICogQW4gaW1wbGVtZW50YXRpb24gb2YgYSBzaW1wbGUgY29tcGxlbWVudGFyeSBmaWx0ZXIsIHdoaWNoIGZ1c2VzIGd5cm9zY29wZSBhbmRcclxuICogYWNjZWxlcm9tZXRlciBkYXRhIGZyb20gdGhlICdkZXZpY2Vtb3Rpb24nIGV2ZW50LlxyXG4gKlxyXG4gKiBBY2NlbGVyb21ldGVyIGRhdGEgaXMgdmVyeSBub2lzeSwgYnV0IHN0YWJsZSBvdmVyIHRoZSBsb25nIHRlcm0uXHJcbiAqIEd5cm9zY29wZSBkYXRhIGlzIHNtb290aCwgYnV0IHRlbmRzIHRvIGRyaWZ0IG92ZXIgdGhlIGxvbmcgdGVybS5cclxuICpcclxuICogVGhpcyBmdXNpb24gaXMgcmVsYXRpdmVseSBzaW1wbGU6XHJcbiAqIDEuIEdldCBvcmllbnRhdGlvbiBlc3RpbWF0ZXMgZnJvbSBhY2NlbGVyb21ldGVyIGJ5IGFwcGx5aW5nIGEgbG93LXBhc3MgZmlsdGVyXHJcbiAqICAgIG9uIHRoYXQgZGF0YS5cclxuICogMi4gR2V0IG9yaWVudGF0aW9uIGVzdGltYXRlcyBmcm9tIGd5cm9zY29wZSBieSBpbnRlZ3JhdGluZyBvdmVyIHRpbWUuXHJcbiAqIDMuIENvbWJpbmUgdGhlIHR3byBlc3RpbWF0ZXMsIHdlaWdoaW5nICgxKSBpbiB0aGUgbG9uZyB0ZXJtLCBidXQgKDIpIGZvciB0aGVcclxuICogICAgc2hvcnQgdGVybS5cclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcbiAgICBjb25zdHJ1Y3RvcihrRmlsdGVyKSB7XHJcbiAgICAgICAgdGhpcy5rRmlsdGVyID0ga0ZpbHRlcjtcclxuXHJcbiAgICAgICAgLy8gUmF3IHNlbnNvciBtZWFzdXJlbWVudHMuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50QWNjZWxNZWFzdXJlbWVudCA9IG5ldyBTZW5zb3JTYW1wbGUoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRHeXJvTWVhc3VyZW1lbnQgPSBuZXcgU2Vuc29yU2FtcGxlKCk7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c0d5cm9NZWFzdXJlbWVudCA9IG5ldyBTZW5zb3JTYW1wbGUoKTtcclxuXHJcbiAgICAgICAgLy8gQ3VycmVudCBmaWx0ZXIgb3JpZW50YXRpb25cclxuICAgICAgICB0aGlzLmZpbHRlclEgPSBuZXcgUXVhdGVybmlvbigpO1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNGaWx0ZXJRID0gbmV3IFF1YXRlcm5pb24oKTtcclxuXHJcbiAgICAgICAgLy8gT3JpZW50YXRpb24gYmFzZWQgb24gdGhlIGFjY2VsZXJvbWV0ZXIuXHJcbiAgICAgICAgdGhpcy5hY2NlbFEgPSBuZXcgUXVhdGVybmlvbigpO1xyXG4gICAgICAgIC8vIFdoZXRoZXIgb3Igbm90IHRoZSBvcmllbnRhdGlvbiBoYXMgYmVlbiBpbml0aWFsaXplZC5cclxuICAgICAgICB0aGlzLmlzT3JpZW50YXRpb25Jbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgICAgIC8vIFJ1bm5pbmcgZXN0aW1hdGUgb2YgZ3Jhdml0eSBiYXNlZCBvbiB0aGUgY3VycmVudCBvcmllbnRhdGlvbi5cclxuICAgICAgICB0aGlzLmVzdGltYXRlZEdyYXZpdHkgPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgICAgIC8vIE1lYXN1cmVkIGdyYXZpdHkgYmFzZWQgb24gYWNjZWxlcm9tZXRlci5cclxuICAgICAgICB0aGlzLm1lYXN1cmVkR3Jhdml0eSA9IG5ldyBWZWN0b3IzKCk7XHJcblxyXG4gICAgICAgIC8vIERlYnVnIG9ubHkgcXVhdGVybmlvbiBvZiBneXJvLWJhc2VkIG9yaWVudGF0aW9uLlxyXG4gICAgICAgIHRoaXMuZ3lyb0ludGVncmFsUSA9IG5ldyBRdWF0ZXJuaW9uKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFkZEFjY2VsTWVhc3VyZW1lbnQodmVjdG9yLCB0aW1lc3RhbXBTKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50QWNjZWxNZWFzdXJlbWVudC5zZXQodmVjdG9yLCB0aW1lc3RhbXBTKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRHeXJvTWVhc3VyZW1lbnQodmVjdG9yLCB0aW1lc3RhbXBTKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50R3lyb01lYXN1cmVtZW50LnNldCh2ZWN0b3IsIHRpbWVzdGFtcFMpO1xyXG5cclxuICAgICAgICB2YXIgZGVsdGFUID0gdGltZXN0YW1wUyAtIHRoaXMucHJldmlvdXNHeXJvTWVhc3VyZW1lbnQudGltZXN0YW1wUztcclxuICAgICAgICBpZiAoTWF0aFV0aWwuaXNUaW1lc3RhbXBEZWx0YVZhbGlkKGRlbHRhVCkpIHtcclxuICAgICAgICAgICAgdGhpcy5ydW5fKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnByZXZpb3VzR3lyb01lYXN1cmVtZW50LmNvcHkodGhpcy5jdXJyZW50R3lyb01lYXN1cmVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBydW5fKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc09yaWVudGF0aW9uSW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5hY2NlbFEgPSB0aGlzLmFjY2VsVG9RdWF0ZXJuaW9uXyh0aGlzLmN1cnJlbnRBY2NlbE1lYXN1cmVtZW50LnNhbXBsZSk7XHJcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNGaWx0ZXJRLmNvcHkodGhpcy5hY2NlbFEpO1xyXG4gICAgICAgICAgICB0aGlzLmlzT3JpZW50YXRpb25Jbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBkZWx0YVQgPSB0aGlzLmN1cnJlbnRHeXJvTWVhc3VyZW1lbnQudGltZXN0YW1wUyAtXHJcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNHeXJvTWVhc3VyZW1lbnQudGltZXN0YW1wUztcclxuXHJcbiAgICAgICAgLy8gQ29udmVydCBneXJvIHJvdGF0aW9uIHZlY3RvciB0byBhIHF1YXRlcm5pb24gZGVsdGEuXHJcbiAgICAgICAgdmFyIGd5cm9EZWx0YVEgPSB0aGlzLmd5cm9Ub1F1YXRlcm5pb25EZWx0YV8odGhpcy5jdXJyZW50R3lyb01lYXN1cmVtZW50LnNhbXBsZSwgZGVsdGFUKTtcclxuICAgICAgICB0aGlzLmd5cm9JbnRlZ3JhbFEubXVsdGlwbHkoZ3lyb0RlbHRhUSk7XHJcblxyXG4gICAgICAgIC8vIGZpbHRlcl8xID0gSyAqIChmaWx0ZXJfMCArIGd5cm8gKiBkVCkgKyAoMSAtIEspICogYWNjZWwuXHJcbiAgICAgICAgdGhpcy5maWx0ZXJRLmNvcHkodGhpcy5wcmV2aW91c0ZpbHRlclEpO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyUS5tdWx0aXBseShneXJvRGVsdGFRKTtcclxuXHJcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBkZWx0YSBiZXR3ZWVuIHRoZSBjdXJyZW50IGVzdGltYXRlZCBncmF2aXR5IGFuZCB0aGUgcmVhbFxyXG4gICAgICAgIC8vIGdyYXZpdHkgdmVjdG9yIGZyb20gYWNjZWxlcm9tZXRlci5cclxuICAgICAgICB2YXIgaW52RmlsdGVyUSA9IG5ldyBRdWF0ZXJuaW9uKCk7XHJcbiAgICAgICAgaW52RmlsdGVyUS5jb3B5KHRoaXMuZmlsdGVyUSk7XHJcbiAgICAgICAgaW52RmlsdGVyUS5pbnZlcnNlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZXN0aW1hdGVkR3Jhdml0eS5zZXQoMCwgMCwgLTEpO1xyXG4gICAgICAgIHRoaXMuZXN0aW1hdGVkR3Jhdml0eS5hcHBseVF1YXRlcm5pb24oaW52RmlsdGVyUSk7XHJcbiAgICAgICAgdGhpcy5lc3RpbWF0ZWRHcmF2aXR5Lm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLm1lYXN1cmVkR3Jhdml0eS5jb3B5KHRoaXMuY3VycmVudEFjY2VsTWVhc3VyZW1lbnQuc2FtcGxlKTtcclxuICAgICAgICB0aGlzLm1lYXN1cmVkR3Jhdml0eS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICAgICAgLy8gQ29tcGFyZSBlc3RpbWF0ZWQgZ3Jhdml0eSB3aXRoIG1lYXN1cmVkIGdyYXZpdHksIGdldCB0aGUgZGVsdGEgcXVhdGVybmlvblxyXG4gICAgICAgIC8vIGJldHdlZW4gdGhlIHR3by5cclxuICAgICAgICB2YXIgZGVsdGFRID0gbmV3IFF1YXRlcm5pb24oKTtcclxuICAgICAgICBkZWx0YVEuc2V0RnJvbVVuaXRWZWN0b3JzKHRoaXMuZXN0aW1hdGVkR3Jhdml0eSwgdGhpcy5tZWFzdXJlZEdyYXZpdHkpO1xyXG4gICAgICAgIGRlbHRhUS5pbnZlcnNlKCk7XHJcblxyXG4gICAgICAgIC8qaWYgKERFQlVHKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEZWx0YTogJWQgZGVnLCBHX2VzdDogKCVzLCAlcywgJXMpLCBHX21lYXM6ICglcywgJXMsICVzKScsXHJcbiAgICAgICAgICAgICAgICBNYXRoVXRpbC5yYWRUb0RlZyAqIFV0aWwuZ2V0UXVhdGVybmlvbkFuZ2xlKGRlbHRhUSksXHJcbiAgICAgICAgICAgICAgICAodGhpcy5lc3RpbWF0ZWRHcmF2aXR5LngpLnRvRml4ZWQoMSksXHJcbiAgICAgICAgICAgICAgICAodGhpcy5lc3RpbWF0ZWRHcmF2aXR5LnkpLnRvRml4ZWQoMSksXHJcbiAgICAgICAgICAgICAgICAodGhpcy5lc3RpbWF0ZWRHcmF2aXR5LnopLnRvRml4ZWQoMSksXHJcbiAgICAgICAgICAgICAgICAodGhpcy5tZWFzdXJlZEdyYXZpdHkueCkudG9GaXhlZCgxKSxcclxuICAgICAgICAgICAgICAgICh0aGlzLm1lYXN1cmVkR3Jhdml0eS55KS50b0ZpeGVkKDEpLFxyXG4gICAgICAgICAgICAgICAgKHRoaXMubWVhc3VyZWRHcmF2aXR5LnopLnRvRml4ZWQoMSkpO1xyXG4gICAgICAgIH0qL1xyXG5cclxuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIFNMRVJQIHRhcmdldDogY3VycmVudCBvcmllbnRhdGlvbiBwbHVzIHRoZSBtZWFzdXJlZC1lc3RpbWF0ZWRcclxuICAgICAgICAvLyBxdWF0ZXJuaW9uIGRlbHRhLlxyXG4gICAgICAgIHZhciB0YXJnZXRRID0gbmV3IFF1YXRlcm5pb24oKTtcclxuICAgICAgICB0YXJnZXRRLmNvcHkodGhpcy5maWx0ZXJRKTtcclxuICAgICAgICB0YXJnZXRRLm11bHRpcGx5KGRlbHRhUSk7XHJcblxyXG4gICAgICAgIC8vIFNMRVJQIGZhY3RvcjogMCBpcyBwdXJlIGd5cm8sIDEgaXMgcHVyZSBhY2NlbC5cclxuICAgICAgICB0aGlzLmZpbHRlclEuc2xlcnAodGFyZ2V0USwgMSAtIHRoaXMua0ZpbHRlcik7XHJcblxyXG4gICAgICAgIHRoaXMucHJldmlvdXNGaWx0ZXJRLmNvcHkodGhpcy5maWx0ZXJRKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRPcmllbnRhdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJRO1xyXG4gICAgfVxyXG5cclxuICAgIGFjY2VsVG9RdWF0ZXJuaW9uXyhhY2NlbCkge1xyXG4gICAgICAgIHZhciBub3JtQWNjZWwgPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgICAgIG5vcm1BY2NlbC5jb3B5KGFjY2VsKTtcclxuICAgICAgICBub3JtQWNjZWwubm9ybWFsaXplKCk7XHJcbiAgICAgICAgdmFyIHF1YXQgPSBuZXcgUXVhdGVybmlvbigpO1xyXG4gICAgICAgIHF1YXQuc2V0RnJvbVVuaXRWZWN0b3JzKG5ldyBWZWN0b3IzKDAsIDAsIC0xKSwgbm9ybUFjY2VsKTtcclxuICAgICAgICBxdWF0LmludmVyc2UoKTtcclxuICAgICAgICByZXR1cm4gcXVhdDtcclxuICAgIH1cclxuXHJcbiAgICBneXJvVG9RdWF0ZXJuaW9uRGVsdGFfKGd5cm8sIGR0KSB7XHJcbiAgICAgICAgLy8gRXh0cmFjdCBheGlzIGFuZCBhbmdsZSBmcm9tIHRoZSBneXJvc2NvcGUgZGF0YS5cclxuICAgICAgICB2YXIgcXVhdCA9IG5ldyBRdWF0ZXJuaW9uKCk7XHJcbiAgICAgICAgdmFyIGF4aXMgPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgICAgIGF4aXMuY29weShneXJvKTtcclxuICAgICAgICBheGlzLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIHF1YXQuc2V0RnJvbUF4aXNBbmdsZShheGlzLCBneXJvLmxlbmd0aCgpICogZHQpO1xyXG4gICAgICAgIHJldHVybiBxdWF0O1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgS19GSUxURVI6IDAuOTgsIC8vIERlZmF1bHQ6IDAuOTguXHJcblxyXG4gICAgLy8gSG93IGZhciBpbnRvIHRoZSBmdXR1cmUgdG8gcHJlZGljdCBkdXJpbmcgZmFzdCBtb3Rpb24gKGluIHNlY29uZHMpLlxyXG4gICAgUFJFRElDVElPTl9USU1FX1M6IDAuMDQwLCAvLyBEZWZhdWx0OiAwLjA0MC5cclxuXHJcbiAgICBZQVdfT05MWTogdHJ1ZVxyXG59IiwiLyoqXHJcbiAqIEhlYXZpbHkgbGlmdGVkIGZyb20gV2ViVlItUG9seWZpbGwgcHJvamVjdCBieSBCb3JpcyBTbXVzOiBodHRwczovL2dpdGh1Yi5jb20vYm9yaXNtdXMvd2VidnItcG9seWZpbGxcclxuICogYnV0IHJlZmFjdG9yZWQgdG8gdXNlIGRpZmZlcmVudCBkYXRhIHNvdXJjZSBwcm92aWRlZCBvdmVyIEJMRSBieSB0aGUgVEkgU2Vuc29yIFRhZ1xyXG4gKlxyXG4gKiBvcmlnaW5hbCBsaWNlbnNlIGZyb20gV2ViVlItUG9seWZpbGwgaXMgYXMgZm9sbG93czpcclxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5pbXBvcnQgQ29tcGxlbWVudGFyeUZpbHRlciBmcm9tICcuL2NvbXBsZW1lbnRhcnktZmlsdGVyLmVzNic7XHJcbmltcG9ydCBQb3NlUHJlZGljdG9yIGZyb20gJy4vcG9zZS1wcmVkaWN0b3IuZXM2JztcclxuLy9pbXBvcnQgVG91Y2hQYW5uZXIgZnJvbSAnLi4vdG91Y2gtcGFubmVyLmVzNic7XHJcbmltcG9ydCBNYXRoVXRpbCBmcm9tICcuLi9tYXRoL3V0aWwuZXM2JztcclxuaW1wb3J0IFZlY3RvcjMgZnJvbSAnLi4vbWF0aC92ZWN0b3IzLmVzNic7XHJcbmltcG9ydCBRdWF0ZXJuaW9uIGZyb20gJy4uL21hdGgvcXVhdGVybmlvbi5lczYnO1xyXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4vY29uZmlnLmVzNic7XHJcblxyXG4vKipcclxuICogVGhlIHBvc2Ugc2Vuc29yLCBpbXBsZW1lbnRlZCB1c2luZyBEZXZpY2VNb3Rpb24gQVBJcy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZGV2aWNlSWQgPSAnd2VidnItcG9seWZpbGw6ZnVzZWQnO1xyXG4gICAgICAgIHRoaXMuZGV2aWNlTmFtZSA9ICdWUiBQb3NpdGlvbiBEZXZpY2UgKHdlYnZyLXBvbHlmaWxsOmZ1c2VkKSc7XHJcblxyXG4gICAgICAgIHRoaXMuYWNjZWxlcm9tZXRlciA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgdGhpcy5neXJvc2NvcGUgPSBuZXcgVmVjdG9yMygpO1xyXG5cclxuICAgICAgICAvL3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2Vtb3Rpb24nLCB0aGlzLm9uRGV2aWNlTW90aW9uQ2hhbmdlXy5iaW5kKHRoaXMpKTtcclxuICAgICAgICAvL3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIHRoaXMub25TY3JlZW5PcmllbnRhdGlvbkNoYW5nZV8uYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuZmlsdGVyID0gbmV3IENvbXBsZW1lbnRhcnlGaWx0ZXIoQ29uZmlnLktfRklMVEVSKTtcclxuICAgICAgICB0aGlzLnBvc2VQcmVkaWN0b3IgPSBuZXcgUG9zZVByZWRpY3RvcihDb25maWcuUFJFRElDVElPTl9USU1FX1MpO1xyXG4gICAgIC8vICAgdGhpcy50b3VjaFBhbm5lciA9IG5ldyBUb3VjaFBhbm5lcigpO1xyXG5cclxuICAgICAgICB0aGlzLmZpbHRlclRvV29ybGRRID0gbmV3IFF1YXRlcm5pb24oKTtcclxuXHJcbiAgICAgICAgLy8gU2V0IHRoZSBmaWx0ZXIgdG8gd29ybGQgdHJhbnNmb3JtLCBkZXBlbmRpbmcgb24gT1MuXHJcbiAgICAgICAgLy9pZiAoVXRpbC5pc0lPUygpKSB7XHJcbiAgICAgICAvLyB0aGlzLmZpbHRlclRvV29ybGRRLnNldEZyb21BeGlzQW5nbGUobmV3IFZlY3RvcjMoMSwgMCwgMCksIE1hdGguUEkgLyAyKTtcclxuICAgICAgICAvL30gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmZpbHRlclRvV29ybGRRLnNldEZyb21BeGlzQW5nbGUobmV3IFZlY3RvcjMoMSwgMCwgMCksIC1NYXRoLlBJIC8gMik7XHJcbiAgICAgICAgLy99XHJcblxyXG4gICAgICAgIHRoaXMuaW52ZXJzZVdvcmxkVG9TY3JlZW5RID0gbmV3IFF1YXRlcm5pb24oKTtcclxuICAgICAgICB0aGlzLndvcmxkVG9TY3JlZW5RID0gbmV3IFF1YXRlcm5pb24oKTtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsUG9zZUFkanVzdFEgPSBuZXcgUXVhdGVybmlvbigpO1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxQb3NlQWRqdXN0US5zZXRGcm9tQXhpc0FuZ2xlKG5ldyBWZWN0b3IzKDAsIDAsIDEpLFxyXG4gICAgICAgICAgICAtd2luZG93Lm9yaWVudGF0aW9uICogTWF0aC5QSSAvIDE4MCk7XHJcblxyXG4gICAgICAgIC8vdGhpcy5zZXRTY3JlZW5UcmFuc2Zvcm1fKCk7XHJcbiAgICAgICAgLy8gQWRqdXN0IHRoaXMgZmlsdGVyIGZvciBiZWluZyBpbiBsYW5kc2NhcGUgbW9kZS5cclxuICAgICAgICAvL2lmIChVdGlsLmlzTGFuZHNjYXBlTW9kZSgpKSB7XHJcbiAgICAgICAgLy8gIHRoaXMuZmlsdGVyVG9Xb3JsZFEubXVsdGlwbHkodGhpcy5pbnZlcnNlV29ybGRUb1NjcmVlblEpO1xyXG4gICAgICAgIC8vfVxyXG5cclxuICAgICAgICAvLyBLZWVwIHRyYWNrIG9mIGEgcmVzZXQgdHJhbnNmb3JtIGZvciByZXNldFNlbnNvci5cclxuICAgICAgICB0aGlzLnJlc2V0USA9IG5ldyBRdWF0ZXJuaW9uKCk7XHJcblxyXG4gICAgICAgIC8vdGhpcy5pc0ZpcmVmb3hBbmRyb2lkID0gVXRpbC5pc0ZpcmVmb3hBbmRyb2lkKCk7XHJcbiAgICAgICAgLy90aGlzLmlzSU9TID0gVXRpbC5pc0lPUygpO1xyXG5cclxuICAgICAgICB0aGlzLm9yaWVudGF0aW9uT3V0XyA9IG5ldyBGbG9hdDMyQXJyYXkoNCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UG9zaXRpb24oKSB7XHJcbiAgICAgICAgLy8gVGhpcyBQb3NlU2Vuc29yIGRvZXNuJ3Qgc3VwcG9ydCBwb3NpdGlvblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE9yaWVudGF0aW9uKCkge1xyXG4gICAgICAgIC8vIENvbnZlcnQgZnJvbSBmaWx0ZXIgc3BhY2UgdG8gdGhlIHRoZSBzYW1lIHN5c3RlbSB1c2VkIGJ5IHRoZVxyXG4gICAgICAgIC8vIGRldmljZW9yaWVudGF0aW9uIGV2ZW50LlxyXG4gICAgICAgIHZhciBvcmllbnRhdGlvbiA9IHRoaXMuZmlsdGVyLmdldE9yaWVudGF0aW9uKCk7XHJcblxyXG4gICAgICAgIC8vIFByZWRpY3Qgb3JpZW50YXRpb24uXHJcbiAgICAgICAgdGhpcy5wcmVkaWN0ZWRRID0gdGhpcy5wb3NlUHJlZGljdG9yLmdldFByZWRpY3Rpb24ob3JpZW50YXRpb24sIHRoaXMuZ3lyb3Njb3BlLCB0aGlzLnByZXZpb3VzVGltZXN0YW1wUyk7XHJcblxyXG4gICAgICAgIC8vIENvbnZlcnQgdG8gVEhSRUUgY29vcmRpbmF0ZSBzeXN0ZW06IC1aIGZvcndhcmQsIFkgdXAsIFggcmlnaHQuXHJcbiAgICAgICAgdmFyIG91dCA9IG5ldyBRdWF0ZXJuaW9uKCk7XHJcbiAgICAgICAgb3V0LmNvcHkodGhpcy5maWx0ZXJUb1dvcmxkUSk7XHJcbiAgICAgICAgb3V0Lm11bHRpcGx5KHRoaXMucmVzZXRRKTtcclxuICAgICAgICBvdXQubXVsdGlwbHkodGhpcy5wcmVkaWN0ZWRRKTtcclxuICAgICAgICBvdXQubXVsdGlwbHkodGhpcy53b3JsZFRvU2NyZWVuUSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbk91dF9bMF0gPSBvdXQueDtcclxuICAgICAgICB0aGlzLm9yaWVudGF0aW9uT3V0X1sxXSA9IG91dC55O1xyXG4gICAgICAgIHRoaXMub3JpZW50YXRpb25PdXRfWzJdID0gb3V0Lno7XHJcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbk91dF9bM10gPSBvdXQudztcclxuICAgICAgICByZXR1cm4gdGhpcy5vcmllbnRhdGlvbk91dF87XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRQb3NlKCkge1xyXG4gICAgICAgIC8vIFJlZHVjZSB0byBpbnZlcnRlZCB5YXctb25seS5cclxuICAgICAgICB0aGlzLnJlc2V0US5jb3B5KHRoaXMuZmlsdGVyLmdldE9yaWVudGF0aW9uKCkpO1xyXG4gICAgICAgIHRoaXMucmVzZXRRLnggPSAwO1xyXG4gICAgICAgIHRoaXMucmVzZXRRLnkgPSAwO1xyXG4gICAgICAgIHRoaXMucmVzZXRRLnogKj0gLTE7XHJcbiAgICAgICAgdGhpcy5yZXNldFEubm9ybWFsaXplKCk7XHJcblxyXG4gICAgICAgIC8vIFRha2UgaW50byBhY2NvdW50IG9yaWdpbmFsIHBvc2UuXHJcbiAgICAgICAgdGhpcy5yZXNldFEubXVsdGlwbHkodGhpcy5vcmlnaW5hbFBvc2VBZGp1c3RRKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTZW5zb3JEYXRhKGRhdGEpIHtcclxuICAgICAgICBpZiAoZGF0YS5zZW5zb3JzICYmIGRhdGEuc2Vuc29ycy5hY2NlbGVyb21ldGVyICYmIGRhdGEuc2Vuc29ycy5neXJvc2NvcGUpIHtcclxuICAgICAgICAgICAgdmFyIGFjY0dyYXZpdHkgPSBkYXRhLnNlbnNvcnMuYWNjZWxlcm9tZXRlcjsgLy90b2RvOiBncmF2aXR5IVxyXG4gICAgICAgICAgICB2YXIgcm90UmF0ZSA9IGRhdGEuc2Vuc29ycy5neXJvc2NvcGU7XHJcblxyXG4gICAgICAgICAgICAvL3ZhciBhY2NHcmF2aXR5ID0gZGF0YS5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5OyAvL3RvZG86IGdyYXZpdHkhXHJcbiAgICAgICAgICAgIC8vdmFyIHJvdFJhdGUgPSBkYXRhLnJvdGF0aW9uUmF0ZTtcclxuICAgICAgICAgICAgdmFyIHRpbWVzdGFtcFMgPSBkYXRhLnNlbnNvcnMudGltZXN0YW1wIC8gMTAwMDtcclxuXHJcbiAgICAgICAgICAgIHZhciBkZWx0YVMgPSB0aW1lc3RhbXBTIC0gdGhpcy5wcmV2aW91c1RpbWVzdGFtcFM7XHJcbiAgICAgICAgICAgIGlmIChkZWx0YVMgPD0gTWF0aFV0aWwuTUlOX1RJTUVTVEVQIHx8IGRlbHRhUyA+IE1hdGhVdGlsLk1BWF9USU1FU1RFUCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIHRpbWVzdGFtcHMgZGV0ZWN0ZWQuIFRpbWUgc3RlcCBiZXR3ZWVuIHN1Y2Nlc3NpdmUgJyArXHJcbiAgICAgICAgICAgICAgICAgICAgJ2d5cm9zY29wZSBzZW5zb3Igc2FtcGxlcyBpcyB2ZXJ5IHNtYWxsIG9yIG5vdCBtb25vdG9uaWMnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNUaW1lc3RhbXBTID0gdGltZXN0YW1wUztcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmFjY2VsZXJvbWV0ZXIuc2V0KC1hY2NHcmF2aXR5LngsIC1hY2NHcmF2aXR5LnksIC1hY2NHcmF2aXR5LnopO1xyXG4gICAgICAgICAgICB0aGlzLmd5cm9zY29wZS5zZXQocm90UmF0ZS5hbHBoYSwgcm90UmF0ZS5iZXRhLCByb3RSYXRlLmdhbW1hKTtcclxuICAgICAgICAgICAgdGhpcy5neXJvc2NvcGUubXVsdGlwbHlTY2FsYXIoTWF0aC5QSSAvIDE4MCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmZpbHRlci5hZGRBY2NlbE1lYXN1cmVtZW50KHRoaXMuYWNjZWxlcm9tZXRlciwgdGltZXN0YW1wUyk7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyLmFkZEd5cm9NZWFzdXJlbWVudCh0aGlzLmd5cm9zY29wZSwgdGltZXN0YW1wUyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzVGltZXN0YW1wUyA9IHRpbWVzdGFtcFM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBIZWF2aWx5IGxpZnRlZCBmcm9tIFdlYlZSLVBvbHlmaWxsIHByb2plY3QgYnkgQm9yaXMgU211czogaHR0cHM6Ly9naXRodWIuY29tL2JvcmlzbXVzL3dlYnZyLXBvbHlmaWxsXHJcbiAqIGJ1dCByZWZhY3RvcmVkIHRvIHVzZSBkaWZmZXJlbnQgZGF0YSBzb3VyY2UgcHJvdmlkZWQgb3ZlciBCTEUgYnkgdGhlIFRJIFNlbnNvciBUYWdcclxuICpcclxuICogb3JpZ2luYWwgbGljZW5zZSBmcm9tIFdlYlZSLVBvbHlmaWxsIGlzIGFzIGZvbGxvd3M6XHJcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCBRdWF0ZXJuaW9uIGZyb20gJy4uL21hdGgvcXVhdGVybmlvbi5lczYnO1xyXG5pbXBvcnQgVmVjdG9yMyBmcm9tICcuLi9tYXRoL3ZlY3RvcjMuZXM2JztcclxuaW1wb3J0IE1hdGhVdGlsIGZyb20gJy4uL21hdGgvdXRpbC5lczYnO1xyXG5cclxuLyoqXHJcbiAqIEdpdmVuIGFuIG9yaWVudGF0aW9uIGFuZCB0aGUgZ3lyb3Njb3BlIGRhdGEsIHByZWRpY3RzIHRoZSBmdXR1cmUgb3JpZW50YXRpb25cclxuICogb2YgdGhlIGhlYWQuIFRoaXMgbWFrZXMgcmVuZGVyaW5nIGFwcGVhciBmYXN0ZXIuXHJcbiAqXHJcbiAqIEFsc28gc2VlOiBodHRwOi8vbXNsLmNzLnVpdWMuZWR1L35sYXZhbGxlL3BhcGVycy9MYXZZZXJLYXRBbnQxNC5wZGZcclxuICpcclxuICogQHBhcmFtIHtOdW1iZXJ9IHByZWRpY3Rpb25UaW1lUyB0aW1lIGZyb20gaGVhZCBtb3ZlbWVudCB0byB0aGUgYXBwZWFyYW5jZSBvZlxyXG4gKiB0aGUgY29ycmVzcG9uZGluZyBpbWFnZS5cclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XHJcbiAgICBjb25zdHJ1Y3RvcihwcmVkaWN0aW9uVGltZVMpIHtcclxuICAgICAgICB0aGlzLnByZWRpY3Rpb25UaW1lUyA9IHByZWRpY3Rpb25UaW1lUztcclxuXHJcbiAgICAgICAgLy8gVGhlIHF1YXRlcm5pb24gY29ycmVzcG9uZGluZyB0byB0aGUgcHJldmlvdXMgc3RhdGUuXHJcbiAgICAgICAgdGhpcy5wcmV2aW91c1EgPSBuZXcgUXVhdGVybmlvbigpO1xyXG4gICAgICAgIC8vIFByZXZpb3VzIHRpbWUgYSBwcmVkaWN0aW9uIG9jY3VycmVkLlxyXG4gICAgICAgIHRoaXMucHJldmlvdXNUaW1lc3RhbXBTID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy8gVGhlIGRlbHRhIHF1YXRlcm5pb24gdGhhdCBhZGp1c3RzIHRoZSBjdXJyZW50IHBvc2UuXHJcbiAgICAgICAgdGhpcy5kZWx0YVEgPSBuZXcgUXVhdGVybmlvbigpO1xyXG4gICAgICAgIC8vIFRoZSBvdXRwdXQgcXVhdGVybmlvbi5cclxuICAgICAgICB0aGlzLm91dFEgPSBuZXcgUXVhdGVybmlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByZWRpY3Rpb24oY3VycmVudFEsIGd5cm8sIHRpbWVzdGFtcFMpIHtcclxuICAgICAgICBpZiAoIXRoaXMucHJldmlvdXNUaW1lc3RhbXBTKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNRLmNvcHkoY3VycmVudFEpO1xyXG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzVGltZXN0YW1wUyA9IHRpbWVzdGFtcFM7XHJcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50UTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENhbGN1bGF0ZSBheGlzIGFuZCBhbmdsZSBiYXNlZCBvbiBneXJvc2NvcGUgcm90YXRpb24gcmF0ZSBkYXRhLlxyXG4gICAgICAgIHZhciBheGlzID0gbmV3IFZlY3RvcjMoKTtcclxuICAgICAgICBheGlzLmNvcHkoZ3lybyk7XHJcbiAgICAgICAgYXhpcy5ub3JtYWxpemUoKTtcclxuXHJcbiAgICAgICAgdmFyIGFuZ3VsYXJTcGVlZCA9IGd5cm8ubGVuZ3RoKCk7XHJcblxyXG4gICAgICAgIC8vIElmIHdlJ3JlIHJvdGF0aW5nIHNsb3dseSwgZG9uJ3QgZG8gcHJlZGljdGlvbi5cclxuICAgICAgICBpZiAoYW5ndWxhclNwZWVkIDwgTWF0aFV0aWwuZGVnVG9SYWQgKiAyMCkge1xyXG4gICAgICAgICAgICAvL2lmIChERUJVRykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ01vdmluZyBzbG93bHksIGF0ICVzIGRlZy9zOiBubyBwcmVkaWN0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAoTWF0aFV0aWwucmFkVG9EZWcgKiBhbmd1bGFyU3BlZWQpLnRvRml4ZWQoMSkpO1xyXG4gICAgICAgICAgICAvL31cclxuICAgICAgICAgICAgdGhpcy5vdXRRLmNvcHkoY3VycmVudFEpO1xyXG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzUS5jb3B5KGN1cnJlbnRRKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3V0UTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEdldCB0aGUgcHJlZGljdGVkIGFuZ2xlIGJhc2VkIG9uIHRoZSB0aW1lIGRlbHRhIGFuZCBsYXRlbmN5LlxyXG4gICAgICAgIHZhciBkZWx0YVQgPSB0aW1lc3RhbXBTIC0gdGhpcy5wcmV2aW91c1RpbWVzdGFtcFM7XHJcbiAgICAgICAgdmFyIHByZWRpY3RBbmdsZSA9IGFuZ3VsYXJTcGVlZCAqIHRoaXMucHJlZGljdGlvblRpbWVTO1xyXG5cclxuICAgICAgICB0aGlzLmRlbHRhUS5zZXRGcm9tQXhpc0FuZ2xlKGF4aXMsIHByZWRpY3RBbmdsZSk7XHJcbiAgICAgICAgdGhpcy5vdXRRLmNvcHkodGhpcy5wcmV2aW91c1EpO1xyXG4gICAgICAgIHRoaXMub3V0US5tdWx0aXBseSh0aGlzLmRlbHRhUSk7XHJcblxyXG4gICAgICAgIHRoaXMucHJldmlvdXNRLmNvcHkoY3VycmVudFEpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5vdXRRO1xyXG4gICAgfVxyXG59OyIsIi8qKlxyXG4gKiBIZWF2aWx5IGxpZnRlZCBmcm9tIFdlYlZSLVBvbHlmaWxsIHByb2plY3QgYnkgQm9yaXMgU211czogaHR0cHM6Ly9naXRodWIuY29tL2JvcmlzbXVzL3dlYnZyLXBvbHlmaWxsXHJcbiAqIGJ1dCByZWZhY3RvcmVkIHRvIHVzZSBkaWZmZXJlbnQgZGF0YSBzb3VyY2UgcHJvdmlkZWQgb3ZlciBCTEUgYnkgdGhlIFRJIFNlbnNvciBUYWdcclxuICpcclxuICogb3JpZ2luYWwgbGljZW5zZSBmcm9tIFdlYlZSLVBvbHlmaWxsIGlzIGFzIGZvbGxvd3M6XHJcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuICAgIGNvbnN0cnVjdG9yKHNhbXBsZSwgdGltZXN0YW1wUykge1xyXG4gICAgICAgIHRoaXMuc2V0KHNhbXBsZSwgdGltZXN0YW1wUyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0KHNhbXBsZSwgdGltZXN0YW1wUykge1xyXG4gICAgICAgIHRoaXMuc2FtcGxlID0gc2FtcGxlO1xyXG4gICAgICAgIHRoaXMudGltZXN0YW1wUyA9IHRpbWVzdGFtcFM7XHJcbiAgICB9XHJcblxyXG4gICAgY29weShzZW5zb3JTYW1wbGUpIHtcclxuICAgICAgICB0aGlzLnNldChzZW5zb3JTYW1wbGUuc2FtcGxlLCBzZW5zb3JTYW1wbGUudGltZXN0YW1wUyk7XHJcbiAgICB9O1xyXG59IiwiaW1wb3J0IFRJU2Vuc29yVGFnIGZyb20gJy4vZGV2aWNlcy90aXNlbnNvcnRhZy5lczYnO1xyXG5pbXBvcnQgQ29tcGxlbWVudGFyeUZpbHRlciBmcm9tICcuL3NlbnNvcmZ1c2lvbi9jb21wbGVtZW50YXJ5LWZpbHRlci5lczYnO1xyXG5pbXBvcnQgRnVzaW9uUG9zZVNlbnNvciBmcm9tICcuL3NlbnNvcmZ1c2lvbi9mdXNpb24tcG9zZS1zZW5zb3IuZXM2JztcclxuaW1wb3J0IFBvc2VQcmVkaWN0b3IgZnJvbSAnLi9zZW5zb3JmdXNpb24vcG9zZS1wcmVkaWN0b3IuZXM2JztcclxuaW1wb3J0IFNlbnNvclNhbXBsZSBmcm9tICcuL3NlbnNvcmZ1c2lvbi9zZW5zb3Itc2FtcGxlLmVzNic7XHJcblxyXG5leHBvcnRzLnRpc2Vuc29ydGFnID0gVElTZW5zb3JUYWc7XHJcbmV4cG9ydHMuc2Vuc29yZnVzaW9uID0ge1xyXG4gICAgY29tcGxlbWVudGFyeWZpbHRlcjogQ29tcGxlbWVudGFyeUZpbHRlcixcclxuICAgIGZ1c2lvbnBvc2VzZW5zb3I6IEZ1c2lvblBvc2VTZW5zb3IsXHJcbiAgICBwb3NlcHJlZGljdG9yOiBQb3NlUHJlZGljdG9yXHJcbn07Il19
