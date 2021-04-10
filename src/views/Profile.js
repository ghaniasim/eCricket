import React from 'react';
import {View, Text, Image, Button} from 'react-native';
import Header from '../components/Header';
import styles from '../styles';

const Profile = () => {
  return (
    <View style={{height: 700, backgroundColor: '#53c68c'}}>
      <Header title="Profile" />
      <View style={styles.mainbody}>
        <Image
          style={styles.imgprofile}
          source={require('../assets/profile.jpg')}
        />
        <Text style={styles.name}>Asim Ghani</Text>
        <Text style={styles.username}>@asimg</Text>

        <View style={styles.itemprofile}>
          <Image
            style={styles.imgitem}
            source={require('../assets/iccoffee.png')}
          />
          <Text style={styles.labelitem}>Redeem Coffee</Text>
          <Text style={styles.sublabelitem}>Available</Text>
        </View>
        <View style={styles.itemprofile}>
          <Image
            style={styles.imgitem}
            source={require('../assets/icphone.png')}
          />
          <Text style={styles.labelitem}>Edit Profile</Text>
          <Text style={styles.sublabelitem}>Eligible</Text>
        </View>
        <View style={styles.itemprofile}>
          <Image
            style={styles.imgitem}
            source={require('../assets/icbadge.png')}
          />
          <Text style={styles.labelitem}>My Achievements</Text>
          <Text style={styles.sublabelitem}>180,309 Points</Text>
        </View>
        <View style={styles.btnsignout}>
          <Button title="Log Out" />
        </View>
      </View>
    </View>
  );
};

export default Profile;
