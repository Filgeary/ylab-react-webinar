import { Route, Routes } from 'react-router-dom';
import useSelector from '../hooks/use-selector';
import Article from './article';
import Basket from './basket';
import Login from './login';
import Main from './main';
import Profile from './profile';

/**
 * Приложение
 * Маршрутизация по страницам и модалкам
 */
function App() {
  const activeModal = useSelector(state => state.modals.name);

  const select = useSelector(state => ({
    user: state.user?.data,
  }));

  const isUserAuth =
    Object.keys(
      select.user ?? {
        username: '',
      },
    ).length > 0;

  return (
    <>
      <Routes>
        <Route path={'/'} element={<Main />} />
        <Route path={'/articles/:id'} element={<Article />} />
        <Route path={'/login'} element={<Login />} />

        {isUserAuth && <Route path={'/profile/:username'} element={<Profile />} />}
      </Routes>

      {activeModal === 'basket' && <Basket />}
    </>
  );
}

export default App;
