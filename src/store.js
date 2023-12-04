/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    };
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  addItemToCart(code) {
    const foundItemInList = this.state.list.find(item => item.code === code);
    const foundItemInCart = this.state.cart.find(item => item?.code === code);

    if (foundItemInCart) {
      this.setState({
        ...this.state,
        cart: this.state.cart.map(item => {
          if (item?.code === code) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        }),
      });
    } else {
      this.setState({
        ...this.state,
        cart: [...this.state.cart, { ...foundItemInList, quantity: 1 }],
      });
    }

    this.state.total += foundItemInList.price;
  }

  removeItemFromCart(code) {
    const foundItemInCart = this.state.cart.find(item => item.code === code);

    this.setState({
      ...this.state,
      total: this.state.total - foundItemInCart.price * foundItemInCart.quantity,
      cart: this.state.cart.filter(item => item.code !== code),
    });
  }
}

export default Store;
