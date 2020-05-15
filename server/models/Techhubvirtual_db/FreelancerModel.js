import FreelancerModelGenerated from "./generated/FreelancerModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = FreelancerModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await FreelancerModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...FreelancerModelGenerated,
  ...customModel
};
