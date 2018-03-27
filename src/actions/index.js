/**
 * Created by serhan.i on 3/27/18.
 */
import 'fetch';
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

export const calculate = (data) => {
    return dispatch => {
        fetch(`${getServerUrl()}/calculate`, {
            method: "POST",
            data: data,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8'
            }
        })
            .then((response) => {
                if (!response.ok) {
                    dispatch(updateError(response.statusText));
                }
                else
                {
                    dispatch(updateResult(response.data));
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
