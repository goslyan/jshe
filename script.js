let title = prompt('Как называется ваш проект?', 'jshe');
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
let screenPrice = +prompt('Сколько будет стоить данная работа?', '12000');
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');
let rollback = Math.round(Math.random() * 30);
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Number(fullPrice) - Number(rollback);

let mas = screens.split('');


if (fullPrice >= 30000) {
    console.log('Даём скидочку 10%')
} else if (fullPrice >= 15000 & fullPrice < 30000) {
    console.log('Даём скидочку 5%')
} else if (fullPrice < 15000 & fullPrice >= 0) {
    console.log('Скидка не предусмотрена')
} else if (fullPrice <= 0) {
    console.log('Что-то пошло не так')
};


console.log("hehe, this console log gagaga")

console.log('название проекта:' + " " + title)
console.log('Стоимость разработки сайта:' + " " + fullPrice + " " + 'Рублей')
console.log('Стоимость верстки экранов:' + " " + screenPrice + " " + 'Рублей')
console.log('Адаптация:' + " " + adaptive)
console.log('Экраны:' + " " + screens.length)
console.log(screens.toLowerCase())
console.log(mas)
console.log('rollback:' + " " + rollback)
console.log('Процент отката посреднику за работу' + " " + fullPrice * (rollback/100))
console.log('полная стоимость доп услуг:' + " " + servicePercentPrice + " " + 'рублей')

console.log(typeof screens)
console.log(typeof screenPrice)
console.log(typeof rollback)
console.log(typeof fullPrice)
console.log(typeof adaptive)