import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
} from 'react-native';

const TopLine = props => {
  const {popularity, comments} = props.extra;
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback
        onPress={() => {
          console.log('1');
        }}>
        <View style={styles.component}>
          <Image
            style={styles.icon}
            source={require('../assets/comments.png')}
          />
          <Text style={styles.text}>{comments}</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        onPress={() => {
          console.log('2');
        }}>
        <View style={styles.component}>
          <Image
            style={styles.icon}
            source={require('../assets/popularity.png')}
          />
          <Text style={styles.text}>{popularity}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  component: {
    flexDirection: 'row',
    paddingLeft: 12,
    paddingRight: 12,
  },
  text: {
    fontSize: 12,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 4,
  },
});

export default TopLine;
