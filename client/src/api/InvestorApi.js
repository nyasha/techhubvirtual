import InvestorApiGenerated from "./generated/InvestorApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class InvestorApi extends InvestorApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Investor List
  static getInvestorList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/investors")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default InvestorApi;