import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';


class PopUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flash: ""
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ flash: nextProps.flash })
    }

    handleClose = () => {
        this.setState({ flash: "" });
    };

    render() {
        return (
            <Snackbar
                open={this.state.flash}
                message={this.state.flash}
                autoHideDuration={2000}
                onClose={this.handleClose}
            >
            <Alert onClose={this.handleClose} severity={this.props.flash === 'Sign in succesful!' ? "success" : "error"} variant="filled">
              {this.props.flash}
            </Alert>

            </Snackbar>
        )
    }
}
function mapStateToProps(state) {
    return { flash: state.auth.msg,
    }
};
export default connect(mapStateToProps)(PopUp)  