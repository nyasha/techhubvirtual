import actionsFunction from "./generated/InvestorActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import InvestorApi from "../../api/InvestorApi";
 
 actionsFunction.loadInvestorList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return InvestorApi
     .getInvestorList()
     .then(list => {
       dispatch(actionsFunction.loadInvestorSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
