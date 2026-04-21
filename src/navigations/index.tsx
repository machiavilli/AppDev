import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import { Platform, StatusBar, useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../app/reducers';

import AuthNav from './AuthNav';
import MainNav from './MainNav';

const AppNavigation: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const auth = useSelector((state: RootState) => state.auth);
  const isLoggedIn = !!auth?.data;

  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBarStyle(isDarkMode ? 'light-content' : 'dark-content', true);
      StatusBar.setBackgroundColor(isDarkMode ? '#000000' : '#FFFFFF', true);
    } else {
      StatusBar.setBarStyle(isDarkMode ? 'light-content' : 'dark-content', true);
    }
  }, [isDarkMode]);

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainNav /> : <AuthNav />}
    </NavigationContainer>
  );
};

export default AppNavigation;
