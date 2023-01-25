import ActionTypes from "../actionTypes";

const incrementNumber = (value) => {
  return { type: ActionTypes.count.INCREMENT_NUMBER, payload: value };
};

const decrementNumber = (value) => {
  return { type: ActionTypes.count.DECREMENT_NUMBER, payload: value };
};

const numberAction = { incrementNumber, decrementNumber };
export default numberAction;
