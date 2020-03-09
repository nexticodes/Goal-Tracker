import React, { useState } from 'react';
import { 
    View, 
    Text, 
    Button, 
    StyleSheet, 
    TextInput } from 'react-native';

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const handleInput = (enteredText) => {
      setEnteredGoal(enteredText);
    }
  
    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder='Course Goal'
                style={styles.input}
                onChangeText={handleInput}
                value={enteredGoal}
            />
            <Button title='ADD' onPress={() => props.onAddGoal(enteredGoal)} />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    }
})

export default GoalInput;