// classes
class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format(){
        return `${this.client} owes €${this.amount} for ${this.details}`;
    }
}

const invoiceOne = new Invoice('Alain', 'Work on the mario website', 420);
const invoiceTwo = new Invoice('luigi', 'Work on the luigi website', 500);

// console.log(invoiceOne, invoiceTwo);
let invoices: Invoice[] = [];
// invoices.push('hello'); // won't work
invoices.push(invoiceOne);
invoices.push(invoiceTwo);

invoiceTwo.client = 'James Milner';
console.log(invoiceTwo);
console.log(invoices);




const anchor = document.querySelector('a')!;
// if(anchor) console.log(anchor.href);
// console.log(anchor.href);

// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});

