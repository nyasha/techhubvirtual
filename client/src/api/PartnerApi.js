import PartnerApiGenerated from "./generated/PartnerApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class PartnerApi extends PartnerApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Partner List
  static getPartnerList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/partners")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default PartnerApi;