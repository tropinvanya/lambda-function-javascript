const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const repositoryRootPath = path.resolve(__dirname, '..');
const arrayContains = (arr, element) => arr.includes(element);