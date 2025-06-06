// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
//
// 	Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
//
// Examples:
//
// 	Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2

const binaryArrayToNumber = arr => {
	return parseInt(arr.join(''), 2);
};