import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import moment from 'moment';
import 'moment/locale/zh-cn';

import Banner from './Banner';
import New from './New';

const List = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState(props.news);
  const [day, setDay] = useState(0);

  const loadMore = async () => {
    try {
      let response = await fetch(
        `https://news.at.zhihu.com/api/4/news/before/${moment()
          .subtract(day, 'days')
          .format('YYYYMMDD')}`,
      );
      let responseJson = await response.json();
      setNews([...news, ...responseJson.stories]);
      setDay(day + 1);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <View style={{width: 360, height: 200}}>
        <Banner />
      </View>
      <FlatList
        data={news}
        renderItem={({item}) => (
          <New new={item} navigation={props.navigation} />
        )}
        onEndReached={loadMore}
      />
    </>
  );
};

export default List;
