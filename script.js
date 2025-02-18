'use strict';

const productName = prompt("Наименование товара");
const productQuantity = prompt("Количество товара");
const productCategory = prompt("Категория товара");
const productPrice = prompt("Цена товара");

console.log("Тип данных 'Количество товара':", typeof productQuantity);
console.log("Тип данных 'Цена товара':", typeof productPrice);

const quantity = Number(productQuantity);
const price = Number(productPrice);

const isValidQuantity = !isNaN(quantity);
const isValidPrice = !isNaN(price);

const finalQuantity = isValidQuantity ? quantity : 0; 
const finalPrice = isValidPrice ? price : 0;         

console.log("Тип данных 'Количество товара' после преобразования:", typeof finalQuantity);
console.log("Тип данных 'Цена товара' после преобразования:", typeof finalPrice);

const totalPrice = finalQuantity * finalPrice;
console.log(`Вы заказали ${finalQuantity} ед. товара "${productName}" на сумму ${totalPrice} у.е.`);