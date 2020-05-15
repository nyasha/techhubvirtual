/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE FUNCTIONS IN MentorActionsGenerated.js PLEASE EDIT ../MentorActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import MentorApi from "../../../api/MentorApi";

let actionsFunction = {

  //CRUD METHODS

  // Create mentor
  createMentor: function(mentor) {
    return function(dispatch) {
      return MentorApi
        .createMentor(mentor)
        .then(mentor => {
          dispatch(actionsFunction.createMentorSuccess(mentor));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createMentorSuccess: function(mentor) {
    return { type: types.CREATE_MENTOR_SUCCESS, payload: mentor };
  },


  // Delete mentor
  deleteMentor: function(id) {
    return function(dispatch) {
      return MentorApi
        .deleteMentor(id)
        .then(mentor => {
          dispatch(actionsFunction.deleteMentorSuccess(mentor));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteMentorSuccess: function(mentor) {
    return { type: types.DELETE_MENTOR_SUCCESS, payload: mentor };
  },


  // Get mentor
  loadMentor: function(id) {
    return function(dispatch) {
      return MentorApi
        .getOneMentor(id)
        .then(mentor => {
          dispatch(actionsFunction.loadMentorSuccess(mentor));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadMentorSuccess: function(mentor) {
    return { type: types.GET_MENTOR_SUCCESS, payload: mentor };
  },

  // Load  list
  loadMentorList: function() {
    return function(dispatch) {
      return MentorApi
        .getMentorList()
        .then(list => {
          dispatch(actionsFunction.loadMentorListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadMentorListSuccess: function(list) {
    return { type: types.LIST_MENTOR_SUCCESS, payload: list };
  },

	
  // Save mentor
  saveMentor: function(mentor) {
    return function(dispatch) {
      return MentorApi
        .saveMentor(mentor)
        .then(mentor => {
          dispatch(actionsFunction.saveMentorSuccess(mentor));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveMentorSuccess: function(mentor) {
    return { type: types.UPDATE_MENTOR_SUCCESS, payload: mentor };
  },


};

export default actionsFunction;
