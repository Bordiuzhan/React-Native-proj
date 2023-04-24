import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Alert,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

const RegistrationScreen = ({ children }) => {
  const [name, onChangeName] = useState('');
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const toggleHidePassword = () => {
    setHidePassword(!hidePassword);
  };
  const handleRegisterPress = () => {
    console.log(name);
    console.log(email);
    console.log(password);
  };

  const handleChoosePhoto = () => {
    // ImagePicker.showImagePicker(options, (response) => {
    //   if (response.didCancel) {
    //     console.log('Користувач скасував вибір фото');
    //   } else if (response.error) {
    //     console.log('Сталася помилка: ', response.error);
    //   } else {
    //     const uri = response.uri;
    //     setPhoto(uri);
    //   }
    // });
  };
  const onLogin = () => {
    Alert.alert('Credentials', `${name} + ${password}`);
  };

  const nameHandler = (text) => setName(text);
  const passwordHandler = (text) => setPassword(text);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.wrapperForm}>
        <View style={styles.containerPhoto}>
          <TouchableOpacity
            style={styles.photoButton}
            onPress={handleChoosePhoto}
          >
            <Image
              style={styles.imgAdd}
              source={require('../assets/add.png')}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Регистрация</Text>
        <View style={styles.wrapperInput}>
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          >
            <TextInput
              placeholder="Логин"
              style={styles.input}
              onChangeText={onChangeName}
            />
          </KeyboardAvoidingView>
        </View>
        <View style={styles.wrapperInput}>
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
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
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          >
            <TextInput
              placeholder="Пароль"
              secureTextEntry={hidePassword}
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
        <View style={styles.containerRegister}>
          <TouchableOpacity
            style={styles.buttonRegister}
            onPress={handleRegisterPress}
          >
            <Text style={styles.textButton}>Зарегистрироваться</Text>
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
  containerPhoto: {
    position: 'absolute',
    width: 120,
    height: 120,
    left: 128,
    top: -60,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },
  photoButton: {
    position: 'absolute',
    width: 25,
    height: 25,
    bottom: 14,
    right: -12,
  },
  wrapperInput: {
    position: 'relative',
  },
  buttonPassword: {
    position: 'absolute',
    top: 16,
    right: 31,
  },
  containerRegister: {
    marginTop: 27,
    borderRadius: 100,
    marginRight: 16,
    marginLeft: 16,
    alignItems: 'center',
  },
  title: {
    marginTop: 92,
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
  buttonRegister: {
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

export default RegistrationScreen;
