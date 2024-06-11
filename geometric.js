const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const lastElement = arr => arr[arr.length - 1];
const countOccurrences = (arr, element) => arr.filter(item => item === element).length;