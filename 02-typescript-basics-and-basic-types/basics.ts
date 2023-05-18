function add(n1: number, n2: number, showResult: boolean, phrase: string){
    if(showResult) {
        console.log(phrase + (n1 + n2));
    }else {
        return n1 + n2;
    }
}

const number1 = 5;
const number2 = 3.8;
let number3: number;
number3 = 100;
const printResult = true;
const resultPhrase = `Result is: `;
// let str = 'hello';
// str = 10;

add(number1, number2, printResult, resultPhrase);