// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function MentorListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_MENTOR_SUCCESS:
      return { ...state, mentor: action.payload };
    case types.LIST_MENTOR_SUCCESS:
      return { ...state, listMentor: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}