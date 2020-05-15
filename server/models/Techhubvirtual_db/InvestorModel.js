import InvestorModelGenerated from "./generated/InvestorModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = InvestorModelGenerated.init();
  
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
      return await InvestorModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...InvestorModelGenerated,
  ...customModel
};
