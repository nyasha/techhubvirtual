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
import FreelancerActions from "../redux/actions/FreelancerActions";

// END IMPORT ACTIONS

/** APIs

* actionsFreelancer.create
*	@description CRUD ACTION create
*
* actionsFreelancer.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsFreelancer.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/

class FreelancerEdit extends Component {
  // Init freelancer
  constructor(props) {
    super(props);
    this.state = {
      freelancer: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsFreelancer.loadFreelancer(this.props.match.params.id);
    }
    
  }

  // Insert props freelancer in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      freelancer: props.freelancer
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.freelancer._id) {
      this.props.actionsFreelancer.saveFreelancer(this.state.freelancer).then(data => {
        this.props.history.push("/freelancers/");
      });
    } else {
      this.props.actionsFreelancer.createFreelancer(this.state.freelancer).then(data => {
        this.props.history.push("/freelancers/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Freelancer Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="Email"
            label="Email"
            value={this.state.freelancer.Email || ""}
            onChange={Utils.handleChange.bind(this, "freelancer")}
            type="number"
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="Name"
            label="Name"
            value={this.state.freelancer.Name || ""}
            onChange={Utils.handleChange.bind(this, "freelancer")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.freelancer.Name && this.state.freelancer.Name === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Speciality"
            label="Speciality"
            value={this.state.freelancer.Speciality || ""}
            onChange={Utils.handleChange.bind(this, "freelancer")}
            margin="normal"
            fullWidth
          />
          

          {/* Footer */}
          <div className="footer-card">
            <Link to="/freelancers/">Back to list</Link>

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
    actionsFreelancer: bindActionCreators(FreelancerActions, dispatch),
  };
};

// Validate types
FreelancerEdit.propTypes = { 
  actionsFreelancer: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    freelancer: state.FreelancerEditReducer.freelancer
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FreelancerEdit);
