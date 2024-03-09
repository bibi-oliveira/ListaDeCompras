import {View, Text } from 'react-native';
import styles from './style';


export default function Title(){
  return (
    <View style={styles.container}>
      <View style={styles.Border}>
        <Text style={styles.Title}>List</Text>
      </View>
    </View>
  );
}