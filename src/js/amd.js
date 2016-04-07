//
// Minimal Modal AMD Export
//
if (typeof(module) !== 'undefined') {
  module.exports = window.mimodal;
} else if (typeof define === 'function' && define.amd) {
  define([], function() {
    'use strict';
    return window.mimodal;
  });
}
