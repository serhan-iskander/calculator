
/**
 * Created by serhan.i on 3/27/18.
 */
const express = require('express');
const router = express.Router();

module.exports = router;

router.all('/calculate', function (req, res, next) {
    calculate(req.body, res, next);
});


function isOperation(value) {
    return value === "+" || value === "-" || value ==="X" || value === "/";
}

function calculateResult(firstNumber, secondNumber, currentOperation) {
    switch(currentOperation)
    {
        case "+":
            return parseFloat(firstNumber) + parseFloat(secondNumber);
        case "-":
            return parseFloat(firstNumber) - parseFloat(secondNumber);
        case "X":
            return parseFloat(firstNumber) * parseFloat(secondNumber);
        case "/":
            return parseFloat(firstNumber) / parseFloat(secondNumber);
    }
}

function isValid(data) {
let pattern = /[^\d\+\-X\/]/;
    return !pattern.test(data);
}

// combine the numbers and do the operations on them and return a JSON with the result
function calculate(data, res) {
    if(!isValid(data.join("")))
    {
        res.send(404, 'Not Supported');
        return;
    }
    let inOperation = true;
    let firstNumber = "";
    let secondNumber = "";
    let firstNumberSet = false;
    let firstNumberDone = false;
    let currentOperation = "";
    data.forEach(function(value){
        if(isOperation(value))
        {
            if(inOperation) {
                res.send(404, 'Not Supported');
                return;
            }
            inOperation = true;
            if(firstNumberDone)
            {
                firstNumber = calculateResult(firstNumber, secondNumber, currentOperation);
                secondNumber = "";

            }
            if(firstNumberSet)
            {
                firstNumberDone = true;
            }
            currentOperation = value;
        }
        else{
            inOperation = false;
            if(firstNumberDone)
            {
                secondNumber += value;
            }
            else {
                firstNumberSet = true;
                firstNumber += value;
            }
        }
    });
    res.send(JSON.stringify({result: calculateResult(firstNumber, secondNumber, currentOperation)}));
    res.end();

}

