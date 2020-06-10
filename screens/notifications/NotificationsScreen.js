import React from 'react';
import {
    StyleSheet, 
    Text, 
    View,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Button } from 'react-native';


 const NotificationsScreen = () =>{
    return (
        <View style={styles.container}>
            <Text>Notifications Screen</Text>
            <Button
              title="Click Here"
              onPress={() => alert('Button Clicked!')}
            />
          </View>
        );
      };

export default NotificationsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});