import React from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  StyleProp, 
  ViewStyle, 
  TextStyle 
} from 'react-native';
import { CustomTextInputProps } from '../types';

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  containerStyle,
  textStyle,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'sentences',
  autoCorrect = true,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, textStyle]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        placeholderTextColor="#999999"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    color: '#333333',
  },
});

export default CustomTextInput;
