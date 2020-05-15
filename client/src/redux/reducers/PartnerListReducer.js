// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function PartnerListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_PARTNER_SUCCESS:
      return { ...state, partner: action.payload };
    case types.LIST_PARTNER_SUCCESS:
      return { ...state, listPartner: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}