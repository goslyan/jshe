console.log("hehe, this console log gagaga")
let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
let screenPrice = +prompt('Сколько будет стоить данная работа?', '12000');
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');
let rollback = Math.round(Math.random() * 30);
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice;
let allServicePrices;

let mas = screens.split('');



const getTitle = function() {
    return title.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
}
title = getTitle()


const getAllServicePrices = function (servicePrice1, servicePrice2) {
    return servicePrice1 + servicePrice2
}
allServicePrices = getAllServicePrices(servicePrice1, servicePrice2)



function getFullPrice(fullPrice) {
    return screenPrice + allServicePrices
}
getFullPrice()



const getServicePercentPrices = function (fullPrice, rollback) {
    return fullPrice - rollback
}
servicePercentPrice = getServicePercentPrices(fullPrice, rollback)



const showTypeOf = function (variable) {
    console.log(variable, typeof variable)
}



const getRollbackMessage = function () {
    if (fullPrice >= 30000) {
        return 'Даём скидочку 10%'
    } else if (fullPrice >= 15000 & fullPrice < 30000) {
        return 'Даём скидочку 5%'
    } else if (fullPrice < 15000 & fullPrice >= 0) {
        return 'Скидка не предусмотрена'
    } else if (fullPrice <= 0) {
        return 'Что-то пошло не так'
    };
}



console.log('экраны:' + " " + screens.toLowerCase())
console.log('стоимость за вычетом процента отката посреднику' + " " + servicePercentPrice);
console.log(getRollbackMessage())
console.log(mas)

showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)