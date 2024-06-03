const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';