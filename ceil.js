const isArray = (arr) => Array.isArray(arr);
const timeFromDate = date => date.toTimeString().slice(0, 8);
const intermediateAppPath = path.join(buildOutputPath, 'app');
const maxNumber = arr => Math.max(...arr);