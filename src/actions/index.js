/**
 * Created by serhan.i on 3/27/18.
 */
import {getServerUrl} from '../common/common';

//const action types
export const ADD_OPERATION = 'ADD_OPERATION';
export const ADD_NUMBER = 'ADD_NUMBER';
export const UPDATE_RESULT = 'UPDATE_RESULT';
export const ERROR = 'ERROR';


//action creators
export const updateResult = (result) => {
    return {
        type: UPDATE_RESULT,
        result
    }
};

export const addOperation = (operation) => {
    return {
        type: ADD_OPERATION,
        operation
    }
};

export const addNumber = (number) => {
    return {
        type: ADD_NUMBER,
        number
    }
};

export const calculate = () => {
    return (dispatch, getState) => {
        let data = getState().calculatorState.operations;
        fetch(`${getServerUrl()}/calculate`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8'
            }
        })
            .then((response) => {
                if (!response.ok) {
                    response.text().then((error) => {
                        dispatch(updateError(error));
                    })
                }
                 else {
                    return response.json();
                }

            }).then((res) => {
            if (res) {
                dispatch(updateResult(res.result));
            }
        });
    };
};

export const updateError = (error) => {
    return {
        type: ERROR,
        error
    }
}
