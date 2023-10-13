import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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

type ProductItemProps = {
  name: string;
  desc: string;
  price: string;
  onPress: () => void;
};

const WIDTH = Dimensions.get('window').width;

const ProductItem = ({name, desc, price, onPress}: ProductItemProps) => {
  console.log('productItem render');

  return (
    <View style={styles.container}>
      <Image source={imageSrc[name]} style={styles.image} />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.desc}>{desc}</Text>
      <View style={styles.priceWrapper}>
        <Text style={styles.price}>{price}</Text>
        <TouchableOpacity style={styles.btnAdd} onPress={onPress}>
          <Image source={require('../assets/images/ic_add.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    width: WIDTH / 2 - 30,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 20,
  },
  image: {
    alignSelf: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
    marginTop: 20,
  },
  desc: {
    fontSize: 14,
    color: '#7C7C7C',
    marginTop: 5,
  },
  priceWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },
  btnAdd: {
    width: 45,
    height: 45,
    backgroundColor: '#53B175',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
});
