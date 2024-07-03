"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUnitRegexp = getUnitRegexp;
function getUnitRegexp(unit) {
  return new RegExp(`"[^"]+"|'[^']+'|url\\([^\\)]+\\)|(\\d*\\.?\\d+)${unit}`, 'g');
}