/**
 * Генератор чисел с шагом 1
 * Вариант с замыканием на начальное значение в самовызываемой функции.
 * @returns {Number}
 */
export const generateCode = (function (start = 0) {
  return () => ++start;
})();

/**
 * Formats a price into a localized currency string.
 *
 * @param {number} price - The price to format.
 * @param {string} [locale='ru-RU'] - The locale to use for formatting the currency.
 * @return {string} The formatted price as a string.
 */
export function formatPrice(price, locale = 'ru-RU') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
  }).format(price);
}
