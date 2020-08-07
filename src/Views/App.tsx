import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Initial from './Initial/Initial';
import Login from './Login/Login';
import Home from './Home/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Initial"
          screenOptions={{headerStyle: {elevation: 0}}}>
          <Stack.Screen
            name="Initial"
            component={Initial}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Login" component={Login} options={{title: ''}} />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;
