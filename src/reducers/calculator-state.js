/**
 * Created by serhan.i on 3/27/18.
 */

import {
    ADD_OPERATION,
    UPDATE_RESULT
} from '../actions/index';

const calculatorState = (state = {}, action) => {
    switch (action.type) {
        case ADD_OPERATION:
            let operations = {...(state.operations || [])};
            operations.push(action.value);
            return Object.assign({}, state, {
                operations
            });
        case UPDATE_RESULT:
            return Object.assign({}, state, {
                result: action.result
            });
        default:
            return state;
    }
};

export default calculatorState;
