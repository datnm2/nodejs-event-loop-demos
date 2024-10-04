// test.js
let count = 0;
const iterations = 10;

function runTest() {
    if (count >= iterations) {
        return;
    }

    console.log(`\nTest ${count + 1}:`);

    setImmediate(() => {
        console.log('setImmediate');
    });

    setTimeout(() => {
        console.log('setTimeout');
    }, 0);

    count++;
    setTimeout(runTest, 1000); // Wait 1 second between tests
}

runTest();