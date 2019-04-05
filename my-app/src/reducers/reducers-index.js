import {combineReducers} from 'redux';
import FriendReducer from './reducer-friends';
import ActiveUserReducer from './reducer-active-user';
import {sessionReducer} from 'redux-react-session';

const allReducers = combineReducers({
    friends: FriendReducer,
    activeUser : ActiveUserReducer,
    session: sessionReducer
});

export default allReducers;


