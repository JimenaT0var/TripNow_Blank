import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeStack from './HomeStack';
import ChatStack from './ChatStack';
import NotificationStack from './NotificationStack';
import SettingStack from './SettingStack';

const Tab = createMaterialBottomTabNavigator();

export default function MainTabScreen() {
	return (
		<Tab.Navigator initialRouteName="Home" activeColor="#fff">
			<Tab.Screen
				name="Home"
				component={HomeStack}
				options={{
					tabBarLabel: 'Home',
					tabBarColor: '#3497FD', //color del bar de abajo
					tabBarIcon: ({ color }) => (
						<Icon name="ios-home" color={color} size={26} />
					),
				}}
			/>
			<Tab.Screen
				name="Chat"
				component={ChatStack}
				options={{
					tabBarLabel: 'Chat',
					tabBarColor: '#3497FD',
					tabBarIcon: ({ color }) => (
						<Icon name="ios-chatbubbles" color={color} size={26} />
					),
				}}
			/>
			<Tab.Screen
				name="Notifications"
				component={NotificationStack}
				options={{
					tabBarLabel: 'Notificasiones',
					tabBarColor: '#3497FD',
					tabBarIcon: ({ color }) => (
						<Icon name="ios-notifications" color={color} size={26} />
					),
				}}
			/>
			<Tab.Screen
				name="Settings"
				component={SettingStack}
				options={{
					tabBarLabel: 'Configuraciones',
					tabBarColor: '#3497FD',
					tabBarIcon: ({ color }) => (
						<Icon name="ios-settings" color={color} size={26} />
					),
				}}
			/>
		</Tab.Navigator>
	);
}
