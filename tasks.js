'use strict';

const rain = Math.round(Math.round());
if (rain === 1) {
    console.log("Пошел дождь. Возьмите зонт!");
} else {
    console.log("Дождя нет!");
}

/**/ 

const mathScore = Number(prompt("Введите кол-во баллов по математике:"));
const rusScore = Number(prompt("Введите кол-во баллов по русскому языку:"));
const informaticsScore = Number(prompt("Введите кол-во баллов по информатике:"));

if (!isNaN(mathScore) && !isNaN(rusScore) && !isNaN(informaticsScore)) {
    const totalScore = mathScore + rusScore + informaticsScore;

    if (totalScore >= 265) {
        console.log("Поздравляю, вы поступили на бюджет!");
    } else {
        console.log("К сожалению, вы не поступили на бюджет!");
    }
} else {
    console.log("Вы ввели некорректные данные. Пожалуйста, введите числовые значения.");
}

/**/ 

const giveOutTheAmount = Number(prompt("Какую сумму денег вы хотите снять?"));

if (isNaN(giveOutTheAmount) || giveOutTheAmount <= 0) {
    console.error("Введите корректную сумму.");
} else if (giveOutTheAmount % 100 !== 0) {
    console.error("Банкомат выдает суммы от 100 рублей.");
} else {
    console.log(`Вы можете снять ${giveOutTheAmount} рублей`);
}