// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function FreelancerListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_FREELANCER_SUCCESS:
      return { ...state, freelancer: action.payload };
    case types.LIST_FREELANCER_SUCCESS:
      return { ...state, listFreelancer: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}