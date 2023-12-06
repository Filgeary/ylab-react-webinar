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
    currentPage: state.catalog.currentPage,
    size: state.catalog.limit,
    total: state.catalog.total,
  }));

  const callbacks = {
    // Добавление в корзину
    addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
    // Открытие модалки корзины
    openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
    loadMorePerPage: useCallback(pageCount => store.actions.catalog.load(pageCount - 1), [store]),
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
        currentPage={select.currentPage + 1}
        size={select.size}
        total={select.total}
        onClick={callbacks.loadMorePerPage}
      />
    </PageLayout>
  );
}

export default memo(Main);