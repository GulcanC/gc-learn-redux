import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Actions from "../redux/actions";

const ColorComponent = () => {
  const color = useSelector((state) => state.colorReducer);
  const dispatch = useDispatch();
  return (
    <>
      <div className="main" style={color}>
        <h1 className="main-title">CHANGE COLOR</h1>
        <div className="button-container">
          <button
            className="button"
            onClick={() => dispatch(Actions.colorAction.green_color())}
          >
            Green Color
          </button>
          <button
            className="button"
            onClick={() => dispatch(Actions.colorAction.blue_color())}
          >
            Blue Color
          </button>
        </div>
      </div>
    </>
  );
};

export default ColorComponent;
