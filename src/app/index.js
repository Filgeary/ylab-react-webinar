import { responseProduct } from '../_fixtures/responseProduct';
import PageLayout from '../components/page-layout';
import ProductCard from '../components/product-card';
import useSelector from '../store/use-selector';
import Basket from './basket';
import Main from './main';

/**
 * Приложение
 * @returns {React.ReactElement}
 */
function App() {
  const activeModal = useSelector(state => state.modals.name);

  return (
    <>
      <PageLayout>
        <ProductCard
          item={responseProduct.result}
          onAddProduct={console.log}
        />
      </PageLayout>
      <Main />
      {activeModal === 'basket' && <Basket />}
    </>
  );
}

export default App;
