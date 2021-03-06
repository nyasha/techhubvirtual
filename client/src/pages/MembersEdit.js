/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5ea9983b82f82d390e78048a
*
* You will get 10% discount for each one of your friends
* 
*/
// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Chip from "@material-ui/core/Chip";
import Input from "@material-ui/core/Input";

// Custom Actions


// START IMPORT ACTIONS
import MembersActions from "../redux/actions/MembersActions";

// END IMPORT ACTIONS

/** APIs

* actionsUser.list
*	@description CRUD ACTION list
*
* actionsMembers.create
*	@description CRUD ACTION create
*	@param Members obj - Object to insert
*
* actionsMembers.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id Members
*	@returns Members
*
* actionsMembers.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id Members
*	@returns Members
*

**/

class MembersEdit extends Component {
  // Init members
  constructor(props) {
    super(props);
    this.state = {
      members: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsMembers.loadMembers(this.props.match.params.id);
    }
    
    this.props.actionsUser.loadUserList();
  }

  // Insert props members in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      members: props.members
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.members._id) {
      this.props.actionsMembers.saveMembers(this.state.members).then(data => {
        this.props.history.push("/");
      });
    } else {
      this.props.actionsMembers.createMembers(this.state.members).then(data => {
        this.props.history.push("/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Members Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="Name"
            label="Name"
            value={this.state.members.Name || ""}
            onChange={Utils.handleChange.bind(this, "members")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="PhoneNumber"
            label="PhoneNumber"
            value={this.state.members.PhoneNumber || ""}
            onChange={Utils.handleChange.bind(this, "members")}
            type="number"
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="Type"
            label="Type"
            value={this.state.members.Type || ""}
            onChange={Utils.handleChange.bind(this, "members")}
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation m:m Typeofmember with User */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel htmlFor="Typeofmember">Typeofmember</InputLabel>
            <Select
              multiple
              value={this.state.members.Typeofmember || []}
              onChange={Utils.handleChangeSelect.bind(this, "members")}
              input={<Input id="Typeofmember" name="Typeofmember" />}
              renderValue={selected => (
                <div>
                  {selected.map(value => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              {this.props.listUser && this.props.listUser.map(item => (
                <MenuItem
                  key={item._id}
                  value={item._id}
                  style={{
                    fontWeight:
                      this.state.members.Typeofmember &&
                      this.state.members.Typeofmember.indexOf(item._id) === -1
                        ? "regular"
                        : "bold"
                  }}
                >
                  {item._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsMembers: bindActionCreators(MembersActions, dispatch),
  };
};

// Validate types
MembersEdit.propTypes = { 
  actionsMembers: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    members: state.MembersEditReducer.members,
    listUser: state.MembersEditReducer.listUser
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MembersEdit);
