const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const apmRootPath = path.join(repositoryRootPath, 'apm');
const goToTop = () => window.scrollTo(0, 0);