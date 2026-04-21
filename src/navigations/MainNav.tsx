import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ROUTES } from '../utils';
import { authLogout } from '../app/actions';
import { MainStackParamList } from '../types';

// screens
import Home from '../screens/HomeScreen';
import Profile from '../screens/ProfileScreen';

const Stack = createStackNavigator<MainStackParamList>();

const LogoutButton: React.FC<{ onPress: () => void }> = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.logoutButton}>
    <Text style={styles.logoutText}>Logout</Text>
  </TouchableOpacity>
);

const MainNavigation: React.FC = () => {
    const dispatch = useDispatch();

    return (
        <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#1E3A8A',
                },
                headerTintColor: '#FFFFFF',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
        <Stack.Screen 
            name="Home" 
            component={Home}
            options={{
                title: 'Home',
                headerRight: () => (
                    <LogoutButton onPress={() => dispatch(authLogout() as any)} />
                ),
            }}
        />
        <Stack.Screen 
            name="Profile" 
            component={Profile}
            options={{
                title: 'Profile',
            }}
        />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
  logoutButton: {
    marginRight: 15,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#DC2626',
    borderRadius: 6,
  },
  logoutText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default MainNavigation;
