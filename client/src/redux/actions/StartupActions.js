import actionsFunction from "./generated/StartupActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import StartupApi from "../../api/StartupApi";
 
 actionsFunction.loadStartupList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return StartupApi
     .getStartupList()
     .then(list => {
       dispatch(actionsFunction.loadStartupSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
