const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');