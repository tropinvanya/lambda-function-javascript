const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const timeFromDate = date => date.toTimeString().slice(0, 8);