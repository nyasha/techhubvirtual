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
 *  TO CUSTOMIZE FUNCTIONS IN InvestorActionsGenerated.js PLEASE EDIT ../InvestorActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import InvestorApi from "../../../api/InvestorApi";

let actionsFunction = {

  //CRUD METHODS

  // Create investor
  createInvestor: function(investor) {
    return function(dispatch) {
      return InvestorApi
        .createInvestor(investor)
        .then(investor => {
          dispatch(actionsFunction.createInvestorSuccess(investor));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createInvestorSuccess: function(investor) {
    return { type: types.CREATE_INVESTOR_SUCCESS, payload: investor };
  },


  // Delete investor
  deleteInvestor: function(id) {
    return function(dispatch) {
      return InvestorApi
        .deleteInvestor(id)
        .then(investor => {
          dispatch(actionsFunction.deleteInvestorSuccess(investor));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteInvestorSuccess: function(investor) {
    return { type: types.DELETE_INVESTOR_SUCCESS, payload: investor };
  },


  // Get investor
  loadInvestor: function(id) {
    return function(dispatch) {
      return InvestorApi
        .getOneInvestor(id)
        .then(investor => {
          dispatch(actionsFunction.loadInvestorSuccess(investor));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadInvestorSuccess: function(investor) {
    return { type: types.GET_INVESTOR_SUCCESS, payload: investor };
  },

  // Load  list
  loadInvestorList: function() {
    return function(dispatch) {
      return InvestorApi
        .getInvestorList()
        .then(list => {
          dispatch(actionsFunction.loadInvestorListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadInvestorListSuccess: function(list) {
    return { type: types.LIST_INVESTOR_SUCCESS, payload: list };
  },

	
  // Save investor
  saveInvestor: function(investor) {
    return function(dispatch) {
      return InvestorApi
        .saveInvestor(investor)
        .then(investor => {
          dispatch(actionsFunction.saveInvestorSuccess(investor));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveInvestorSuccess: function(investor) {
    return { type: types.UPDATE_INVESTOR_SUCCESS, payload: investor };
  },


};

export default actionsFunction;
