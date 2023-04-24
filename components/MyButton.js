import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const MyButton = (text) => {
  const handleRegisterPress = () => {
    // Виклик функції реєстрації
    console.log('Реєстрація');
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleRegisterPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF6C00',
    height: 51,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default MyButton;
