import React, { useState, useEffect } from 'react';
import { 
  Image, 
  Alert, 
  Text, 
  TouchableOpacity, 
  View, 
  StyleProp, 
  ViewStyle,
  ImageStyle,
  TextStyle 
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/reducers';

import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import { IMG, ROUTES } from '../../utils';
import { authLogin } from '../../app/actions';
import { AuthStackParamList } from '../../types';

type LoginScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'Login'>;

interface LoginScreenProps {
  navigation: LoginScreenNavigationProp;
}

const Login: React.FC<LoginScreenProps> = ({ navigation }) => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const dispatch = useDispatch();
    const auth = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        if (!auth.isLoading && auth.isError && auth.error) {
            Alert.alert('Login failed', auth.error);
        }
    }, [auth.isLoading, auth.isError, auth.error]);

    const containerStyle: StyleProp<ViewStyle> = {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    };

    const logoStyle: StyleProp<ImageStyle> = {
        width: 240,
        height: 80,
        marginBottom: 40,
    };

    const inputContainerStyle: StyleProp<ViewStyle> = {
        width: '100%',
    };

    const buttonContainerStyle: StyleProp<ViewStyle> = {
        backgroundColor: '#1E3A8A',
        borderRadius: 10,
        marginVertical: 20,
        width: '85%',
    };

    const buttonTextStyle: StyleProp<TextStyle> = {
        color: 'white',
        fontWeight: 'bold',
    };

    const linkContainerStyle: StyleProp<ViewStyle> = {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const linkTextStyle: StyleProp<TextStyle> = {
        color: 'green',
        marginLeft: 5,
        fontWeight: 'bold',
    };

    const handleLogin = () => {
        if (username === '' || password === '') {
            Alert.alert(
                'Invalid Credentials',
                'Please enter valid username and password',
            );
            return;
        }

        dispatch(
            authLogin({
                username,
                password,
            }) as any,
        );
    };

    return (
        <View style={containerStyle}>
            <Image
                source={IMG.LOGO}
                style={logoStyle}
                resizeMode="contain"
            />

            <View style={inputContainerStyle}>
                <CustomTextInput
                    label={'Username'}
                    placeholder={'Enter Username'}
                    value={username}
                    onChangeText={setUsername}
                    containerStyle={{
                        padding: 5,
                    }}
                    textStyle={{
                        borderRadius: 10,
                        color: 'black',
                        marginLeft: 10,
                        fontWeight: 'bold',
                    }}
                />
                <CustomTextInput
                    label={'Password'}
                    placeholder={'Enter Password'}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    containerStyle={{
                        padding: 5,
                    }}
                    textStyle={{
                        borderRadius: 10,
                        color: 'black',
                        marginLeft: 10,
                        fontWeight: 'bold',
                    }}
                />
            </View>

            <CustomButton
                label={'LOGIN'}
                containerStyle={buttonContainerStyle}
                textStyle={buttonTextStyle}
                onPress={handleLogin}
                loading={auth.isLoading}
            />

            <View style={linkContainerStyle}>
                <Text>Create an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={linkTextStyle}>
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Login;
