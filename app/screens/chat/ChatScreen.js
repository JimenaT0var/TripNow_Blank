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

	const list = [
		{
			name: 'Jesus Suarez',
			avatar_url:
				'https://live.mrf.io/statics/i/ps/www.movilzona.es/app/uploads/2019/05/Foto-de-Perfil-en-WhatsApp-696x364.jpg?width=1200&enable=upscale',
			subtitle: 'Vice President',
		},
		{
			name: 'Chris Jackson',
			avatar_url:
				'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
			subtitle: 'Vice Chairman',
		},
	];

	return (
		<ScrollView>
			<SearchBar
				placeholder="Buscar..."
				onChangeText={(e) => setSerach(e)}
				containerStyle={StyleSheet.SearchBar}
				value={serach}
			/>

			{list.map((l, i) => (
				<ListItem
					key={i}
					leftAvatar={{ source: { uri: l.avatar_url } }}
					title={l.name}
					subtitle={l.subtitle}
					bottomDivider
					chevron
					onPress={() => navigationScreen.navigate('conversation')}
					checkmark
				/>
			))}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	SearchBar: {
		marginBottom: 20,
	},
});
