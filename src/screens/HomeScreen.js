/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#574CE6',
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('MoradorSingUp')}
        style={style.btn}>
        <Text style={style.txt}>Morador</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('DoadorSingUp')}
        style={style.btn}>
        <Text style={style.txt}>Doador</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('RepresentanteSingUp')}
        style={style.btn}>
        <Text style={style.txt}>
          Representante de {'\n'} Associação de Bairro / ONG
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  btn: {
    height: 90,
    width: 300,
    margin: 10,
    backgroundColor: '#DB5348',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
