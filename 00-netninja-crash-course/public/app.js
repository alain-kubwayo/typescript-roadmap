"use strict";
// classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes €${this.amount} for ${this.details}`;
    }
}
const invoiceOne = new Invoice('Alain', 'Work on the mario website', 420);
const invoiceTwo = new Invoice('luigi', 'Work on the luigi website', 500);
// console.log(invoiceOne, invoiceTwo);
let invoices = [];
// invoices.push('hello'); // won't work
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
invoiceTwo.client = 'James Milner';
console.log(invoiceTwo);
console.log(invoices);
const anchor = document.querySelector('a');
// if(anchor) console.log(anchor.href);
// console.log(anchor.href);
// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
// console.log(form.children);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
