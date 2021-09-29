import React, { useReducer } from "react";
import createDataContext from "./createDataContext";


const scheduleLineReducer = (state, action) => {
  switch (action.type) {
    case "addNavHeight":
      return { ...state, navBarHeight: action.payload };
    
    default:
      return state;
  }
};

const AddNavBarAction = dispatch => async totalCount => {
  dispatch({
    type: "addCount",
    payload: totalCount
  });
};


const intialState = { height: 0 };
export const { Provider, Context } = createDataContext(
  scheduleLineReducer,
  { loadScheduleLineData, AddCountAction },
  intialState
);
