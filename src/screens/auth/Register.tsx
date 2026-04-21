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
import { authRegister } from '../../app/actions';
import { AuthStackParamList } from '../../types';

type RegisterScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'Register'>;

interface RegisterScreenProps {
  navigation: RegisterScreenNavigationProp;
}

const Register: React.FC<RegisterScreenProps> = ({ navigation }) => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const dispatch = useDispatch();
    const auth = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        if (!auth.isRegistering && auth.isRegisterError && auth.registerError) {
            Alert.alert('Registration failed', auth.registerError);
        } else if (!auth.isRegistering && !auth.isRegisterError && !auth.registerError) {
            // Registration successful, navigate to login
            Alert.alert(
                'Registration Successful',
                'Your account has been created successfully. Please login.',
                [
                    {
                        text: 'OK',
                        onPress: () => navigation.navigate('Login'),
                    },
                ]
            );
        }
    }, [auth.isRegistering, auth.isRegisterError, auth.registerError, navigation]);

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

    const handleRegister = () => {
        if (username === '' || password === '' || email === '') {
            Alert.alert(
                'Invalid Information',
                'Please fill in all fields',
            );
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert(
                'Password Mismatch',
                'Passwords do not match',
            );
            return;
        }

        if (password.length < 6) {
            Alert.alert(
                'Weak Password',
                'Password must be at least 6 characters long',
            );
            return;
        }

        dispatch(
            authRegister({
                username,
                email,
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
                    label={'Email'}
                    placeholder={'Enter Email'}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
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
                <CustomTextInput
                    label={'Confirm Password'}
                    placeholder={'Confirm Password'}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
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
                label={'REGISTER'}
                containerStyle={buttonContainerStyle}
                textStyle={buttonTextStyle}
                onPress={handleRegister}
                loading={auth.isRegistering}
            />

            <View style={linkContainerStyle}>
                <Text>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={linkTextStyle}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Register;
