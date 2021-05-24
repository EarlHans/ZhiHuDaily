import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import moment from 'moment';
import 'moment/locale/zh-cn';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  title: {
    marginRight: 'auto',
    fontSize: 20,
    fontWeight: 'bold',
    borderLeftColor: 'gray',
    borderLeftWidth: 1,
    paddingLeft: 10,
  },
  day: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  month: {
    fontSize: 10,
    textAlign: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  photo: {
    width: 40,
    height: 40,
    marginRight: 20,
    borderRadius: 20,
  },
});

const TopBar = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.day}>{moment().format('DD')}</Text>
        <Text style={styles.month}>{moment().format('MMMM')}</Text>
      </View>
      <Text style={styles.title}>知乎日报</Text>
      <Image
        style={styles.photo}
        source={{
          uri: 'https://tvax3.sinaimg.cn/crop.422.0.908.908.180/005Iy6trly1fdf7i0zycnj31hc0u0n4p.jpg?KID=imgbed,tva&Expires=1621234023&ssig=QhLeGb8Zj9',
        }}
      />
    </View>
  );
};

export default TopBar;
