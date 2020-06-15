import React from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

const users = [
	{
		name: 'Jimena',
		avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
	},
	{
		name: 'Jesus',
		avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
	},
	{
		name: 'Bonifacio',
		avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
	},
];

export default function Conversation() {
	return (
		<ScrollView>
			<Card title="CARD WITH DIVIDER">
				{users.map((u, i) => {
					return (
						<View key={i}>
							<Image resizeMode="cover" source={{ uri: u.avatar }} />
							<Text>{u.name}</Text>
						</View>
					);
				})}
			</Card>
			<Card containerStyle={{ padding: 0 }}>
				{users.map((u, i) => {
					return (
						<ListItem
							key={i}
							roundAvatar
							title={u.name}
							avatar={{ uri: u.avatar }}
						/>
					);
				})}
			</Card>
		</ScrollView>
	);
}
