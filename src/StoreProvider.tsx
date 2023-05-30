import React from 'react';
import {Provider} from 'mobx-react';
import DishListStore from './modules/DishList/DishListStore';

const dishListStore = new DishListStore();

const StoreProvider = React.memo(({children}: any) => {
  return <Provider dishListStore={dishListStore}>{children}</Provider>;
});

export default StoreProvider;
