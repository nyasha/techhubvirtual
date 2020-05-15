// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function InvestorListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_INVESTOR_SUCCESS:
      return { ...state, investor: action.payload };
    case types.LIST_INVESTOR_SUCCESS:
      return { ...state, listInvestor: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}