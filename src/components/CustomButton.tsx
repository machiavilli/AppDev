import React from 'react';
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  ActivityIndicator, 
  StyleProp, 
  ViewStyle, 
  TextStyle 
} from 'react-native';
import { CustomButtonProps } from '../types';

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onPress,
  containerStyle,
  textStyle,
  disabled = false,
  loading = false,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        disabled && styles.disabledButton,
        containerStyle,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator 
          size="small" 
          color={(textStyle as any)?.color || '#FFFFFF'} 
        />
      ) : (
        <Text style={[styles.text, textStyle]}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
  },
  disabledButton: {
    opacity: 0.6,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default CustomButton;
