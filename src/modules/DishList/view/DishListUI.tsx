import React from 'react';
import DishItem from './DishItem';
import {Button, Text, View} from 'react-native';
import styles from './styles';

interface Props {
  dishMap: {[key: string]: number};
  onDish: (dish: string) => void;
  total: number;
  onReset: () => void;
}

const DishListUI = React.memo(({dishMap, onDish, total, onReset}: Props) => {
  return (
    <View>
      {Object.keys(dishMap).map(dish => (
        <DishItem
          dish={dish}
          amount={dishMap[dish]}
          onDish={onDish}
          key={dish}
        />
      ))}
      <View style={styles.dishListItem}>
        <Text>Total:</Text>
        <Text>{total}</Text>
      </View>
      <Button title="Reset" color="orange" onPress={onReset} />
    </View>
  );
});

export default DishListUI;
