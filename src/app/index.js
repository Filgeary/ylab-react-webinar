import { Route, Routes } from 'react-router-dom';
import useSelector from '../store/use-selector';
import Basket from './basket';
import Main from './main';
import Product from './product';

/**
 * Приложение
 * @returns {React.ReactElement}
 */
function App() {
  const activeModal = useSelector(state => state.modals.name);

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Main />}
        />
        <Route
          path='/product/:id'
          element={<Product />}
        />
        <Route
          path='*'
          element={<p>Страница не найдена</p>}
        />
      </Routes>

      {activeModal === 'basket' && <Basket />}
    </>
  );
}

export default App;
