import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const loadFonts = async () => {
  await Font.loadAsync({
    'Roboto-Regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
  });
};

export default () => {
  const [isReady, setIsReady] = useState(false);
  if (!isReady) {
    return (
      <AppLoading startAsync={loadFonts} onFinish={() => setIsReady(true)} />
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button onPress={this._onPressButton} title="Press Me" />
      </View>
    </View>
  );
};
