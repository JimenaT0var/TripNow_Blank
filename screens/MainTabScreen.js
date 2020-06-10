import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './home/HomeScreen';
import ChatScreen from './chat/ChatScreen';
import SettingsScreen from './settings/SettingsScreen';
import NotificationsScreen from './notifications/NotificationsScreen';

const HomeStack = createStackNavigator();
const ChatStack = createStackNavigator();
const NotificationsStack = createStackNavigator();
const SettingsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#496EF9',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
          
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatStackScreen}
        options={{
          tabBarLabel: 'Chat',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-chatbubbles" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsStackScreen}
        options={{
          tabBarLabel: 'Notifications',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStackScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-settings" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;


const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
       backgroundColor: '#496EF9',
     },
     headerTintColor: '#fff',
     headerTitleStyle: {
       fontWeight: 'bold'
     }
   }}>
     <HomeStack.Screen name="Home" component={HomeScreen} options={{
       title:'HOME',
       headerLeft: () => (
         <Icon.Button name="ios-menu" size={25} backgroundColor="#496EF9" onPress={() => navigation.openDrawer()}></Icon.Button>
       )
     }} />
   </HomeStack.Navigator>
  );
  
  const ChatStackScreen = ({navigation}) => (
    <ChatStack.Navigator screenOptions={{
      headerStyle: {
       backgroundColor: '#009387',
     },
     headerTintColor: '#fff',
     headerTitleStyle: {
       fontWeight: 'bold'
     }
   }}>
     <ChatStack.Screen name="CONVERSACIONES" component={ChatScreen} options={{
       headerLeft: () => (
        <Icon.Button name="ios-arrow-round-back" size={25} backgroundColor="#009387" onPress={()=>navigation.navigate("Home")}></Icon.Button>
      )
     }} />
   </ChatStack.Navigator>
  );

  const NotificationsStackScreen = ({navigation}) => (
    <NotificationsStack.Navigator screenOptions={{
      headerStyle: {
       backgroundColor: '#694fad',
     },
     headerTintColor: '#fff',
     headerTitleStyle: {
       fontWeight: 'bold'
     }
   }}>
     <NotificationsStack.Screen name="NOTIFICACIONES" component={NotificationsScreen} options={{
       headerLeft: () => (
        <Icon.Button name="ios-arrow-round-back" size={25} backgroundColor="#694fad" onPress={()=>navigation.navigate("Home")}></Icon.Button>
      )
     }} />
   </NotificationsStack.Navigator>
  );

  const SettingsStackScreen = ({navigation}) => (
    <SettingsStack.Navigator screenOptions={{
      headerStyle: {
       backgroundColor: '#d02860',
     },
     headerTintColor: '#fff',
     headerTitleStyle: {
       fontWeight: 'bold'
     }
   }}>
     <SettingsStack.Screen name="CONFIGURACION" component={SettingsScreen} options={{
       headerLeft: () => (
        <Icon.Button name="ios-arrow-round-back" size={25} backgroundColor="#d02860" onPress={()=>navigation.navigate("Home")}></Icon.Button>
      )
     }} />
   </SettingsStack.Navigator>
  );