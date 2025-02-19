'use strict';

const productName = prompt("Наименование товара");
const productQuantityInput = prompt("Количество товара");
const productCategory = prompt("Категория товара");
const productPriceInput = prompt("Цена товара");

// Преобразуем введённые данные в числа
const productQuantity = Number(productQuantityInput);
const productPrice = Number(productPriceInput);

// Проверяем, является ли количество товара числом
if (!isNaN(productQuantity) && productQuantity >= 0 && !isNaN(productPrice) && productPrice >= 0) {
    const totalPrice = productQuantity * productPrice;
    console.log(`Вы заказали ${productQuantity} ед. товара "${productName}" на сумму ${totalPrice} у.е.`);
} else {
    console.log("Вы ввели некорректные данные");
}

