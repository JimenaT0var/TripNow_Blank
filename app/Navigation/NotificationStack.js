import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import NotificationScreen from '../screens/notifications/NotificationScreen';

const Stack = createStackNavigator();

export default function NotificationStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: '#3497FD',
				},
				headerTintColor: '#fff',
				headerTitleStyle: {
					fontWeight: 'bold',
				},
			}}
		>
			<Stack.Screen
				name="Notificasiones"
				component={NotificationScreen}
				options={{
					headerLeft: () => (
						<Icon.Button
							name="ios-menu"
							size={25}
							backgroundColor="#3497FD"
							onPress={() => navigation.openDrawer()}
						></Icon.Button>
					),
				}}
			/>
		</Stack.Navigator>
	);
}
