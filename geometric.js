const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const isArray = (arr) => Array.isArray(arr);