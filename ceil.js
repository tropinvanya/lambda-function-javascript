const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;