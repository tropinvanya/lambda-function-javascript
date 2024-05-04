const randomString = () => Math.random().toString(36).slice(2);
const flattenedArray = arr => [].concat(...arr);
const results = await Promise.all(resultingPromises);