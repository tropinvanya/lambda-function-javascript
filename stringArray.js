const resultingPromises = urls.map((url) => makHttpRequest(url));
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);