"use strict";
var Validacion;
(function (Validacion) {
    var numberRegexp = /^[0-9]+$/;
    var ZipCodeValidation = /** @class */ (function () {
        function ZipCodeValidation() {
        }
        ZipCodeValidation.prototype.isAceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidation;
    }());
    Validacion.ZipCodeValidation = ZipCodeValidation;
})(Validacion || (Validacion = {}));
var zipcode = new Validacion.ZipCodeValidation();
console.log(zipcode.isAceptable('534227'));
