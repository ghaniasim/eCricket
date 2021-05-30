import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Dimensions,
  Alert,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const Question = () => {
  const [questionOne, setQuestionOne] = useState(false);
  const [questionTwo, setQuestionTwo] = useState(false);
  const [questionThree, setQuestionThree] = useState(false);
  const [correct, setCorrect] = useState(false);

  const onPressOne = () => {
    setQuestionOne(!questionOne);
  };

  const onPressTwo = () => {
    setQuestionTwo(!questionTwo);
  };

  const onPressThree = () => {
    setQuestionThree(!questionThree);
  };

  const onSubmit = () =>
    Alert.alert(
      'Your Result',
      'You give 2/3 correct answers and got 150 points',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Review', onPress: () => setCorrect(true)},
      ],
    );

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
          <View
            style={
              questionOne && correct
                ? styles.selectedCorrectOption
                : questionOne
                ? styles.selectedOption
                : styles.options
            }>
            <Text style={styles.optionText} onPress={onPressOne}>
              Sport
            </Text>
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
          <View style={correct ? styles.selectedCorrectOption : styles.options}>
            <Text style={styles.optionText}>50</Text>
          </View>
          <View
            style={
              questionTwo && !correct
                ? styles.selectedOption
                : questionTwo
                ? styles.selectedWrongOption
                : styles.options
            }>
            <Text style={styles.optionText} onPress={onPressTwo}>
              90
            </Text>
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
          <View
            style={
              questionOne && correct
                ? styles.selectedCorrectOption
                : questionThree
                ? styles.selectedOption
                : styles.options
            }>
            <Text style={styles.optionText} onPress={onPressThree}>
              Twenty Twenty
            </Text>
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
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 20,
            marginBottom: 100,
          }}>
          <Button title="Submit" onPress={onSubmit} />
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
  selectedCorrectOption: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    width: (width * 50) / 100,
    borderRadius: 20,
    backgroundColor: 'chartreuse',
  },
  selectedWrongOption: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    width: (width * 50) / 100,
    borderRadius: 20,
    backgroundColor: 'red',
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
