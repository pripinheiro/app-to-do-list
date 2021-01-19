import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { 
  SafeAreaView, 
  StyleSheet, 
  Text, 
  View, 
  TextInput,
  TouchableWithoutFeedback,
  FlatList
} from 'react-native';

function HeaderToDo() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerName}>To Do App</Text>
    </View>
  )
}

function AddToDo() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Banho no Jake'},
    { id: 2, title: 'Banho no Jake'},
  ]);

  const handleAdd = () => {
    setTasks([ ... tasks, task]);
    setTask('');
  }

  const Task = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  

  const handleRenderTask = ({ task }) => (<Task title={ "task.title" } />);

  return (
    <View>
      <View style={styles.addToDo}>
        <TextInput
          style={styles.addInput} 
          onChange={text => setTask(text)}
          value={task} 
          placeholder= 'Insira uma tarefa'
        />
        <TouchableWithoutFeedback onPress={() => handleAdd()} >
          <View style={styles.addButton}>
            <Text style={styles.addButtonText}>Criar</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View>
        <FlatList
          style={styles.listTasks}
          data={tasks}
          keyExtractor={task => task.id}
          renderItem={handleRenderTask}
        />
      </View>
    </View>
  )
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderToDo />
      <AddToDo />
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'black'
  },

  headerName: {
    fontSize: 30,
    fontWeight: '600',
    color: 'yellow'
  },

  addToDo: {
    flexDirection: 'row'
  },

  addInput: {
    fontSize: 20,
    padding: 10
  },

  addButton: {
   marginLeft: 180 
  },

  addButtonText:{
    fontSize: 20,
    padding: 5,
    backgroundColor: 'yellow',
    marginTop: 5
  },

  item: {
    backgroundColor: 'red',
  },

  title: {
    
  },

  listTasks: {
    fontSize: 20,
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10
  }
});
