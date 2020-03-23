import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ENV_APP} from 'react-native-dotenv';

const getENV = env => {
  switch (env) {
    case '.qa2':
      return '.qa2';
    case '.dev1':
      return '.dev1';
    case '.prod':
      return '.prod';
    default:
      return '.dev1';
  }
};

const ENV = getENV(ENV_APP);

const HomeScreen = props => {
  const {navigation} = props;
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View
          style={{
            backgroundColor: 'black',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 100}}>7</Text>
        </View>
        <View
          style={{
            backgroundColor: 'yellow',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'red', fontSize: 100}}>7</Text>
        </View>
      </View>
      <View style={{backgroundColor: 'green', flex: 1}}>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          onPress={() => {}}>
          <Text style={{fontSize: 70, color: 'white'}}>I won</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          onPress={() => {}}>
          <Text style={{fontSize: 70, color: 'white'}}>{ENV}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
