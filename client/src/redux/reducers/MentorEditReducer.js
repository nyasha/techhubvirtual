// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  mentor: {}
};

// Reducer
export default function MentorEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_MENTOR_SUCCESS:
      return { ...state, mentor: action.payload };
    case types.UPDATE_MENTOR_SUCCESS:
      return { ...state, mentor: action.payload };
    case types.GET_MENTOR_SUCCESS:
      return { ...state, mentor: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}