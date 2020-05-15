import PartnerModelGenerated from "./generated/PartnerModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = PartnerModelGenerated.init();
  
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
      return await PartnerModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...PartnerModelGenerated,
  ...customModel
};
