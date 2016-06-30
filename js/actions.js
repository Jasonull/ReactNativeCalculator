export const NUMBER = 'NUMBER';
export const ADD = 'ADD';
export const SUBSTRACT = 'SUBSTRACT';
export const MULTIPLY = 'MULTIPLY';
export const DIVIDE = 'DIVIDE';
export const EQUAL = 'EQUAL';
export const CLEAR = 'CLEAR';
export const CHANGE_SYMBOL = 'CHANGE_SYMBOL';
export const PERCENT = 'PERCENT';

export function onNumber(num) {
  return {
    type: NUMBER,
    item: num
  };
};

export function onChangeSymbol() {
  return {
    type: CHANGE_SYMBOL
  };
};

export function onPercent() {
  return {
    type: PERCENT
  };
};

export function onAdd() {
  return {
    type: ADD
  };
};

export function onSubstract() {
  return {
    type: SUBSTRACT
  };
}

export function onMultiply() {
  return {
    type: MULTIPLY
  };
}

export function onDivide() {
  return {
    type: DIVIDE
  };
};

export function onEqual() {
  return {
    type: EQUAL
  };
};

export function onClear() {
  return {
    type: CLEAR
  };
}
