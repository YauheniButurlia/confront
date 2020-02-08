import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  const { navigation } = props;
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ backgroundColor: 'black', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 100 }}>7</Text>
        </View>
        <View style={{ backgroundColor: 'yellow', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'red', fontSize: 100 }}>7</Text>
        </View>
      </View>
      <View style={{ backgroundColor: 'green', flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={{ fontSize: 70, color: 'white' }}>I won</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text style={{ fontSize: 70, color: 'white' }}>I lost</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HomeScreen