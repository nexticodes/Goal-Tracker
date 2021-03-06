import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button,FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);


  const handleAddGoal = (goal) => {
    setCourseGoals(currentGoals => [...courseGoals, { id: Math.random().toString(), value: goal }]);
    setIsAddMode(isAddMode => !isAddMode);
  }

  const handleDeleteGoal = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    });
  }

  const handleCancel = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={handleAddGoal} onCancel={handleCancel}/>
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
});
