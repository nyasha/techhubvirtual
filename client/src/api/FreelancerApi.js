import FreelancerApiGenerated from "./generated/FreelancerApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class FreelancerApi extends FreelancerApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Freelancer List
  static getFreelancerList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/freelancers")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default FreelancerApi;