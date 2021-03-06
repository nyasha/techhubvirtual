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
 *  TO CUSTOMIZE APIS IN FreelancerApiGenerated.js PLEASE EDIT ../FreelancerApi.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 
// Dependencies
import axios from "axios";
import { properties } from "../../config/properties";

class FreelancerApiGenerated {

  static contextUrl = properties.endpoint + "/freelancer";

  // CRUD METHODS

  /**
  * FreelancerService.create
  *   @description CRUD ACTION create
  *
  */
  static createFreelancer(freelancer) {
    return axios.post(FreelancerApiGenerated.contextUrl, freelancer )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * FreelancerService.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  static deleteFreelancer(id) {
    return axios.delete(FreelancerApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * FreelancerService.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  static getOneFreelancer(id) {
    return axios.get(FreelancerApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * FreelancerService.list
  *   @description CRUD ACTION list
  *
  */
  static getFreelancerList() {
    return axios.get(FreelancerApiGenerated.contextUrl)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * FreelancerService.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  static saveFreelancer(freelancer) {
    return axios.post(FreelancerApiGenerated.contextUrl + "/" + freelancer._id, freelancer )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }



    // Custom APIs
}

export default FreelancerApiGenerated;
