/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View style={{marginTop: 100, alignItems: 'center'}}>
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
    height: 70,
    width: 270,
    margin: 15,
    backgroundColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 18,
    color: 'white',
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
