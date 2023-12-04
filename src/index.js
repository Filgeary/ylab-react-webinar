import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app.js';
import Store from './store.js';
import { generateCode } from './utils.js';

const store = new Store({
  list: [
    { code: generateCode(), title: 'Название товара', price: 100.0 },
    { code: generateCode(), title: 'Книга про React', price: 770 },
    { code: generateCode(), title: 'Конфета', price: 33 },
    { code: generateCode(), title: 'Трактор', price: 7955320 },
    { code: generateCode(), title: 'Телефон iPhone XIV', price: 120000 },
    { code: generateCode(), title: 'Карандаши цветные', price: 111 },
    { code: generateCode(), title: 'Товар сюрприз', price: 0 },
  ],
  cart: [],
  total: 0,
});

const rootElem = document.getElementById('root');
if (!rootElem) {
  throw new Error('Root element not found');
}

const root = createRoot(rootElem);

store.subscribe(() => {
  root.render(<App store={store} />);
});

// Первый рендер приложения
root.render(<App store={store} />);
