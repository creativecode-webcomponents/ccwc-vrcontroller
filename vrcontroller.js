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
                    x: accelerometer.x * 10,
                    y: accelerometer.y * 10,
                    z: accelerometer.z * 10
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
    function _class(x, y, z, w) {
        _classCallCheck(this, _class);

        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
        this.w = w !== undefined ? w : 1;
    }

    _createClass(_class, [{
        key: "set",
        value: function set(x, y, z, w) {
            this.x = x;
            this.y = y;
            this.z = z;
            this.w = w;

            return this;
        }
    }, {
        key: "copy",
        value: function copy(quaternion) {
            this.x = quaternion.x;
            this.y = quaternion.y;
            this.z = quaternion.z;
            this.w = quaternion.w;

            return this;
        }
    }, {
        key: "setFromEulerXYZ",
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
        key: "setFromEulerYXZ",
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
        key: "setFromAxisAngle",
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
        key: "multiply",
        value: function multiply(q) {
            return this.multiplyQuaternions(this, q);
        }
    }, {
        key: "multiplyQuaternions",
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
        key: "inverse",
        value: function inverse() {
            this.x *= -1;
            this.y *= -1;
            this.z *= -1;

            this.normalize();

            return this;
        }
    }, {
        key: "normalize",
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
        key: "slerp",
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
        key: "setFromUnitVectors",
        value: function setFromUnitVectors() {
            // http://lolengine.net/blog/2014/02/24/quaternion-from-two-vectors-final
            // assumes direction vectors vFrom and vTo are normalized

            var v1, r;
            var EPS = 0.000001;

            return function (vFrom, vTo) {
                if (v1 === undefined) v1 = new MathUtil.Vector3();

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

                return this;
            };
        }
    }]);

    return _class;
}();

exports.default = _class;

},{}],4:[function(require,module,exports){
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
        this.filterToWorldQ.setFromAxisAngle(new _vector2.default(1, 0, 0), Math.PI / 2);
        //} else {
        //  this.filterToWorldQ.setFromAxisAngle(new Vector3(1, 0, 0), -Math.PI / 2);
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
            //if (!WebVRConfig.TOUCH_PANNER_DISABLED) {
            //  out.multiply(this.touchPanner.getOrientation());
            //}
            out.multiply(this.predictedQ);
            out.multiply(this.worldToScreenQ);

            // Handle the yaw-only case.
            if (_config2.default.YAW_ONLY) {
                // Make a quaternion that only turns around the Y-axis.
                out.x = 0;
                out.z = 0;
                out.normalize();
            }

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

            // Take into account extra transformations in landscape mode.
            //if (Util.isLandscapeMode()) {
            //  this.resetQ.multiply(this.inverseWorldToScreenQ);
            //}

            // Take into account original pose.
            this.resetQ.multiply(this.originalPoseAdjustQ);

            /*if (!WebVRConfig.TOUCH_PANNER_DISABLED) {
                this.touchPanner.resetSensor();
            }*/
        }
    }, {
        key: 'updateSensorData',
        value: function updateSensorData(data) {
            if (data.sensors && data.sensors.accelerometer && data.sensors.gyroscope) {
                var accGravity = data.sensors.accelerometer; //todo: gravity!
                var rotRate = data.sensors.gyroscope;
                var timestampS = new Date().getTime();

                var deltaS = timestampS - this.previousTimestampS;
                /*if (deltaS <= MathUtil.MIN_TIMESTEP || deltaS > MathUtil.MAX_TIMESTEP) {
                    console.warn('Invalid timestamps detected. Time step between successive ' +
                        'gyroscope sensor samples is very small or not monotonic');
                    this.previousTimestampS = timestampS;
                    return;
                }*/

                this.accelerometer.set(-accGravity.x, -accGravity.y, -accGravity.z);
                this.gyroscope.set(rotRate.x, rotRate.y, rotRate.z);

                this.filter.addAccelMeasurement(this.accelerometer, timestampS);
                this.filter.addGyroMeasurement(this.gyroscope, timestampS);

                this.previousTimestampS = timestampS;
            }
        }

        /*onDeviceMotionChange_(deviceMotion) {
            var accGravity = deviceMotion.accelerationIncludingGravity;
            var rotRate = deviceMotion.rotationRate;
            var timestampS = deviceMotion.timeStamp / 1000;
             // Firefox Android timeStamp returns one thousandth of a millisecond.
            //if (this.isFirefoxAndroid) {
            //    timestampS /= 1000;
            //}
             var deltaS = timestampS - this.previousTimestampS;
            if (deltaS <= MathUtil.MIN_TIMESTEP || deltaS > MathUtil.MAX_TIMESTEP) {
                console.warn('Invalid timestamps detected. Time step between successive ' +
                    'gyroscope sensor samples is very small or not monotonic');
                this.previousTimestampS = timestampS;
                return;
            }
            this.accelerometer.set(-accGravity.x, -accGravity.y, -accGravity.z);
            this.gyroscope.set(rotRate.alpha, rotRate.beta, rotRate.gamma);
             // With iOS and Firefox Android, rotationRate is reported in degrees,
            // so we first convert to radians.
            //if (this.isIOS || this.isFirefoxAndroid) {
            //  this.gyroscope.multiplyScalar(Math.PI / 180);
            //}
             this.filter.addAccelMeasurement(this.accelerometer, timestampS);
            this.filter.addGyroMeasurement(this.gyroscope, timestampS);
             this.previousTimestampS = timestampS;
        }*/

        /*onScreenOrientationChange_(screenOrientation) {
            this.setScreenTransform_();
        }
         setScreenTransform_() {
            this.worldToScreenQ.set(0, 0, 0, 1);
            switch (window.orientation) {
                case 0:
                    break;
                case 90:
                    this.worldToScreenQ.setFromAxisAngle(new Vector3(0, 0, 1), -Math.PI / 2);
                    break;
                case -90:
                    this.worldToScreenQ.setFromAxisAngle(new Vector3(0, 0, 1), Math.PI / 2);
                    break;
                case 180:
                    // TODO.
                    break;
            }
            this.inverseWorldToScreenQ.copy(this.worldToScreenQ);
            this.inverseWorldToScreenQ.inverse();
        }*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJyZWNvcmRpbmcuZXM2Iiwic3JjL2RldmljZXMvdGlzZW5zb3J0YWcuZXM2Iiwic3JjL21hdGgvcXVhdGVybmlvbi5lczYiLCJzcmMvbWF0aC91dGlsLmVzNiIsInNyYy9tYXRoL3ZlY3RvcjMuZXM2Iiwic3JjL3NlbnNvcmZ1c2lvbi9jb21wbGVtZW50YXJ5LWZpbHRlci5lczYiLCJzcmMvc2Vuc29yZnVzaW9uL2NvbmZpZy5lczYiLCJzcmMvc2Vuc29yZnVzaW9uL2Z1c2lvbi1wb3NlLXNlbnNvci5lczYiLCJzcmMvc2Vuc29yZnVzaW9uL3Bvc2UtcHJlZGljdG9yLmVzNiIsInNyYy9zZW5zb3JmdXNpb24vc2Vuc29yLXNhbXBsZS5lczYiLCJzcmMvdnJjb250cm9sbGVyLmVzNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7aUNDRWlDLEVBQUMsV0FEaEIsQUFDZSxBQUFZLEFBQzdCO2dDQUFnQixFQUFDLFdBRmYsQUFFYyxBQUFZLEFBQzVCOzZCQUFhLEVBQUMsV0FIYixBQUFDLEFBR1csQUFBWTtBQUh2QixBQUNGLFNBREM7aUNBS2dCLEVBQUMsV0FEdkIsQUFDc0IsQUFBWSxBQUM3QjtnQ0FBZ0IsRUFBQyxXQUZ0QixBQUVxQixBQUFZLEFBQzVCOzZCQUFhLEVBQUMsV0FIbkIsQUFHa0IsQUFBWSxBQUN6QjsyQkFBVyxFQUFDLFdBUlgsQUFJTixBQUlnQixBQUFZO0FBSjVCLEFBQ0s7aUNBS2lCLEVBQUMsV0FEdkIsQUFDc0IsQUFBWSxBQUM3QjtnQ0FBZ0IsRUFBQyxXQUZ0QixBQUVxQixBQUFZLEFBQzVCOzZCQUFhLEVBQUMsV0FIbkIsQUFHa0IsQUFBWSxBQUN6QjsyQkFBVyxFQUFDLFdBQUQsQUFBWSxNQUFNLFVBYjVCLEFBU04sQUFJZ0IsQUFBNEI7QUFKNUMsQUFDSztpQ0FLaUIsRUFBQyxXQUR2QixBQUNz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QzlDOzs7Ozs7Ozs7Ozs7QUMvQkw7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxRQUFBLEFBQVE7QUFDUixRQUFBLEFBQVE7K0NBQWUsQUFFbkI7eUNBRm1CLEFBR25CO21DQUhKLEFBQXVCO0FBQUEsQUFDbkIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBzYW1wbGVzOiBbe1xuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWV9LFxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZX0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZX0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlfSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWV9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlfSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWV9LFxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZX0sXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWV9LFxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZX0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlfSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWV9LFxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMuMFwiLCBcInlcIjogXCIwLjhcIiwgXCJ6XCI6IFwiLTIuMlwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMC40XCIsIFwieVwiOiBcIjAuNlwiLCBcInpcIjogXCIzLjlcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlfSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zLjBcIiwgXCJ5XCI6IFwiMC44XCIsIFwielwiOiBcIi0yLjJcIn0sXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjAuM1wiLCBcInlcIjogXCIwLjZcIiwgXCJ6XCI6IFwiMy45XCJ9LFxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZX0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMy4wXCIsIFwieVwiOiBcIjAuOFwiLCBcInpcIjogXCItMi4yXCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIwLjNcIiwgXCJ5XCI6IFwiMC42XCIsIFwielwiOiBcIjMuOVwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9LFxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMuMFwiLCBcInlcIjogXCIwLjhcIiwgXCJ6XCI6IFwiLTIuMlwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMC4zXCIsIFwieVwiOiBcIjAuNlwiLCBcInpcIjogXCIzLjlcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzUuOVwiLCBcInlcIjogXCIzLjJcIiwgXCJ6XCI6IFwiNTAuNFwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zLjBcIiwgXCJ5XCI6IFwiMC44XCIsIFwielwiOiBcIi0yLjJcIn0sXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjAuNFwiLCBcInlcIjogXCIwLjZcIiwgXCJ6XCI6IFwiMy45XCJ9LFxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTM1LjlcIiwgXCJ5XCI6IFwiMy4yXCIsIFwielwiOiBcIjUwLjRcIn0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMy4wXCIsIFwieVwiOiBcIjAuOFwiLCBcInpcIjogXCItMi4yXCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIwLjRcIiwgXCJ5XCI6IFwiMC42XCIsIFwielwiOiBcIjMuOVwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zNi4wXCIsIFwieVwiOiBcIjMuMlwiLCBcInpcIjogXCI1My4wXCJ9LFxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMuMFwiLCBcInlcIjogXCIwLjhcIiwgXCJ6XCI6IFwiLTIuMlwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMC40XCIsIFwieVwiOiBcIjAuNlwiLCBcInpcIjogXCIzLjlcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzYuMFwiLCBcInlcIjogXCIzLjJcIiwgXCJ6XCI6IFwiNTMuMFwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zLjBcIiwgXCJ5XCI6IFwiMC44XCIsIFwielwiOiBcIi0yLjJcIn0sXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjAuNFwiLCBcInlcIjogXCIwLjZcIiwgXCJ6XCI6IFwiMy45XCJ9LFxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTM1LjdcIiwgXCJ5XCI6IFwiMy4wXCIsIFwielwiOiBcIjUxLjRcIn0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMy4wXCIsIFwieVwiOiBcIjAuOFwiLCBcInpcIjogXCItMi4yXCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIwLjFcIiwgXCJ5XCI6IFwiMC4zXCIsIFwielwiOiBcIjQuMVwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zNS43XCIsIFwieVwiOiBcIjMuMFwiLCBcInpcIjogXCI1MS40XCJ9LFxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMuMFwiLCBcInlcIjogXCIwLjhcIiwgXCJ6XCI6IFwiLTIuMlwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMC4xXCIsIFwieVwiOiBcIjAuM1wiLCBcInpcIjogXCI0LjFcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzUuN1wiLCBcInlcIjogXCIzLjBcIiwgXCJ6XCI6IFwiNTEuNFwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjE4LjhcIiwgXCJ5XCI6IFwiMTAuNVwiLCBcInpcIjogXCItMTI4LjBcIn0sXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjAuMVwiLCBcInlcIjogXCIwLjNcIiwgXCJ6XCI6IFwiNC4xXCJ9LFxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTM0LjJcIiwgXCJ5XCI6IFwiMi4yXCIsIFwielwiOiBcIjUzLjBcIn0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIxOC44XCIsIFwieVwiOiBcIjEwLjVcIiwgXCJ6XCI6IFwiLTEyOC4wXCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIwLjFcIiwgXCJ5XCI6IFwiMC42XCIsIFwielwiOiBcIjMuOFwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zNC4yXCIsIFwieVwiOiBcIjIuMlwiLCBcInpcIjogXCI1My4wXCJ9LFxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMTguOFwiLCBcInlcIjogXCIxMC41XCIsIFwielwiOiBcIi0xMjguMFwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMC4xXCIsIFwieVwiOiBcIjAuNlwiLCBcInpcIjogXCIzLjhcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzEuOFwiLCBcInlcIjogXCIxLjNcIiwgXCJ6XCI6IFwiNTEuNlwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjE4LjhcIiwgXCJ5XCI6IFwiMTAuNVwiLCBcInpcIjogXCItMTI4LjBcIn0sXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjAuN1wiLCBcInlcIjogXCIwLjdcIiwgXCJ6XCI6IFwiMy44XCJ9LFxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMxLjhcIiwgXCJ5XCI6IFwiMS4zXCIsIFwielwiOiBcIjUxLjZcIn0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIxOC44XCIsIFwieVwiOiBcIjEwLjVcIiwgXCJ6XCI6IFwiLTEyOC4wXCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIwLjdcIiwgXCJ5XCI6IFwiMC43XCIsIFwielwiOiBcIjMuOFwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMC41XCIsIFwieVwiOiBcIjEuMlwiLCBcInpcIjogXCI1Ni4zXCJ9LFxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMTguOFwiLCBcInlcIjogXCIxMC41XCIsIFwielwiOiBcIi0xMjguMFwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMC45XCIsIFwieVwiOiBcIjAuOVwiLCBcInpcIjogXCIzLjhcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzAuNVwiLCBcInlcIjogXCIxLjJcIiwgXCJ6XCI6IFwiNTYuM1wifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjE4LjhcIiwgXCJ5XCI6IFwiMTAuNVwiLCBcInpcIjogXCItMTI4LjBcIn0sXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjAuOVwiLCBcInlcIjogXCIwLjlcIiwgXCJ6XCI6IFwiMy44XCJ9LFxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMwLjFcIiwgXCJ5XCI6IFwiMS40XCIsIFwielwiOiBcIjU3LjJcIn0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIxOC44XCIsIFwieVwiOiBcIjEwLjVcIiwgXCJ6XCI6IFwiLTEyOC4wXCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIwLjlcIiwgXCJ5XCI6IFwiMC45XCIsIFwielwiOiBcIjMuOFwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMC4xXCIsIFwieVwiOiBcIjEuNFwiLCBcInpcIjogXCI1Ny4yXCJ9LFxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMTguOFwiLCBcInlcIjogXCIxMC41XCIsIFwielwiOiBcIi0xMjguMFwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMC45XCIsIFwieVwiOiBcIjAuOVwiLCBcInpcIjogXCIzLjhcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzAuM1wiLCBcInlcIjogXCIxLjRcIiwgXCJ6XCI6IFwiNTguN1wifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjE4LjhcIiwgXCJ5XCI6IFwiMTAuNVwiLCBcInpcIjogXCItMTI4LjBcIn0sXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjAuOVwiLCBcInlcIjogXCIwLjhcIiwgXCJ6XCI6IFwiMy45XCJ9LFxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMwLjNcIiwgXCJ5XCI6IFwiMS40XCIsIFwielwiOiBcIjU4LjdcIn0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIxOC44XCIsIFwieVwiOiBcIjEwLjVcIiwgXCJ6XCI6IFwiLTEyOC4wXCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIwLjlcIiwgXCJ5XCI6IFwiMC44XCIsIFwielwiOiBcIjMuOVwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMC4zXCIsIFwieVwiOiBcIjEuNFwiLCBcInpcIjogXCI1OC43XCJ9LFxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTI2LjJcIiwgXCJ5XCI6IFwiMTUuMVwiLCBcInpcIjogXCI4Ni4yXCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIwLjlcIiwgXCJ5XCI6IFwiMC44XCIsIFwielwiOiBcIjMuOVwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMS42XCIsIFwieVwiOiBcIjEuM1wiLCBcInpcIjogXCI1OS4xXCJ9LFxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTI2LjJcIiwgXCJ5XCI6IFwiMTUuMVwiLCBcInpcIjogXCI4Ni4yXCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIwLjRcIiwgXCJ5XCI6IFwiMC4zXCIsIFwielwiOiBcIjMuOVwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMS42XCIsIFwieVwiOiBcIjEuM1wiLCBcInpcIjogXCI1OS4xXCJ9LFxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTI2LjJcIiwgXCJ5XCI6IFwiMTUuMVwiLCBcInpcIjogXCI4Ni4yXCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIwLjRcIiwgXCJ5XCI6IFwiMC4zXCIsIFwielwiOiBcIjMuOVwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMi41XCIsIFwieVwiOiBcIjEuM1wiLCBcInpcIjogXCI0OC4wXCJ9LFxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTI2LjJcIiwgXCJ5XCI6IFwiMTUuMVwiLCBcInpcIjogXCI4Ni4yXCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIwLjNcIiwgXCJ5XCI6IFwiLTAuMVwiLCBcInpcIjogXCIzLjlcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzIuNVwiLCBcInlcIjogXCIxLjNcIiwgXCJ6XCI6IFwiNDguMFwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0yNi4yXCIsIFwieVwiOiBcIjE1LjFcIiwgXCJ6XCI6IFwiODYuMlwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMC4zXCIsIFwieVwiOiBcIi0wLjFcIiwgXCJ6XCI6IFwiMy45XCJ9LFxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMyLjhcIiwgXCJ5XCI6IFwiMC45XCIsIFwielwiOiBcIjUyLjlcIn0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMjYuMlwiLCBcInlcIjogXCIxNS4xXCIsIFwielwiOiBcIjg2LjJcIn0sXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0wLjNcIiwgXCJ5XCI6IFwiLTAuNFwiLCBcInpcIjogXCIzLjhcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzIuOFwiLCBcInlcIjogXCIwLjlcIiwgXCJ6XCI6IFwiNTIuOVwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0yNi4yXCIsIFwieVwiOiBcIjE1LjFcIiwgXCJ6XCI6IFwiODYuMlwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTAuM1wiLCBcInlcIjogXCItMC40XCIsIFwielwiOiBcIjMuOFwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMy43XCIsIFwieVwiOiBcIjEuM1wiLCBcInpcIjogXCI1MS40XCJ9LFxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTI2LjJcIiwgXCJ5XCI6IFwiMTUuMVwiLCBcInpcIjogXCI4Ni4yXCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMC40XCIsIFwieVwiOiBcIi0wLjRcIiwgXCJ6XCI6IFwiMy44XCJ9LFxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMzLjdcIiwgXCJ5XCI6IFwiMS4zXCIsIFwielwiOiBcIjUxLjRcIn0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMjYuMlwiLCBcInlcIjogXCIxNS4xXCIsIFwielwiOiBcIjg2LjJcIn0sXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0wLjRcIiwgXCJ5XCI6IFwiLTAuNFwiLCBcInpcIjogXCIzLjhcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzQuN1wiLCBcInlcIjogXCIyLjNcIiwgXCJ6XCI6IFwiNTIuNVwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0yNi4yXCIsIFwieVwiOiBcIjE1LjFcIiwgXCJ6XCI6IFwiODYuMlwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTEuOVwiLCBcInlcIjogXCItMC4zXCIsIFwielwiOiBcIjMuMlwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zNC43XCIsIFwieVwiOiBcIjIuM1wiLCBcInpcIjogXCI1Mi41XCJ9LFxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTI2LjJcIiwgXCJ5XCI6IFwiMTUuMVwiLCBcInpcIjogXCI4Ni4yXCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMS45XCIsIFwieVwiOiBcIi0wLjNcIiwgXCJ6XCI6IFwiMy4yXCJ9LFxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTM0LjdcIiwgXCJ5XCI6IFwiMi4zXCIsIFwielwiOiBcIjUyLjVcIn0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIxMS45XCIsIFwieVwiOiBcIi03NC4xXCIsIFwielwiOiBcIi0xMzcuNVwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTEuOVwiLCBcInlcIjogXCItMC4zXCIsIFwielwiOiBcIjMuMlwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zNS44XCIsIFwieVwiOiBcIjIuNlwiLCBcInpcIjogXCIzOC4xXCJ9LFxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMTEuOVwiLCBcInlcIjogXCItNzQuMVwiLCBcInpcIjogXCItMTM3LjVcIn0sXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjAuM1wiLCBcInlcIjogXCIwLjlcIiwgXCJ6XCI6IFwiNC45XCJ9LFxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTM1LjhcIiwgXCJ5XCI6IFwiMi42XCIsIFwielwiOiBcIjM4LjFcIn0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIxMS45XCIsIFwieVwiOiBcIi03NC4xXCIsIFwielwiOiBcIi0xMzcuNVwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMC4zXCIsIFwieVwiOiBcIjAuOVwiLCBcInpcIjogXCI0LjlcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzUuM1wiLCBcInlcIjogXCIxLjBcIiwgXCJ6XCI6IFwiNDUuMFwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjExLjlcIiwgXCJ5XCI6IFwiLTc0LjFcIiwgXCJ6XCI6IFwiLTEzNy41XCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMC45XCIsIFwieVwiOiBcIjAuMVwiLCBcInpcIjogXCI0LjZcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzUuM1wiLCBcInlcIjogXCIxLjBcIiwgXCJ6XCI6IFwiNDUuMFwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjExLjlcIiwgXCJ5XCI6IFwiLTc0LjFcIiwgXCJ6XCI6IFwiLTEzNy41XCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMC45XCIsIFwieVwiOiBcIjAuMVwiLCBcInpcIjogXCI0LjZcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzAuNVwiLCBcInlcIjogXCItMC45XCIsIFwielwiOiBcIjUwLjRcIn0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIxMS45XCIsIFwieVwiOiBcIi03NC4xXCIsIFwielwiOiBcIi0xMzcuNVwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTAuM1wiLCBcInlcIjogXCItMi4wXCIsIFwielwiOiBcIjMuMFwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMC41XCIsIFwieVwiOiBcIi0wLjlcIiwgXCJ6XCI6IFwiNTAuNFwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjExLjlcIiwgXCJ5XCI6IFwiLTc0LjFcIiwgXCJ6XCI6IFwiLTEzNy41XCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMC4zXCIsIFwieVwiOiBcIi0yLjBcIiwgXCJ6XCI6IFwiMy4wXCJ9LFxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTIzLjlcIiwgXCJ5XCI6IFwiLTEuN1wiLCBcInpcIjogXCI1MC42XCJ9LFxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMTEuOVwiLCBcInlcIjogXCItNzQuMVwiLCBcInpcIjogXCItMTM3LjVcIn0sXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0wLjFcIiwgXCJ5XCI6IFwiLTMuNlwiLCBcInpcIjogXCIxLjdcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMjMuOVwiLCBcInlcIjogXCItMS43XCIsIFwielwiOiBcIjUwLjZcIn0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIxMS45XCIsIFwieVwiOiBcIi03NC4xXCIsIFwielwiOiBcIi0xMzcuNVwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTAuMVwiLCBcInlcIjogXCItMy42XCIsIFwielwiOiBcIjEuN1wifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0yMC40XCIsIFwieVwiOiBcIi0xLjhcIiwgXCJ6XCI6IFwiNDguMFwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjExLjlcIiwgXCJ5XCI6IFwiLTc0LjFcIiwgXCJ6XCI6IFwiLTEzNy41XCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIwLjhcIiwgXCJ5XCI6IFwiLTMuN1wiLCBcInpcIjogXCIwLjNcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMjAuNFwiLCBcInlcIjogXCItMS44XCIsIFwielwiOiBcIjQ4LjBcIn0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIxMS45XCIsIFwieVwiOiBcIi03NC4xXCIsIFwielwiOiBcIi0xMzcuNVwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMC44XCIsIFwieVwiOiBcIi0zLjdcIiwgXCJ6XCI6IFwiMC4zXCJ9LFxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTIwLjRcIiwgXCJ5XCI6IFwiLTEuOFwiLCBcInpcIjogXCI0OC4wXCJ9LFxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMy4zXCIsIFwieVwiOiBcIjIuMlwiLCBcInpcIjogXCI0LjNcIn0sXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjAuOFwiLCBcInlcIjogXCItMy43XCIsIFwielwiOiBcIjAuM1wifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0xOS40XCIsIFwieVwiOiBcIi0xLjNcIiwgXCJ6XCI6IFwiNDEuOFwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjMuM1wiLCBcInlcIjogXCIyLjJcIiwgXCJ6XCI6IFwiNC4zXCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIwLjhcIiwgXCJ5XCI6IFwiLTMuNFwiLCBcInpcIjogXCItMC42XCJ9LFxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTE5LjRcIiwgXCJ5XCI6IFwiLTEuM1wiLCBcInpcIjogXCI0MS44XCJ9LFxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMy4zXCIsIFwieVwiOiBcIjIuMlwiLCBcInpcIjogXCI0LjNcIn0sXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjAuOFwiLCBcInlcIjogXCItMy40XCIsIFwielwiOiBcIi0wLjZcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMTkuM1wiLCBcInlcIjogXCItMS4zXCIsIFwielwiOiBcIjQzLjdcIn0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIzLjNcIiwgXCJ5XCI6IFwiMi4yXCIsIFwielwiOiBcIjQuM1wifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTAuMVwiLCBcInlcIjogXCItMy42XCIsIFwielwiOiBcIjEuMlwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0xOS4zXCIsIFwieVwiOiBcIi0xLjNcIiwgXCJ6XCI6IFwiNDMuN1wifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjMuM1wiLCBcInlcIjogXCIyLjJcIiwgXCJ6XCI6IFwiNC4zXCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMC4xXCIsIFwieVwiOiBcIi0zLjZcIiwgXCJ6XCI6IFwiMS4yXCJ9LFxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTIxLjJcIiwgXCJ5XCI6IFwiLTIuN1wiLCBcInpcIjogXCI1Mi4yXCJ9LFxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMy4zXCIsIFwieVwiOiBcIjIuMlwiLCBcInpcIjogXCI0LjNcIn0sXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0wLjRcIiwgXCJ5XCI6IFwiLTMuMVwiLCBcInpcIjogXCIzLjFcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMjEuMlwiLCBcInlcIjogXCItMi43XCIsIFwielwiOiBcIjUyLjJcIn0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIzLjNcIiwgXCJ5XCI6IFwiMi4yXCIsIFwielwiOiBcIjQuM1wifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTAuNFwiLCBcInlcIjogXCItMy4xXCIsIFwielwiOiBcIjMuMVwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0yNi4xXCIsIFwieVwiOiBcIi0yLjRcIiwgXCJ6XCI6IFwiNTQuOFwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjMuM1wiLCBcInlcIjogXCIyLjJcIiwgXCJ6XCI6IFwiNC4zXCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMC44XCIsIFwieVwiOiBcIi0xLjZcIiwgXCJ6XCI6IFwiMy44XCJ9LFxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTI2LjFcIiwgXCJ5XCI6IFwiLTIuNFwiLCBcInpcIjogXCI1NC44XCJ9LFxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMy4zXCIsIFwieVwiOiBcIjIuMlwiLCBcInpcIjogXCI0LjNcIn0sXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0wLjhcIiwgXCJ5XCI6IFwiLTEuNlwiLCBcInpcIjogXCIzLjhcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMjkuMVwiLCBcInlcIjogXCItMi4xXCIsIFwielwiOiBcIjQ2LjZcIn0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIzLjNcIiwgXCJ5XCI6IFwiMi4yXCIsIFwielwiOiBcIjQuM1wifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTAuOFwiLCBcInlcIjogXCItMC41XCIsIFwielwiOiBcIjMuOVwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0yOS4xXCIsIFwieVwiOiBcIi0yLjFcIiwgXCJ6XCI6IFwiNDYuNlwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjMuM1wiLCBcInlcIjogXCIyLjJcIiwgXCJ6XCI6IFwiNC4zXCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMC44XCIsIFwieVwiOiBcIi0wLjVcIiwgXCJ6XCI6IFwiMy45XCJ9LFxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTI5LjFcIiwgXCJ5XCI6IFwiLTIuMVwiLCBcInpcIjogXCI0Ni42XCJ9LFxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTQuM1wiLCBcInlcIjogXCItMjkuMlwiLCBcInpcIjogXCI3LjdcIn0sXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0wLjhcIiwgXCJ5XCI6IFwiLTAuNVwiLCBcInpcIjogXCIzLjlcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzEuM1wiLCBcInlcIjogXCItMS43XCIsIFwielwiOiBcIjQ3LjdcIn0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItNC4zXCIsIFwieVwiOiBcIi0yOS4yXCIsIFwielwiOiBcIjcuN1wifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTAuOVwiLCBcInlcIjogXCIwLjBcIiwgXCJ6XCI6IFwiMy42XCJ9LFxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMxLjNcIiwgXCJ5XCI6IFwiLTEuN1wiLCBcInpcIjogXCI0Ny43XCJ9LFxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTQuM1wiLCBcInlcIjogXCItMjkuMlwiLCBcInpcIjogXCI3LjdcIn0sXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0wLjlcIiwgXCJ5XCI6IFwiMC4wXCIsIFwielwiOiBcIjMuNlwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMi40XCIsIFwieVwiOiBcIi0xLjJcIiwgXCJ6XCI6IFwiNTAuN1wifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi00LjNcIiwgXCJ5XCI6IFwiLTI5LjJcIiwgXCJ6XCI6IFwiNy43XCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMC44XCIsIFwieVwiOiBcIjAuNlwiLCBcInpcIjogXCI0LjVcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzIuNFwiLCBcInlcIjogXCItMS4yXCIsIFwielwiOiBcIjUwLjdcIn0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItNC4zXCIsIFwieVwiOiBcIi0yOS4yXCIsIFwielwiOiBcIjcuN1wifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTAuOFwiLCBcInlcIjogXCIwLjZcIiwgXCJ6XCI6IFwiNC41XCJ9LFxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMyLjRcIiwgXCJ5XCI6IFwiLTEuMVwiLCBcInpcIjogXCI0Ny45XCJ9LFxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTQuM1wiLCBcInlcIjogXCItMjkuMlwiLCBcInpcIjogXCI3LjdcIn0sXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0wLjNcIiwgXCJ5XCI6IFwiMC4xXCIsIFwielwiOiBcIjMuOFwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMi40XCIsIFwieVwiOiBcIi0xLjFcIiwgXCJ6XCI6IFwiNDcuOVwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi00LjNcIiwgXCJ5XCI6IFwiLTI5LjJcIiwgXCJ6XCI6IFwiNy43XCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMC4zXCIsIFwieVwiOiBcIjAuMVwiLCBcInpcIjogXCIzLjhcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzIuN1wiLCBcInlcIjogXCItMC45XCIsIFwielwiOiBcIjU3LjhcIn0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItNC4zXCIsIFwieVwiOiBcIi0yOS4yXCIsIFwielwiOiBcIjcuN1wifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTEuMlwiLCBcInlcIjogXCItMC4yXCIsIFwielwiOiBcIjMuNFwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMi43XCIsIFwieVwiOiBcIi0wLjlcIiwgXCJ6XCI6IFwiNTcuOFwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi00LjNcIiwgXCJ5XCI6IFwiLTI5LjJcIiwgXCJ6XCI6IFwiNy43XCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMS4yXCIsIFwieVwiOiBcIi0wLjJcIiwgXCJ6XCI6IFwiMy40XCJ9LFxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTM0LjNcIiwgXCJ5XCI6IFwiMC41XCIsIFwielwiOiBcIjQzLjFcIn0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItNC4zXCIsIFwieVwiOiBcIi0yOS4yXCIsIFwielwiOiBcIjcuN1wifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTEuOVwiLCBcInlcIjogXCItMC4xXCIsIFwielwiOiBcIjMuNlwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zNC4zXCIsIFwieVwiOiBcIjAuNVwiLCBcInpcIjogXCI0My4xXCJ9LFxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTQuM1wiLCBcInlcIjogXCItMjkuMlwiLCBcInpcIjogXCI3LjdcIn0sXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0xLjlcIiwgXCJ5XCI6IFwiLTAuMVwiLCBcInpcIjogXCIzLjZcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzQuM1wiLCBcInlcIjogXCIwLjVcIiwgXCJ6XCI6IFwiNDMuMVwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0xMS41XCIsIFwieVwiOiBcIi0xNy43XCIsIFwielwiOiBcIi00NS41XCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMS45XCIsIFwieVwiOiBcIi0wLjFcIiwgXCJ6XCI6IFwiMy42XCJ9LFxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTM1LjNcIiwgXCJ5XCI6IFwiMS42XCIsIFwielwiOiBcIjUwLjZcIn0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMTEuNVwiLCBcInlcIjogXCItMTcuN1wiLCBcInpcIjogXCItNDUuNVwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTEuOVwiLCBcInlcIjogXCIwLjJcIiwgXCJ6XCI6IFwiNC42XCJ9LFxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTM1LjNcIiwgXCJ5XCI6IFwiMS42XCIsIFwielwiOiBcIjUwLjZcIn0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMTEuNVwiLCBcInlcIjogXCItMTcuN1wiLCBcInpcIjogXCItNDUuNVwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTEuOVwiLCBcInlcIjogXCIwLjJcIiwgXCJ6XCI6IFwiNC42XCJ9LFxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTM0LjNcIiwgXCJ5XCI6IFwiMC45XCIsIFwielwiOiBcIjUxLjhcIn0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMTEuNVwiLCBcInlcIjogXCItMTcuN1wiLCBcInpcIjogXCItNDUuNVwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTAuMVwiLCBcInlcIjogXCItMC42XCIsIFwielwiOiBcIjMuMVwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zNC4zXCIsIFwieVwiOiBcIjAuOVwiLCBcInpcIjogXCI1MS44XCJ9LFxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTExLjVcIiwgXCJ5XCI6IFwiLTE3LjdcIiwgXCJ6XCI6IFwiLTQ1LjVcIn0sXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0wLjFcIiwgXCJ5XCI6IFwiLTAuNlwiLCBcInpcIjogXCIzLjFcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzMuNlwiLCBcInlcIjogXCIwLjRcIiwgXCJ6XCI6IFwiNDguN1wifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0xMS41XCIsIFwieVwiOiBcIi0xNy43XCIsIFwielwiOiBcIi00NS41XCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMC45XCIsIFwieVwiOiBcIjAuNVwiLCBcInpcIjogXCIzLjRcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzMuNlwiLCBcInlcIjogXCIwLjRcIiwgXCJ6XCI6IFwiNDguN1wifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0xMS41XCIsIFwieVwiOiBcIi0xNy43XCIsIFwielwiOiBcIi00NS41XCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMC45XCIsIFwieVwiOiBcIjAuNVwiLCBcInpcIjogXCIzLjRcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzUuOVwiLCBcInlcIjogXCIwLjVcIiwgXCJ6XCI6IFwiNDkuOVwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0xMS41XCIsIFwieVwiOiBcIi0xNy43XCIsIFwielwiOiBcIi00NS41XCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMS4wXCIsIFwieVwiOiBcIjIuMlwiLCBcInpcIjogXCIzLjVcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzUuOVwiLCBcInlcIjogXCIwLjVcIiwgXCJ6XCI6IFwiNDkuOVwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0xMS41XCIsIFwieVwiOiBcIi0xNy43XCIsIFwielwiOiBcIi00NS41XCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMS4wXCIsIFwieVwiOiBcIjIuMlwiLCBcInpcIjogXCIzLjVcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzcuN1wiLCBcInlcIjogXCIwLjVcIiwgXCJ6XCI6IFwiMzkuOVwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0xMS41XCIsIFwieVwiOiBcIi0xNy43XCIsIFwielwiOiBcIi00NS41XCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMS42XCIsIFwieVwiOiBcIjIuOVwiLCBcInpcIjogXCIzLjFcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzcuN1wiLCBcInlcIjogXCIwLjVcIiwgXCJ6XCI6IFwiMzkuOVwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0xMS41XCIsIFwieVwiOiBcIi0xNy43XCIsIFwielwiOiBcIi00NS41XCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMS42XCIsIFwieVwiOiBcIjIuOVwiLCBcInpcIjogXCIzLjFcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzcuN1wiLCBcInlcIjogXCIwLjVcIiwgXCJ6XCI6IFwiMzkuOVwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjIyLjFcIiwgXCJ5XCI6IFwiNTAuOFwiLCBcInpcIjogXCI2LjFcIn0sXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0xLjZcIiwgXCJ5XCI6IFwiMi45XCIsIFwielwiOiBcIjMuMVwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zOC4yXCIsIFwieVwiOiBcIjAuMlwiLCBcInpcIjogXCI0My41XCJ9LFxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMjIuMVwiLCBcInlcIjogXCI1MC44XCIsIFwielwiOiBcIjYuMVwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTEuNVwiLCBcInlcIjogXCIzLjBcIiwgXCJ6XCI6IFwiMy4yXCJ9LFxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTM4LjJcIiwgXCJ5XCI6IFwiMC4yXCIsIFwielwiOiBcIjQzLjVcIn0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIyMi4xXCIsIFwieVwiOiBcIjUwLjhcIiwgXCJ6XCI6IFwiNi4xXCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMS41XCIsIFwieVwiOiBcIjMuMFwiLCBcInpcIjogXCIzLjJcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzYuM1wiLCBcInlcIjogXCIwLjFcIiwgXCJ6XCI6IFwiNTEuMlwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjIyLjFcIiwgXCJ5XCI6IFwiNTAuOFwiLCBcInpcIjogXCI2LjFcIn0sXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0wLjVcIiwgXCJ5XCI6IFwiMS4xXCIsIFwielwiOiBcIjMuNFwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zNi4zXCIsIFwieVwiOiBcIjAuMVwiLCBcInpcIjogXCI1MS4yXCJ9LFxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMjIuMVwiLCBcInlcIjogXCI1MC44XCIsIFwielwiOiBcIjYuMVwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTAuNVwiLCBcInlcIjogXCIxLjFcIiwgXCJ6XCI6IFwiMy40XCJ9LFxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTM0LjNcIiwgXCJ5XCI6IFwiLTAuNFwiLCBcInpcIjogXCI0Ni41XCJ9LFxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMjIuMVwiLCBcInlcIjogXCI1MC44XCIsIFwielwiOiBcIjYuMVwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTAuNFwiLCBcInlcIjogXCItMC4xXCIsIFwielwiOiBcIjIuOFwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zNC4zXCIsIFwieVwiOiBcIi0wLjRcIiwgXCJ6XCI6IFwiNDYuNVwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjIyLjFcIiwgXCJ5XCI6IFwiNTAuOFwiLCBcInpcIjogXCI2LjFcIn0sXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0wLjRcIiwgXCJ5XCI6IFwiLTAuMVwiLCBcInpcIjogXCIyLjhcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzIuNVwiLCBcInlcIjogXCItMC43XCIsIFwielwiOiBcIjUzLjNcIn0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIyMi4xXCIsIFwieVwiOiBcIjUwLjhcIiwgXCJ6XCI6IFwiNi4xXCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMC41XCIsIFwieVwiOiBcIjAuMlwiLCBcInpcIjogXCIzLjlcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzIuNVwiLCBcInlcIjogXCItMC43XCIsIFwielwiOiBcIjUzLjNcIn0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIyMi4xXCIsIFwieVwiOiBcIjUwLjhcIiwgXCJ6XCI6IFwiNi4xXCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMC41XCIsIFwieVwiOiBcIjAuMlwiLCBcInpcIjogXCIzLjlcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzMuMFwiLCBcInlcIjogXCItMC41XCIsIFwielwiOiBcIjQ5LjlcIn0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIyMi4xXCIsIFwieVwiOiBcIjUwLjhcIiwgXCJ6XCI6IFwiNi4xXCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMC44XCIsIFwieVwiOiBcIjAuMlwiLCBcInpcIjogXCI0LjFcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzMuMFwiLCBcInlcIjogXCItMC41XCIsIFwielwiOiBcIjQ5LjlcIn0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIyMi4xXCIsIFwieVwiOiBcIjUwLjhcIiwgXCJ6XCI6IFwiNi4xXCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMC44XCIsIFwieVwiOiBcIjAuMlwiLCBcInpcIjogXCI0LjFcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzMuMFwiLCBcInlcIjogXCItMC41XCIsIFwielwiOiBcIjQ5LjlcIn0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIxMTkuMFwiLCBcInlcIjogXCI2LjZcIiwgXCJ6XCI6IFwiLTAuNlwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTAuOFwiLCBcInlcIjogXCIwLjJcIiwgXCJ6XCI6IFwiNC4xXCJ9LFxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMzLjZcIiwgXCJ5XCI6IFwiMi4zXCIsIFwielwiOiBcIjQ4LjRcIn0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIxMTkuMFwiLCBcInlcIjogXCI2LjZcIiwgXCJ6XCI6IFwiLTAuNlwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMS42XCIsIFwieVwiOiBcIjAuMVwiLCBcInpcIjogXCI0LjBcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzMuNlwiLCBcInlcIjogXCIyLjNcIiwgXCJ6XCI6IFwiNDguNFwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjExOS4wXCIsIFwieVwiOiBcIjYuNlwiLCBcInpcIjogXCItMC42XCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIxLjZcIiwgXCJ5XCI6IFwiMC4xXCIsIFwielwiOiBcIjQuMFwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zNC4zXCIsIFwieVwiOiBcIjYuMFwiLCBcInpcIjogXCI0Ny4wXCJ9LFxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMTE5LjBcIiwgXCJ5XCI6IFwiNi42XCIsIFwielwiOiBcIi0wLjZcIn0sXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjIuNVwiLCBcInlcIjogXCIwLjBcIiwgXCJ6XCI6IFwiMy4wXCJ9LFxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTM0LjNcIiwgXCJ5XCI6IFwiNi4wXCIsIFwielwiOiBcIjQ3LjBcIn0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIxMTkuMFwiLCBcInlcIjogXCI2LjZcIiwgXCJ6XCI6IFwiLTAuNlwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMi41XCIsIFwieVwiOiBcIjAuMFwiLCBcInpcIjogXCIzLjBcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzUuMFwiLCBcInlcIjogXCI5LjRcIiwgXCJ6XCI6IFwiNDYuMVwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjExOS4wXCIsIFwieVwiOiBcIjYuNlwiLCBcInpcIjogXCItMC42XCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIzLjhcIiwgXCJ5XCI6IFwiMC4xXCIsIFwielwiOiBcIjEuOVwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zNS4wXCIsIFwieVwiOiBcIjkuNFwiLCBcInpcIjogXCI0Ni4xXCJ9LFxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMTE5LjBcIiwgXCJ5XCI6IFwiNi42XCIsIFwielwiOiBcIi0wLjZcIn0sXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjMuOFwiLCBcInlcIjogXCIwLjFcIiwgXCJ6XCI6IFwiMS45XCJ9LFxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTM2LjFcIiwgXCJ5XCI6IFwiMTEuOFwiLCBcInpcIjogXCIzNy4zXCJ9LFxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMTE5LjBcIiwgXCJ5XCI6IFwiNi42XCIsIFwielwiOiBcIi0wLjZcIn0sXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjMuNlwiLCBcInlcIjogXCItMC4xXCIsIFwielwiOiBcIjEuM1wifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zNi4xXCIsIFwieVwiOiBcIjExLjhcIiwgXCJ6XCI6IFwiMzcuM1wifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjExOS4wXCIsIFwieVwiOiBcIjYuNlwiLCBcInpcIjogXCItMC42XCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIzLjZcIiwgXCJ5XCI6IFwiLTAuMVwiLCBcInpcIjogXCIxLjNcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzUuOVwiLCBcInlcIjogXCIxMS41XCIsIFwielwiOiBcIjM5LjhcIn0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIxMTkuMFwiLCBcInlcIjogXCI2LjZcIiwgXCJ6XCI6IFwiLTAuNlwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMi42XCIsIFwieVwiOiBcIjAuMFwiLCBcInpcIjogXCIyLjNcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzUuOVwiLCBcInlcIjogXCIxMS41XCIsIFwielwiOiBcIjM5LjhcIn0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCIxMTkuMFwiLCBcInlcIjogXCI2LjZcIiwgXCJ6XCI6IFwiLTAuNlwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMi42XCIsIFwieVwiOiBcIjAuMFwiLCBcInpcIjogXCIyLjNcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzUuOVwiLCBcInlcIjogXCIxMS41XCIsIFwielwiOiBcIjM5LjhcIn0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMTgxLjlcIiwgXCJ5XCI6IFwiMTQuNVwiLCBcInpcIjogXCItMzEuMFwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiMi42XCIsIFwieVwiOiBcIjAuMFwiLCBcInpcIjogXCIyLjNcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzQuNVwiLCBcInlcIjogXCI2LjFcIiwgXCJ6XCI6IFwiNDUuN1wifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0xODEuOVwiLCBcInlcIjogXCIxNC41XCIsIFwielwiOiBcIi0zMS4wXCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMC4yXCIsIFwieVwiOiBcIjAuMVwiLCBcInpcIjogXCI0LjJcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzQuNVwiLCBcInlcIjogXCI2LjFcIiwgXCJ6XCI6IFwiNDUuN1wifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0xODEuOVwiLCBcInlcIjogXCIxNC41XCIsIFwielwiOiBcIi0zMS4wXCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMC4yXCIsIFwieVwiOiBcIjAuMVwiLCBcInpcIjogXCI0LjJcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzEuN1wiLCBcInlcIjogXCItMC4yXCIsIFwielwiOiBcIjQ2LjdcIn0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMTgxLjlcIiwgXCJ5XCI6IFwiMTQuNVwiLCBcInpcIjogXCItMzEuMFwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTAuOFwiLCBcInlcIjogXCIwLjBcIiwgXCJ6XCI6IFwiNC4zXCJ9LFxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMxLjdcIiwgXCJ5XCI6IFwiLTAuMlwiLCBcInpcIjogXCI0Ni43XCJ9LFxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTE4MS45XCIsIFwieVwiOiBcIjE0LjVcIiwgXCJ6XCI6IFwiLTMxLjBcIn0sXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0wLjhcIiwgXCJ5XCI6IFwiMC4wXCIsIFwielwiOiBcIjQuM1wifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMS4xXCIsIFwieVwiOiBcIi0xLjVcIiwgXCJ6XCI6IFwiNTAuN1wifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0xODEuOVwiLCBcInlcIjogXCIxNC41XCIsIFwielwiOiBcIi0zMS4wXCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMC45XCIsIFwieVwiOiBcIi0wLjRcIiwgXCJ6XCI6IFwiMy4xXCJ9LFxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMxLjFcIiwgXCJ5XCI6IFwiLTEuNVwiLCBcInpcIjogXCI1MC43XCJ9LFxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTE4MS45XCIsIFwieVwiOiBcIjE0LjVcIiwgXCJ6XCI6IFwiLTMxLjBcIn0sXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0wLjlcIiwgXCJ5XCI6IFwiLTAuNFwiLCBcInpcIjogXCIzLjFcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMjkuM1wiLCBcInlcIjogXCItMy43XCIsIFwielwiOiBcIjQ3LjZcIn0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMTgxLjlcIiwgXCJ5XCI6IFwiMTQuNVwiLCBcInpcIjogXCItMzEuMFwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTEuOVwiLCBcInlcIjogXCItMC40XCIsIFwielwiOiBcIjMuMVwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0yOS4zXCIsIFwieVwiOiBcIi0zLjdcIiwgXCJ6XCI6IFwiNDcuNlwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0xODEuOVwiLCBcInlcIjogXCIxNC41XCIsIFwielwiOiBcIi0zMS4wXCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMS45XCIsIFwieVwiOiBcIi0wLjRcIiwgXCJ6XCI6IFwiMy4xXCJ9LFxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTI5LjhcIiwgXCJ5XCI6IFwiLTQuOFwiLCBcInpcIjogXCI1MC4wXCJ9LFxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTE4MS45XCIsIFwieVwiOiBcIjE0LjVcIiwgXCJ6XCI6IFwiLTMxLjBcIn0sXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zLjVcIiwgXCJ5XCI6IFwiLTAuM1wiLCBcInpcIjogXCIyLjFcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMjkuOFwiLCBcInlcIjogXCItNC44XCIsIFwielwiOiBcIjUwLjBcIn0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMTgxLjlcIiwgXCJ5XCI6IFwiMTQuNVwiLCBcInpcIjogXCItMzEuMFwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMuNVwiLCBcInlcIjogXCItMC4zXCIsIFwielwiOiBcIjIuMVwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0yOS44XCIsIFwieVwiOiBcIi00LjhcIiwgXCJ6XCI6IFwiNTAuMFwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0yNS44XCIsIFwieVwiOiBcIjEwLjNcIiwgXCJ6XCI6IFwiMTIuMlwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMuNVwiLCBcInlcIjogXCItMC4zXCIsIFwielwiOiBcIjIuMVwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMS4zXCIsIFwieVwiOiBcIi01LjBcIiwgXCJ6XCI6IFwiNDkuNFwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0yNS44XCIsIFwieVwiOiBcIjEwLjNcIiwgXCJ6XCI6IFwiMTIuMlwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMuOVwiLCBcInlcIjogXCItMC4zXCIsIFwielwiOiBcIjEuNlwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMS4zXCIsIFwieVwiOiBcIi01LjBcIiwgXCJ6XCI6IFwiNDkuNFwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0yNS44XCIsIFwieVwiOiBcIjEwLjNcIiwgXCJ6XCI6IFwiMTIuMlwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMuOVwiLCBcInlcIjogXCItMC4zXCIsIFwielwiOiBcIjEuNlwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMS41XCIsIFwieVwiOiBcIi00LjlcIiwgXCJ6XCI6IFwiNDIuNVwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0yNS44XCIsIFwieVwiOiBcIjEwLjNcIiwgXCJ6XCI6IFwiMTIuMlwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMuNlwiLCBcInlcIjogXCItMC4xXCIsIFwielwiOiBcIjEuOFwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMS41XCIsIFwieVwiOiBcIi00LjlcIiwgXCJ6XCI6IFwiNDIuNVwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0yNS44XCIsIFwieVwiOiBcIjEwLjNcIiwgXCJ6XCI6IFwiMTIuMlwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMuNlwiLCBcInlcIjogXCItMC4xXCIsIFwielwiOiBcIjEuOFwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMS42XCIsIFwieVwiOiBcIi00LjlcIiwgXCJ6XCI6IFwiNDIuMFwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0yNS44XCIsIFwieVwiOiBcIjEwLjNcIiwgXCJ6XCI6IFwiMTIuMlwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMuMVwiLCBcInlcIjogXCItMC4zXCIsIFwielwiOiBcIjIuMlwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMS42XCIsIFwieVwiOiBcIi00LjlcIiwgXCJ6XCI6IFwiNDIuMFwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0yNS44XCIsIFwieVwiOiBcIjEwLjNcIiwgXCJ6XCI6IFwiMTIuMlwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMuMVwiLCBcInlcIjogXCItMC4zXCIsIFwielwiOiBcIjIuMlwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMS4wXCIsIFwieVwiOiBcIi00LjBcIiwgXCJ6XCI6IFwiNDIuOFwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0yNS44XCIsIFwieVwiOiBcIjEwLjNcIiwgXCJ6XCI6IFwiMTIuMlwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTIuOVwiLCBcInlcIjogXCItMC4zXCIsIFwielwiOiBcIjMuNlwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMS4wXCIsIFwieVwiOiBcIi00LjBcIiwgXCJ6XCI6IFwiNDIuOFwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0yNS44XCIsIFwieVwiOiBcIjEwLjNcIiwgXCJ6XCI6IFwiMTIuMlwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTIuOVwiLCBcInlcIjogXCItMC4zXCIsIFwielwiOiBcIjMuNlwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMS40XCIsIFwieVwiOiBcIi0zLjFcIiwgXCJ6XCI6IFwiNDYuOVwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0yNS44XCIsIFwieVwiOiBcIjEwLjNcIiwgXCJ6XCI6IFwiMTIuMlwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTIuNFwiLCBcInlcIjogXCItMC41XCIsIFwielwiOiBcIjMuOVwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMS40XCIsIFwieVwiOiBcIi0zLjFcIiwgXCJ6XCI6IFwiNDYuOVwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0yNS44XCIsIFwieVwiOiBcIjEwLjNcIiwgXCJ6XCI6IFwiMTIuMlwifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTIuNFwiLCBcInlcIjogXCItMC41XCIsIFwielwiOiBcIjMuOVwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMS40XCIsIFwieVwiOiBcIi0zLjFcIiwgXCJ6XCI6IFwiNDYuOVwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjcuNVwiLCBcInlcIjogXCItMjAuMVwiLCBcInpcIjogXCItMTYuM1wifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTIuNFwiLCBcInlcIjogXCItMC41XCIsIFwielwiOiBcIjMuOVwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMi41XCIsIFwieVwiOiBcIi0xLjRcIiwgXCJ6XCI6IFwiNDkuM1wifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjcuNVwiLCBcInlcIjogXCItMjAuMVwiLCBcInpcIjogXCItMTYuM1wifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTEuMFwiLCBcInlcIjogXCItMC4yXCIsIFwielwiOiBcIjMuOFwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMi41XCIsIFwieVwiOiBcIi0xLjRcIiwgXCJ6XCI6IFwiNDkuM1wifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjcuNVwiLCBcInlcIjogXCItMjAuMVwiLCBcInpcIjogXCItMTYuM1wifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTEuMFwiLCBcInlcIjogXCItMC4yXCIsIFwielwiOiBcIjMuOFwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMi41XCIsIFwieVwiOiBcIi0xLjNcIiwgXCJ6XCI6IFwiNTAuNVwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjcuNVwiLCBcInlcIjogXCItMjAuMVwiLCBcInpcIjogXCItMTYuM1wifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTEuMVwiLCBcInlcIjogXCIwLjJcIiwgXCJ6XCI6IFwiMy45XCJ9LFxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTMyLjVcIiwgXCJ5XCI6IFwiLTEuM1wiLCBcInpcIjogXCI1MC41XCJ9LFxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiNy41XCIsIFwieVwiOiBcIi0yMC4xXCIsIFwielwiOiBcIi0xNi4zXCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMS4xXCIsIFwieVwiOiBcIjAuMlwiLCBcInpcIjogXCIzLjlcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzMuMlwiLCBcInlcIjogXCItMS4xXCIsIFwielwiOiBcIjQ2LjBcIn0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCI3LjVcIiwgXCJ5XCI6IFwiLTIwLjFcIiwgXCJ6XCI6IFwiLTE2LjNcIn0sXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0xLjNcIiwgXCJ5XCI6IFwiMC4xXCIsIFwielwiOiBcIjMuOFwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMy4yXCIsIFwieVwiOiBcIi0xLjFcIiwgXCJ6XCI6IFwiNDYuMFwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjcuNVwiLCBcInlcIjogXCItMjAuMVwiLCBcInpcIjogXCItMTYuM1wifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTEuM1wiLCBcInlcIjogXCIwLjFcIiwgXCJ6XCI6IFwiMy44XCJ9LFxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTM0LjJcIiwgXCJ5XCI6IFwiLTAuM1wiLCBcInpcIjogXCI0OS4xXCJ9LFxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiNy41XCIsIFwieVwiOiBcIi0yMC4xXCIsIFwielwiOiBcIi0xNi4zXCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWV9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMS4xXCIsIFwieVwiOiBcIjAuMlwiLCBcInpcIjogXCIzLjlcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzQuMlwiLCBcInlcIjogXCItMC4zXCIsIFwielwiOiBcIjQ5LjFcIn0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCI3LjVcIiwgXCJ5XCI6IFwiLTIwLjFcIiwgXCJ6XCI6IFwiLTE2LjNcIn0sXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0xLjFcIiwgXCJ5XCI6IFwiMC4yXCIsIFwielwiOiBcIjMuOVwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zNC4yXCIsIFwieVwiOiBcIi0wLjNcIiwgXCJ6XCI6IFwiNDkuMVwifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjcuNVwiLCBcInlcIjogXCItMjAuMVwiLCBcInpcIjogXCItMTYuM1wifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wibGVmdFwiOiBmYWxzZSwgXCJyaWdodFwiOiBmYWxzZX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0xLjFcIiwgXCJ5XCI6IFwiMC4yXCIsIFwielwiOiBcIjMuOVwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zNC4xXCIsIFwieVwiOiBcIi0wLjFcIiwgXCJ6XCI6IFwiNTMuN1wifSxcbiAgICAgICAgICAgICAgICBcImd5cm9zY29wZVwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIjcuNVwiLCBcInlcIjogXCItMjAuMVwiLCBcInpcIjogXCItMTYuM1wifSxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbnNcIjoge1wibGVmdFwiOiBmYWxzZSwgXCJyaWdodFwiOiBmYWxzZX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIFwiYWNjZWxlcm9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0xLjZcIiwgXCJ5XCI6IFwiLTAuMVwiLCBcInpcIjogXCIzLjZcIn0sXG4gICAgICAgICAgICAgICAgXCJtYWduZXRvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMzQuMVwiLCBcInlcIjogXCItMC4xXCIsIFwielwiOiBcIjUzLjdcIn0sXG4gICAgICAgICAgICAgICAgXCJneXJvc2NvcGVcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCI3LjVcIiwgXCJ5XCI6IFwiLTIwLjFcIiwgXCJ6XCI6IFwiLTE2LjNcIn0sXG4gICAgICAgICAgICAgICAgXCJidXR0b25zXCI6IHtcImxlZnRcIjogZmFsc2UsIFwicmlnaHRcIjogZmFsc2V9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBcImFjY2VsZXJvbWV0ZXJcIjoge1wiZW5hYmxlZFwiOiB0cnVlLCBcImFjdGl2ZVwiOiB0cnVlLCBcInhcIjogXCItMS42XCIsIFwieVwiOiBcIi0wLjFcIiwgXCJ6XCI6IFwiMy42XCJ9LFxuICAgICAgICAgICAgICAgIFwibWFnbmV0b21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTM0LjFcIiwgXCJ5XCI6IFwiLTAuMVwiLCBcInpcIjogXCI1My43XCJ9LFxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiNi41XCIsIFwieVwiOiBcIjYuMFwiLCBcInpcIjogXCItMy42XCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJsZWZ0XCI6IGZhbHNlLCBcInJpZ2h0XCI6IGZhbHNlfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgXCJhY2NlbGVyb21ldGVyXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiLTEuNlwiLCBcInlcIjogXCItMC4xXCIsIFwielwiOiBcIjMuNlwifSxcbiAgICAgICAgICAgICAgICBcIm1hZ25ldG9tZXRlclwiOiB7XCJlbmFibGVkXCI6IHRydWUsIFwiYWN0aXZlXCI6IHRydWUsIFwieFwiOiBcIi0zMy42XCIsIFwieVwiOiBcIjAuMFwiLCBcInpcIjogXCI0Ny4wXCJ9LFxuICAgICAgICAgICAgICAgIFwiZ3lyb3Njb3BlXCI6IHtcImVuYWJsZWRcIjogdHJ1ZSwgXCJhY3RpdmVcIjogdHJ1ZSwgXCJ4XCI6IFwiNi41XCIsIFwieVwiOiBcIjYuMFwiLCBcInpcIjogXCItMy42XCJ9LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uc1wiOiB7XCJsZWZ0XCI6IGZhbHNlLCBcInJpZ2h0XCI6IGZhbHNlfVxuICAgICAgICB9XVxufSIsImltcG9ydCBTYW1wbGVEYXRhIGZyb20gJy4uLy4uL3JlY29yZGluZy5lczYnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBpbmRleCBvZiBjdXJyZW50IHNlbnNvciBzbmFwc2hvdCBpbiBzaW0gbW9kZVxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fc2ltSW5kZXggPSAwO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBzb2NrZXQgY29ubmVjdGlvblxuICAgICAgICAgKiBAdHlwZSB7bnVsbH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc29ja2V0ID0gbnVsbDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogaWYgYWxyZWFkeSBjb25uZWN0ZWRcbiAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9jb25uZWN0ZWQgPSBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogZXZlbnQgbGlzdGVuZXJzXG4gICAgICAgICAqIEB0eXBlIHtBcnJheX1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJzID0gW107XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGJhc2UgVVVJRFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fYmFzZVVVSUQgPSBbJ2YwMDAnLCAnLTA0NTEtNDAwMC1iMDAwLTAwMDAwMDAwMDAwMCddO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBzZXJ2aWNlIFVVSURTXG4gICAgICAgICAqIEB0eXBlIHt7fX1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3V1aWQgPSB7fTtcbiAgICAgICAgdGhpcy5fdXVpZC50ZW1wZXJhdHVyZSA9IHRoaXMuX2Jhc2VVVUlEWzBdICsgJ2FhMDAnICsgdGhpcy5fYmFzZVVVSURbMV07XG4gICAgICAgIHRoaXMuX3V1aWQudGVtcGVyYXR1cmVEYXRhID0gdGhpcy5fYmFzZVVVSURbMF0gKyAnYWEwMScgKyB0aGlzLl9iYXNlVVVJRFsxXTtcbiAgICAgICAgdGhpcy5fdXVpZC50ZW1wZXJhdHVyZUNvbmZpZ3VyYXRpb24gPSB0aGlzLl9iYXNlVVVJRFswXSArICdhYTAyJyArIHRoaXMuX2Jhc2VVVUlEWzFdO1xuICAgICAgICB0aGlzLl91dWlkLnRlbXBlcmF0dXJlUGVyaW9kID0gdGhpcy5fYmFzZVVVSURbMF0gKyAnYWEwMycgKyB0aGlzLl9iYXNlVVVJRFsxXTtcblxuICAgICAgICB0aGlzLl91dWlkLmFjY2VsZXJvbWV0ZXIgPSB0aGlzLl9iYXNlVVVJRFswXSArICdhYTEwJyArIHRoaXMuX2Jhc2VVVUlEWzFdO1xuICAgICAgICB0aGlzLl91dWlkLmFjY2VsZXJvbWV0ZXJEYXRhID0gdGhpcy5fYmFzZVVVSURbMF0gKyAnYWExMScgKyB0aGlzLl9iYXNlVVVJRFsxXTtcbiAgICAgICAgdGhpcy5fdXVpZC5hY2NlbGVyb21ldGVyQ29uZmlndXJhdGlvbiA9IHRoaXMuX2Jhc2VVVUlEWzBdICsgJ2FhMTInICsgdGhpcy5fYmFzZVVVSURbMV07XG4gICAgICAgIHRoaXMuX3V1aWQuYWNjZWxlcm9tZXRlclBlcmlvZCA9IHRoaXMuX2Jhc2VVVUlEWzBdICsgJ2FhMTMnICsgdGhpcy5fYmFzZVVVSURbMV07XG5cbiAgICAgICAgdGhpcy5fdXVpZC5odW1pZGl0eSA9IHRoaXMuX2Jhc2VVVUlEWzBdICsgJ2FhMjAnICsgdGhpcy5fYmFzZVVVSURbMV07XG4gICAgICAgIHRoaXMuX3V1aWQuaHVtaWRpdHlEYXRhID0gdGhpcy5fYmFzZVVVSURbMF0gKyAnYWEyMScgKyB0aGlzLl9iYXNlVVVJRFsxXTtcbiAgICAgICAgdGhpcy5fdXVpZC5odW1pZGl0eUNvbmZpZ3VyYXRpb24gPSB0aGlzLl9iYXNlVVVJRFswXSArICdhYTIyJyArIHRoaXMuX2Jhc2VVVUlEWzFdO1xuICAgICAgICB0aGlzLl91dWlkLmh1bWlkaXR5UGVyaW9kID0gdGhpcy5fYmFzZVVVSURbMF0gKyAnYWEyMycgKyB0aGlzLl9iYXNlVVVJRFsxXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBjb25uZWN0IHRvIHNlbnNvcnRhZ1xuICAgICAqIEBwYXJhbSBjYiBjYWxsYmFja1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gc2ltbHVhdGUgZGF0YVxuICAgICAqL1xuICAgIGNvbm5lY3QoY2IsIHNpbXVsYXRlKSB7XG4gICAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJzLnB1c2goY2IpO1xuICAgICAgICBpZiAodGhpcy5fY29ubmVjdGVkKSB7IHJldHVybjsgfVxuICAgICAgICB0aGlzLmNvbm5lY3RlZCA9IHRydWU7XG4gICAgICAgIGlmIChzaW11bGF0ZSkge1xuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoICgpID0+IHtcbiAgICAgICAgICAgICAgICBjYigndXBkYXRlJywgdGhpcy5nZXRTaW11bGF0ZWRTZW5zb3JzKCkpO1xuICAgICAgICAgICAgfSwgMjAwKTtcblxuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoICgpID0+IHtcbiAgICAgICAgICAgICAgICBjYigndXBkYXRlJywgdGhpcy5nZXRTaW11bGF0ZWRCdXR0b25zKCkpO1xuICAgICAgICAgICAgfSwgTWF0aC5yYW5kb20oKSAqIDEwMDAwICsgMjAwMCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIW5hdmlnYXRvci5ibHVldG9vdGgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBibHVldG9vdGggc3VwcG9ydCBpbiB5b3VyIGJyb3dzZXIsIHRyeWluZyB3ZWJzb2NrZXRzIGZyb20gYSBsb2NhbCBub2RlIHNlcnZlcicpO1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQgPSBuZXcgV2ViU29ja2V0KCd3czovL2xvY2FsaG9zdDo4MDgwJyk7XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5vbmVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7IGNvbnNvbGUubG9nKCdXZWJTb2NrZXQgRXJyb3IgJyArIGVycm9yKTsgfTtcblxuICAgICAgICAgICAgdGhpcy5zb2NrZXQub25tZXNzYWdlID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgbXNnID0gSlNPTi5wYXJzZShlLmRhdGEpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgdGhpcy5fZXZlbnRMaXN0ZW5lcnMubGVuZ3RoOyBjKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnNbY10oJ3VwZGF0ZScsIG1zZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5zb2NrZXQub25vcGVuID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNvY2tldC5zZW5kKCdjb25uZWN0Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5hdmlnYXRvci5ibHVldG9vdGgucmVxdWVzdERldmljZShcbiAgICAgICAgICAgICAgICB7ICAgZmlsdGVyczogWyB7bmFtZTogJ1NlbnNvclRhZyd9LCB7IHNlcnZpY2VzOiBbIHRoaXMuX3V1aWQudGVtcGVyYXR1cmUsIHRoaXMuX3V1aWQuYWNjZWxlcm9tZXRlciwgdGhpcy5fdXVpZC5odW1pZGl0eSBdIH1dLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25hbFNlcnZpY2VzOiBbIHRoaXMuX3V1aWQudGVtcGVyYXR1cmUsIHRoaXMuX3V1aWQuYWNjZWxlcm9tZXRlciwgdGhpcy5fdXVpZC5odW1pZGl0eSBdIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZGV2aWNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dvdCBkZXZpY2U6JywgZGV2aWNlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2lkOicsIGRldmljZS5pZCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25uZWN0ZWQgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkZXZpY2UuY29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0ZWQgPSBkZXZpY2UuZ2F0dC5jb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXZpY2UgPSBkZXZpY2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb25uZWN0ZWQ7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR2V0dGluZyBTZXJ2aWNl4oCmJywgc2VydmVyKTtcbiAgICAgICAgICAgICAgICAgICAgLy9yZXR1cm4gc2VydmVyLmdldFByaW1hcnlTZXJ2aWNlKCdmMDAwYWExMC0wNDUxLTQwMDAtYjAwMC0wMDAwMDAwMDAwMDAnKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB0aGlzLm9uRGV2aWNlRXJyb3IoZXJyb3IpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGdldCBzaW11bGF0ZWQgc2Vuc29yIGRhdGEgb2JqZWN0XG4gICAgICovXG4gICAgZ2V0U2ltdWxhdGVkU2Vuc29ycygpIHtcbiAgICAgICAgdmFyIHNpbSA9IHtcbiAgICAgICAgICAgIGNvbm5lY3RlZDogdHJ1ZSxcbiAgICAgICAgICAgIGRldmljZToge1xuICAgICAgICAgICAgICAgIHN5c3RlbWlkOiAneHh4eHgnLFxuICAgICAgICAgICAgICAgIGZpcm13YXJlOiAneHh4eHgnLFxuICAgICAgICAgICAgICAgIG1hbnVmYWN0dXJlcjogJ3h4eHh4J1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgYWNjZWxlcm9tZXRlciA9IFNhbXBsZURhdGEuc2FtcGxlc1t0aGlzLl9zaW1JbmRleF0uYWNjZWxlcm9tZXRlcjtcbiAgICAgICAgdmFyIGd5cm9zY29wZSA9IFNhbXBsZURhdGEuc2FtcGxlc1t0aGlzLl9zaW1JbmRleF0uZ3lyb3Njb3BlO1xuXG4gICAgICAgIHNpbS5zZW5zb3JzID0ge1xuICAgICAgICAgICAgYWNjZWxlcm9tZXRlcjoge1xuICAgICAgICAgICAgICAgIHg6IGFjY2VsZXJvbWV0ZXIueCAqIDEwLFxuICAgICAgICAgICAgICAgIHk6IGFjY2VsZXJvbWV0ZXIueSAqIDEwLFxuICAgICAgICAgICAgICAgIHo6IGFjY2VsZXJvbWV0ZXIueiAqIDEwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ3lyb3Njb3BlOiB7XG4gICAgICAgICAgICAgICAgeDogZ3lyb3Njb3BlLnggLyAxMCxcbiAgICAgICAgICAgICAgICB5OiBneXJvc2NvcGUueSAvIDEwLFxuICAgICAgICAgICAgICAgIHo6IGd5cm9zY29wZS56IC8gMTBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fc2ltSW5kZXggKys7XG4gICAgICAgIGlmICh0aGlzLl9zaW1JbmRleCA+PSBTYW1wbGVEYXRhLnNhbXBsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLl9zaW1JbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNpbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBnZXQgc2ltdWxhdGVkIGJ1dHRvbiBkYXRhIG9iamVjdFxuICAgICAqL1xuICAgIGdldFNpbXVsYXRlZEJ1dHRvbnMoKSB7XG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5nZXRTaW11bGF0ZWRTZW5zb3JzKCk7XG4gICAgICAgIGRhdGEuc2Vuc29ycy5idXR0b25zID0geyBhY3RpdmU6IHRydWUsIGVuYWJsZWQ6IHRydWUgfTtcbiAgICAgICAgZGF0YS5zZW5zb3JzLmJ1dHRvbnMubGVmdCA9IE1hdGgucmFuZG9tKCkgPiAuNTtcbiAgICAgICAgZGF0YS5zZW5zb3JzLmJ1dHRvbnMucmlnaHQgPSBNYXRoLnJhbmRvbSgpID4gLjU7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIG9uIGRldmljZSByZXF1ZXN0ZWQgc3VjY2Vzc1xuICAgICAqIEBwYXJhbSBkZXZpY2VcbiAgICAgKi9cbiAgICBvbkRldmljZVJlcXVlc3RlZFN1Y2Nlc3MoZGV2aWNlKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGVkID0gZGV2aWNlLmdhdHQuY29ubmVjdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIG9uIGRldmljZSByZXF1ZXN0ZWQgZXJyb3JcbiAgICAgKiBAcGFyYW0gZGV2aWNlXG4gICAgICovXG4gICAgb25EZXZpY2VFcnJvcihlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG59IiwiLyoqXG4gKiBIZWF2aWx5IGxpZnRlZCBmcm9tIFdlYlZSLVBvbHlmaWxsIHByb2plY3QgYnkgQm9yaXMgU211czogaHR0cHM6Ly9naXRodWIuY29tL2JvcmlzbXVzL3dlYnZyLXBvbHlmaWxsXG4gKiBidXQgcmVmYWN0b3JlZCB0byB1c2UgZGlmZmVyZW50IGRhdGEgc291cmNlIHByb3ZpZGVkIG92ZXIgQkxFIGJ5IHRoZSBUSSBTZW5zb3IgVGFnXG4gKlxuICogVGhpcyBwaWVjZSBpbiBwYXJ0aWN1bGFyIHdhcyBhbHNvIHB1bGxlZCBieSBCb3JpcyBmcm9tIFRocmVlSlMgbWF0aFxuICpcbiAqIG9yaWdpbmFsIGxpY2Vuc2UgZnJvbSBXZWJWUi1Qb2x5ZmlsbCBpcyBhcyBmb2xsb3dzOlxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoIHgsIHksIHosIHcgKSB7XG4gICAgICAgIHRoaXMueCA9IHggfHwgMDtcbiAgICAgICAgdGhpcy55ID0geSB8fCAwO1xuICAgICAgICB0aGlzLnogPSB6IHx8IDA7XG4gICAgICAgIHRoaXMudyA9ICggdyAhPT0gdW5kZWZpbmVkICkgPyB3IDogMTtcbiAgICB9XG5cbiAgICBzZXQoIHgsIHksIHosIHcgKSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMueiA9IHo7XG4gICAgICAgIHRoaXMudyA9IHc7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY29weSggcXVhdGVybmlvbiApIHtcbiAgICAgICAgdGhpcy54ID0gcXVhdGVybmlvbi54O1xuICAgICAgICB0aGlzLnkgPSBxdWF0ZXJuaW9uLnk7XG4gICAgICAgIHRoaXMueiA9IHF1YXRlcm5pb24uejtcbiAgICAgICAgdGhpcy53ID0gcXVhdGVybmlvbi53O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldEZyb21FdWxlclhZWiggeCwgeSwgeiApIHtcbiAgICAgICAgdmFyIGMxID0gTWF0aC5jb3MoIHggLyAyICk7XG4gICAgICAgIHZhciBjMiA9IE1hdGguY29zKCB5IC8gMiApO1xuICAgICAgICB2YXIgYzMgPSBNYXRoLmNvcyggeiAvIDIgKTtcbiAgICAgICAgdmFyIHMxID0gTWF0aC5zaW4oIHggLyAyICk7XG4gICAgICAgIHZhciBzMiA9IE1hdGguc2luKCB5IC8gMiApO1xuICAgICAgICB2YXIgczMgPSBNYXRoLnNpbiggeiAvIDIgKTtcblxuICAgICAgICB0aGlzLnggPSBzMSAqIGMyICogYzMgKyBjMSAqIHMyICogczM7XG4gICAgICAgIHRoaXMueSA9IGMxICogczIgKiBjMyAtIHMxICogYzIgKiBzMztcbiAgICAgICAgdGhpcy56ID0gYzEgKiBjMiAqIHMzICsgczEgKiBzMiAqIGMzO1xuICAgICAgICB0aGlzLncgPSBjMSAqIGMyICogYzMgLSBzMSAqIHMyICogczM7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0RnJvbUV1bGVyWVhaKCB4LCB5LCB6ICkge1xuICAgICAgICB2YXIgYzEgPSBNYXRoLmNvcyggeCAvIDIgKTtcbiAgICAgICAgdmFyIGMyID0gTWF0aC5jb3MoIHkgLyAyICk7XG4gICAgICAgIHZhciBjMyA9IE1hdGguY29zKCB6IC8gMiApO1xuICAgICAgICB2YXIgczEgPSBNYXRoLnNpbiggeCAvIDIgKTtcbiAgICAgICAgdmFyIHMyID0gTWF0aC5zaW4oIHkgLyAyICk7XG4gICAgICAgIHZhciBzMyA9IE1hdGguc2luKCB6IC8gMiApO1xuXG4gICAgICAgIHRoaXMueCA9IHMxICogYzIgKiBjMyArIGMxICogczIgKiBzMztcbiAgICAgICAgdGhpcy55ID0gYzEgKiBzMiAqIGMzIC0gczEgKiBjMiAqIHMzO1xuICAgICAgICB0aGlzLnogPSBjMSAqIGMyICogczMgLSBzMSAqIHMyICogYzM7XG4gICAgICAgIHRoaXMudyA9IGMxICogYzIgKiBjMyArIHMxICogczIgKiBzMztcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRGcm9tQXhpc0FuZ2xlKCBheGlzLCBhbmdsZSApIHtcbiAgICAgICAgLy8gaHR0cDovL3d3dy5ldWNsaWRlYW5zcGFjZS5jb20vbWF0aHMvZ2VvbWV0cnkvcm90YXRpb25zL2NvbnZlcnNpb25zL2FuZ2xlVG9RdWF0ZXJuaW9uL2luZGV4Lmh0bVxuICAgICAgICAvLyBhc3N1bWVzIGF4aXMgaXMgbm9ybWFsaXplZFxuXG4gICAgICAgIHZhciBoYWxmQW5nbGUgPSBhbmdsZSAvIDIsIHMgPSBNYXRoLnNpbiggaGFsZkFuZ2xlICk7XG5cbiAgICAgICAgdGhpcy54ID0gYXhpcy54ICogcztcbiAgICAgICAgdGhpcy55ID0gYXhpcy55ICogcztcbiAgICAgICAgdGhpcy56ID0gYXhpcy56ICogcztcbiAgICAgICAgdGhpcy53ID0gTWF0aC5jb3MoIGhhbGZBbmdsZSApO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG11bHRpcGx5KCBxICkge1xuICAgICAgICByZXR1cm4gdGhpcy5tdWx0aXBseVF1YXRlcm5pb25zKCB0aGlzLCBxICk7XG4gICAgfVxuXG4gICAgbXVsdGlwbHlRdWF0ZXJuaW9ucyggYSwgYiApIHtcbiAgICAgICAgLy8gZnJvbSBodHRwOi8vd3d3LmV1Y2xpZGVhbnNwYWNlLmNvbS9tYXRocy9hbGdlYnJhL3JlYWxOb3JtZWRBbGdlYnJhL3F1YXRlcm5pb25zL2NvZGUvaW5kZXguaHRtXG5cbiAgICAgICAgdmFyIHFheCA9IGEueCwgcWF5ID0gYS55LCBxYXogPSBhLnosIHFhdyA9IGEudztcbiAgICAgICAgdmFyIHFieCA9IGIueCwgcWJ5ID0gYi55LCBxYnogPSBiLnosIHFidyA9IGIudztcblxuICAgICAgICB0aGlzLnggPSBxYXggKiBxYncgKyBxYXcgKiBxYnggKyBxYXkgKiBxYnogLSBxYXogKiBxYnk7XG4gICAgICAgIHRoaXMueSA9IHFheSAqIHFidyArIHFhdyAqIHFieSArIHFheiAqIHFieCAtIHFheCAqIHFiejtcbiAgICAgICAgdGhpcy56ID0gcWF6ICogcWJ3ICsgcWF3ICogcWJ6ICsgcWF4ICogcWJ5IC0gcWF5ICogcWJ4O1xuICAgICAgICB0aGlzLncgPSBxYXcgKiBxYncgLSBxYXggKiBxYnggLSBxYXkgKiBxYnkgLSBxYXogKiBxYno7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaW52ZXJzZSgpIHtcbiAgICAgICAgdGhpcy54ICo9IC0xO1xuICAgICAgICB0aGlzLnkgKj0gLTE7XG4gICAgICAgIHRoaXMueiAqPSAtMTtcblxuICAgICAgICB0aGlzLm5vcm1hbGl6ZSgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG5vcm1hbGl6ZSgpIHtcbiAgICAgICAgdmFyIGwgPSBNYXRoLnNxcnQoIHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSArIHRoaXMueiAqIHRoaXMueiArIHRoaXMudyAqIHRoaXMudyApO1xuXG4gICAgICAgIGlmICggbCA9PT0gMCApIHtcbiAgICAgICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICAgICAgdGhpcy56ID0gMDtcbiAgICAgICAgICAgIHRoaXMudyA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsID0gMSAvIGw7XG5cbiAgICAgICAgICAgIHRoaXMueCA9IHRoaXMueCAqIGw7XG4gICAgICAgICAgICB0aGlzLnkgPSB0aGlzLnkgKiBsO1xuICAgICAgICAgICAgdGhpcy56ID0gdGhpcy56ICogbDtcbiAgICAgICAgICAgIHRoaXMudyA9IHRoaXMudyAqIGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzbGVycCggcWIsIHQgKSB7XG4gICAgICAgIGlmICggdCA9PT0gMCApIHJldHVybiB0aGlzO1xuICAgICAgICBpZiAoIHQgPT09IDEgKSByZXR1cm4gdGhpcy5jb3B5KCBxYiApO1xuXG4gICAgICAgIHZhciB4ID0gdGhpcy54LCB5ID0gdGhpcy55LCB6ID0gdGhpcy56LCB3ID0gdGhpcy53O1xuXG4gICAgICAgIC8vIGh0dHA6Ly93d3cuZXVjbGlkZWFuc3BhY2UuY29tL21hdGhzL2FsZ2VicmEvcmVhbE5vcm1lZEFsZ2VicmEvcXVhdGVybmlvbnMvc2xlcnAvXG5cbiAgICAgICAgdmFyIGNvc0hhbGZUaGV0YSA9IHcgKiBxYi53ICsgeCAqIHFiLnggKyB5ICogcWIueSArIHogKiBxYi56O1xuXG4gICAgICAgIGlmICggY29zSGFsZlRoZXRhIDwgMCApIHtcbiAgICAgICAgICAgIHRoaXMudyA9IC0gcWIudztcbiAgICAgICAgICAgIHRoaXMueCA9IC0gcWIueDtcbiAgICAgICAgICAgIHRoaXMueSA9IC0gcWIueTtcbiAgICAgICAgICAgIHRoaXMueiA9IC0gcWIuejtcblxuICAgICAgICAgICAgY29zSGFsZlRoZXRhID0gLSBjb3NIYWxmVGhldGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvcHkoIHFiICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIGNvc0hhbGZUaGV0YSA+PSAxLjAgKSB7XG4gICAgICAgICAgICB0aGlzLncgPSB3O1xuICAgICAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgICAgICB0aGlzLnogPSB6O1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBoYWxmVGhldGEgPSBNYXRoLmFjb3MoIGNvc0hhbGZUaGV0YSApO1xuICAgICAgICB2YXIgc2luSGFsZlRoZXRhID0gTWF0aC5zcXJ0KCAxLjAgLSBjb3NIYWxmVGhldGEgKiBjb3NIYWxmVGhldGEgKTtcblxuICAgICAgICBpZiAoIE1hdGguYWJzKCBzaW5IYWxmVGhldGEgKSA8IDAuMDAxICkge1xuICAgICAgICAgICAgdGhpcy53ID0gMC41ICogKCB3ICsgdGhpcy53ICk7XG4gICAgICAgICAgICB0aGlzLnggPSAwLjUgKiAoIHggKyB0aGlzLnggKTtcbiAgICAgICAgICAgIHRoaXMueSA9IDAuNSAqICggeSArIHRoaXMueSApO1xuICAgICAgICAgICAgdGhpcy56ID0gMC41ICogKCB6ICsgdGhpcy56ICk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJhdGlvQSA9IE1hdGguc2luKCAoIDEgLSB0ICkgKiBoYWxmVGhldGEgKSAvIHNpbkhhbGZUaGV0YSxcbiAgICAgICAgICAgIHJhdGlvQiA9IE1hdGguc2luKCB0ICogaGFsZlRoZXRhICkgLyBzaW5IYWxmVGhldGE7XG5cbiAgICAgICAgdGhpcy53ID0gKCB3ICogcmF0aW9BICsgdGhpcy53ICogcmF0aW9CICk7XG4gICAgICAgIHRoaXMueCA9ICggeCAqIHJhdGlvQSArIHRoaXMueCAqIHJhdGlvQiApO1xuICAgICAgICB0aGlzLnkgPSAoIHkgKiByYXRpb0EgKyB0aGlzLnkgKiByYXRpb0IgKTtcbiAgICAgICAgdGhpcy56ID0gKCB6ICogcmF0aW9BICsgdGhpcy56ICogcmF0aW9CICk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0RnJvbVVuaXRWZWN0b3JzKCkge1xuICAgICAgICAvLyBodHRwOi8vbG9sZW5naW5lLm5ldC9ibG9nLzIwMTQvMDIvMjQvcXVhdGVybmlvbi1mcm9tLXR3by12ZWN0b3JzLWZpbmFsXG4gICAgICAgIC8vIGFzc3VtZXMgZGlyZWN0aW9uIHZlY3RvcnMgdkZyb20gYW5kIHZUbyBhcmUgbm9ybWFsaXplZFxuXG4gICAgICAgIHZhciB2MSwgcjtcbiAgICAgICAgdmFyIEVQUyA9IDAuMDAwMDAxO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoIHZGcm9tLCB2VG8gKSB7XG4gICAgICAgICAgICBpZiAodjEgPT09IHVuZGVmaW5lZCkgdjEgPSBuZXcgTWF0aFV0aWwuVmVjdG9yMygpO1xuXG4gICAgICAgICAgICByID0gdkZyb20uZG90KHZUbykgKyAxO1xuXG4gICAgICAgICAgICBpZiAociA8IEVQUykge1xuICAgICAgICAgICAgICAgIHIgPSAwO1xuXG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHZGcm9tLngpID4gTWF0aC5hYnModkZyb20ueikpIHtcbiAgICAgICAgICAgICAgICAgICAgdjEuc2V0KC12RnJvbS55LCB2RnJvbS54LCAwKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2MS5zZXQoMCwgLXZGcm9tLnosIHZGcm9tLnkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdjEuY3Jvc3NWZWN0b3JzKHZGcm9tLCB2VG8pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnggPSB2MS54O1xuICAgICAgICAgICAgdGhpcy55ID0gdjEueTtcbiAgICAgICAgICAgIHRoaXMueiA9IHYxLno7XG4gICAgICAgICAgICB0aGlzLncgPSByO1xuXG4gICAgICAgICAgICB0aGlzLm5vcm1hbGl6ZSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvKipcbiAqIEhlYXZpbHkgbGlmdGVkIGZyb20gV2ViVlItUG9seWZpbGwgcHJvamVjdCBieSBCb3JpcyBTbXVzOiBodHRwczovL2dpdGh1Yi5jb20vYm9yaXNtdXMvd2VidnItcG9seWZpbGxcbiAqIGJ1dCByZWZhY3RvcmVkIHRvIHVzZSBkaWZmZXJlbnQgZGF0YSBzb3VyY2UgcHJvdmlkZWQgb3ZlciBCTEUgYnkgdGhlIFRJIFNlbnNvciBUYWdcbiAqXG4gKiBUaGlzIHBpZWNlIGluIHBhcnRpY3VsYXIgd2FzIGFsc28gcHVsbGVkIGJ5IEJvcmlzIGZyb20gVGhyZWVKUyBtYXRoXG4gKlxuICogb3JpZ2luYWwgbGljZW5zZSBmcm9tIFdlYlZSLVBvbHlmaWxsIGlzIGFzIGZvbGxvd3M6XG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGVnVG9SYWQ6IE1hdGguUEkgLyAxODAsXG4gICAgcmFkVG9EZWc6IDE4MCAvIE1hdGguUEksXG4gICAgTUlOX1RJTUVTVEVQOiAwLjAwMSxcbiAgICBNQVhfVElNRVNURVA6IDEsXG5cbiAgICAvLyBIZWxwZXIgbWV0aG9kIHRvIHZhbGlkYXRlIHRoZSB0aW1lIHN0ZXBzIG9mIHNlbnNvciB0aW1lc3RhbXBzLlxuICAgIGlzVGltZXN0YW1wRGVsdGFWYWxpZDogZnVuY3Rpb24odGltZXN0YW1wRGVsdGFTKSB7XG4gICAgICAgIGlmIChpc05hTih0aW1lc3RhbXBEZWx0YVMpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRpbWVzdGFtcERlbHRhUyA8PSB0aGlzLk1JTl9USU1FU1RFUCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aW1lc3RhbXBEZWx0YVMgPiB0aGlzLk1BWF9USU1FU1RFUCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn0iLCIvKipcbiAqIEhlYXZpbHkgbGlmdGVkIGZyb20gV2ViVlItUG9seWZpbGwgcHJvamVjdCBieSBCb3JpcyBTbXVzOiBodHRwczovL2dpdGh1Yi5jb20vYm9yaXNtdXMvd2VidnItcG9seWZpbGxcbiAqIGJ1dCByZWZhY3RvcmVkIHRvIHVzZSBkaWZmZXJlbnQgZGF0YSBzb3VyY2UgcHJvdmlkZWQgb3ZlciBCTEUgYnkgdGhlIFRJIFNlbnNvciBUYWdcbiAqXG4gKiBUaGlzIHBpZWNlIGluIHBhcnRpY3VsYXIgd2FzIGFsc28gcHVsbGVkIGJ5IEJvcmlzIGZyb20gVGhyZWVKUyBtYXRoXG4gKlxuICogb3JpZ2luYWwgbGljZW5zZSBmcm9tIFdlYlZSLVBvbHlmaWxsIGlzIGFzIGZvbGxvd3M6XG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB6KSB7XG4gICAgICAgIHRoaXMueCA9IHggfHwgMDtcbiAgICAgICAgdGhpcy55ID0geSB8fCAwO1xuICAgICAgICB0aGlzLnogPSB6IHx8IDA7XG4gICAgfVxuXG4gICAgc2V0KCB4LCB5LCB6ICkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnogPSB6O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNvcHkoIHYgKSB7XG4gICAgICAgIHRoaXMueCA9IHYueDtcbiAgICAgICAgdGhpcy55ID0gdi55O1xuICAgICAgICB0aGlzLnogPSB2Lno7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KCB0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkgKyB0aGlzLnogKiB0aGlzLnogKTtcbiAgICB9XG5cbiAgICBub3JtYWxpemUoKSB7XG4gICAgICAgIHZhciBzY2FsYXIgPSB0aGlzLmxlbmd0aCgpO1xuXG4gICAgICAgIGlmICggc2NhbGFyICE9PSAwICkge1xuICAgICAgICAgICAgdmFyIGludlNjYWxhciA9IDEgLyBzY2FsYXI7XG5cbiAgICAgICAgICAgIHRoaXMubXVsdGlwbHlTY2FsYXIoaW52U2NhbGFyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICAgICAgdGhpcy56ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG11bHRpcGx5U2NhbGFyKCBzY2FsYXIgKSB7XG4gICAgICAgIHRoaXMueCAqPSBzY2FsYXI7XG4gICAgICAgIHRoaXMueSAqPSBzY2FsYXI7XG4gICAgICAgIHRoaXMueiAqPSBzY2FsYXI7XG4gICAgfVxuXG4gICAgYXBwbHlRdWF0ZXJuaW9uKCBxICkge1xuICAgICAgICB2YXIgeCA9IHRoaXMueDtcbiAgICAgICAgdmFyIHkgPSB0aGlzLnk7XG4gICAgICAgIHZhciB6ID0gdGhpcy56O1xuXG4gICAgICAgIHZhciBxeCA9IHEueDtcbiAgICAgICAgdmFyIHF5ID0gcS55O1xuICAgICAgICB2YXIgcXogPSBxLno7XG4gICAgICAgIHZhciBxdyA9IHEudztcblxuICAgICAgICAvLyBjYWxjdWxhdGUgcXVhdCAqIHZlY3RvclxuICAgICAgICB2YXIgaXggPSAgcXcgKiB4ICsgcXkgKiB6IC0gcXogKiB5O1xuICAgICAgICB2YXIgaXkgPSAgcXcgKiB5ICsgcXogKiB4IC0gcXggKiB6O1xuICAgICAgICB2YXIgaXogPSAgcXcgKiB6ICsgcXggKiB5IC0gcXkgKiB4O1xuICAgICAgICB2YXIgaXcgPSAtIHF4ICogeCAtIHF5ICogeSAtIHF6ICogejtcblxuICAgICAgICAvLyBjYWxjdWxhdGUgcmVzdWx0ICogaW52ZXJzZSBxdWF0XG4gICAgICAgIHRoaXMueCA9IGl4ICogcXcgKyBpdyAqIC0gcXggKyBpeSAqIC0gcXogLSBpeiAqIC0gcXk7XG4gICAgICAgIHRoaXMueSA9IGl5ICogcXcgKyBpdyAqIC0gcXkgKyBpeiAqIC0gcXggLSBpeCAqIC0gcXo7XG4gICAgICAgIHRoaXMueiA9IGl6ICogcXcgKyBpdyAqIC0gcXogKyBpeCAqIC0gcXkgLSBpeSAqIC0gcXg7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZG90KCB2ICkge1xuICAgICAgICByZXR1cm4gdGhpcy54ICogdi54ICsgdGhpcy55ICogdi55ICsgdGhpcy56ICogdi56O1xuICAgIH1cblxuICAgIGNyb3NzVmVjdG9ycyggYSwgYiApIHtcbiAgICAgICAgdmFyIGF4ID0gYS54LCBheSA9IGEueSwgYXogPSBhLno7XG4gICAgICAgIHZhciBieCA9IGIueCwgYnkgPSBiLnksIGJ6ID0gYi56O1xuXG4gICAgICAgIHRoaXMueCA9IGF5ICogYnogLSBheiAqIGJ5O1xuICAgICAgICB0aGlzLnkgPSBheiAqIGJ4IC0gYXggKiBiejtcbiAgICAgICAgdGhpcy56ID0gYXggKiBieSAtIGF5ICogYng7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufTsiLCIvKipcbiAqIEhlYXZpbHkgbGlmdGVkIGZyb20gV2ViVlItUG9seWZpbGwgcHJvamVjdCBieSBCb3JpcyBTbXVzOiBodHRwczovL2dpdGh1Yi5jb20vYm9yaXNtdXMvd2VidnItcG9seWZpbGxcbiAqIGJ1dCByZWZhY3RvcmVkIHRvIHVzZSBkaWZmZXJlbnQgZGF0YSBzb3VyY2UgcHJvdmlkZWQgb3ZlciBCTEUgYnkgdGhlIFRJIFNlbnNvciBUYWdcbiAqXG4gKiBvcmlnaW5hbCBsaWNlbnNlIGZyb20gV2ViVlItUG9seWZpbGwgaXMgYXMgZm9sbG93czpcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuXG4vKipcbiAqIFRPRE86IEZpeCB1cCBhbGwgXCJuZXcgVEhSRUVcIiBpbnN0YW50aWF0aW9ucyB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLlxuICovXG5pbXBvcnQgU2Vuc29yU2FtcGxlIGZyb20gJy4vc2Vuc29yLXNhbXBsZS5lczYnO1xuaW1wb3J0IFF1YXRlcm5pb24gZnJvbSAgJy4uL21hdGgvcXVhdGVybmlvbi5lczYnO1xuaW1wb3J0IFZlY3RvcjMgZnJvbSAgJy4uL21hdGgvdmVjdG9yMy5lczYnO1xuaW1wb3J0IE1hdGhVdGlsIGZyb20gJy4uL21hdGgvdXRpbC5lczYnO1xuXG4vKipcbiAqIEFuIGltcGxlbWVudGF0aW9uIG9mIGEgc2ltcGxlIGNvbXBsZW1lbnRhcnkgZmlsdGVyLCB3aGljaCBmdXNlcyBneXJvc2NvcGUgYW5kXG4gKiBhY2NlbGVyb21ldGVyIGRhdGEgZnJvbSB0aGUgJ2RldmljZW1vdGlvbicgZXZlbnQuXG4gKlxuICogQWNjZWxlcm9tZXRlciBkYXRhIGlzIHZlcnkgbm9pc3ksIGJ1dCBzdGFibGUgb3ZlciB0aGUgbG9uZyB0ZXJtLlxuICogR3lyb3Njb3BlIGRhdGEgaXMgc21vb3RoLCBidXQgdGVuZHMgdG8gZHJpZnQgb3ZlciB0aGUgbG9uZyB0ZXJtLlxuICpcbiAqIFRoaXMgZnVzaW9uIGlzIHJlbGF0aXZlbHkgc2ltcGxlOlxuICogMS4gR2V0IG9yaWVudGF0aW9uIGVzdGltYXRlcyBmcm9tIGFjY2VsZXJvbWV0ZXIgYnkgYXBwbHlpbmcgYSBsb3ctcGFzcyBmaWx0ZXJcbiAqICAgIG9uIHRoYXQgZGF0YS5cbiAqIDIuIEdldCBvcmllbnRhdGlvbiBlc3RpbWF0ZXMgZnJvbSBneXJvc2NvcGUgYnkgaW50ZWdyYXRpbmcgb3ZlciB0aW1lLlxuICogMy4gQ29tYmluZSB0aGUgdHdvIGVzdGltYXRlcywgd2VpZ2hpbmcgKDEpIGluIHRoZSBsb25nIHRlcm0sIGJ1dCAoMikgZm9yIHRoZVxuICogICAgc2hvcnQgdGVybS5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3Ioa0ZpbHRlcikge1xuICAgICAgICB0aGlzLmtGaWx0ZXIgPSBrRmlsdGVyO1xuXG4gICAgICAgIC8vIFJhdyBzZW5zb3IgbWVhc3VyZW1lbnRzLlxuICAgICAgICB0aGlzLmN1cnJlbnRBY2NlbE1lYXN1cmVtZW50ID0gbmV3IFNlbnNvclNhbXBsZSgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRHeXJvTWVhc3VyZW1lbnQgPSBuZXcgU2Vuc29yU2FtcGxlKCk7XG4gICAgICAgIHRoaXMucHJldmlvdXNHeXJvTWVhc3VyZW1lbnQgPSBuZXcgU2Vuc29yU2FtcGxlKCk7XG5cbiAgICAgICAgLy8gQ3VycmVudCBmaWx0ZXIgb3JpZW50YXRpb25cbiAgICAgICAgdGhpcy5maWx0ZXJRID0gbmV3IFF1YXRlcm5pb24oKTtcbiAgICAgICAgdGhpcy5wcmV2aW91c0ZpbHRlclEgPSBuZXcgUXVhdGVybmlvbigpO1xuXG4gICAgICAgIC8vIE9yaWVudGF0aW9uIGJhc2VkIG9uIHRoZSBhY2NlbGVyb21ldGVyLlxuICAgICAgICB0aGlzLmFjY2VsUSA9IG5ldyBRdWF0ZXJuaW9uKCk7XG4gICAgICAgIC8vIFdoZXRoZXIgb3Igbm90IHRoZSBvcmllbnRhdGlvbiBoYXMgYmVlbiBpbml0aWFsaXplZC5cbiAgICAgICAgdGhpcy5pc09yaWVudGF0aW9uSW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICAgICAgLy8gUnVubmluZyBlc3RpbWF0ZSBvZiBncmF2aXR5IGJhc2VkIG9uIHRoZSBjdXJyZW50IG9yaWVudGF0aW9uLlxuICAgICAgICB0aGlzLmVzdGltYXRlZEdyYXZpdHkgPSBuZXcgVmVjdG9yMygpO1xuICAgICAgICAvLyBNZWFzdXJlZCBncmF2aXR5IGJhc2VkIG9uIGFjY2VsZXJvbWV0ZXIuXG4gICAgICAgIHRoaXMubWVhc3VyZWRHcmF2aXR5ID0gbmV3IFZlY3RvcjMoKTtcblxuICAgICAgICAvLyBEZWJ1ZyBvbmx5IHF1YXRlcm5pb24gb2YgZ3lyby1iYXNlZCBvcmllbnRhdGlvbi5cbiAgICAgICAgdGhpcy5neXJvSW50ZWdyYWxRID0gbmV3IFF1YXRlcm5pb24oKTtcbiAgICB9XG5cblxuICAgIGFkZEFjY2VsTWVhc3VyZW1lbnQodmVjdG9yLCB0aW1lc3RhbXBTKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEFjY2VsTWVhc3VyZW1lbnQuc2V0KHZlY3RvciwgdGltZXN0YW1wUyk7XG4gICAgfVxuXG4gICAgYWRkR3lyb01lYXN1cmVtZW50KHZlY3RvciwgdGltZXN0YW1wUykge1xuICAgICAgICB0aGlzLmN1cnJlbnRHeXJvTWVhc3VyZW1lbnQuc2V0KHZlY3RvciwgdGltZXN0YW1wUyk7XG5cbiAgICAgICAgdmFyIGRlbHRhVCA9IHRpbWVzdGFtcFMgLSB0aGlzLnByZXZpb3VzR3lyb01lYXN1cmVtZW50LnRpbWVzdGFtcFM7XG4gICAgICAgIGlmIChNYXRoVXRpbC5pc1RpbWVzdGFtcERlbHRhVmFsaWQoZGVsdGFUKSkge1xuICAgICAgICAgICAgdGhpcy5ydW5fKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByZXZpb3VzR3lyb01lYXN1cmVtZW50LmNvcHkodGhpcy5jdXJyZW50R3lyb01lYXN1cmVtZW50KTtcbiAgICB9XG5cbiAgICBydW5fKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNPcmllbnRhdGlvbkluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICB0aGlzLmFjY2VsUSA9IHRoaXMuYWNjZWxUb1F1YXRlcm5pb25fKHRoaXMuY3VycmVudEFjY2VsTWVhc3VyZW1lbnQuc2FtcGxlKTtcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNGaWx0ZXJRLmNvcHkodGhpcy5hY2NlbFEpO1xuICAgICAgICAgICAgdGhpcy5pc09yaWVudGF0aW9uSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRlbHRhVCA9IHRoaXMuY3VycmVudEd5cm9NZWFzdXJlbWVudC50aW1lc3RhbXBTIC1cbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNHeXJvTWVhc3VyZW1lbnQudGltZXN0YW1wUztcblxuICAgICAgICAvLyBDb252ZXJ0IGd5cm8gcm90YXRpb24gdmVjdG9yIHRvIGEgcXVhdGVybmlvbiBkZWx0YS5cbiAgICAgICAgdmFyIGd5cm9EZWx0YVEgPSB0aGlzLmd5cm9Ub1F1YXRlcm5pb25EZWx0YV8odGhpcy5jdXJyZW50R3lyb01lYXN1cmVtZW50LnNhbXBsZSwgZGVsdGFUKTtcbiAgICAgICAgdGhpcy5neXJvSW50ZWdyYWxRLm11bHRpcGx5KGd5cm9EZWx0YVEpO1xuXG4gICAgICAgIC8vIGZpbHRlcl8xID0gSyAqIChmaWx0ZXJfMCArIGd5cm8gKiBkVCkgKyAoMSAtIEspICogYWNjZWwuXG4gICAgICAgIHRoaXMuZmlsdGVyUS5jb3B5KHRoaXMucHJldmlvdXNGaWx0ZXJRKTtcbiAgICAgICAgdGhpcy5maWx0ZXJRLm11bHRpcGx5KGd5cm9EZWx0YVEpO1xuXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgZGVsdGEgYmV0d2VlbiB0aGUgY3VycmVudCBlc3RpbWF0ZWQgZ3Jhdml0eSBhbmQgdGhlIHJlYWxcbiAgICAgICAgLy8gZ3Jhdml0eSB2ZWN0b3IgZnJvbSBhY2NlbGVyb21ldGVyLlxuICAgICAgICB2YXIgaW52RmlsdGVyUSA9IG5ldyBRdWF0ZXJuaW9uKCk7XG4gICAgICAgIGludkZpbHRlclEuY29weSh0aGlzLmZpbHRlclEpO1xuICAgICAgICBpbnZGaWx0ZXJRLmludmVyc2UoKTtcblxuICAgICAgICB0aGlzLmVzdGltYXRlZEdyYXZpdHkuc2V0KDAsIDAsIC0xKTtcbiAgICAgICAgdGhpcy5lc3RpbWF0ZWRHcmF2aXR5LmFwcGx5UXVhdGVybmlvbihpbnZGaWx0ZXJRKTtcbiAgICAgICAgdGhpcy5lc3RpbWF0ZWRHcmF2aXR5Lm5vcm1hbGl6ZSgpO1xuXG4gICAgICAgIHRoaXMubWVhc3VyZWRHcmF2aXR5LmNvcHkodGhpcy5jdXJyZW50QWNjZWxNZWFzdXJlbWVudC5zYW1wbGUpO1xuICAgICAgICB0aGlzLm1lYXN1cmVkR3Jhdml0eS5ub3JtYWxpemUoKTtcblxuICAgICAgICAvLyBDb21wYXJlIGVzdGltYXRlZCBncmF2aXR5IHdpdGggbWVhc3VyZWQgZ3Jhdml0eSwgZ2V0IHRoZSBkZWx0YSBxdWF0ZXJuaW9uXG4gICAgICAgIC8vIGJldHdlZW4gdGhlIHR3by5cbiAgICAgICAgdmFyIGRlbHRhUSA9IG5ldyBRdWF0ZXJuaW9uKCk7XG4gICAgICAgIGRlbHRhUS5zZXRGcm9tVW5pdFZlY3RvcnModGhpcy5lc3RpbWF0ZWRHcmF2aXR5LCB0aGlzLm1lYXN1cmVkR3Jhdml0eSk7XG4gICAgICAgIGRlbHRhUS5pbnZlcnNlKCk7XG5cbiAgICAgICAgLyppZiAoREVCVUcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEZWx0YTogJWQgZGVnLCBHX2VzdDogKCVzLCAlcywgJXMpLCBHX21lYXM6ICglcywgJXMsICVzKScsXG4gICAgICAgICAgICAgICAgTWF0aFV0aWwucmFkVG9EZWcgKiBVdGlsLmdldFF1YXRlcm5pb25BbmdsZShkZWx0YVEpLFxuICAgICAgICAgICAgICAgICh0aGlzLmVzdGltYXRlZEdyYXZpdHkueCkudG9GaXhlZCgxKSxcbiAgICAgICAgICAgICAgICAodGhpcy5lc3RpbWF0ZWRHcmF2aXR5LnkpLnRvRml4ZWQoMSksXG4gICAgICAgICAgICAgICAgKHRoaXMuZXN0aW1hdGVkR3Jhdml0eS56KS50b0ZpeGVkKDEpLFxuICAgICAgICAgICAgICAgICh0aGlzLm1lYXN1cmVkR3Jhdml0eS54KS50b0ZpeGVkKDEpLFxuICAgICAgICAgICAgICAgICh0aGlzLm1lYXN1cmVkR3Jhdml0eS55KS50b0ZpeGVkKDEpLFxuICAgICAgICAgICAgICAgICh0aGlzLm1lYXN1cmVkR3Jhdml0eS56KS50b0ZpeGVkKDEpKTtcbiAgICAgICAgfSovXG5cbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBTTEVSUCB0YXJnZXQ6IGN1cnJlbnQgb3JpZW50YXRpb24gcGx1cyB0aGUgbWVhc3VyZWQtZXN0aW1hdGVkXG4gICAgICAgIC8vIHF1YXRlcm5pb24gZGVsdGEuXG4gICAgICAgIHZhciB0YXJnZXRRID0gbmV3IFF1YXRlcm5pb24oKTtcbiAgICAgICAgdGFyZ2V0US5jb3B5KHRoaXMuZmlsdGVyUSk7XG4gICAgICAgIHRhcmdldFEubXVsdGlwbHkoZGVsdGFRKTtcblxuICAgICAgICAvLyBTTEVSUCBmYWN0b3I6IDAgaXMgcHVyZSBneXJvLCAxIGlzIHB1cmUgYWNjZWwuXG4gICAgICAgIHRoaXMuZmlsdGVyUS5zbGVycCh0YXJnZXRRLCAxIC0gdGhpcy5rRmlsdGVyKTtcblxuICAgICAgICB0aGlzLnByZXZpb3VzRmlsdGVyUS5jb3B5KHRoaXMuZmlsdGVyUSk7XG4gICAgfVxuXG4gICAgZ2V0T3JpZW50YXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlclE7XG4gICAgfVxuXG4gICAgYWNjZWxUb1F1YXRlcm5pb25fKGFjY2VsKSB7XG4gICAgICAgIHZhciBub3JtQWNjZWwgPSBuZXcgVmVjdG9yMygpO1xuICAgICAgICBub3JtQWNjZWwuY29weShhY2NlbCk7XG4gICAgICAgIG5vcm1BY2NlbC5ub3JtYWxpemUoKTtcbiAgICAgICAgdmFyIHF1YXQgPSBuZXcgUXVhdGVybmlvbigpO1xuICAgICAgICBxdWF0LnNldEZyb21Vbml0VmVjdG9ycyhuZXcgVmVjdG9yMygwLCAwLCAtMSksIG5vcm1BY2NlbCk7XG4gICAgICAgIHF1YXQuaW52ZXJzZSgpO1xuICAgICAgICByZXR1cm4gcXVhdDtcbiAgICB9XG5cbiAgICBneXJvVG9RdWF0ZXJuaW9uRGVsdGFfKGd5cm8sIGR0KSB7XG4gICAgICAgIC8vIEV4dHJhY3QgYXhpcyBhbmQgYW5nbGUgZnJvbSB0aGUgZ3lyb3Njb3BlIGRhdGEuXG4gICAgICAgIHZhciBxdWF0ID0gbmV3IFF1YXRlcm5pb24oKTtcbiAgICAgICAgdmFyIGF4aXMgPSBuZXcgVmVjdG9yMygpO1xuICAgICAgICBheGlzLmNvcHkoZ3lybyk7XG4gICAgICAgIGF4aXMubm9ybWFsaXplKCk7XG4gICAgICAgIHF1YXQuc2V0RnJvbUF4aXNBbmdsZShheGlzLCBneXJvLmxlbmd0aCgpICogZHQpO1xuICAgICAgICByZXR1cm4gcXVhdDtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIEtfRklMVEVSOiAwLjk4LCAvLyBEZWZhdWx0OiAwLjk4LlxuXG4gICAgLy8gSG93IGZhciBpbnRvIHRoZSBmdXR1cmUgdG8gcHJlZGljdCBkdXJpbmcgZmFzdCBtb3Rpb24gKGluIHNlY29uZHMpLlxuICAgIFBSRURJQ1RJT05fVElNRV9TOiAwLjA0MCwgLy8gRGVmYXVsdDogMC4wNDAuXG5cbiAgICBZQVdfT05MWTogdHJ1ZVxufSIsIi8qKlxuICogSGVhdmlseSBsaWZ0ZWQgZnJvbSBXZWJWUi1Qb2x5ZmlsbCBwcm9qZWN0IGJ5IEJvcmlzIFNtdXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9ib3Jpc211cy93ZWJ2ci1wb2x5ZmlsbFxuICogYnV0IHJlZmFjdG9yZWQgdG8gdXNlIGRpZmZlcmVudCBkYXRhIHNvdXJjZSBwcm92aWRlZCBvdmVyIEJMRSBieSB0aGUgVEkgU2Vuc29yIFRhZ1xuICpcbiAqIG9yaWdpbmFsIGxpY2Vuc2UgZnJvbSBXZWJWUi1Qb2x5ZmlsbCBpcyBhcyBmb2xsb3dzOlxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IENvbXBsZW1lbnRhcnlGaWx0ZXIgZnJvbSAnLi9jb21wbGVtZW50YXJ5LWZpbHRlci5lczYnO1xuaW1wb3J0IFBvc2VQcmVkaWN0b3IgZnJvbSAnLi9wb3NlLXByZWRpY3Rvci5lczYnO1xuLy9pbXBvcnQgVG91Y2hQYW5uZXIgZnJvbSAnLi4vdG91Y2gtcGFubmVyLmVzNic7XG5pbXBvcnQgTWF0aFV0aWwgZnJvbSAnLi4vbWF0aC91dGlsLmVzNic7XG5pbXBvcnQgVmVjdG9yMyBmcm9tICcuLi9tYXRoL3ZlY3RvcjMuZXM2JztcbmltcG9ydCBRdWF0ZXJuaW9uIGZyb20gJy4uL21hdGgvcXVhdGVybmlvbi5lczYnO1xuaW1wb3J0IENvbmZpZyBmcm9tICcuL2NvbmZpZy5lczYnO1xuXG4vKipcbiAqIFRoZSBwb3NlIHNlbnNvciwgaW1wbGVtZW50ZWQgdXNpbmcgRGV2aWNlTW90aW9uIEFQSXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kZXZpY2VJZCA9ICd3ZWJ2ci1wb2x5ZmlsbDpmdXNlZCc7XG4gICAgICAgIHRoaXMuZGV2aWNlTmFtZSA9ICdWUiBQb3NpdGlvbiBEZXZpY2UgKHdlYnZyLXBvbHlmaWxsOmZ1c2VkKSc7XG5cbiAgICAgICAgdGhpcy5hY2NlbGVyb21ldGVyID0gbmV3IFZlY3RvcjMoKTtcbiAgICAgICAgdGhpcy5neXJvc2NvcGUgPSBuZXcgVmVjdG9yMygpO1xuXG4gICAgICAgIC8vd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZW1vdGlvbicsIHRoaXMub25EZXZpY2VNb3Rpb25DaGFuZ2VfLmJpbmQodGhpcykpO1xuICAgICAgICAvL3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIHRoaXMub25TY3JlZW5PcmllbnRhdGlvbkNoYW5nZV8uYmluZCh0aGlzKSk7XG5cbiAgICAgICAgdGhpcy5maWx0ZXIgPSBuZXcgQ29tcGxlbWVudGFyeUZpbHRlcihDb25maWcuS19GSUxURVIpO1xuICAgICAgICB0aGlzLnBvc2VQcmVkaWN0b3IgPSBuZXcgUG9zZVByZWRpY3RvcihDb25maWcuUFJFRElDVElPTl9USU1FX1MpO1xuICAgICAvLyAgIHRoaXMudG91Y2hQYW5uZXIgPSBuZXcgVG91Y2hQYW5uZXIoKTtcblxuICAgICAgICB0aGlzLmZpbHRlclRvV29ybGRRID0gbmV3IFF1YXRlcm5pb24oKTtcblxuICAgICAgICAvLyBTZXQgdGhlIGZpbHRlciB0byB3b3JsZCB0cmFuc2Zvcm0sIGRlcGVuZGluZyBvbiBPUy5cbiAgICAgICAgLy9pZiAoVXRpbC5pc0lPUygpKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyVG9Xb3JsZFEuc2V0RnJvbUF4aXNBbmdsZShuZXcgVmVjdG9yMygxLCAwLCAwKSwgTWF0aC5QSSAvIDIpO1xuICAgICAgICAvL30gZWxzZSB7XG4gICAgICAgIC8vICB0aGlzLmZpbHRlclRvV29ybGRRLnNldEZyb21BeGlzQW5nbGUobmV3IFZlY3RvcjMoMSwgMCwgMCksIC1NYXRoLlBJIC8gMik7XG4gICAgICAgIC8vfVxuXG4gICAgICAgIHRoaXMuaW52ZXJzZVdvcmxkVG9TY3JlZW5RID0gbmV3IFF1YXRlcm5pb24oKTtcbiAgICAgICAgdGhpcy53b3JsZFRvU2NyZWVuUSA9IG5ldyBRdWF0ZXJuaW9uKCk7XG4gICAgICAgIHRoaXMub3JpZ2luYWxQb3NlQWRqdXN0USA9IG5ldyBRdWF0ZXJuaW9uKCk7XG4gICAgICAgIHRoaXMub3JpZ2luYWxQb3NlQWRqdXN0US5zZXRGcm9tQXhpc0FuZ2xlKG5ldyBWZWN0b3IzKDAsIDAsIDEpLFxuICAgICAgICAgICAgLXdpbmRvdy5vcmllbnRhdGlvbiAqIE1hdGguUEkgLyAxODApO1xuXG4gICAgICAgIC8vdGhpcy5zZXRTY3JlZW5UcmFuc2Zvcm1fKCk7XG4gICAgICAgIC8vIEFkanVzdCB0aGlzIGZpbHRlciBmb3IgYmVpbmcgaW4gbGFuZHNjYXBlIG1vZGUuXG4gICAgICAgIC8vaWYgKFV0aWwuaXNMYW5kc2NhcGVNb2RlKCkpIHtcbiAgICAgICAgLy8gIHRoaXMuZmlsdGVyVG9Xb3JsZFEubXVsdGlwbHkodGhpcy5pbnZlcnNlV29ybGRUb1NjcmVlblEpO1xuICAgICAgICAvL31cblxuICAgICAgICAvLyBLZWVwIHRyYWNrIG9mIGEgcmVzZXQgdHJhbnNmb3JtIGZvciByZXNldFNlbnNvci5cbiAgICAgICAgdGhpcy5yZXNldFEgPSBuZXcgUXVhdGVybmlvbigpO1xuXG4gICAgICAgIC8vdGhpcy5pc0ZpcmVmb3hBbmRyb2lkID0gVXRpbC5pc0ZpcmVmb3hBbmRyb2lkKCk7XG4gICAgICAgIC8vdGhpcy5pc0lPUyA9IFV0aWwuaXNJT1MoKTtcblxuICAgICAgICB0aGlzLm9yaWVudGF0aW9uT3V0XyA9IG5ldyBGbG9hdDMyQXJyYXkoNCk7XG4gICAgfVxuXG4gICAgZ2V0UG9zaXRpb24oKSB7XG4gICAgICAgIC8vIFRoaXMgUG9zZVNlbnNvciBkb2Vzbid0IHN1cHBvcnQgcG9zaXRpb25cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZ2V0T3JpZW50YXRpb24oKSB7XG4gICAgICAgIC8vIENvbnZlcnQgZnJvbSBmaWx0ZXIgc3BhY2UgdG8gdGhlIHRoZSBzYW1lIHN5c3RlbSB1c2VkIGJ5IHRoZVxuICAgICAgICAvLyBkZXZpY2VvcmllbnRhdGlvbiBldmVudC5cbiAgICAgICAgdmFyIG9yaWVudGF0aW9uID0gdGhpcy5maWx0ZXIuZ2V0T3JpZW50YXRpb24oKTtcblxuICAgICAgICAvLyBQcmVkaWN0IG9yaWVudGF0aW9uLlxuICAgICAgICB0aGlzLnByZWRpY3RlZFEgPSB0aGlzLnBvc2VQcmVkaWN0b3IuZ2V0UHJlZGljdGlvbihvcmllbnRhdGlvbiwgdGhpcy5neXJvc2NvcGUsIHRoaXMucHJldmlvdXNUaW1lc3RhbXBTKTtcblxuICAgICAgICAvLyBDb252ZXJ0IHRvIFRIUkVFIGNvb3JkaW5hdGUgc3lzdGVtOiAtWiBmb3J3YXJkLCBZIHVwLCBYIHJpZ2h0LlxuICAgICAgICB2YXIgb3V0ID0gbmV3IFF1YXRlcm5pb24oKTtcbiAgICAgICAgb3V0LmNvcHkodGhpcy5maWx0ZXJUb1dvcmxkUSk7XG4gICAgICAgIG91dC5tdWx0aXBseSh0aGlzLnJlc2V0USk7XG4gICAgICAgIC8vaWYgKCFXZWJWUkNvbmZpZy5UT1VDSF9QQU5ORVJfRElTQUJMRUQpIHtcbiAgICAgICAgICAvLyAgb3V0Lm11bHRpcGx5KHRoaXMudG91Y2hQYW5uZXIuZ2V0T3JpZW50YXRpb24oKSk7XG4gICAgICAgIC8vfVxuICAgICAgICBvdXQubXVsdGlwbHkodGhpcy5wcmVkaWN0ZWRRKTtcbiAgICAgICAgb3V0Lm11bHRpcGx5KHRoaXMud29ybGRUb1NjcmVlblEpO1xuXG4gICAgICAgIC8vIEhhbmRsZSB0aGUgeWF3LW9ubHkgY2FzZS5cbiAgICAgICAgaWYgKENvbmZpZy5ZQVdfT05MWSkge1xuICAgICAgICAgICAgLy8gTWFrZSBhIHF1YXRlcm5pb24gdGhhdCBvbmx5IHR1cm5zIGFyb3VuZCB0aGUgWS1heGlzLlxuICAgICAgICAgICAgb3V0LnggPSAwO1xuICAgICAgICAgICAgb3V0LnogPSAwO1xuICAgICAgICAgICAgb3V0Lm5vcm1hbGl6ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbk91dF9bMF0gPSBvdXQueDtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbk91dF9bMV0gPSBvdXQueTtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbk91dF9bMl0gPSBvdXQuejtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbk91dF9bM10gPSBvdXQudztcbiAgICAgICAgcmV0dXJuIHRoaXMub3JpZW50YXRpb25PdXRfO1xuICAgIH1cblxuICAgIHJlc2V0UG9zZSgpIHtcbiAgICAgICAgLy8gUmVkdWNlIHRvIGludmVydGVkIHlhdy1vbmx5LlxuICAgICAgICB0aGlzLnJlc2V0US5jb3B5KHRoaXMuZmlsdGVyLmdldE9yaWVudGF0aW9uKCkpO1xuICAgICAgICB0aGlzLnJlc2V0US54ID0gMDtcbiAgICAgICAgdGhpcy5yZXNldFEueSA9IDA7XG4gICAgICAgIHRoaXMucmVzZXRRLnogKj0gLTE7XG4gICAgICAgIHRoaXMucmVzZXRRLm5vcm1hbGl6ZSgpO1xuXG4gICAgICAgIC8vIFRha2UgaW50byBhY2NvdW50IGV4dHJhIHRyYW5zZm9ybWF0aW9ucyBpbiBsYW5kc2NhcGUgbW9kZS5cbiAgICAgICAgLy9pZiAoVXRpbC5pc0xhbmRzY2FwZU1vZGUoKSkge1xuICAgICAgICAvLyAgdGhpcy5yZXNldFEubXVsdGlwbHkodGhpcy5pbnZlcnNlV29ybGRUb1NjcmVlblEpO1xuICAgICAgICAvL31cblxuICAgICAgICAvLyBUYWtlIGludG8gYWNjb3VudCBvcmlnaW5hbCBwb3NlLlxuICAgICAgICB0aGlzLnJlc2V0US5tdWx0aXBseSh0aGlzLm9yaWdpbmFsUG9zZUFkanVzdFEpO1xuXG4gICAgICAgIC8qaWYgKCFXZWJWUkNvbmZpZy5UT1VDSF9QQU5ORVJfRElTQUJMRUQpIHtcbiAgICAgICAgICAgIHRoaXMudG91Y2hQYW5uZXIucmVzZXRTZW5zb3IoKTtcbiAgICAgICAgfSovXG4gICAgfVxuXG4gICAgdXBkYXRlU2Vuc29yRGF0YShkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhLnNlbnNvcnMgJiYgZGF0YS5zZW5zb3JzLmFjY2VsZXJvbWV0ZXIgJiYgZGF0YS5zZW5zb3JzLmd5cm9zY29wZSkge1xuICAgICAgICAgICAgdmFyIGFjY0dyYXZpdHkgPSBkYXRhLnNlbnNvcnMuYWNjZWxlcm9tZXRlcjsgLy90b2RvOiBncmF2aXR5IVxuICAgICAgICAgICAgdmFyIHJvdFJhdGUgPSBkYXRhLnNlbnNvcnMuZ3lyb3Njb3BlO1xuICAgICAgICAgICAgdmFyIHRpbWVzdGFtcFMgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgICAgICAgICAgdmFyIGRlbHRhUyA9IHRpbWVzdGFtcFMgLSB0aGlzLnByZXZpb3VzVGltZXN0YW1wUztcbiAgICAgICAgICAgIC8qaWYgKGRlbHRhUyA8PSBNYXRoVXRpbC5NSU5fVElNRVNURVAgfHwgZGVsdGFTID4gTWF0aFV0aWwuTUFYX1RJTUVTVEVQKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIHRpbWVzdGFtcHMgZGV0ZWN0ZWQuIFRpbWUgc3RlcCBiZXR3ZWVuIHN1Y2Nlc3NpdmUgJyArXG4gICAgICAgICAgICAgICAgICAgICdneXJvc2NvcGUgc2Vuc29yIHNhbXBsZXMgaXMgdmVyeSBzbWFsbCBvciBub3QgbW9ub3RvbmljJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c1RpbWVzdGFtcFMgPSB0aW1lc3RhbXBTO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0qL1xuXG4gICAgICAgICAgICB0aGlzLmFjY2VsZXJvbWV0ZXIuc2V0KC1hY2NHcmF2aXR5LngsIC1hY2NHcmF2aXR5LnksIC1hY2NHcmF2aXR5LnopO1xuICAgICAgICAgICAgdGhpcy5neXJvc2NvcGUuc2V0KHJvdFJhdGUueCwgcm90UmF0ZS55LCByb3RSYXRlLnopO1xuXG4gICAgICAgICAgICB0aGlzLmZpbHRlci5hZGRBY2NlbE1lYXN1cmVtZW50KHRoaXMuYWNjZWxlcm9tZXRlciwgdGltZXN0YW1wUyk7XG4gICAgICAgICAgICB0aGlzLmZpbHRlci5hZGRHeXJvTWVhc3VyZW1lbnQodGhpcy5neXJvc2NvcGUsIHRpbWVzdGFtcFMpO1xuXG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzVGltZXN0YW1wUyA9IHRpbWVzdGFtcFM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKm9uRGV2aWNlTW90aW9uQ2hhbmdlXyhkZXZpY2VNb3Rpb24pIHtcbiAgICAgICAgdmFyIGFjY0dyYXZpdHkgPSBkZXZpY2VNb3Rpb24uYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eTtcbiAgICAgICAgdmFyIHJvdFJhdGUgPSBkZXZpY2VNb3Rpb24ucm90YXRpb25SYXRlO1xuICAgICAgICB2YXIgdGltZXN0YW1wUyA9IGRldmljZU1vdGlvbi50aW1lU3RhbXAgLyAxMDAwO1xuXG4gICAgICAgIC8vIEZpcmVmb3ggQW5kcm9pZCB0aW1lU3RhbXAgcmV0dXJucyBvbmUgdGhvdXNhbmR0aCBvZiBhIG1pbGxpc2Vjb25kLlxuICAgICAgICAvL2lmICh0aGlzLmlzRmlyZWZveEFuZHJvaWQpIHtcbiAgICAgICAgLy8gICAgdGltZXN0YW1wUyAvPSAxMDAwO1xuICAgICAgICAvL31cblxuICAgICAgICB2YXIgZGVsdGFTID0gdGltZXN0YW1wUyAtIHRoaXMucHJldmlvdXNUaW1lc3RhbXBTO1xuICAgICAgICBpZiAoZGVsdGFTIDw9IE1hdGhVdGlsLk1JTl9USU1FU1RFUCB8fCBkZWx0YVMgPiBNYXRoVXRpbC5NQVhfVElNRVNURVApIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCB0aW1lc3RhbXBzIGRldGVjdGVkLiBUaW1lIHN0ZXAgYmV0d2VlbiBzdWNjZXNzaXZlICcgK1xuICAgICAgICAgICAgICAgICdneXJvc2NvcGUgc2Vuc29yIHNhbXBsZXMgaXMgdmVyeSBzbWFsbCBvciBub3QgbW9ub3RvbmljJyk7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzVGltZXN0YW1wUyA9IHRpbWVzdGFtcFM7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY2NlbGVyb21ldGVyLnNldCgtYWNjR3Jhdml0eS54LCAtYWNjR3Jhdml0eS55LCAtYWNjR3Jhdml0eS56KTtcbiAgICAgICAgdGhpcy5neXJvc2NvcGUuc2V0KHJvdFJhdGUuYWxwaGEsIHJvdFJhdGUuYmV0YSwgcm90UmF0ZS5nYW1tYSk7XG5cbiAgICAgICAgLy8gV2l0aCBpT1MgYW5kIEZpcmVmb3ggQW5kcm9pZCwgcm90YXRpb25SYXRlIGlzIHJlcG9ydGVkIGluIGRlZ3JlZXMsXG4gICAgICAgIC8vIHNvIHdlIGZpcnN0IGNvbnZlcnQgdG8gcmFkaWFucy5cbiAgICAgICAgLy9pZiAodGhpcy5pc0lPUyB8fCB0aGlzLmlzRmlyZWZveEFuZHJvaWQpIHtcbiAgICAgICAgLy8gIHRoaXMuZ3lyb3Njb3BlLm11bHRpcGx5U2NhbGFyKE1hdGguUEkgLyAxODApO1xuICAgICAgICAvL31cblxuICAgICAgICB0aGlzLmZpbHRlci5hZGRBY2NlbE1lYXN1cmVtZW50KHRoaXMuYWNjZWxlcm9tZXRlciwgdGltZXN0YW1wUyk7XG4gICAgICAgIHRoaXMuZmlsdGVyLmFkZEd5cm9NZWFzdXJlbWVudCh0aGlzLmd5cm9zY29wZSwgdGltZXN0YW1wUyk7XG5cbiAgICAgICAgdGhpcy5wcmV2aW91c1RpbWVzdGFtcFMgPSB0aW1lc3RhbXBTO1xuICAgIH0qL1xuXG4gICAgLypvblNjcmVlbk9yaWVudGF0aW9uQ2hhbmdlXyhzY3JlZW5PcmllbnRhdGlvbikge1xuICAgICAgICB0aGlzLnNldFNjcmVlblRyYW5zZm9ybV8oKTtcbiAgICB9XG5cbiAgICBzZXRTY3JlZW5UcmFuc2Zvcm1fKCkge1xuICAgICAgICB0aGlzLndvcmxkVG9TY3JlZW5RLnNldCgwLCAwLCAwLCAxKTtcbiAgICAgICAgc3dpdGNoICh3aW5kb3cub3JpZW50YXRpb24pIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgOTA6XG4gICAgICAgICAgICAgICAgdGhpcy53b3JsZFRvU2NyZWVuUS5zZXRGcm9tQXhpc0FuZ2xlKG5ldyBWZWN0b3IzKDAsIDAsIDEpLCAtTWF0aC5QSSAvIDIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAtOTA6XG4gICAgICAgICAgICAgICAgdGhpcy53b3JsZFRvU2NyZWVuUS5zZXRGcm9tQXhpc0FuZ2xlKG5ldyBWZWN0b3IzKDAsIDAsIDEpLCBNYXRoLlBJIC8gMik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE4MDpcbiAgICAgICAgICAgICAgICAvLyBUT0RPLlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW52ZXJzZVdvcmxkVG9TY3JlZW5RLmNvcHkodGhpcy53b3JsZFRvU2NyZWVuUSk7XG4gICAgICAgIHRoaXMuaW52ZXJzZVdvcmxkVG9TY3JlZW5RLmludmVyc2UoKTtcbiAgICB9Ki9cbn1cbiIsIi8qKlxuICogSGVhdmlseSBsaWZ0ZWQgZnJvbSBXZWJWUi1Qb2x5ZmlsbCBwcm9qZWN0IGJ5IEJvcmlzIFNtdXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9ib3Jpc211cy93ZWJ2ci1wb2x5ZmlsbFxuICogYnV0IHJlZmFjdG9yZWQgdG8gdXNlIGRpZmZlcmVudCBkYXRhIHNvdXJjZSBwcm92aWRlZCBvdmVyIEJMRSBieSB0aGUgVEkgU2Vuc29yIFRhZ1xuICpcbiAqIG9yaWdpbmFsIGxpY2Vuc2UgZnJvbSBXZWJWUi1Qb2x5ZmlsbCBpcyBhcyBmb2xsb3dzOlxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgUXVhdGVybmlvbiBmcm9tICcuLi9tYXRoL3F1YXRlcm5pb24uZXM2JztcbmltcG9ydCBWZWN0b3IzIGZyb20gJy4uL21hdGgvdmVjdG9yMy5lczYnO1xuaW1wb3J0IE1hdGhVdGlsIGZyb20gJy4uL21hdGgvdXRpbC5lczYnO1xuXG4vKipcbiAqIEdpdmVuIGFuIG9yaWVudGF0aW9uIGFuZCB0aGUgZ3lyb3Njb3BlIGRhdGEsIHByZWRpY3RzIHRoZSBmdXR1cmUgb3JpZW50YXRpb25cbiAqIG9mIHRoZSBoZWFkLiBUaGlzIG1ha2VzIHJlbmRlcmluZyBhcHBlYXIgZmFzdGVyLlxuICpcbiAqIEFsc28gc2VlOiBodHRwOi8vbXNsLmNzLnVpdWMuZWR1L35sYXZhbGxlL3BhcGVycy9MYXZZZXJLYXRBbnQxNC5wZGZcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gcHJlZGljdGlvblRpbWVTIHRpbWUgZnJvbSBoZWFkIG1vdmVtZW50IHRvIHRoZSBhcHBlYXJhbmNlIG9mXG4gKiB0aGUgY29ycmVzcG9uZGluZyBpbWFnZS5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IocHJlZGljdGlvblRpbWVTKSB7XG4gICAgICAgIHRoaXMucHJlZGljdGlvblRpbWVTID0gcHJlZGljdGlvblRpbWVTO1xuXG4gICAgICAgIC8vIFRoZSBxdWF0ZXJuaW9uIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHByZXZpb3VzIHN0YXRlLlxuICAgICAgICB0aGlzLnByZXZpb3VzUSA9IG5ldyBRdWF0ZXJuaW9uKCk7XG4gICAgICAgIC8vIFByZXZpb3VzIHRpbWUgYSBwcmVkaWN0aW9uIG9jY3VycmVkLlxuICAgICAgICB0aGlzLnByZXZpb3VzVGltZXN0YW1wUyA9IG51bGw7XG5cbiAgICAgICAgLy8gVGhlIGRlbHRhIHF1YXRlcm5pb24gdGhhdCBhZGp1c3RzIHRoZSBjdXJyZW50IHBvc2UuXG4gICAgICAgIHRoaXMuZGVsdGFRID0gbmV3IFF1YXRlcm5pb24oKTtcbiAgICAgICAgLy8gVGhlIG91dHB1dCBxdWF0ZXJuaW9uLlxuICAgICAgICB0aGlzLm91dFEgPSBuZXcgUXVhdGVybmlvbigpO1xuICAgIH1cblxuICAgIGdldFByZWRpY3Rpb24oY3VycmVudFEsIGd5cm8sIHRpbWVzdGFtcFMpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByZXZpb3VzVGltZXN0YW1wUykge1xuICAgICAgICAgICAgdGhpcy5wcmV2aW91c1EuY29weShjdXJyZW50USk7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzVGltZXN0YW1wUyA9IHRpbWVzdGFtcFM7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudFE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYWxjdWxhdGUgYXhpcyBhbmQgYW5nbGUgYmFzZWQgb24gZ3lyb3Njb3BlIHJvdGF0aW9uIHJhdGUgZGF0YS5cbiAgICAgICAgdmFyIGF4aXMgPSBuZXcgVmVjdG9yMygpO1xuICAgICAgICBheGlzLmNvcHkoZ3lybyk7XG4gICAgICAgIGF4aXMubm9ybWFsaXplKCk7XG5cbiAgICAgICAgdmFyIGFuZ3VsYXJTcGVlZCA9IGd5cm8ubGVuZ3RoKCk7XG5cbiAgICAgICAgLy8gSWYgd2UncmUgcm90YXRpbmcgc2xvd2x5LCBkb24ndCBkbyBwcmVkaWN0aW9uLlxuICAgICAgICBpZiAoYW5ndWxhclNwZWVkIDwgTWF0aFV0aWwuZGVnVG9SYWQgKiAyMCkge1xuICAgICAgICAgICAgLy9pZiAoREVCVUcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTW92aW5nIHNsb3dseSwgYXQgJXMgZGVnL3M6IG5vIHByZWRpY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICAoTWF0aFV0aWwucmFkVG9EZWcgKiBhbmd1bGFyU3BlZWQpLnRvRml4ZWQoMSkpO1xuICAgICAgICAgICAgLy99XG4gICAgICAgICAgICB0aGlzLm91dFEuY29weShjdXJyZW50USk7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzUS5jb3B5KGN1cnJlbnRRKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm91dFE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHZXQgdGhlIHByZWRpY3RlZCBhbmdsZSBiYXNlZCBvbiB0aGUgdGltZSBkZWx0YSBhbmQgbGF0ZW5jeS5cbiAgICAgICAgdmFyIGRlbHRhVCA9IHRpbWVzdGFtcFMgLSB0aGlzLnByZXZpb3VzVGltZXN0YW1wUztcbiAgICAgICAgdmFyIHByZWRpY3RBbmdsZSA9IGFuZ3VsYXJTcGVlZCAqIHRoaXMucHJlZGljdGlvblRpbWVTO1xuXG4gICAgICAgIHRoaXMuZGVsdGFRLnNldEZyb21BeGlzQW5nbGUoYXhpcywgcHJlZGljdEFuZ2xlKTtcbiAgICAgICAgdGhpcy5vdXRRLmNvcHkodGhpcy5wcmV2aW91c1EpO1xuICAgICAgICB0aGlzLm91dFEubXVsdGlwbHkodGhpcy5kZWx0YVEpO1xuXG4gICAgICAgIHRoaXMucHJldmlvdXNRLmNvcHkoY3VycmVudFEpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLm91dFE7XG4gICAgfVxufTsiLCIvKipcbiAqIEhlYXZpbHkgbGlmdGVkIGZyb20gV2ViVlItUG9seWZpbGwgcHJvamVjdCBieSBCb3JpcyBTbXVzOiBodHRwczovL2dpdGh1Yi5jb20vYm9yaXNtdXMvd2VidnItcG9seWZpbGxcbiAqIGJ1dCByZWZhY3RvcmVkIHRvIHVzZSBkaWZmZXJlbnQgZGF0YSBzb3VyY2UgcHJvdmlkZWQgb3ZlciBCTEUgYnkgdGhlIFRJIFNlbnNvciBUYWdcbiAqXG4gKiBvcmlnaW5hbCBsaWNlbnNlIGZyb20gV2ViVlItUG9seWZpbGwgaXMgYXMgZm9sbG93czpcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKHNhbXBsZSwgdGltZXN0YW1wUykge1xuICAgICAgICB0aGlzLnNldChzYW1wbGUsIHRpbWVzdGFtcFMpO1xuICAgIH1cblxuICAgIHNldChzYW1wbGUsIHRpbWVzdGFtcFMpIHtcbiAgICAgICAgdGhpcy5zYW1wbGUgPSBzYW1wbGU7XG4gICAgICAgIHRoaXMudGltZXN0YW1wUyA9IHRpbWVzdGFtcFM7XG4gICAgfVxuXG4gICAgY29weShzZW5zb3JTYW1wbGUpIHtcbiAgICAgICAgdGhpcy5zZXQoc2Vuc29yU2FtcGxlLnNhbXBsZSwgc2Vuc29yU2FtcGxlLnRpbWVzdGFtcFMpO1xuICAgIH07XG59IiwiaW1wb3J0IFRJU2Vuc29yVGFnIGZyb20gJy4vZGV2aWNlcy90aXNlbnNvcnRhZy5lczYnO1xuaW1wb3J0IENvbXBsZW1lbnRhcnlGaWx0ZXIgZnJvbSAnLi9zZW5zb3JmdXNpb24vY29tcGxlbWVudGFyeS1maWx0ZXIuZXM2JztcbmltcG9ydCBGdXNpb25Qb3NlU2Vuc29yIGZyb20gJy4vc2Vuc29yZnVzaW9uL2Z1c2lvbi1wb3NlLXNlbnNvci5lczYnO1xuaW1wb3J0IFBvc2VQcmVkaWN0b3IgZnJvbSAnLi9zZW5zb3JmdXNpb24vcG9zZS1wcmVkaWN0b3IuZXM2JztcbmltcG9ydCBTZW5zb3JTYW1wbGUgZnJvbSAnLi9zZW5zb3JmdXNpb24vc2Vuc29yLXNhbXBsZS5lczYnO1xuXG5leHBvcnRzLnRpc2Vuc29ydGFnID0gVElTZW5zb3JUYWc7XG5leHBvcnRzLnNlbnNvcmZ1c2lvbiA9IHtcbiAgICBjb21wbGVtZW50YXJ5ZmlsdGVyOiBDb21wbGVtZW50YXJ5RmlsdGVyLFxuICAgIGZ1c2lvbnBvc2VzZW5zb3I6IEZ1c2lvblBvc2VTZW5zb3IsXG4gICAgcG9zZXByZWRpY3RvcjogUG9zZVByZWRpY3RvclxufTsiXX0=
