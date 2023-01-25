import ActionTypes from "../actionTypes";

const initialState = {
  color: "white",
  background: "brown",
  paddingTop: "2rem",
};
const greenColor = {
  color: "#3A5F0B",
  background: "#54C571",
  paddingTop: "2rem",
};
const blueColor = { color: "blue", background: "#43BFC7", paddingTop: "2rem" };

const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.color.GREEN_COLOR:
      return greenColor;
    case ActionTypes.color.BLUE_COLOR:
      return blueColor;
    default:
      return state;
  }
};

export default colorReducer;
