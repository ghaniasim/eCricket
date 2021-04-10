import React from 'react';
import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import {data} from '../data';

const {width, height} = Dimensions.get('window');

const Question = () => {
  return (
    <ScrollView style={{backgroundColor: '#F5FCFF', paddingTop: 10}}>
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={styles.oval}>
            <Text style={styles.welcome}>What is Cricket?</Text>
          </View>
          <View style={styles.options}>
            <Text style={styles.optionText}>Racing</Text>
          </View>
          <View style={styles.options}>
            <Text style={styles.optionText}>Running</Text>
          </View>
          <View style={styles.selectedOption}>
            <Text style={styles.optionText}>Sport</Text>
          </View>
          <View style={styles.options}>
            <Text style={styles.optionText}>Driving</Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={styles.oval}>
            <Text style={styles.welcome}>
              How many overs are in one day Cricket?
            </Text>
          </View>
          <View style={styles.selectedOption}>
            <Text style={styles.optionText}>50</Text>
          </View>
          <View style={styles.options}>
            <Text style={styles.optionText}>90</Text>
          </View>
          <View style={styles.options}>
            <Text style={styles.optionText}>40</Text>
          </View>
          <View style={styles.options}>
            <Text style={styles.optionText}>20</Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={styles.oval}>
            <Text style={styles.welcome}>What is T20 stands for?</Text>
          </View>
          <View style={styles.selectedOption}>
            <Text style={styles.optionText}>Twenty Twenty</Text>
          </View>
          <View style={styles.options}>
            <Text style={styles.optionText}>Test</Text>
          </View>
          <View style={styles.options}>
            <Text style={styles.optionText}>One Day</Text>
          </View>
          <View style={styles.options}>
            <Text style={styles.optionText}>Three Days</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Question;

const styles = StyleSheet.create({
  oval: {
    marginTop: 5,
    width: (width * 90) / 100,
    borderRadius: 20,
    backgroundColor: 'green',
  },
  options: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    width: (width * 50) / 100,
    borderRadius: 20,
    backgroundColor: 'grey',
  },
  selectedOption: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    width: (width * 50) / 100,
    borderRadius: 20,
    backgroundColor: 'orange',
  },
  optionText: {
    fontSize: 20,
    margin: 10,
    color: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    margin: 15,
    color: 'white',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
