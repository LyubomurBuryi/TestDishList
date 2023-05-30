import React from 'react';
import {Button, Text, View} from 'react-native';
import styles from './styles';

interface Props {
  dish: string;
  amount: number;
  onDish: (dish: string) => void;
}

const DishItem = React.memo(({dish, amount, onDish}: Props) => {
  return (
    <View style={styles.dishListItem}>
      <Button title={dish} onPress={() => onDish(dish)} />
      <Text>{amount}</Text>
    </View>
  );
});

export default DishItem;
