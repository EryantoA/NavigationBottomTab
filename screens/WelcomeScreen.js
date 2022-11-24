import {Button, StyleSheet, Text, View} from 'react-native';

import * as React from 'react';

function WelcomeScreen({navigation}) {
  function openDrawerHandler() {
    navigation.toggleDrawer();
  }
  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"Welcome"</Text> screen!
      </Text>
      <Button title="Open Drawer" onPress={openDrawerHandler} />
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#eb1064',
  },
});
