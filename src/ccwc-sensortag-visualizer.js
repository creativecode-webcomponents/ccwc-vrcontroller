(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.CCWCSensorTagVisualizer = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
             * sensor tag BLE
             * @type {$ES6_ANONYMOUS_CLASS$}
             */
            this.sensorTag = null;

            /**
             * use fake (simlated) data
             * @type {boolean}
             * @private
             */
            this._simulate = false;

            /**
             * device info
             * @type {boolean}
             * @private
             */
            this._deviceInfo = {};

            /**
             * list of props with XYZ characteristics
             * @type {string[]}
             */
            this._sensors = [];
        }
    }, {
        key: 'onSensorTagUpdate',

        /**
         * on sensortag update
         * @param data
         */
        value: function onSensorTagUpdate(eventtype, data) {
            for (var c = 0; c < this._sensors.length; c++) {
                if (data.sensors[this._sensors[c]]) {
                    if (data.sensors[this._sensors[c]].active) {
                        this.dom.panels[this._sensors[c]].panel.classList.add('active');
                    }

                    if (data.sensors[this._sensors[c]].enabled) {
                        this.dom.panels[this._sensors[c]].panel.classList.add('enabled');
                    }

                    var multiplier;
                    switch (this._sensors[c]) {
                        case 'accelerometer':
                            multiplier = 10;
                            break;
                        case 'magnetometer':
                            multiplier = 1;
                            break;
                        case 'gyroscope':
                            multiplier = .5;
                            break;
                    }

                    if (this._sensors[c] === 'buttons') {
                        if (data.sensors.buttons.left) {
                            this.dom.panels.buttons.left.classList.add('on');
                        } else {
                            this.dom.panels.buttons.left.classList.remove('on');
                        }

                        if (data.sensors.buttons.right) {
                            this.dom.panels.buttons.right.classList.add('on');
                        } else {
                            this.dom.panels.buttons.right.classList.remove('on');
                        }
                    } else {
                        var axis = ['x', 'y', 'z'];
                        for (var d = 0; d < axis.length; d++) {
                            var val = parseFloat(data.sensors[this._sensors[c]][axis[d]]);
                            this.dom.panels[this._sensors[c]][axis[d]].bar.style.width = Math.abs(val * multiplier) + 'px';
                            if (val < 0) {
                                this.dom.panels[this._sensors[c]][axis[d]].bar.style.WebkitTransform = 'translateX(' + [axis[d]] * multiplier + 'px)';
                            } else {
                                this.dom.panels[this._sensors[c]][axis[d]].bar.style.WebkitTransform = 'none';
                            }
                            this.dom.panels[this._sensors[c]][axis[d]].label.innerText = val.toFixed(4);
                        }
                    }
                }
            }
        }

        /**
         * connect to sensortag
         */

    }, {
        key: 'connect',
        value: function connect(tag, simulate) {
            var _this2 = this;

            if (!tag) {
                this.sensorTag = new _tisensortag2.default();
            } else {
                this.sensorTag = tag;
            }

            this._simulate = simulate || this.simulate;
            this.sensorTag.connect(function (eventtype, data) {
                return _this2.onSensorTagUpdate(eventtype, data);
            }, this._simulate);
        }

        /**
         * parse attributes on element
         * @private
         */

    }, {
        key: 'parseAttributes',
        value: function parseAttributes() {
            if (this.hasAttribute('simulate')) {
                this._simulate = true;
            } else {
                this._simulate = false;
            }

            if (this.hasAttribute('sensors')) {
                this._sensors = this.getAttribute('sensors').split(',');
            } else {
                this._sensors = ['buttons', 'accelerometer', 'magnetometer', 'gyroscope'];
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
            var template = this.owner.querySelector('template#style');
            var clone = template.content.cloneNode(true);
            this.root = this.createShadowRoot();
            this.root.appendChild(clone);

            this.dom = { panels: {} };
            for (var c = 0; c < this._sensors.length; c++) {
                var paneltemplate;
                var panelclone;
                switch (this._sensors[c]) {
                    case 'buttons':
                        paneltemplate = this.owner.querySelector('template#buttons');
                        panelclone = paneltemplate.content.cloneNode(true);
                        this.dom.panels[this._sensors[c]] = {};
                        this.dom.panels[this._sensors[c]].left = panelclone.querySelector('.left.button');
                        this.dom.panels[this._sensors[c]].right = panelclone.querySelector('.right.button');
                        break;

                    default:
                        paneltemplate = this.owner.querySelector('template#sensor');
                        panelclone = paneltemplate.content.cloneNode(true);
                        this.dom.panels[this._sensors[c]] = {};
                        this.dom.panels[this._sensors[c]].x = {};
                        this.dom.panels[this._sensors[c]].x.label = panelclone.querySelector('.x.label .value');
                        this.dom.panels[this._sensors[c]].x.bar = panelclone.querySelector('.x.bar');
                        this.dom.panels[this._sensors[c]].y = {};
                        this.dom.panels[this._sensors[c]].y.label = panelclone.querySelector('.y.label .value');
                        this.dom.panels[this._sensors[c]].y.bar = panelclone.querySelector('.y.bar');
                        this.dom.panels[this._sensors[c]].z = {};
                        this.dom.panels[this._sensors[c]].z.label = panelclone.querySelector('.z.label .value');
                        this.dom.panels[this._sensors[c]].z.bar = panelclone.querySelector('.z.bar');
                }

                panelclone.querySelector('.header').innerText = this._sensors[c];
                this.dom.panels[this._sensors[c]].panel = panelclone.querySelector('.group');
                this.root.appendChild(panelclone);
            }
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

},{"./devices/tisensortag.es6":3}],3:[function(require,module,exports){
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

},{"../../recording.es6":1}]},{},[2])(2)
});


//# sourceMappingURL=ccwc-sensortag-visualizer.js.map
