"use strict";

module.exports = function () {
  return {
    visitor: {
      Identifier: function Identifier(path) {
        console.log('identifier');
      },
      StringLiteral: function StringLiteral(path) {
        console.log('string literal');
      }
    }
  };
};