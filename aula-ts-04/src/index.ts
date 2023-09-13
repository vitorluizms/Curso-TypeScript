function multiply(num1: number, num2: number): number{
    return num1 * num2;
}

function sum(num1: number, num2: number): number {
    return num1 + num2;
}

function isEven(num: number): boolean {
    return num % 2 === 0;
}


function showResult(result: number): void {
    if(isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's even!`);
    }
}

(() => {
    const num1 = prompt("First Number");
    const num2 = prompt("Second Number");
    
    if (num1 === null || num2 === null || isNaN(parseInt(num1)) || isNaN(parseInt(num2))) {
        console.log("Não foi possível executar com tal entrada")
    }
    else {
        let result = sum(parseInt(num1),parseInt(num2));
        result += multiply(1,2);
        showResult(result);
    }
})();