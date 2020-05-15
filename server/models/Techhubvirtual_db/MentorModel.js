import MentorModelGenerated from "./generated/MentorModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = MentorModelGenerated.init();
  
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
      return await MentorModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...MentorModelGenerated,
  ...customModel
};
