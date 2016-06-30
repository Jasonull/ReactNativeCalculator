import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

const valueHash = {
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
  '8': '8',
  '9': '9',
  '0': '0',
  '.': '.'
};

class number extends Component {
  constructor(props) {
    super();
    this.state = {
      value: valueHash[props.btnName]
    };
  }

  handlerPress(e) {
    this.props.onPressHandler({
      value: this.state.value
    });
  }

  render() {
    return (
      <TouchableHighlight
        style={styles.styleButton}
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
    borderColor: '#3B3738'
  },
  styleText: {
    color: '#606060',
    fontSize:25,
  },
});

export default number;
