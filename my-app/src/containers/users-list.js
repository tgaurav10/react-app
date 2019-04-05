import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../components/home.css';
import {selectUser} from '../actions/actions-index.js';
import {bindActionCreators} from "redux";

class UsersList extends Component {

    render() {
        return (
            <nav className="App-column-left">
                <ul>
                    {this.props.users.map((item, i) => {
                        return (
                            <li key={i} onClick={() => this.props.select(item)}>
                                {item.name}
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }

}

function mapStateToProps(state) {
    return {
        users : state.friends
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({select : selectUser}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersList);