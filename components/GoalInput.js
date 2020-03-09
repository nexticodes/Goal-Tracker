import React, { useState } from 'react';
import { 
    View, 
    Text, 
    Button, 
    StyleSheet, 
    TextInput,
    Modal} from 'react-native';

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const handleInput = (enteredText) => {
      setEnteredGoal(enteredText);
    }
  
    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Course Goal'
                    style={styles.input}
                    onChangeText={handleInput}
                    value={enteredGoal}
                />
                <Button title='ADD' onPress={() => props.onAddGoal(enteredGoal)} />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderBottomColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: '80%',
        marginBottom: 10
    }
})

export default GoalInput;