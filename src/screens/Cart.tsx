import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {CartItem} from '../components';
import {useCartStore} from '../store/cart';

const Cart = () => {
  const {products, addQty, minQty, delProduct} = useCartStore();

  console.log('cart render');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>My Cart</Text>
      {products.map(product => (
        <CartItem
          key={product.product.id}
          name={product.product.name}
          desc={product.product.desc}
          price={product.product.price}
          qty={product.qty}
          onAdd={() => addQty(product.product.id, product.product)}
          onMin={() => minQty(product.product.id)}
          onRemove={() => delProduct(product.product.id)}
        />
      ))}
    </ScrollView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    paddingVertical: 20,
  },
});
