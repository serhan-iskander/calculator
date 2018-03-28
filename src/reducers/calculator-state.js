/**
 * Created by serhan.i on 3/27/18.
 */

import {
    ADD_OPERATION,
    UPDATE_RESULT,
    ADD_NUMBER,
    ERROR
} from '../actions/index';

const calculatorState = (state = {operations: []}, action) => {
    let operations = [...state.operations];
    switch (action.type) {
        case ADD_OPERATION:
            if(state.isOperation)
            {
                operations.pop();
            }
            operations.push(action.operation);
            return Object.assign({}, state, {
                operations,
                isOperation: true,
                result: null,
                error: null
            });
        case ADD_NUMBER:
            operations.push(action.number);
            return Object.assign({}, state, {
                operations,
                isOperation: false,
                result: null,
                error: null
            });
        case UPDATE_RESULT:
            return Object.assign({}, state, {
                result: action.result,
                error: null
            });
        case ERROR:
            return Object.assign({}, state, {
                error: action.error
            });
        default:
            return state;
    }
};

export default calculatorState;
