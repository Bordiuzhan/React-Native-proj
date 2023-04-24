import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';

export default function App() {
  const [isUser, setIsUser] = useState(false);
  const toggleChangeForm = () => {
    setIsUser(!isUser);
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          style={styles.img}
          source={require('./assets/images/BG-1x.jpg')}
        >
          {isUser ? (
            <LoginScreen>
              <View style={styles.containerToggleForm}>
                <TouchableOpacity onPress={toggleChangeForm}>
                  <Text style={styles.textToggleLogin}>
                    Нет аккаунта? Зарегистрироваться
                  </Text>
                </TouchableOpacity>
              </View>
            </LoginScreen>
          ) : (
            <RegistrationScreen>
              <View style={styles.containerToggleForm}>
                <TouchableOpacity onPress={toggleChangeForm}>
                  <Text style={styles.textToggleLogin}>
                    Уже есть аккаунт? Войти
                  </Text>
                </TouchableOpacity>
              </View>
            </RegistrationScreen>
          )}
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textToggleLogin: {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#1B4371',
  },
  containerToggleForm: {
    marginTop: 16,
    marginRight: 16,
    marginLeft: 16,
    alignItems: 'center',
    marginBottom: 78,
  },
});
