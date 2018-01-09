const React = require('react');
const { Component } = require('react');
const { View, Text, Button } = require('react-native');

const Navigation = require('react-native-navigation');
const testIDs = require('../testIDs');

class OrientationSelectScreen extends Component {

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.h1}>{`Orientation Menu`}</Text>
        <Button title="default" testID={testIDs.DEFAULT_ORIENTATION_BUTTON} onPress={() => this.onClickOrientationScreen('default')} />
        <Button title="landscape and portrait" testID={testIDs.LANDSCAPE_PORTRAIT_ORIENTATION_BUTTON} onPress={() => this.onClickOrientationScreen(['landscape', 'portrait'])} />
        <Button title="portrait only" testID={testIDs.PORTRAIT_ORIENTATION_BUTTON} onPress={() => this.onClickOrientationScreen('portrait')} />
        <Button title="landscape only" testID={testIDs.LANDSCAPE_ORIENTATION_BUTTON} onPress={() => this.onClickOrientationScreen(['landscape'])} />
      </View>
    );
  }

  onClickOrientationScreen(orientation) {
    Navigation.showModal({
      container: {
        name: 'navigation.playground.OrientationDetectScreen',
        passProps: {
          orientation
        }
      }
    });
  }
}

module.exports = OrientationSelectScreen;

const styles = {
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  h1: {
    fontSize: 24,
    textAlign: 'center',
    margin: 30
  },
  footer: {
    fontSize: 10,
    color: '#888',
    marginTop: 10
  }
};