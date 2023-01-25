import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Actions from "../redux/actions";

const CounterComponent = () => {
  const count = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <div className="main">
      <div className="button-container">
        <button
          className="button"
          onClick={() => dispatch(Actions.numberAction.incrementNumber(5))}
        >
          Increment
        </button>
        <button
          className="button"
          onClick={() => dispatch(Actions.numberAction.decrementNumber(5))}
        >
          Decrement
        </button>
      </div>
      <p className="button-text">{count}</p>
    </div>
  );
};

export default CounterComponent;
