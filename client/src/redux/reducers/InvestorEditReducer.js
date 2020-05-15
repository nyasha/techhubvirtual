// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  investor: {}
};

// Reducer
export default function InvestorEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_INVESTOR_SUCCESS:
      return { ...state, investor: action.payload };
    case types.UPDATE_INVESTOR_SUCCESS:
      return { ...state, investor: action.payload };
    case types.GET_INVESTOR_SUCCESS:
      return { ...state, investor: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}