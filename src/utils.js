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
 * Returns the appropriate plural form for the given count.
 *
 * @param {number} count The count to determine the plural form.
 * @return {string} The plural form of the count.
 */
function pluralize(count) {
  const pluralRules = new Intl.PluralRules('ru-RU');
  const pluralCategory = pluralRules.select(count);

  const forms = {
    one: 'раз',
    few: 'раза',
    many: 'раз',
    other: 'раз',
  };

  return forms[pluralCategory];
}

/**
 * Formats the count of selections.
 *
 * @param {number} count The count of selections.
 * @return {string} The formatted count of selections.
 */
export function formatCountOfSelections(count) {
  return ' | Выделяли ' + `${count} ` + pluralize(count);
}
