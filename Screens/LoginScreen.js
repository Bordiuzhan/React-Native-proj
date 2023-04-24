import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

const LoginScreen = ({ children }) => {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const toggleHidePassword = () => {
    setHidePassword(!hidePassword);
  };
  const handleLoginPress = () => {
    console.log(email);
    console.log(password);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.wrapperForm}>
        <Text style={styles.title}>Войти</Text>

        <View style={styles.wrapperInput}>
          <KeyboardAvoidingView
            style={styles.keyboard}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
            <TextInput
              placeholder="Адрес электронной почты"
              style={styles.input}
              onChangeText={onChangeEmail}
            />
          </KeyboardAvoidingView>
        </View>
        <View style={styles.wrapperInput}>
          <KeyboardAvoidingView
            style={styles.keyboard}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
            <TextInput
              placeholder="Пароль"
              onChangeText={onChangePassword}
              style={styles.input}
            />
          </KeyboardAvoidingView>
          <TouchableOpacity
            onPress={toggleHidePassword}
            style={styles.buttonPassword}
          >
            <Text>{hidePassword ? 'Показать' : 'Скрить'}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerLogin}>
          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={handleLoginPress}
          >
            <Text style={styles.textButton}>Войти</Text>
          </TouchableOpacity>
        </View>
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  wrapperForm: {
    position: 'relative',
    marginTop: 'auto',
    width: '100%',
    backgroundColor: '#ffff',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  wrapperInput: {
    position: 'relative',
  },
  buttonPassword: {
    position: 'absolute',
    top: 16,
    right: 31,
  },
  containerLogin: {
    marginTop: 27,
    borderRadius: 100,
    marginRight: 16,
    marginLeft: 16,
    alignItems: 'center',
  },
  title: {
    marginTop: 32,
    marginBottom: 33,
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    letterSpacing: 0.01,
    color: '#212121',
  },
  input: {
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E8E8E8',
    borderRadius: 8,
    alignItems: 'center',
    padding: 15,
    marginBottom: 16,
    marginRight: 16,
    marginLeft: 16,
  },
  buttonLogin: {
    width: '100%',
    backgroundColor: '#FF6C00',
    height: 51,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
