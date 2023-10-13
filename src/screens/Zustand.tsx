import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useCalcStore} from '../store/calc';
import {useShallow} from 'zustand/react/shallow';

const Perkalian = () => {
  const {angkaKali, perkalian} = useCalcStore(
    useShallow(state => ({
      angkaKali: state.angkaKali,
      perkalian: state.perkalian,
    })),
  );

  console.log('perkalian render');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Perkalian: {angkaKali}</Text>
      <Button title="kali 3" onPress={perkalian} />
    </View>
  );
};

const Pertambahan = () => {
  const {angkaTambah, pertambahan} = useCalcStore(
    useShallow(state => ({
      angkaTambah: state.angkaTambah,
      pertambahan: state.pertambahan,
    })),
  );

  console.log('pertambahan render');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pertambahan: {angkaTambah}</Text>
      <Button title="tambah 3" onPress={pertambahan} />
    </View>
  );
};

const Zustand = () => {
  console.log('zustand render');

  return (
    <View>
      <Perkalian />
      <Pertambahan />
    </View>
  );
};

export default Zustand;

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});
