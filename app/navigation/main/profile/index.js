import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MainHeader } from '~/components/headers';
import Profile from '~/screens/Main/Profile';
import { profile } from '~/navigation/routeNames';

const Stack = createStackNavigator();

const ProfileNavigator = () => (
  <Stack.Navigator
    screenOptions={{ header: (props) => <MainHeader {...props} /> }}
    headerMode="screen"
    initialRouteName={profile.main}>
    <Stack.Screen name={profile.main} component={Profile} />
  </Stack.Navigator>
);

export default ProfileNavigator;
