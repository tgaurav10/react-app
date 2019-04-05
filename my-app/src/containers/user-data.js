import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../components/home.css';

class UserData extends Component {

    render() {
        if(!this.props.user) {
            return (
                <div className="App-column-right-data">
                    <h3>Please select a user...</h3>
                    <h3>Please select a user...</h3>
                    <h3>Please select a user...</h3>
                    <h3>Please select a user...</h3>
                    <h3>Please select a user...</h3>
                    <h3>Please select a user...</h3>
                    <h3>Please select a user...</h3>
                </div>);
        }
        return (
            <div className="App-column-right-data">
                <ul>
                    <li>{this.props.user.name}</li>
                    <li>{this.props.user.age}</li>
                    <li>{this.props.user.description}</li>
                    <li>{this.props.testUser} is typing...</li>
                </ul>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        user: state.activeUser,
        testUser: state.activeUser ? state.activeUser.user : 'none'
    };
}

export default connect(mapStateToProps)(UserData);