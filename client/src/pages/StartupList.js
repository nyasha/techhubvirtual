// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DialogDelete from "../components/DialogDelete";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import Button from "@material-ui/core/Button";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";

// Table
import EnhancedTable from "../components/EnhancedTable";

// Custom Actions


// START IMPORT ACTIONS
import StartupActions from "../redux/actions/StartupActions";

// END IMPORT ACTIONS

/** APIs

* actionsStartup.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsStartup.list
*	@description CRUD ACTION list
*

**/


class StartupList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsStartup.loadStartupList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsStartup.deleteStartup(this.state.idDelete).then(data => {
      this.props.actionsStartup.loadStartupList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "cellnumber",
        type: "number",
        label: "Cellnumber"
      }, 
      {
        id: "description",
        type: "string",
        label: "Description"
      }, 
      {
        id: "email",
        type: "string",
        label: "Email"
      }, 
      {
        id: "name",
        type: "string",
        label: "Name"
      }, 
      {
        id: "website",
        type: "string",
        label: "Website"
      },
    ];
    const link = "/startups/";

    return (
      <div>
        <h1>Startup List</h1>

        <EnhancedTable
          data={this.props.list}
          columns={columns}
          link={link}
          onDelete={this.delete.bind(this)}
        />

        <DialogDelete
          open={this.state.openDialogDelete}
          onClose={this.closeDialogDelete.bind(this)}
          onConfirm={this.confirmDialogDelete.bind(this)}
        />

        {/*
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Cellnumber</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Website</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/startups/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.cellnumber }</TableCell>
                <TableCell align="right">{ row.description }</TableCell>
                <TableCell align="right">{ row.email }</TableCell>
                <TableCell align="right">{ row.name }</TableCell>
                <TableCell align="right">{ row.website }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/startups/new">
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Link>
        </div>
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
StartupList.propTypes = { 
  actionsStartup: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.StartupListReducer.listStartup
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartupList);
