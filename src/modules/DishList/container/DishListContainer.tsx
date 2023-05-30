import React, {useEffect} from 'react';
import DishListStore from '../DishListStore';
import DishListUI from '../view/DishListUI';
import {observer, inject} from 'mobx-react';
import {Text} from 'react-native';

interface Props {
  dishListStore: DishListStore;
}

const DishListContainer = inject('dishListStore')(
  observer(({dishListStore}: Props) => {
    useEffect(() => {
      dishListStore.initDishData();
    }, [dishListStore]);

    const calculateTotal = () => {
      let total = 0;
      Object.keys(dishListStore.dishMap).forEach(dish => {
        total += dishListStore.dishMap[dish];
      });
      return total;
    };

    return dishListStore.isLoading ? (
      <Text>Loading...</Text>
    ) : (
      <DishListUI
        dishMap={dishListStore.dishMap}
        onDish={dishListStore.addDish}
        total={calculateTotal()}
        onReset={dishListStore.resetMap}
      />
    );
  }),
);

export default DishListContainer;
