import MentorApiGenerated from "./generated/MentorApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class MentorApi extends MentorApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Mentor List
  static getMentorList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/mentors")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default MentorApi;