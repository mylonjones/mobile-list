
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import styles from '../styles.js';

export default function AddTodo({ submitHandler }) {

  const [text, setText] = useState('')
  const changeHandler = (val) => {
    setText(val);
  }


  return(
    <View>
      <TextInput
        placeholder='new todo...'
        onChangeText={changeHandler}
        style={styles.input}
      />
      <View style={{backgroundColor: 'coral'}}>
        <Button onPress={() => submitHandler(text)} title='add todo' color='white' />
      </View>
    </View>
  )
}
