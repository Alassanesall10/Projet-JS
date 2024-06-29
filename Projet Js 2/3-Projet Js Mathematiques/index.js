function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;

    }
    return n* factorial(n - 1);

}

console.log(factorial(5));



function isPrime(nombre) {
    if (nombre === 2 || nombre === 3) {
        return true;
    }

    if (nombre === 1 || nombre % 2 === 0) {
        return false;
    }

    for (let i = 3; i < Math.sqrt(nombre); i += 2) {
        if (nombre % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(9));


function fibonacci(n) {
    if (n < 2) {
        return n;
    }

    return fibonacci(n -1) + fibonacci(n - 2);
}

console.log(fibonacci(6));