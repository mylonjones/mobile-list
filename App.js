import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import styles from './styles.js';
import Header from './components/header.js';
import TodoItem from './components/todoitem.js';
import AddTodo from './components/addtodo.js'

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'thing one', key: '3'},
    {text: 'thing two', key: '2'},
    {text: 'thing three', key: '1'}

  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      let key = (parseInt(prevTodos[0].key) + 1) + '';
      return [{text, key}, ...prevTodos]
    })
  }

  return (
    <View style={styles.container}>
      {/* header */}
      <Header/>
      <View style={styles.content}>
        {/* to form */}
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem pressHandler={pressHandler} item={item}/>
            )}
          />
        </View>
      </View>
    </View>
  );
}


