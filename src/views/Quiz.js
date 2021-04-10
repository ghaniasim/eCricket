import React from 'react';
import {View, ScrollView} from 'react-native';
import Header from '../components/Header';
import Question from '../components/Question';

import axios from 'axios';

const api = axios.create({
  baseURL: `http://192.168.1.107:8080/quizes`,
});

const Quiz = () => {
  return (
    <View>
      <Header title="Quiz" />
      <ScrollView>
        <Question />
      </ScrollView>
    </View>
  );
};

export default Quiz;
