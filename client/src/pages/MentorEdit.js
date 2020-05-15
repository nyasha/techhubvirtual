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
import MentorActions from "../redux/actions/MentorActions";

// END IMPORT ACTIONS

/** APIs

* actionsMentor.create
*	@description CRUD ACTION create
*
* actionsMentor.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsMentor.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/

class MentorEdit extends Component {
  // Init mentor
  constructor(props) {
    super(props);
    this.state = {
      mentor: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsMentor.loadMentor(this.props.match.params.id);
    }
    
  }

  // Insert props mentor in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      mentor: props.mentor
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.mentor._id) {
      this.props.actionsMentor.saveMentor(this.state.mentor).then(data => {
        this.props.history.push("/mentors/");
      });
    } else {
      this.props.actionsMentor.createMentor(this.state.mentor).then(data => {
        this.props.history.push("/mentors/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Mentor Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="cellnumber"
            label="Cellnumber"
            value={this.state.mentor.cellnumber || ""}
            onChange={Utils.handleChange.bind(this, "mentor")}
            type="number"
            margin="normal"
            fullWidth
            required
            {...(!this.state.mentor.cellnumber && this.state.mentor.cellnumber === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="description"
            label="Description"
            value={this.state.mentor.description || ""}
            onChange={Utils.handleChange.bind(this, "mentor")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.mentor.description && this.state.mentor.description === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="name"
            label="Name"
            value={this.state.mentor.name || ""}
            onChange={Utils.handleChange.bind(this, "mentor")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.mentor.name && this.state.mentor.name === ""
              ? { error: true }
              : {})}
          />
          

          {/* Footer */}
          <div className="footer-card">
            <Link to="/mentors/">Back to list</Link>

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
    actionsMentor: bindActionCreators(MentorActions, dispatch),
  };
};

// Validate types
MentorEdit.propTypes = { 
  actionsMentor: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    mentor: state.MentorEditReducer.mentor
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MentorEdit);
