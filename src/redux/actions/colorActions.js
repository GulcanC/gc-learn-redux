import ActionTypes from "../actionTypes";

const green_color = (value) => {
  return {
    type: ActionTypes.color.GREEN_COLOR,
    payload: value,
  };
};

const blue_color = (value) => {
  return {
    type: ActionTypes.color.BLUE_COLOR,
    payload: value,
  };
};

const colorAction = { green_color, blue_color };
export default colorAction;
