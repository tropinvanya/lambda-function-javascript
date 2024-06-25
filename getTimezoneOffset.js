const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const intermediateAppPath = path.join(buildOutputPath, 'app');
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;