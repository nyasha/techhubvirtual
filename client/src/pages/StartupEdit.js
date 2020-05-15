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
import StartupActions from "../redux/actions/StartupActions";

// END IMPORT ACTIONS

/** APIs

* actionsStartup.create
*	@description CRUD ACTION create
*
* actionsStartup.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsStartup.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsStartup.list
*	@description CRUD ACTION list
*

**/

class StartupEdit extends Component {
  // Init startup
  constructor(props) {
    super(props);
    this.state = {
      startup: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsStartup.loadStartup(this.props.match.params.id);
    }
    
    this.props.actionsStartup.loadStartupList();
  }

  // Insert props startup in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      startup: props.startup
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.startup._id) {
      this.props.actionsStartup.saveStartup(this.state.startup).then(data => {
        this.props.history.push("/startups/");
      });
    } else {
      this.props.actionsStartup.createStartup(this.state.startup).then(data => {
        this.props.history.push("/startups/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Startup Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="cellnumber"
            label="Cellnumber"
            value={this.state.startup.cellnumber || ""}
            onChange={Utils.handleChange.bind(this, "startup")}
            type="number"
            margin="normal"
            fullWidth
            required
            {...(!this.state.startup.cellnumber && this.state.startup.cellnumber === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="description"
            label="Description"
            value={this.state.startup.description || ""}
            onChange={Utils.handleChange.bind(this, "startup")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.startup.description && this.state.startup.description === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="email"
            label="Email"
            value={this.state.startup.email || ""}
            onChange={Utils.handleChange.bind(this, "startup")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.startup.email && this.state.startup.email === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="name"
            label="Name"
            value={this.state.startup.name || ""}
            onChange={Utils.handleChange.bind(this, "startup")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.startup.name && this.state.startup.name === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="website"
            label="Website"
            value={this.state.startup.website || ""}
            onChange={Utils.handleChange.bind(this, "startup")}
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation m:m follows with Startup */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel htmlFor="follows">Follows</InputLabel>
            <Select
              multiple
              value={this.state.startup.follows || []}
              onChange={Utils.handleChangeSelect.bind(this, "startup")}
              input={<Input id="follows" name="follows" />}
              renderValue={selected => (
                <div>
                  {selected.map(value => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              {this.props.listStartup && this.props.listStartup.map(item => (
                <MenuItem
                  key={item._id}
                  value={item._id}
                  style={{
                    fontWeight:
                      this.state.startup.follows &&
                      this.state.startup.follows.indexOf(item._id) === -1
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
            <Link to="/startups/">Back to list</Link>

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
    actionsStartup: bindActionCreators(StartupActions, dispatch),
  };
};

// Validate types
StartupEdit.propTypes = { 
  actionsStartup: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    startup: state.StartupEditReducer.startup,
    listStartup: state.StartupEditReducer.listStartup
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartupEdit);
