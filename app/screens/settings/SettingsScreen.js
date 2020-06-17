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
import {
	Button,
	SearchBar,
	ListItem,
	Icon,
	PricingCard,
	Avatar,
	Rating,
	AirbnbRating,
} from 'react-native-elements';

export default function SettingsScreen(props) {
	const [serach, setSerach] = useState('');
	const { navigation } = props;
	const navigationScreen = useNavigation();

	return (
		<ScrollView>
			<View style={styles.vista1}>
				<Avatar
					rounded
					source={{
						uri:
							'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
					}}
					size={'xlarge'}
				/>
				<AirbnbRating
					count={5}
					reviews={['Terrible', 'Feo', 'Meh', 'OK', 'Muy bueno']}
					size={25}
				/>

				<ListItem subtitle={'hola'} title={'Configuraciones1'} chevron />
				<ListItem
					title={'Configuraciones2'}
					badge={{
						value: 3,
						textStyle: { color: 'orange' },
						containerStyle: { marginTop: -20 },
					}}
				/>
				<ListItem
					title={'Configuraciones3'}
					badge={{
						value: 3,
						textStyle: { color: 'orange' },
						containerStyle: { marginTop: -20 },
					}}
				/>
				<ListItem
					title={'Configuraciones4'}
					badge={{
						value: 3,
						textStyle: { color: 'orange' },
						containerStyle: { marginTop: -20 },
					}}
				/>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	vista1: {
		alignContent: 'center',
	},
});
