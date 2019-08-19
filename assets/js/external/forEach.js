/**
 *
 * Array.forEach
 *
 * Code from developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/forEach
 *
**/

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (fn, scope) {
    'use strict';

    var i, len;

    for (i = 0, len = this.length; i < len; ++i) {
      if (i in this) {
        fn.call(scope, this[i], i, this);
      }
    }
  };
}