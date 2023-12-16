import { useCallback, useEffect } from 'react';
import useSelector from '../hooks/use-selector';
import useStore from '../hooks/use-store';

export const useAuth = () => {
  const store = useStore();

  useEffect(() => {
    store.actions.user.loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const select = useSelector(state => ({
    user: state.user?.data,
    token: state.user?.token,
    isPending: state.user?.isPending,
    error: state.user?.error,
    isSuccess: state.user?.isSuccess,
    isInitialAuth: state.user?.isInitialAuth,
  }));

  const callbacks = {
    login: useCallback(data => store.actions.user.login(data), [store]),
    logout: useCallback(() => store.actions.user.logout(), [store]),
  };

  return {
    user: select.user,
    token: select.token,
    isPending: select.isPending,
    error: select.error,
    isSuccess: select.isSuccess,
    login: callbacks.login,
    logout: callbacks.logout,
    isUserAuth: Boolean(select.token),
    isInitialAuth: select.isInitialAuth,
  };
};
