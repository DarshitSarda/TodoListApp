import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';

import { addTask, removeTask, toggleComplete } from './actions';

const TodoListScreen = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [newTaskText, setNewTaskText] = useState('');

  const handleAddTask = () => {
    if (newTaskText.trim() === '') {
      return;
    }

    const newTask = {
      id: Math.random().toString(),
      text: newTaskText,
      completed: false,
    };
    dispatch(addTask(newTask));
    setNewTaskText('');
  };

  const handleRemoveAllTasks = () => {
    dispatch(removeTask());
  };

  const handleToggleComplete = taskId => {
    dispatch(toggleComplete(taskId));
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={() => handleToggleComplete(item.id)}>
        <Icon
          name={item.completed ? 'check-circle' : 'checkbox-blank-circle-outline'}
          size={25}
          color={item.completed ? '#592693' : '#D3D3D3'}
        />
      </TouchableOpacity>
      <Text style={[styles.taskText, item.completed && styles.completedTaskText]}>
        {item.text}
      </Text>
    </View>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>Todo List App using Redux</Text>
        <Text style={styles.title}>Task title</Text>
        <Text style={styles.prototype}>NFT Web App Prototype</Text>
        <Text style={styles.desc}>Descriptions</Text>
        <Text style={styles.script}>
          Last year was a fantastic year for NFTs, with the market reaching a $40 billion valuation for the first time. In addition, more than $10 billion worth of NFTs are sold every week- with NFT...
        </Text>
        <View style={styles.rowContainer}>
          <Text style={styles.taskListText}>Task List</Text>

            <TouchableOpacity style={styles.clearButton} onPress={handleRemoveAllTasks}>
              <Icon2 name="md-trash-sharp" size={20} color="#fff" />
            </TouchableOpacity>
          
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter a task"
            value={newTaskText}
            onChangeText={setNewTaskText}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
            <Icon name="plus" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
        <FlatList
          data={tasks}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.taskList}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  taskListText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    color: '#7f7f7f',
    marginBottom: 15,
  },
  script: {
    color: '#000000',
    fontWeight: '500',
    marginBottom: 10,
  },
  desc: {
    marginBottom: 6,
  },
  prototype: {
    fontSize: 25,
    marginBottom: 15,
    fontWeight: '400',
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 50,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#592693',
    padding: 10,
    width: 60,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskList: {
    paddingBottom: 20,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  taskText: {
    fontSize: 18,
    flex: 1,
    marginLeft: 10,
  },
  completedTaskText: {
    textDecorationLine: 'line-through',
  },
  clearButton: {
    backgroundColor: '#f44336',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TodoListScreen;
