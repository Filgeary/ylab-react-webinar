import { memo, useCallback, useEffect } from 'react';
import BasketTool from '../../components/basket-tool';
import Head from '../../components/head';
import Item from '../../components/item';
import List from '../../components/list';
import PageLayout from '../../components/page-layout';
import Pagination from '../../components/pagination';
import useSelector from '../../store/use-selector';
import useStore from '../../store/use-store';

function Main() {
  const store = useStore();

  useEffect(() => {
    store.actions.catalog.load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const select = useSelector(state => ({
    list: state.catalog.list,
    amount: state.basket.amount,
    sum: state.basket.sum,
  }));

  const callbacks = {
    // Добавление в корзину
    addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
    // Открытие модалки корзины
    openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
  };

  const renders = {
    item: useCallback(
      item => {
        return (
          <Item
            item={item}
            onAdd={callbacks.addToBasket}
          />
        );
      },
      [callbacks.addToBasket],
    ),
  };

  return (
    <PageLayout>
      <Head title='Магазин' />
      <BasketTool
        onOpen={callbacks.openModalBasket}
        amount={select.amount}
        sum={select.sum}
      />
      <List
        list={select.list}
        renderItem={renders.item}
      />
      <Pagination
        currentPage={5}
        size={10}
        total={90}
        onClick={console.log}
      />
    </PageLayout>
  );
}

export default memo(Main);
