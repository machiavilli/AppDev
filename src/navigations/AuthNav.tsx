import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../utils';
import { AuthStackParamList } from '../types';

// screens
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigation: React.FC = () => {
    return (
        <Stack.Navigator 
            initialRouteName="Login"
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
            name="Login"
            component={Login}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen 
            name="Register" 
            component={Register}
            options={{
                title: 'Create Account',
            }}
        />
        </Stack.Navigator>
    );
};

export default AuthNavigation;
