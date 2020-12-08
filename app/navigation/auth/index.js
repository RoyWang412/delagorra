import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SimpleHeader, MainHeader } from '~/components/headers';
import SignIn from '~/screens/Auth/SignIn';
import SetUpPassword from '~/screens/Auth/SetUpPassword';

import { auth } from '../routeNames';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator initialRouteName={auth.signIn} headerMode="screen" screenOptions={{ header: MainHeader }}>
    <Stack.Screen name={auth.signIn} component={SignIn} options={{ header: SimpleHeader }} />
    <Stack.Screen name={auth.setUpPassword} component={SetUpPassword} options={{ title: 'Set Up New Password' }} />
  </Stack.Navigator>
);

export default AuthNavigator;
