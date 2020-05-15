import { combineReducers } from "redux";

// START IMPORT REDUCERS
import FreelancerEditReducer from "./FreelancerEditReducer";
import FreelancerListReducer from "./FreelancerListReducer";
import HomeReducer from "./HomeReducer";
import InvestorEditReducer from "./InvestorEditReducer";
import InvestorListReducer from "./InvestorListReducer";
import MentorEditReducer from "./MentorEditReducer";
import MentorListReducer from "./MentorListReducer";
import PartnerEditReducer from "./PartnerEditReducer";
import PartnerListReducer from "./PartnerListReducer";
import StartupEditReducer from "./StartupEditReducer";
import StartupListReducer from "./StartupListReducer";

// END IMPORT REDUCERS


// CUSTOM REDUCERS
import LoginReducer from "./LoginReducer";
import ProfileReducer from "./ProfileReducer";
import UserEditReducer from "./UserEditReducer";
import UserListReducer from "./UserListReducer";

const rootReducer = combineReducers({
  
  // INSERT HERE YOUR CUSTOM REDUCERS
  LoginReducer,
  ProfileReducer,
  UserEditReducer,
  UserListReducer,

  // START COMBINE REDUCERS
	FreelancerEditReducer,
	FreelancerListReducer,
	HomeReducer,
	InvestorEditReducer,
	InvestorListReducer,
	MentorEditReducer,
	MentorListReducer,
	PartnerEditReducer,
	PartnerListReducer,
	StartupEditReducer,
	StartupListReducer,
 // END COMBINE REDUCERS

});

export default rootReducer;
