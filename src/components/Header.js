import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.textContainer}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    viewContainer: {
        padding: 15,
        height: 70,
        backgroundColor: '#53c68c',
        alignItems: 'center',
        shadowColor: 'yellow',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5
    },
    textContainer: {
        fontSize: 30
    }
})

export default Header;