import React from 'react';
import { View, StyleSheet } from 'react-native';
import TodoListScreen from './TodoListScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <TodoListScreen/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
});

export default App;
