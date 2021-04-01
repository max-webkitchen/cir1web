
//Abs Filter foreach()
function absFilter(numbers) {
    let res = numbers.forEach(function(num){
        Math.abs(num)
    }
    )
    return res;
}

// Abs filter with map()
function abs(numbers) {

    let res = numbers.map(function(value) {
        return Math.abs(value);
    });
    return res;
}

function evenOnly(numbers) {
    let res = numbers.filter(function(value) {
        if (value % 2 == 0) return value;
    })
    return res;
}



function sum(number) {
    let res = number.reduce(function(sum, value) {
        return sum + value;
    },-1);
    return res;
}



function flatten2D(number) {

    let res = number.reduce(function(tab, value) {

        tab = tab.concat(value);
        return tab;
    }, []);
    return res;
}

function removeDuplicates(values) {

    let res = values.reduce(function(tab, value) {

        if (tab.indexOf(value) == -1) {
            tab.push(value);
         } 
         return tab;

    }, [])
    return res;
}