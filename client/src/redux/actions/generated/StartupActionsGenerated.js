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
 *  TO CUSTOMIZE FUNCTIONS IN StartupActionsGenerated.js PLEASE EDIT ../StartupActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import StartupApi from "../../../api/StartupApi";

let actionsFunction = {

  //CRUD METHODS

  // Create startup
  createStartup: function(startup) {
    return function(dispatch) {
      return StartupApi
        .createStartup(startup)
        .then(startup => {
          dispatch(actionsFunction.createStartupSuccess(startup));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createStartupSuccess: function(startup) {
    return { type: types.CREATE_STARTUP_SUCCESS, payload: startup };
  },


  // Delete startup
  deleteStartup: function(id) {
    return function(dispatch) {
      return StartupApi
        .deleteStartup(id)
        .then(startup => {
          dispatch(actionsFunction.deleteStartupSuccess(startup));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteStartupSuccess: function(startup) {
    return { type: types.DELETE_STARTUP_SUCCESS, payload: startup };
  },


  // Get startup
  loadStartup: function(id) {
    return function(dispatch) {
      return StartupApi
        .getOneStartup(id)
        .then(startup => {
          dispatch(actionsFunction.loadStartupSuccess(startup));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadStartupSuccess: function(startup) {
    return { type: types.GET_STARTUP_SUCCESS, payload: startup };
  },

  // Load  list
  loadStartupList: function() {
    return function(dispatch) {
      return StartupApi
        .getStartupList()
        .then(list => {
          dispatch(actionsFunction.loadStartupListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadStartupListSuccess: function(list) {
    return { type: types.LIST_STARTUP_SUCCESS, payload: list };
  },

	
  // Save startup
  saveStartup: function(startup) {
    return function(dispatch) {
      return StartupApi
        .saveStartup(startup)
        .then(startup => {
          dispatch(actionsFunction.saveStartupSuccess(startup));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveStartupSuccess: function(startup) {
    return { type: types.UPDATE_STARTUP_SUCCESS, payload: startup };
  },


};

export default actionsFunction;