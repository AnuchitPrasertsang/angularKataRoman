'use strict';

/* App Module */

var myApp = angular.module('myApp', []);

myApp.controller('MyCtrl', function ($scope) {
$scope.arabicNumber  = 1;

var romanMask = ["I","V","X","L","C","D","M"];

$scope.findRoman = function (arabic){
	var stringArrayOfNumber = splitNumberToStringArray(arabic);

	$scope.romanNumber = "";
	
	for (var i=stringArrayOfNumber.length-1, j=0;i >= 0;i--,j++){
		$scope.romanNumber=findRomanDigit(stringArrayOfNumber[i],romanMask.slice(j*2, (j*2)+3))+$scope.romanNumber;
	}
}

$scope.testFindRoman = $scope.findRoman($scope.arabicNumber);

function splitNumberToStringArray(number){
	var stringNumber = number.toString();
	return stringNumber.split('');
}

function findRomanDigit(Stringnumber,romanSign){
	var number = parseInt(Stringnumber);
	var roman = "";

	var modFive = number % 5;
	var divFive = Math.floor(number / 5);

	switch(modFive){
		case 4:
			roman = romanSign[0]+romanSign[divFive+1];
			break;
		case 0:
			roman = findV(divFive,romanSign[1]);
			break;
		default:
			roman = findV(divFive,romanSign[1]);
			roman += getDigit(modFive,romanSign[0]);		
			break;
	}	
	return roman;
}

function findV(divFive,V){
	if(divFive == 1){
		return V;
	}else{
		return "";
	}
}

function getDigit(sum,digit){
	var digits = "";
	for (var i=0;i<sum;i++){
		digits += digit;
	}
	return digits;
}

});