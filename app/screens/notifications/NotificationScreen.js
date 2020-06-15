import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const NotificationScreen = () => {
	return (
		<View style={styles.container}>
			<Text>Pantala de Notificasiones</Text>
			<Button title="Click Here" onPress={() => alert('Button Clicked!')} />
		</View>
	);
};

export default NotificationScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
