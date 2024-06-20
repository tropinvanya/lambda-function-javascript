const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const channelName = getChannelName(channel);
const allResults = await Promise.all(items.map(async (item) => {}));