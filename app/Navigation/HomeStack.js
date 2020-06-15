import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/home/HomeScreen';

const Stack = createStackNavigator();

export default function HomeStack() {
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
				name="Home"
				component={HomeScreen}
				options={{
					title: 'Overview',
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
