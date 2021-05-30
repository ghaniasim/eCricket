import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

const Card = ({onPress}) => {
  const [cardView, setCardView] = useState([
    {
      name: 'What is Cricket?',
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF-OxlZiLVrLd6Ew70XteBOLFwOcVRmM_OMQ&usqp=CAU',
      key: 1,
    },
    {
      name: 'Batting',
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuBD2vDbArNxqUAX-PTdcuQkltVnEJwKLDFA&usqp=CAU',
      key: 2,
    },
    {
      name: 'Bowling',
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT-jGYwoEX25hXsxiYBMNNAeR0LpTB2dPxeQ&usqp=CAU',
      key: 3,
    },
    {
      name: 'Fielding',
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ65_Clz9niPF_4baZaFW_yMBLnvgEPpmycw&usqp=CAU',
      key: 4,
    },
    {
      name: '',
      url: '',
      key: 5,
    },
  ]);

  let {container, cardText, card, cardImage} = styles;

  return (
    <View style={container}>
      <ScrollView style={card}>
        {cardView.map(item => {
          return (
            <TouchableOpacity onPress={onPress} key={item.key}>
              <Image style={cardImage} source={{uri: item.url}} />
              <Text style={cardText}>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    fontSize: 30,
    padding: 10,
  },
  card: {
    shadowOpacity: 1.0,
    shadowOffset: {width: 3, height: 3},
    shadowColor: 'black',
    elevation: 3,
    backgroundColor: '#0000',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: '2%',
    width: '96%',
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
});
