// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  partner: {}
};

// Reducer
export default function PartnerEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_PARTNER_SUCCESS:
      return { ...state, partner: action.payload };
    case types.UPDATE_PARTNER_SUCCESS:
      return { ...state, partner: action.payload };
    case types.GET_PARTNER_SUCCESS:
      return { ...state, partner: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}