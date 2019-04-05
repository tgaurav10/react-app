import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as sessionActions from '../actions/session-actions.js';

class Login extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            user: {
                email: '',
                password: ''
            }
        };
    }

    onSubmit(history) {
        const { user } = this.state;
        const { login } = this.props.actions;
        login(user, history);
    }

    render() {
        const { user: { email, password } } = this.state;
        const SubmitButton = withRouter(({ history }) => (
            <button
                onClick={() => this.onSubmit(history)}
                type="submit">Submit
            </button>
        ));

        return (
            <div>
                <h3>LOGIN</h3>
                <div>
                    <span>Email :  </span>
                    <input
                        name="email"
                        value={email}
                        type="email"
                        onChange={(event) => this.setState({user : {email : event.target.value, password: password}})}
                    />
                </div>
                <div>
                    <span>Password :  </span>
                    <input
                        name="password"
                        value={password}
                        type="password"
                        onChange={(event) => this.setState({user : {email : email, password: event.target.value}})}
                    />
                </div>
                <SubmitButton />
            </div>
        );
    }
}

const { object } = PropTypes;

Login.propTypes = {
    actions: object.isRequired
};

const mapDispatch = (dispatch) => {
    return {
        actions: bindActionCreators(sessionActions, dispatch)
    };
};

export default connect(null, mapDispatch)(Login);