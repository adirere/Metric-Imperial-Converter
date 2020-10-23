/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  this.getNum = function(input) {
    var result, testFraction;
    result = input.match(/([0-9]|[./])+/g);
    if (result === null) return 1;
    testFraction = result[0].match(/(\/)+/g);
    if (testFraction !== null && testFraction.length >= 2) {
      return "invalid number";
    } else {
      return eval(result[0]);
    }
  };

  this.getUnit = function(input) {
    var result;
    result = input.match(/([a-z])+/g)[0].toLowerCase();
    const inputPos = [
      "gal",
      "l",
      "mi",
      "km",
      "lbs",
      "kg",
      "GAL",
      "L",
      "MI",
      "KM",
      "LBS",
      "KG"
    ];
    if (inputPos.indexOf(result) !== -1) {
      return result;
    } else {
      return "invalid unit";
    }
  };

  this.getReturnUnit = function(initUnit) {
    var result;
    switch (initUnit.toLowerCase()) {
      case "gal":
        result = "l";
        break;
      case "l":
        result = "gal";
        break;
      case "lbs":
        result = "kg";
        break;
      case "kg":
        result = "lbs";
        break;
      case "mi":
        result = "km";
        break;
      case "km":
        result = "mi";
        break;
      default:
        result = "invalid unit";
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch (unit.toLowerCase()) {
      case "gal":
        result = "gallons";
        break;
      case "l":
        result = "liters";
        break;
      case "km":
        result = "kilometers";
        break;
      case "mi":
        result = "miles";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "kg":
        result = "kilograms";
        break;
      default:
        result = "invalid unit";
    }
    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;

    if (initNum === "invalid number") return "invalid number";

    switch (initUnit.toLowerCase()) {
      case "gal":
        result = initNum * galToL;
        break;
      case "l":
        result = initNum / galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      default:
        result = 0;
    }

    return parseFloat(result.toFixed(5));
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    returnUnit === "invalid unit" && returnNum === "invalid number"
      ? (result = "invalid number and unit")
      : returnUnit === "invalid unit"
      ? (result = returnUnit)
      : returnNum === "invalid number"
      ? (result = returnNum)
      : (result = {
          initNum,
          initUnit,
          returnNum,
          returnUnit,
          string: `${initNum} ${this.spellOutUnit(
            initUnit
          )} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
        });
    return result;
  };
}

module.exports = ConvertHandler;
