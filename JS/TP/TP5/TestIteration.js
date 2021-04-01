function testAbsFilter() {
    let numbers = [-42, 3, 0, -1, 100];
    let absNumbers = absFilter(numbers);
    console.log(absNumbers); // => [42, 3, 0, 1, 100]
    console.log(numbers); // => [-42, 3, 0, -1, 100]
}

function testAbs() {
    let numbers = [-42, 3, 0, -1, 100];
    let absNumbers = abs(numbers);
    console.log(absNumbers); // => [42, 3, 0, 1, 100]
    console.log(numbers); // => [-42, 3, 0, -1, 100]
}

function testEvenOnly() {
    console.log(evenOnly([0, 1, 2, 3, 4])); // => [0, 2, 4] 
}

function testSum() {
    console.log(sum([0, 1, 2, 3, 4])); 
}

function testRemoveDuplicates(values) {
    console.log(removeDuplicates([0, 1, 2, 2, 3, 4])); // => [0, 2, 4] 
}

function test2D() {
    console.log(flatten2D([
        [0, 1],
        [1, 2, 3]
    ])); // => [0, 2, 4] 
}

function tests() {
    testAbsFilter();
    // testAbs();
    // testEvenOnly();
    // testSum();
    // testRemoveDuplicates();
    // test2D();
}