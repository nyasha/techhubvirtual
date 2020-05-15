import StartupModelGenerated from "./generated/StartupModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = StartupModelGenerated.init();
  
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
      return await StartupModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...StartupModelGenerated,
  ...customModel
};
