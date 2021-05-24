import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  useWindowDimensions,
  ActivityIndicator,
  Image,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Button,
} from 'react-native';
import HTML from 'react-native-render-html';

import LinearGradient from 'react-native-linear-gradient';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import TopLine from './TopLine';

const Tab = createBottomTabNavigator();

const NewDetail = ({route, navigation}) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const {id} = route.params;

  const contentWidth = useWindowDimensions().width;
  const computeEmbeddedMaxWidth = availableWidth => {
    return Math.min(availableWidth, contentWidth - 32);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(
          `https://news-at.zhihu.com/api/4/news/${id}`,
        );
        let responseJson = await response.json();
        responseJson.image_hue = '#' + responseJson.image_hue.slice(2);
        setData(responseJson);
        setLoading(false);
        // console.log(responseJson);
      } catch (err) {
        console.log(err);
      }
    }
    async function fetchExtras() {
      try {
        let response = await fetch(
          `https://news-at.zhihu.com/api/4/story-extra/${id}`,
        );
        let responseJson = await response.json();
        await navigation.setOptions({
          headerRight: () => <TopLine extra={responseJson} />,
        });
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
    fetchExtras();
  }, [id, navigation]);

  const BlockList = ['bio', 'avatar'];

  return (
    <>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <ImageBackground source={{uri: data.image}} style={styles.image}>
              <LinearGradient
                colors={[
                  data.image_hue + '00',
                  data.image_hue + '00',
                  data.image_hue,
                ]}
                style={styles.LinearGradient}>
                <Text style={styles.title}>{data.title}</Text>
              </LinearGradient>
            </ImageBackground>
            <HTML
              source={{html: data.body}}
              containerStyle={htmlStyles.container}
              contentWidth={contentWidth}
              computeEmbeddedMaxWidth={computeEmbeddedMaxWidth}
              baseFontStyle={htmlStyles.text}
              tagsStyles={htmlStyles.tag}
              classesStyles={htmlStyles.class}
              ignoreNodesFunction={(node, parenTagName, parentIsText) => {
                // console.log('node', node);
                if (node.attribs) {
                  // console.log(node.attribs.class);
                  if (BlockList.includes(node.attribs.class)) {
                    return true;
                  }
                  if (node.attribs.class === 'author') {
                    node.children[0].data =
                      '作者/' + node.children[0].data.slice(0, -1);
                  }
                  if (node.attribs.class === 'view-more') {
                    node.children[0].children[0].data =
                      '进入「知乎」查看相关讨论';
                  }
                  if (node.attribs.class === 'originUrl') {
                    node.children[0].data = '进入「知乎」查看原文';
                  }
                }
                return false;
              }}
            />
          </ScrollView>
        </SafeAreaView>
      )}
    </>
  );
};

const htmlStyles = {
  text: {
    color: '#000',
    fontWeight: '200',
    fontSize: 14,
    lineHeight: 28,
    letterSpacing: 0.5,
  },
  tag: {
    a: {
      textDecorationLine: 'none',
    },
    figcaption: {
      color: '#ccc',
      fontSize: 11.5,
      fontWeight: 'normal',
      width: '100%',
      textAlign: 'center',
    },
    blockquote: {
      color: '#999',
      paddingLeft: 8,
      borderLeftWidth: 1,
      borderLeftColor: '#d3d3d3',
    },
  },
  class: {
    'view-more': {
      width: '100%',
      height: 40,
      lineHeight: 40,
      backgroundColor: '#03a9f4',
      color: '#fff',
      borderRadius: 50,
      overflow: 'hidden',
      textAlign: 'center',
    },
  },
  container: {
    paddingHorizontal: 16,
    paddingBottom: 50,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  image: {
    height: 250,
    resizeMode: 'stretch',
  },
  title: {
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  LinearGradient: {
    flex: 1,
    position: 'relative',
  },
});

export default NewDetail;
