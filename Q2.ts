/*Question 2: Fibonacci Sequence
Write a program to generate the Fibonacci sequence up to 100.*/

const fibonacciSequence = (limit: number): number[] => {
    let fib = [0, 1];
    let next = fib[0] + fib[1];
    
    while (next <= limit) {
        fib.push(next);
        next = fib[fib.length - 1] + fib[fib.length - 2];
    }

    return fib;
};

console.log(fibonacciSequence(100));
