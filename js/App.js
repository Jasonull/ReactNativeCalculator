import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as ClickActions from './actions';
import NumberButton from './button/number';
import SymbolButton from './button/symbol'

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class App extends Component {
  generateExpression(first, firstSymbol, process, second, secondSymbol) {
    let ret = '';
    ret += firstSymbol;
    for (var i = 0; i < first.length; i++) {
     ret += first[i];
    }
    ret += process;
    ret += secondSymbol;
    for (var i = 0; i < second.length; i++) {
      ret += second[i];
    }
    return ret;
  }

  render() {
    const { items, onNumber, onChangeSymbol, onPercent, onAdd, onSubstract, onMultiply, onDivide, onClear, onEqual} = this.props;

    var olderYoungerCanPress = false;

    var first = items.calc.first;
    var firstSymbol = items.calc.firstSymbol;
    var second = items.calc.second;
    var secondSymbol = items.calc.secondSymbol;
    var process = items.calc.process;
    var result = items.calc.result;

    return (
      <View style={styles.container}>
        <View style={styles.displayPanel}>
          <View style={styles.diplayProcess}>
            <Text style={styles.diplayProcessText}>
              {this.generateExpression(first, firstSymbol, process, second, secondSymbol)}
            </Text>
          </View>
          <View style={styles.diplayResult}>
            <Text style={styles.diplayResultText}>{result}</Text>
          </View>
        </View>
        <View style={styles.buttonGroup}>
          <View style={styles.buttonGroupRow}>
            <SymbolButton btnName='AC' bgColor='#DEDEDE' onPressHandler={onClear}/>
            <SymbolButton btnName="+/-" bgColor='#DEDEDE' onPressHandler={onChangeSymbol}/>
            <SymbolButton btnName='%' bgColor='#DEDEDE' onPressHandler={onPercent}/>
            <SymbolButton btnName='÷' bgColor='#FF9900' onPressHandler={onDivide}/>
          </View>
          <View style={styles.buttonGroupRow}>
            <NumberButton btnName="7" onPressHandler={onNumber}/>
            <NumberButton btnName="8" onPressHandler={onNumber}/>
            <NumberButton btnName="9" onPressHandler={onNumber}/>
            <SymbolButton btnName='×' bgColor='#FF9900' onPressHandler={onMultiply}/>
          </View>
          <View style={styles.buttonGroupRow}>
            <NumberButton btnName="4" onPressHandler={onNumber}/>
            <NumberButton btnName="5" onPressHandler={onNumber}/>
            <NumberButton btnName="6" onPressHandler={onNumber}/>
            <SymbolButton btnName='-' bgColor='#FF9900' onPressHandler={onSubstract}/>
          </View>
          <View style={styles.buttonGroupRow}>
            <NumberButton btnName="1" onPressHandler={onNumber}/>
            <NumberButton btnName="2" onPressHandler={onNumber}/>
            <NumberButton btnName="3" onPressHandler={onNumber}/>
            <SymbolButton btnName='+' bgColor='#FF9900' onPressHandler={onAdd}/>
          </View>
          <View style={styles.buttonGroupRow}>
            <View style={styles.buttonGroupRow}>
              <NumberButton btnName="0" onPressHandler={onNumber}/>
            </View>
            <View style={styles.buttonGroupRow}>
              <NumberButton btnName="." onPressHandler={onNumber}/>
              <SymbolButton btnName='=' bgColor='#FF9900' onPressHandler={onEqual}/>
            </View>
          </View>
        </View>
      </View>
    );
  };
};

function mapStateToProps(state) {
  return {
    items: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ClickActions, dispatch)
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  displayPanel: {
    flex: 1,
    backgroundColor: '#101010'
  },
  buttonGroup: {
    flex: 2.5
  },
  buttonGroupRow: {
    flex: 1,
    flexDirection: 'row'
  },
  diplayProcess: {
    flex: 2,
    padding: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  diplayResult: {
    flex: 1,
    padding: 30,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  diplayProcessText: {
    color: 'white',
    fontSize: 20
  },
  diplayResultText: {
    color: 'white',
    fontSize: 40
  }
});

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(App);
