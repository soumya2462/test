// ===============================
// AUTHOR     : SOUMYA RANJAN NAYAK
// CREATE DATE     :09/01/2020
// PURPOSE     : Combine the reducer
// ===============================
// Change History:
//
//==================================

import { combineReducers } from 'redux';
import LoginReducers from './LoginReducers';
export default combineReducers({
    //  coool: () =>[]
    auth: LoginReducers
});