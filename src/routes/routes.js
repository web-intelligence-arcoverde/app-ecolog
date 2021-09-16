import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {
  Loading,
  Intro,
  SignIn,
  SignUp00,
  SignUp01,
  SignUp02,
  SignUp03,
  RecoveryAccount00,
  RecoveryAccount01,
  RecoveryAccount02,
  RecoveryAccount03,
  Dashboard,
} from '../screens/';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
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
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUp00}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SignUp01"
          component={SignUp01}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp02"
          component={SignUp02}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SignUp03"
          component={SignUp03}
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
          name="RecoveryAccount03"
          component={RecoveryAccount03}
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
