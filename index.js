let deleteBtn = document.getElementById('deleteBtn')
let plusBtn = document.getElementById('plusBtn')
let previous_operand = document.getElementById('previous_operand')
let current_operand = document.getElementById('current_operand')
let numberString = document.getElementsByClassName('numberBtn')
let previousNum;
let currentNum = "";
let savedOperator;
let number;
let sum;
let difference;

// Combines string to be a single number of string
function CombineStringNum(num)
{
    if (currentNum == 0)
        currentNum = num;
    else
        currentNum += num;
    
    current_operand.innerText = currentNum;
}

function SaveOperator(operator)
{
    savedOperator = operator;
}

// Runs the function of an operator depending on which button is pressed
function EqualOperator()
{
    switch(savedOperator)
    {   
        case "+":
            AddNum();
            break;
        case "-":
            SubtractNum();
            break;
        case "*":
            multiplyNum();
            break;
    }

    previous_operand.innerText = current_operand.innerText +  " ";
}

// Save previous numbers and operators used in a string to show in the output
function SaveHistory()
{
    if (previous_operand.innerText == "")
        previous_operand.innerText = current_operand.innerText +  " ";
    else
        previous_operand.innerText = current_operand.innerText +  " " + savedOperator;
}

// Add 2 values together and save the sum to the previous operand string
function AddNum()
{
    currentNum = parseInt(currentNum);
    if (savedOperator == "+" || !savedOperator)
    {
        
        if (previous_operand.innerText != "")
        {
            sum = parseInt(previous_operand.innerText) + currentNum;
            current_operand.innerText = sum;
        }
        else
            current_operand.innerText = currentNum;

        SaveHistory();
        
    }
    else
    {
        EqualOperator();
        current_operand.innerText = sum;
    }
        
    currentNum = "0";

}

function SubtractNum()
{
    currentNum = parseInt(currentNum)

    if (savedOperator == "-" || !savedOperator)
    {
        if (previous_operand.innerText != "")
        {
            difference = parseInt(previous_operand.innerText) - currentNum;
            current_operand.innerText = difference;
        }
        else
            current_operand.innerText = currentNum;

        SaveHistory();
    }
    
    else
    {
        EqualOperator();
        current_operand.innerText = difference;
    }

    currentNum = "0";
}

function multiplyNum()
{
    currentNum = parseInt(currentNum);
    if (savedOperator == "*" || !savedOperator)
    {
        
        if (previous_operand.innerText != "")
        {
            product = parseInt(previous_operand.innerText) * currentNum;
            current_operand.innerText = product;
        }
        else
            current_operand.innerText = currentNum;

        SaveHistory();
    }

    else
    {
        EqualOperator();
        current_operand.innerText = product;
    }
        
    currentNum = "0";
}

function ACButton()
{
currentNum = "";
previous_operand.innerText = "";
current_operand.innerText = "0";
}

// Testing Testing