import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';

import Home from '../views/Home';
import Quiz from '../views/Quiz';
import Profile from '../views/Profile';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#53c68c'
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name={Platform.os === 'ios' ? "ios-home" : "md-home"} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Quiz" 
        component={Quiz} 
        options={{
          tabBarLabel: "Quiz",
          tabBarIcon: ({ color, size }) => (
            <Icon name={Platform.os === 'ios' ? "ios-tennisball-outline" : "md-tennisball-outline"} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Icon name={Platform.os === 'ios' ? "ios-person-outline" : "md-person-outline"} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function BottomTabNavigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
};
