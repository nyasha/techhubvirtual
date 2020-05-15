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

// Custom Actions


// START IMPORT ACTIONS
import PartnerActions from "../redux/actions/PartnerActions";

// END IMPORT ACTIONS

/** APIs

* actionsPartner.create
*	@description CRUD ACTION create
*
* actionsPartner.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsPartner.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/

class PartnerEdit extends Component {
  // Init partner
  constructor(props) {
    super(props);
    this.state = {
      partner: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsPartner.loadPartner(this.props.match.params.id);
    }
    
  }

  // Insert props partner in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      partner: props.partner
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.partner._id) {
      this.props.actionsPartner.savePartner(this.state.partner).then(data => {
        this.props.history.push("/partners/");
      });
    } else {
      this.props.actionsPartner.createPartner(this.state.partner).then(data => {
        this.props.history.push("/partners/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Partner Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="Description"
            label="Description"
            value={this.state.partner.Description || ""}
            onChange={Utils.handleChange.bind(this, "partner")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.partner.Description && this.state.partner.Description === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Email"
            label="Email"
            value={this.state.partner.Email || ""}
            onChange={Utils.handleChange.bind(this, "partner")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.partner.Email && this.state.partner.Email === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Name"
            label="Name"
            value={this.state.partner.Name || ""}
            onChange={Utils.handleChange.bind(this, "partner")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.partner.Name && this.state.partner.Name === ""
              ? { error: true }
              : {})}
          />
          

          {/* Footer */}
          <div className="footer-card">
            <Link to="/partners/">Back to list</Link>

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
    actionsPartner: bindActionCreators(PartnerActions, dispatch),
  };
};

// Validate types
PartnerEdit.propTypes = { 
  actionsPartner: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    partner: state.PartnerEditReducer.partner
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PartnerEdit);
