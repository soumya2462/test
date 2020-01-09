// ===============================
// AUTHOR     : SOUMYA RANJAN NAYAK
// CREATE DATE     :09/01/2020
// PURPOSE     : Reducers for both LoginComponent and Dashboard component
// ===============================
// Change History:
//
//==================================

import {
    EMAIL_CHANGE, FETCHING_DATA,
    PASSWORD_CHANGE,
    DASHBOARD_DATA
} from "../config/Config";

const INITIAL_STATE = { loading: false, email: '', password: '', dashData: {} };

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case EMAIL_CHANGE:
            return { ...state, email: action.payload };

        case PASSWORD_CHANGE:
            return { ...state, password: action.payload };


        case FETCHING_DATA:
            return { ...state, loading: action.payload };
        case DASHBOARD_DATA:
            return { ...state, dashData: action.payload, loading: false }

        default:
            return state;
    }
}