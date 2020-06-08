import React from 'react';
import {
    StyleSheet, 
    Text, 
    View,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Button } from 'react-native';


 const ExploreScreen = () =>{
    return (
        <View style={styles.container}>
            <Text>Settings Screen</Text>
            <Button
              title="Click Here"
              onPress={() => alert('Button Clicked!')}
            />
          </View>
        );
      };

export default ExploreScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});