const propNames = new Set(['id', 'className', 'textContent', 'onclick']);

/**
 * Создание элемента со свойствами и вложенными элементами
 * @param name {String} Название HTML тега
 * @param props {Object} Свойства и атрибуты элемента
 * @param children {...Node} Вложенные элементы
 * @returns {HTMLElement}
 */
export function createElement(name, props = {}, ...children) {
  const element = document.createElement(name);

  // Назначение свойств и атрибутов
  for (const name of Object.keys(props)) {
    if (propNames.has(name)) {
      element[name] = props[name];
    } else {
      element.setAttribute(name, props[name]);
    }
  }

  // Вставка вложенных элементов
  for (const child of children) {
    element.append(child);
  }

  return element;
}

/**
 * Функция для образования множественного числа в русском языке
 * @param number {number} Число
 * @param forms {Array} Формы слова для множественного числа (один, несколько, много)
 * @returns {string} Множественное число
 */
const pluralize = (number, forms) => {
  if (number === 0) {
    return forms[2];
  }

  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return forms[2];
  }

  if (lastDigit === 1) {
    return forms[0];
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return forms[1];
  }

  return forms[2];
}

/**
 * Pluralizes the counter value and returns a string.
 *
 * @param {number} counter - The counter value to pluralize.
 * @return {string} - The pluralized string.
 */
export const pluralizeCounter = (counter) => {
  return ' | Выделяли ' + `${counter} ` + pluralize(counter, ['раз', 'раза', 'раз'])
}
