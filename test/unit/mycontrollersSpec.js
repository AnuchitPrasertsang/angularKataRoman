'use strict';

/* jasmine specs for controllers go here */
describe('MyCtrl', function(){
    var $scope;
    beforeEach(function() {
        module("myApp");
        inject(createController);
    });

    function createController($rootScope, $controller){
        $scope = $rootScope.$new();
        $controller("MyCtrl", {$scope: $scope});
    };

  it('should be I when input is 1', function() {
  	$scope.arabicNumber = 1;
  	$scope.findRoman($scope.arabicNumber);
  	expect($scope.romanNumber).toBe("I");
  });
  it('should be II when input is 2', function() {
  	$scope.arabicNumber = 2;
  	$scope.findRoman($scope.arabicNumber);
  	expect($scope.romanNumber).toBe("II");
  });
  it('should be III when input is 3', function() {
  	$scope.arabicNumber = 3;
  	$scope.findRoman($scope.arabicNumber);
  	expect($scope.romanNumber).toBe("III");
  });
  it('should be IV when input is 4', function() {
  	$scope.arabicNumber = 4;
  	$scope.findRoman($scope.arabicNumber);
  	expect($scope.romanNumber).toBe("IV");
  });
  it('should be V when input is 5', function() {
  	$scope.arabicNumber = 5;
  	$scope.findRoman($scope.arabicNumber);
  	expect($scope.romanNumber).toBe("V");
  });
  it('should be VI when input is 6', function() {
  	$scope.arabicNumber = 6;
  	$scope.findRoman($scope.arabicNumber);
  	expect($scope.romanNumber).toBe("VI");
  });
  it('should be VII when input is 7', function() {
  	$scope.arabicNumber = 7;
  	$scope.findRoman($scope.arabicNumber);
  	expect($scope.romanNumber).toBe("VII");
  });
  it('should be VIII when input is 8', function() {
  	$scope.arabicNumber = 8;
  	$scope.findRoman($scope.arabicNumber);
  	expect($scope.romanNumber).toBe("VIII");
  });
  it('should be IX when input is 9', function() {
  	$scope.arabicNumber = 9;
  	$scope.findRoman($scope.arabicNumber);
  	expect($scope.romanNumber).toBe("IX");
  });
  it('should be X when input is 10', function() {
  	$scope.arabicNumber = 10;
  	$scope.findRoman($scope.arabicNumber);
  	expect($scope.romanNumber).toBe("X");
  });
  it('should be XI when input is 11', function() {
  	$scope.arabicNumber = 11;
  	$scope.findRoman($scope.arabicNumber);
  	expect($scope.romanNumber).toBe("XI");
  });
  it('should be XII when input is 12', function() {
  	$scope.arabicNumber = 12;
  	$scope.findRoman($scope.arabicNumber);
  	expect($scope.romanNumber).toBe("XII");
  });
  it('should be XIII when input is 13', function() {
  	$scope.arabicNumber = 13;
  	$scope.findRoman($scope.arabicNumber);
  	expect($scope.romanNumber).toBe("XIII");
  });
  it('should be XIV when input is 14', function() {
  	$scope.arabicNumber = 14;
  	$scope.findRoman($scope.arabicNumber);
  	expect($scope.romanNumber).toBe("XIV");
  });
  it('should be XV when input is 15', function() {
  	$scope.arabicNumber = 15;
  	$scope.findRoman($scope.arabicNumber);
  	expect($scope.romanNumber).toBe("XV");
  });
  it('should be XVI when input is 16', function() {
  	$scope.arabicNumber = 16;
  	$scope.findRoman($scope.arabicNumber);
  	expect($scope.romanNumber).toBe("XVI");
  });
  it('should be XVII when input is 17', function() {
  	$scope.arabicNumber = 17;
  	$scope.findRoman($scope.arabicNumber);
  	expect($scope.romanNumber).toBe("XVII");
  });
  it('should be XVIII when input is 18', function() {
  	$scope.arabicNumber = 18;
  	$scope.findRoman($scope.arabicNumber);
  	expect($scope.romanNumber).toBe("XVIII");
  });
  it('should be XIV when input is 19', function() {
  	$scope.arabicNumber = 19;
  	$scope.findRoman($scope.arabicNumber);
  	expect($scope.romanNumber).toBe("XIX");
  });
  it('should be XX when input is 20', function() {
  	$scope.arabicNumber = 20;
  	$scope.findRoman($scope.arabicNumber);
  	expect($scope.romanNumber).toBe("XX");
  });
  it('should be XL when input is 40', function() {
    $scope.arabicNumber = 40;
    $scope.findRoman($scope.arabicNumber);
    expect($scope.romanNumber).toBe("XL");
  });
  it('should be XLIV when input is 44', function() {
    $scope.arabicNumber = 44;
    $scope.findRoman($scope.arabicNumber);
    expect($scope.romanNumber).toBe("XLIV");
  });
  it('should be XLIX when input is 49', function() {
    $scope.arabicNumber = 49;
    $scope.findRoman($scope.arabicNumber);
    expect($scope.romanNumber).toBe("XLIX");
  });
  it('should be L when input is 50', function() {
    $scope.arabicNumber = 50;
    $scope.findRoman($scope.arabicNumber);
    expect($scope.romanNumber).toBe("L");
  });
  it('should be XCIX when input is 99', function() {
    $scope.arabicNumber = 99;
    $scope.findRoman($scope.arabicNumber);
    expect($scope.romanNumber).toBe("XCIX");
  });
  it('should be C when input is 100', function() {
    $scope.arabicNumber = 100;
    $scope.findRoman($scope.arabicNumber);
    expect($scope.romanNumber).toBe("C");
  });

});