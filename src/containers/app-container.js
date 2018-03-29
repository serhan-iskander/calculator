/**
 * Created by serhan.i on 3/27/18.
 */
import {connect} from 'react-redux';
import App from '../components/app';
import {
    addOperation,
    addNumber,
    calculate
} from '../actions/index';


const mapStateToProps = (state) => {
    return {
        result: state.calculatorState.result,
        operations: state.calculatorState.operations,
        error: state.calculatorState.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addClick: () => {
            dispatch(addOperation("+"))
        } ,
        minusClick: () => {
            dispatch(addOperation("-"))
        } ,
        multiplyClick: () => {
            dispatch(addOperation("X"))
        } ,
        divideClick: () => {
            dispatch(addOperation("/"))
        } ,
        number0Click: () => {
            dispatch(addNumber("0"))
        },
        number1Click: () => {
            dispatch(addNumber("1"))
        },
        number2Click: () => {
            dispatch(addNumber("2"))
        },
        number3Click: () => {
            dispatch(addNumber("3"))
        },
        number4Click: () => {
            dispatch(addNumber("4"))
        },
        number5Click: () => {
            dispatch(addNumber("5"))
        },
        number6Click: () => {
            dispatch(addNumber("6"))
        },
        number7Click: () => {
            dispatch(addNumber("7"))
        },
        number8Click: () => {
            dispatch(addNumber("8"))
        },
        number9Click: () => {
            dispatch(addNumber("9"))
        },
        calculate: () => {
            dispatch(calculate())
        },
        onkeyup: (e) => {
            if(e.keyCode >= 48 && e.keyCode <= 57)
            {
                dispatch(addNumber(e.keyCode - 48));
            }
            else
            {
                switch (e.key)
                {
                    case "+":
                    case "-":
                    case "X":
                    case "/":
                        return dispatch(addOperation(e.key));
                    case "=":
                    case "Enter":
                        return dispatch(calculate());
                    case "*":
                    case "x":
                        return dispatch(addOperation("X"));


                }
            }
        }
    };
};

const AppContainer = connect(
    mapStateToProps, mapDispatchToProps
)(App);

export default AppContainer;
