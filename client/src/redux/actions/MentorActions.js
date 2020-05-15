import actionsFunction from "./generated/MentorActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import MentorApi from "../../api/MentorApi";
 
 actionsFunction.loadMentorList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return MentorApi
     .getMentorList()
     .then(list => {
       dispatch(actionsFunction.loadMentorSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
