// Функция для проверки длины строки.
// принимает два параметра (строку, длину(число)) и возвращает true, если строка меньше или равна длине,
// и false, если строка длиннее.
// Cтрока короче 20 символов
// имяФункции('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
// имяФункции('проверяемая строка', 18); // true
// Строка длиннее 10 символов
// имяФункции('проверяемая строка', 10); // false

const checkStringLength = (string, length) => string.length <= length;

checkStringLength('проверяемая строка', 10);

//Функция для проверки, является ли строка палиндромом.
// Строка является палиндромом
// имяФункции('топот'); // true
// Несмотря на разный регистр, тоже палиндром
// имяФункции('ДовОд'); // true
// Это не палиндром
// имяФункции('Кекс');  // false

const checkStringPalindrome = (string) => {
  let reverseString = '';
  string = string.replaceAll(' ', '').toLowerCase();
  for (let i = 1; i <= string.length; i++) {
    reverseString += string.at(-i);
  }
  return reverseString === string;
};

checkStringPalindrome('ДовОд');

//Функция, принимает строку, извлекает содержащиеся в ней цифры от 0 до 9
// и возвращает их в виде целого положительного числа.
// Если в строке нет ни одной цифры, функция должна вернуть NaN:

// имяФункции('2023 год');            // 2023
// имяФункции('ECMAScript 2022');     // 2022
// имяФункции('1 кефир, 0.5 батона'); // 105
// имяФункции('агент 007');           // 7
// имяФункции('а я томат');           // NaN

const getNumbersFromSting = (string) => {
  let number = '';
  string = String(string);
  for (let i = 0; i <= string.length; i++){
    if(!Number.isNaN(parseInt(string[i], 10))) {
      number += string[i];
    }
  }
  return parseInt(number, 10);
};

getNumbersFromSting('1 кефир, 0.5 батона');

// Функция принимает три параметра: исходную строку, минимальную длину и строку
// с добавочными символами — и возвращает исходную строку, дополненную указанными
// символами до заданной длины. Символы добавляются в начало строки.
// Если исходная строка превышает заданную длину, она не должна обрезаться.
// Если «добивка» слишком длинная, она обрезается с конца.

// Добавочный символ использован один раз
// имяФункции('1', 2, '0');      // '01'
// Добавочный символ использован три раза
// имяФункции('1', 4, '0');      // '0001'
// Добавочные символы обрезаны с конца
// имяФункции('q', 4, 'werty');  // 'werq'
// Добавочные символы использованы полтора раза
// имяФункции('q', 4, 'we');     // 'wweq'
// Добавочные символы не использованы, исходная строка не изменена
// имяФункции('qwerty', 4, '0'); // 'qwerty'

const addSymbolsToString = (string, minLength, stringAdd) => {
  let result = string;
  while(result.length < minLength) {
    const newResultLength = result.length + stringAdd.length;
    const actualPad = newResultLength <= minLength ? stringAdd : stringAdd.slice(0, minLength - newResultLength);
    result = actualPad + result;
  }
  return result;
};

addSymbolsToString('qwerty', 4, '0');
