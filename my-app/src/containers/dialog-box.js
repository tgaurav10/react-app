import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../components/home.css';
import {notifyAboutTyping} from '../actions/actions-index'
import {bindActionCreators} from "redux";

class DialogBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value : "Sample Text"
        };
    }

    handleChange(event) {
        var message = event.target.value;
        this.setState({value : message});
        this.props.notify(this.props.user, message)
    }

    render() {
        let {value} = this.state;
        return (
            <div className="App-column-right-DialogBox">
                <textarea value= {value} onChange={(event) => this.handleChange(event)}></textarea>
                <button>Send</button>
            </div>
        )
    }
}

function mapStateToProps({session}) {
    return {user : session.user.email};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({notify: notifyAboutTyping}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogBox);