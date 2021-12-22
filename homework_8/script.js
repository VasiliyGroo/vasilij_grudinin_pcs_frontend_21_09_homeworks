// Основное задание

function makeFibonacciFunction() {
    let first = 0;
    let second = 1;
    let next = () => {
        let current = first + second;
        console.log(current);
        first = second;
        second = current;
    }
    return next;
}

const fibonacci = makeFibonacciFunction();

fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
