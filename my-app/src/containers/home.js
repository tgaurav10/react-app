import React from 'react';
import logo from '../components/logo.svg';
import '../components/home.css';
import UsersList from '../containers/users-list.js';
import UserData from '../containers/user-data.js';
import DialogBox from '../containers/dialog-box.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sessionActions from '../actions/session-actions.js';
import LogoutButton from './logout-button.js';

const Home = ({ actions: { logout }, user, authenticated }) => (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React {user.email}</h1>
            <h5>{authenticated ? 'You are authenticated :)' : 'Error'}</h5>
        </header>
        <div className="App-container">
            <UsersList/>
            <div className="App-column-right">
                <UserData/>
                <DialogBox/>
            </div>

        </div>
        <LogoutButton />
    </div>
);

const { object, bool } = PropTypes;

Home.propTypes = {
    actions: object.isRequired,
    user: object.isRequired,
    authenticated: bool.isRequired
};

const mapState = (state) => ({
    user: state.session.user,
    authenticated: state.session.authenticated
});

const mapDispatch = (dispatch) => {
    return {
        actions: bindActionCreators(sessionActions, dispatch)
    };
};

export default connect(mapState, mapDispatch)(Home);