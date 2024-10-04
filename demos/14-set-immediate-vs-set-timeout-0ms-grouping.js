const firstSetImmediate = () => console.log('setImmediate 1');
const secondSetImmediate = () => console.log('setImmediate 2');
const thirdSetImmediate = () => console.log('setImmediate 3');
const fourthSetImmediate = () => console.log('setImmediate 4');

const firstSetTimeout = () => console.log('setTimeout 1');
const secondSetTimeout = () => console.log('setTimeout 2');
const thirdSetTimeout = () => console.log('setTimeout 3');
const fourthSetTimeout = () => console.log('setTimeout 4');
const fourthSetTimeout2 = () => console.log('setTimeout 42');
const fourthSetTimeout3 = () => console.log('setTimeout 43');
const fourthSetTimeout4 = () => console.log('setTimeout 44');
const fourthSetTimeout5 = () => console.log('setTimeout 45');
const fourthSetTimeout6 = () => console.log('setTimeout 46');

setTimeout(firstSetTimeout, 0);
setTimeout(secondSetTimeout, 0);
setImmediate(firstSetImmediate);
setImmediate(secondSetImmediate);
setTimeout(thirdSetTimeout, 0);
setImmediate(thirdSetImmediate);
setImmediate(fourthSetImmediate);
setTimeout(fourthSetTimeout, 1);
setTimeout(fourthSetTimeout2, 0);
setTimeout(fourthSetTimeout3, 0);
setTimeout(fourthSetTimeout4, 0);
setTimeout(fourthSetTimeout5, 0);
setTimeout(fourthSetTimeout6, 0);

