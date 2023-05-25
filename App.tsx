import React, { useState } from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export type Props = {
  name: string;
  baseExclamation?: number;
};

const Hello: React.FC<Props> = ({
  name,
  baseExclamation = 0,
}) => {
  const [exclamation, setExclamation] = useState(
    baseExclamation,
  );

  const onIncrement = () =>
    setExclamation(exclamation + 1);
  const onDecrement = () =>
    setExclamation(
      exclamation > 0 ? exclamation - 1 : 0,
    );

  const getExclamationMarks = (numChars: number) =>
    numChars > 0 ? Array(numChars + 1).join('!') : '';

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
        Hello {name}
        {getExclamationMarks(exclamation)}
      </Text>
      <View>
        <TouchableOpacity style={{backgroundColor: "blue", marginVertical: 5}} onPress={onIncrement}>
          <Text style={{color: '#fff', padding: 10}}>Increase !</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor: "red", marginVertical: 5}} onPress={onDecrement}>
          <Text style={{color: '#fff', padding: 10}}>Decrease !</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
  },
});

export default Hello;