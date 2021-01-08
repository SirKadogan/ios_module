import React, {useCallback} from 'react';
import {
  NativeModules,
  SafeAreaView,
  StyleSheet,
  Button,
  Text,
  StatusBar,
} from 'react-native';

const {CalendarModule} = NativeModules;

const App = () => {
  const callModule = useCallback(() => {
    CalendarModule.createCalendarEvent('testName', 'testLocation');
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Native Module Test</Text>
        <Text style={styles.text}>
          Click the button below to add an event to the calendar using a Native
          Module built with Obj-C
        </Text>
        <Button title="Call module" onPress={callModule} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  text: {
    textAlign: 'center',
    padding: 10,
  },
});

export default App;
