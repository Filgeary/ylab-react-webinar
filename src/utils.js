import { COUNT_PLURAL_FORM } from "./const";

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
 * Pluralize a word based on the count using a forms map.
 *
 * @param {number} count - The count to determine the plural form.
 * @param {object} formsMap - The map of plural forms.
 * @return {string} The plural form of the word.
 */
function pluralize(count, formsMap) {
  const pluralRules = new Intl.PluralRules('ru-RU');
  const pluralCategory = pluralRules.select(count);

  return formsMap[pluralCategory];
}

/**
 * Formats the count of selections.
 *
 * @param {number} count The count of selections.
 * @return {string} The formatted count of selections.
 */
export function formatCountOfSelections(count) {
  return ' | Выделяли ' + `${count} ` + pluralize(count, COUNT_PLURAL_FORM);
}
