//
// Minimal Modal AMD Export
//
if (typeof(module) !== 'undefined') {
  module.exports = window.momodal;
} else if (typeof define === 'function' && define.amd) {
  define([], function() {
    'use strict';
    return window.momodal;
  });
}
