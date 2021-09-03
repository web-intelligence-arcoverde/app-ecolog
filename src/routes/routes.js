import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {
  Loading,
  Intro,
  Information,
  SignIn,
  SignUp,
  RecoveryAccount00,
  RecoveryAccount01,
  RecoveryAccount02,
  Dashboard,
} from '../screens/';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Loading}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Intro"
          component={Intro}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Information"
          component={Information}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="RecoveryAccount"
          component={RecoveryAccount00}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="RecoveryAccount01"
          component={RecoveryAccount01}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="RecoveryAccount02"
          component={RecoveryAccount02}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
