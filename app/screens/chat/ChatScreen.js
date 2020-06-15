import React, { Components, useState, useEffect } from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TextInput,
	FlatList,
	Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, SearchBar, ListItem, Icon } from 'react-native-elements';

export default function ChatScreen(props) {
	const [serach, setSerach] = useState('');
	const { navigation } = props;
	const navigationScreen = useNavigation();

	return (
		<ScrollView>
			<SearchBar
				placeholder="Buscar..."
				onChangeText={(e) => setSerach(e)}
				containerStyle={StyleSheet.SearchBar}
				value={serach}
			/>

			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>MENSAJES RECIBIDOS</Text>
				<Button
					title="Chat con usuario"
					onPress={() => navigationScreen.navigate('conversation')}
				/>
				{/*
			<Button
				title="Ir a la pantalla de conversaciones"
				onPress={() => navigation.navigate('conversacion')} //es el name del componente ChatStack
			/>
			<Button title="Atras" onPress={() => navigation.goBack()} />
			<Button
				title="Go to the firts screen"
				onPress={() => navigation.popToTop()}
			/> */}
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	SearchBar: {
		marginBottom: 20,
	},
});
