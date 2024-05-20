var regexp  = new RegExp('{{([^}]+)}}', 'g');
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const isWeekday = (date) => date.getDay() % 6 !== 0;