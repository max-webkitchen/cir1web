function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

function main(n) {
    let f;
    for(i=1;i<=n;i++) {
        f = factorial(i);
        console.log("factorial(" + i + ") = " + f);
    }
}
main(20);


