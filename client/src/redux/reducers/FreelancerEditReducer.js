// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  freelancer: {}
};

// Reducer
export default function FreelancerEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_FREELANCER_SUCCESS:
      return { ...state, freelancer: action.payload };
    case types.UPDATE_FREELANCER_SUCCESS:
      return { ...state, freelancer: action.payload };
    case types.GET_FREELANCER_SUCCESS:
      return { ...state, freelancer: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}