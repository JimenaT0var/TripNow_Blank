import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import ChatScreen from '../screens/chat/ChatScreen';
import Conversation from '../screens/chat/Conversation';

const Stack = createStackNavigator();

export default function ChatStack() {
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
				name="conversacion"
				component={ChatScreen} //nombre del componente
				options={{
					title: 'Conversaciones', //titulo que se muestra en la pantalla
				}}
			/>
			<Stack.Screen
				name="conversation"
				component={Conversation}
				options={{
					title: 'Jesus Suarez',
				}}
			/>
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({
	SearchBar: {
		marginBottom: 20,
	},
});
