import * as React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

const HomeScreen = (props) => {
  const { navigation } = props;

  const [state, setState] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true)
    fetch('http://localhost:3000')
    .then((res) => res.json())
    .then(res => setTimeout(() => {
      setLoading(false)
      setState(res)
    }, 2500))
    .catch(err => {
      setLoading(false)
      alert(err)
    })
  });

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ backgroundColor: 'black', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 100 }}>{state ? state.kalman : '-'}</Text>
          <Text style={{ color: 'white', fontSize: 20, position: 'absolute', bottom: 20, left: '50%' }}>Kalman</Text>
        </View>
        <View style={{ backgroundColor: 'yellow', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'red', fontSize: 100 }}>{state ? state.buturlia : '-'}</Text>
          <Text style={{ color: 'red', fontSize: 20, position: 'absolute', bottom: 20, left: '50%' }}>Buturlia</Text>
        </View>
      </View>
      <View style={{ backgroundColor: 'green', flex: 1 }}>
        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={() => {}}>
          <Text style={{ fontSize: 70, color: 'white' }}>I won</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={() => {}}>
          <Text style={{ fontSize: 70, color: 'white' }}>I lost</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HomeScreen