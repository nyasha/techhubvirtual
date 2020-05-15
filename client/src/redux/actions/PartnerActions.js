import actionsFunction from "./generated/PartnerActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import PartnerApi from "../../api/PartnerApi";
 
 actionsFunction.loadPartnerList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return PartnerApi
     .getPartnerList()
     .then(list => {
       dispatch(actionsFunction.loadPartnerSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
