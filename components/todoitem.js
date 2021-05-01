
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';
import styles from '../styles.js';

export default function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => {pressHandler(item.key)}}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  )
}