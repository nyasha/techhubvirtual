// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  startup: {}
};

// Reducer
export default function StartupEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_STARTUP_SUCCESS:
      return { ...state, startup: action.payload };
    case types.UPDATE_STARTUP_SUCCESS:
      return { ...state, startup: action.payload };
    case types.GET_STARTUP_SUCCESS:
      return { ...state, startup: action.payload };
    case types.LIST_STARTUP_SUCCESS:
      return { ...state, listStartup: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}