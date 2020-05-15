import actionsFunction from "./generated/FreelancerActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import FreelancerApi from "../../api/FreelancerApi";
 
 actionsFunction.loadFreelancerList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return FreelancerApi
     .getFreelancerList()
     .then(list => {
       dispatch(actionsFunction.loadFreelancerSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
