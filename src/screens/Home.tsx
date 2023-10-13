import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Header, ProductItem} from '../components';
import {products} from '../json';
import {useCartStore} from '../store/cart';
import {useShallow} from 'zustand/react/shallow';

const Home = () => {
  const addQty = useCartStore(useShallow(state => state.addQty));

  console.log('home render');

  return (
    <View>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.productListContainer}>
        <View style={styles.productList}>
          {products.map(product => {
            return (
              <ProductItem
                key={product.id}
                name={product.name}
                desc={product.desc}
                price={product.price}
                onPress={() => addQty(product.id, product)}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  productListContainer: {
    padding: 20,
    paddingBottom: 70,
  },
  productList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});

export default Home;
