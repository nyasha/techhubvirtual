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
import InvestorActions from "../redux/actions/InvestorActions";

// END IMPORT ACTIONS

/** APIs

* actionsInvestor.create
*	@description CRUD ACTION create
*
* actionsInvestor.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsInvestor.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/

class InvestorEdit extends Component {
  // Init investor
  constructor(props) {
    super(props);
    this.state = {
      investor: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsInvestor.loadInvestor(this.props.match.params.id);
    }
    
  }

  // Insert props investor in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      investor: props.investor
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.investor._id) {
      this.props.actionsInvestor.saveInvestor(this.state.investor).then(data => {
        this.props.history.push("/investors/");
      });
    } else {
      this.props.actionsInvestor.createInvestor(this.state.investor).then(data => {
        this.props.history.push("/investors/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Investor Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="Cell"
            label="Cell"
            value={this.state.investor.Cell || ""}
            onChange={Utils.handleChange.bind(this, "investor")}
            type="number"
            margin="normal"
            fullWidth
            required
            {...(!this.state.investor.Cell && this.state.investor.Cell === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Email"
            label="Email"
            value={this.state.investor.Email || ""}
            onChange={Utils.handleChange.bind(this, "investor")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.investor.Email && this.state.investor.Email === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Name"
            label="Name"
            value={this.state.investor.Name || ""}
            onChange={Utils.handleChange.bind(this, "investor")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.investor.Name && this.state.investor.Name === ""
              ? { error: true }
              : {})}
          />
          

          {/* Footer */}
          <div className="footer-card">
            <Link to="/investors/">Back to list</Link>

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
    actionsInvestor: bindActionCreators(InvestorActions, dispatch),
  };
};

// Validate types
InvestorEdit.propTypes = { 
  actionsInvestor: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    investor: state.InvestorEditReducer.investor
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InvestorEdit);
