console.log(false == '0');
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;