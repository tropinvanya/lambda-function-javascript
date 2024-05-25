const isTabInView = () => !document.hidden;
const channelName = getChannelName(channel);
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));