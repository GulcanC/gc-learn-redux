import ActionTypes from "../actionTypes";

const initialState = 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.count.INCREMENT_NUMBER:
      return state + action.payload;
    case ActionTypes.count.DECREMENT_NUMBER:
      return state - action.payload;
    default:
      return state;
  }
};

export default counterReducer;
