import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class number extends Component {
  handlerPress(e) {
    this.props.onPressHandler();
  }

  render() {
    return (
      <TouchableHighlight
        style={[styles.styleButton, {backgroundColor: this.props.bgColor}]}
        activeOpacity={1}
        animationVelocity={0}
        underlayColor={'#c0c0c0'}
        onPress={(e) => this.handlerPress(e)}
        >
        <Text style={styles.styleText}>
          {this.props.btnName}
        </Text>
      </TouchableHighlight>
    );
  }
}

var styles = StyleSheet.create({
  styleButton: {
    padding: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: .5,
    borderColor: '#3B3738',
  },
  styleText: {
    color: '#606060',
    fontSize:25,
  },
});

export default number;
