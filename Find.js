const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const uniqueArr = (arr) => [...new Set(arr)];
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;