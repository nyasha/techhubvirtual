// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function StartupListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_STARTUP_SUCCESS:
      return { ...state, startup: action.payload };
    case types.LIST_STARTUP_SUCCESS:
      return { ...state, listStartup: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}