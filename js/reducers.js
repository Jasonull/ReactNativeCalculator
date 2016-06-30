import { combineReducers } from 'redux';
import { NUMBER, CHANGE_SYMBOL, PERCENT, ADD, SUBSTRACT, MULTIPLY, DIVIDE, EQUAL, CLEAR } from './actions';

function calc (state = { first: [], firstSymbol: '', second: [], secondSymbol: '', process: '', result: 0 }, action) {
  let tmpProcess = null;
  switch (action.type) {
    case NUMBER:
      if (state.process.length == 0) {
        state.first.push(action.item.value);
      } else {
        state.second.push(action.item.value);
      }
      return { first: state.first, firstSymbol: state.firstSymbol, second: state.second, secondSymbol: state.secondSymbol, process: state.process, result: state.result };

    case CHANGE_SYMBOL:
      if (state.process.length == 0) {
        if (state.first.length == 0) {
          if (state.result < 0) {
            state.firstSymbol = '-';
            state.first.push(-state.result);
          } else if (state.result > 0) {
            state.first.push(state.result);
          }
        }

        if (state.firstSymbol == '-') {
          state.firstSymbol = '';
        } else {
          state.firstSymbol = '-';
        }
      } else {
        if (state.secondSymbol == '-') {
          state.secondSymbol = '';
        } else {
          state.secondSymbol = '-';
        }
      }
      return { first: state.first, firstSymbol: state.firstSymbol, second: state.second, secondSymbol: state.secondSymbol, process: state.process, result: state.result };

    case PERCENT:
      if (state.process.length == 0) {
        if (state.first.length == 0) {
          if (state.result < 0) {
            state.firstSymbol = '-';
            state.first.push(-state.result);
          } else if (state.result > 0) {
            state.first.push(state.result);
          }
        }
        if (state.first.length > 0) {
          let firstValue = '';
          for (var i = 0;i < state.first.length; i++) {
            firstValue += state.first[i];
          }
          firstValue = Number(firstValue) / 100;
          state.first = [ String(firstValue) ];
        }
      } else {
        if (state.second.length > 0) {
          let secondValue = '';
          for (var i = 0;i < state.second.length; i++) {
            secondValue += state.second[i];
          }
          secondValue = Number(secondValue) / 100;
          state.second = [ String(secondValue) ];
        }
      }
      return { first: state.first, firstSymbol: state.firstSymbol, second: state.second, secondSymbol: state.secondSymbol, process: state.process, result: state.result };

    case ADD:
      if (tmpProcess == null) {
        tmpProcess = '+';
      }
    case SUBSTRACT:
      if (tmpProcess == null) {
        tmpProcess = '-';
      }
    case MULTIPLY:
      if (tmpProcess == null) {
        tmpProcess = '×';
      }
    case DIVIDE:
      if (tmpProcess == null) {
        tmpProcess = '÷';
      }

      if (state.first.length > 0) {
        if (state.second.length == 0) {
          state.process = tmpProcess;
        }
      } else {
        if (state.result < 0) {
          state.firstSymbol = '-';
          state.first.push(-state.result);
          state.process = tmpProcess;
        } else if (state.result > 0) {
          state.first.push(state.result);
          state.process = tmpProcess;
        }
      }
      tmpProcess = null;
      return { first: state.first, firstSymbol: state.firstSymbol, second: state.second, secondSymbol: state.secondSymbol, process: state.process, result: state.result };

    case EQUAL:
      if (state.first.length > 0) {
        let firstValue = '';
        for (var i = 0;i < state.first.length; i++) {
          firstValue += state.firstSymbol;
          firstValue += state.first[i];
        }
        firstValue = Number(firstValue)

        if (state.second.length > 0) {
          let secondValue = '';
          for (var i = 0;i < state.second.length; i++) {
            secondValue += state.secondSymbol;
            secondValue += state.second[i];
          }
          secondValue = Number(secondValue)

          switch (state.process) {
            case '+':
              state.result = firstValue + secondValue;
              break;
            case '-':
              state.result = firstValue - secondValue;
              break;
            case '×':
              state.result = firstValue * secondValue;
              break;
            case '÷':
              state.result = firstValue / secondValue;
              break;
          }
        } else {
          state.result = firstValue;
        }
        state.first = [];
        state.firstSymbol = '';
        state.process = '';
        state.second = []
        state.secondSymbol = '';
      }
      return { first: state.first, firstSymbol: state.firstSymbol, second: state.second, secondSymbol: state.secondSymbol, process: state.process, result: state.result };

    case CLEAR:
      state.first = [];
      state.firstSymbol = '';
      state.process = '';
      state.second = [];
      state.secondSymbol = '';
      state.result = 0;
      return { first: state.first, firstSymbol: state.firstSymbol, second: state.second, secondSymbol: state.secondSymbol, process: state.process, result: state.result };

    default:
      return state;
  }
};

const calculate = combineReducers({
  calc
});

export default calculate;
