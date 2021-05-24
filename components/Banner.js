import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';

import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  swiper: {},
  image: {
    width: 360,
    height: 200,
  },
});

const Banner = props => {
  return (
    <Swiper
      width={360}
      height={200}
      horizontal={true}
      autoplay={true}
      paginationStyle={{bottom: 10}}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://img1.baidu.com/it/u=2496571732,442429806&fm=26&fmt=auto&gp=0.jpg',
        }}
      />
      <Image
        style={styles.image}
        source={{
          uri: 'https://img1.baidu.com/it/u=1522015854,2481348088&fm=26&fmt=auto&gp=0.jpg',
        }}
      />
      <Image
        style={styles.image}
        source={{
          uri: 'https://img0.baidu.com/it/u=4171419767,78329239&fm=224&fmt=auto&gp=0.jpg',
        }}
      />
      <Image
        style={styles.image}
        source={{
          uri: 'https://img0.baidu.com/it/u=993093081,3581344450&fm=26&fmt=auto&gp=0.jpg',
        }}
      />
      <Image
        style={styles.image}
        source={{
          uri: 'https://img0.baidu.com/it/u=993093081,3581344450&fm=26&fmt=auto&gp=0.jpg',
        }}
      />
    </Swiper>
  );
};

export default Banner;
