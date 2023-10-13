import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useCartStore} from '../store/cart';
import {useShallow} from 'zustand/react/shallow';

const Header = () => {
  const navigation: any = useNavigation();

  const total = useCartStore(useShallow(state => state.total));

  console.log('header render');

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Zustand')}>
        <View style={styles.logoWrapper}>
          <Image
            source={require('../assets/images/logo_app.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>Nectar</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cartWrapper}
        onPress={() => navigation.navigate('Cart')}>
        <Image
          source={require('../assets/images/ic_cart.png')}
          style={styles.cartIcon}
        />
        <View style={styles.cartQty}>
          <Text style={styles.qtyText}>{total}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  logoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 22,
  },
  cartWrapper: {
    position: 'relative',
  },
  cartIcon: {
    width: 30,
    height: 30,
  },
  cartQty: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    position: 'absolute',
    top: -7,
    right: -7,
  },
  qtyText: {
    color: '#fff',
  },
});
