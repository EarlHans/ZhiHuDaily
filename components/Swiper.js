import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // overflow: 'hidden',
  },
});

const Swiper = props => {
  const [layoutWidth, setLayoutWidth] = useState(360);
  const {children, index, style} = props;
  const translateX = -index * layoutWidth;
  const items = children.map((item, i) =>
    React.cloneElement(item, {
      key: i,
      style: [
        ...item.props.style,
        {
          width: layoutWidth,
          transform: [{translateX}],
        },
      ],
    }),
  );

  const handleLayout = ({nativeEvent}) => {
    setLayoutWidth(nativeEvent.layout.width);
  };

  return (
    <View
      // style={styles.container}
      style={[styles.container, style]}
      onLayout={handleLayout}>
      {items}
    </View>
  );
};

export default Swiper;
