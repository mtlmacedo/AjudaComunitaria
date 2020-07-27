import React, {Component} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

export default class RepresentanteSingUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  render() {
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TextInput
          placeholder="Email"
          style={style.container}
          onChangeText={email => this.setState({email})}
        />
        <TextInput
          placeholder="Senha"
          style={style.container}
          onChangeText={password => this.setState({password})}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    marginTop: 5,
    borderWidth: 1,
    width: Math.round(Dimensions.get('window').width - 20),
  },
});
