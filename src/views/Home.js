import React from 'react';
import {View, ScrollView} from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';

const Home = ({navigation}) => {

  const onPressHandler = () => {
    navigation.navigate('Quiz')
  }

  return (
    <View>
      <Header title="Home" />
        <ScrollView>
          <Card onPress={onPressHandler} />
        </ScrollView>
    </View>
  );
};

export default Home;
