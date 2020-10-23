/*
 *
 *
 *       FILL IN EACH UNIT TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]----
 *       (if additional are added, keep them at the very end!)
 */

var chai = require("chai");
var assert = chai.assert;
var ConvertHandler = require("../controllers/convertHandler.js");

var convertHandler = new ConvertHandler();

suite("Unit Tests", function() {
  suite("Function convertHandler.getNum(input)", function() {
    test("Whole number input", function(done) {
      var input = "32L";
      assert.equal(convertHandler.getNum(input), 32);
      done();
    });

    test("Decimal Input", function(done) {
      var input = "0.2kg";
      assert.equal(convertHandler.getNum(input), 0.2);
      done();
      //done();
    });

    test("Fractional Input", function(done) {
      var input = "4/2l";
      assert.equal(convertHandler.getNum(input), 2);
      done();
      //done();
    });

    test("Fractional Input w/ Decimal", function(done) {
      var input = "3/2l";
      assert.equal(convertHandler.getNum(input), 1.5);
      done();
      //done();
    });

    test("Invalid Input (double fraction)", function(done) {
      var input = "3/7.2/4kg";
      assert.equal(convertHandler.getNum(input), "invalid number");
      done();
      //done();
    });

    test("No Numerical Input", function(done) {
      var input = "l";
      assert.equal(convertHandler.getNum(input), 1);
      done();
      //done();
    });
  });

  suite("Function convertHandler.getUnit(input)", function() {
    test("For Each Valid Unit Inputs", function(done) {
      let input = ["gal", "l", "mi", "km", "lbs", "kg"];
      input.forEach(function(ele) {
        const result = convertHandler.getUnit(ele);
        //console.log("result", result, "test", input[input.indexOf(result)])
        assert.equal(convertHandler.getUnit(ele), ele.toLowerCase());
      });
      done();
    });

    test("Unknown Unit Input", function(done) {
      var input = "kjfkasfa";
      assert.equal(convertHandler.getUnit(input), "invalid unit");
      done();
    });
  });

  suite("Function convertHandler.getReturnUnit(initUnit)", function() {
    test("For Each Valid Unit Inputs", function(done) {
      var input = ["gal", "l", "mi", "km", "lbs", "kg"];
      var expect = ["l", "gal", "km", "mi", "kg", "lbs"];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
  });

  suite("Function convertHandler.spellOutUnit(unit)", function() {
    test("For Each Valid Unit Inputs", function(done) {
      var input = ["gal", "l", "mi", "km", "lbs", "kg"];
      var expect = [
        "gallons",
        "liters",
        "miles",
        "kilometers",
        "pounds",
        "kilograms"
      ];
      input.forEach(function(el, i) {
        assert.equal(convertHandler.spellOutUnit(el), expect[i]);
      });
      done();
    });
  });

  suite("Function convertHandler.convert(num, unit)", function() {
    test("Gal to L", function(done) {
      var input = [5, "gal"];
      var expected = 18.9271;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });

    test("L to Gal", function(done) {
      let input = [4, "l"];
      let expected = 1.0567;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      );
      done();
    });

    test("Mi to Km", function(done) {
      let input = [3, "mi"];
      let expected = 4.82802;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      );
      done();
    });

    test("Km to Mi", function(done) {
      let input = [3, "km"];
      let expected = 1.8641;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      );
      done();
    });

    test("Lbs to Kg", function(done) {
      let input = [2, "lbs"];
      let expected = 0.9071;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      );
      done();
    });

    test("Kg to Lbs", function(done) {
      let input = [2, "kg"];
      let expected = 4.4092;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      );
      done();
    });
  });
});
