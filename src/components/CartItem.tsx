import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {icMin, icTimes} from '../assets/images';
import {
  dummyProduct1,
  dummyProduct2,
  dummyProduct3,
  dummyProduct4,
  dummyProduct5,
  dummyProduct6,
} from '../assets/dummy';

const imageSrc: Record<string, any> = {
  'Diet Coke': dummyProduct1,
  Sprite: dummyProduct2,
  'Coca Cola': dummyProduct3,
  Pepsi: dummyProduct4,
  'Apple Juice': dummyProduct5,
  'Orange Juice': dummyProduct6,
};

interface CartItemProps {
  name: string;
  desc: string;
  qty: number;
  price: string;
  onAdd: () => void;
  onMin: () => void;
  onRemove: () => void;
}

const CartItem = ({
  name,
  desc,
  qty,
  price,
  onAdd,
  onMin,
  onRemove,
}: CartItemProps) => {
  console.log('cart item render');

  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image source={imageSrc[name]} />
      </View>
      <View style={styles.infoWrapper}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
        <View style={styles.qtyWrapper}>
          <TouchableOpacity
            style={styles.btn}
            onPress={onMin}
            disabled={qty < 2}>
            <Image source={icMin} />
          </TouchableOpacity>
          <Text style={styles.qty}>{qty}</Text>
          <TouchableOpacity style={styles.btn} onPress={onAdd}>
            <Image source={icTimes} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.sideWrapper}>
        <TouchableOpacity onPress={onRemove}>
          <Image source={icTimes} />
        </TouchableOpacity>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
    padding: 20,
  },
  imgWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
  },
  infoWrapper: {
    flex: 1,
    marginLeft: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  desc: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#7c7c7c',
    marginBottom: 12,
  },
  qtyWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qty: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginHorizontal: 15,
  },
  btn: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 15,
  },
  sideWrapper: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});
