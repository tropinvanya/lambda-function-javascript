const isTabInView = () => !document.hidden;
const sumArray = arr => arr.reduce((total, current) => total + current, 0);
const maxNumber = arr => Math.max(...arr);
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));