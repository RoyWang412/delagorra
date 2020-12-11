import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AuthCreators } from '~/store/actions/auth';
import { navigators, main, auth } from '~/navigation/routeNames';
import { isAuthenticated as isAuthenticatedSelector } from '~/store/selectors/session';

import * as Styled from './styled';

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const handleClose = () => {
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: <Styled.CloseButton onPress={handleClose} />,
    });
  }, [navigation]);

  const handleSignOut = () => {
    dispatch(AuthCreators.logOutRequest());
    navigation.reset({
      index: 1,
      routes: [
        { name: navigators.main, params: { screen: main.profile } },
        { name: navigators.auth, params: { screen: auth.signIn } },
      ],
    });
  };

  const handleSignIn = () => {
    navigation.navigate(navigators.auth);
  };

  return (
    <Styled.Content>
      <Styled.Container>
        <Styled.Text fontStyle="bold" fontSize={20} textAlign="center" mt={100}>
          {isAuthenticated ? "Welcome! You've logged in successfully!" : 'Home screen'}
        </Styled.Text>
        {isAuthenticated ? (
          <Styled.Button mt={50} text="Sign Out" onPress={handleSignOut} />
        ) : (
          <Styled.Button mt={50} text="Sign In" onPress={handleSignIn} />
        )}
      </Styled.Container>
    </Styled.Content>
  );
};

export default Profile;
