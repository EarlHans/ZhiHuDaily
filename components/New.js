import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableNativeFeedback,
} from 'react-native';

const New = props => {
  return (
    <TouchableNativeFeedback
      onPress={() =>
        props.navigation.navigate('NewDetail', {
          id: props.new.id,
        })
      }>
      <View style={styles.container}>
        <View style={styles.text}>
          <Text style={styles.title}>{props.new.title}</Text>
          <Text style={styles.info}>{props.new.hint}</Text>
        </View>
        <View>
          <Image style={styles.logo} source={{uri: props.new.images[0]}} />
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 8,
    paddingRight: 8,
  },
  text: {
    width: 250,
  },
  title: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
  },
  info: {
    color: '#ccc',
    fontSize: 11,
  },
  logo: {
    width: 70,
    height: 70,
  },
});

export default New;
