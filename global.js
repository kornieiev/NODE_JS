// console.log(global);

// setTimeout(() => {
//   console.log ('Hello!');
// }, 3000);
// выводит на экран Hello с задержкой в 3 секунды

// console.log(__dirname);
// отображает путь к рабочему файлу

// console.log(__filename);
// отображает имя рабочего файла и расширение

// console.log(process);
// отображает свойства рабочего файла (конфигурация, переменные среды, версии и т.д.)
// Типы:
// console.log(process.env);
// console.log(process.argv);

// console.log(`Hello, ${process.argv[2]}`);

const url = new URL('https://webDev.com/path/name#test');
console.log(url.hostname);
console.log(url.href);
console.log(url.pathname);
console.log(url.hash);
// парсинг 