import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);


  const handleAddGoal = (goal) => {
    setCourseGoals(currentGoals => [...courseGoals, { id: Math.random().toString(), value: goal }]);
  }

  const handleDeleteGoal = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    });
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={handleAddGoal} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem onDelete={handleDeleteGoal} id={itemData.item.id} title={itemData.item.value} />
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 70
  },
  input: {
    borderBottomColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%'
  }
});
