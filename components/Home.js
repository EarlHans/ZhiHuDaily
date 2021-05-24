import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
  Button,
  View,
  Text,
} from 'react-native';

import TopBar from './TopBar';
import List from './List';

const Home = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [index, setIndex] = useState(3);

  useEffect(() => {
    fetch('https://news-at.zhihu.com/api/4/news/latest')
      .then(response => response.json())
      .then(json => setNews(json.stories))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const goDetails = id => {
    console.log(id);
  };

  return (
    <>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <SafeAreaView>
          <TopBar />
          <List news={news} navigation={navigation} onDetails={goDetails} />
        </SafeAreaView>
      )}
    </>
  );
};

export default Home;
