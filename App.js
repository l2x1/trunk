import React from 'react';

import {
  AppRegistry, Image, View, TouchableOpacity, Alert, StyleSheet, Text,
} from 'react-native';

const fond = 'https://images.pexels.com/photos/1212487/pexels-photo-1212487.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500';

const styles = StyleSheet.create({

  container: {
    paddingTop:380,

    flex: 1,
    horizontalAlign:'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin:30
  },

  button: {
    backgroundColor: 'lightblue',
    padding: 30
  },
  buttonText: {
    color: 'white',
    alignItems: 'center'
  },
});

export default class BackgroundImage extends React.Component {

  render() {
    const resizeMode = 'cover';

    return (
      <View style={{ flex: 1 }}>
        <View style={{
          position: 'absolute', top: 0, left: 0,width:'100%',height:'100%'}}
        >
          <Image style={{ flex: 1, resizeMode: 'cover' }} source={{ uri: fond }} />

        </View>
        <View style={styles.container}>
          <TouchableOpacity >
              <View style={styles.button}>
                <Text style={styles.buttonText}> Galerie </Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity >
              <View style={styles.button}>
                <Text style={styles.buttonText}>Camera</Text>
              </View>
          </TouchableOpacity>
        </View>
    </View>


    );
  }
}
AppRegistry.registerComponent('BackgroundImage', () => BackgroundImage);
