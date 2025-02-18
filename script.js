'use strict';

const productName = prompt("Наименование товара");
const productQuantity = Number(prompt("Количество товара")) || 0;
const productCategory = prompt("Категория товара");
const productPrice = Number(prompt("Цена товара")) || 0;

console.log("Тип данных 'Количество товара':", typeof productQuantity);
console.log("Тип данных 'Цена товара':", typeof productPrice);

const totalPrice = productQuantity * productPrice;
console.log(`Вы заказали ${productQuantity} ед. товара "${productName}" на сумму ${totalPrice} у.е.`);