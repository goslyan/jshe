let title = "jshe";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 35500;
let rollback = Math.round(Math.random() * 30);
let fullPrice = 233000;
let adaptive = true;
let mas = screens.split('');

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

console.log(typeof screens)
console.log(typeof screenPrice)
console.log(typeof rollback)
console.log(typeof fullPrice)
console.log(typeof adaptive)