import React from 'react';
import {
    StyleSheet, 
    Text, 
    View,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Button } from 'react-native';

const ChatScreen = ({navigation}) =>{
    return (
      <View style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Chat Screen</Text>
        <Button
          title="Go to details screen...again"
          onPress={() => navigation.push("Details")}
        />
        <Button
          title="Go to home"
          onPress={() => navigation.navigate("Home")}
        />
        <Button
          title="Go back"
          onPress={() => navigation.goBack()}
        />
        <Button
          title="Go to the firts screen"
          onPress={() => navigation.popToTop()}
        />
      </View>
    );
  };

  export default ChatScreen;

  const styles = StyleSheet.create({
      container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
      },
  });