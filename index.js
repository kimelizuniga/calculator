let deleteBtn = document.getElementById('deleteBtn')
let plusBtn = document.getElementById('plusBtn')
let previous_operand = document.getElementById('previous_operand')
let current_operand = document.getElementById('current_operand')
let numberString = document.getElementsByClassName('numberBtn')
let history_operand = document.getElementById('history_operand')
let previousNum;
let currentNum = "";
let savedOperator;
let number;
let sum;
let difference;

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
    }
}

function SaveHistory()
{
    if (history_operand.innerText == "")
        history_operand.innerText += current_operand.innerText +  " ";
    else
        history_operand.innerText += savedOperator + " " + current_operand.innerText +  " ";
}

function AddNum()
{
    currentNum = parseInt(currentNum);
    if (savedOperator == "+" || !savedOperator)
    {
        if (previous_operand.innerText != "")
        {
            sum = parseInt(previous_operand.innerText) + currentNum;
            previous_operand.innerText = sum;
        }
        else
            previous_operand.innerText = currentNum;

        SaveHistory();
    }
    else
        EqualOperator();

    current_operand.innerText = "0";
    currentNum = "0";

}

function SubtractNum()
{
    currentNum = parseInt(currentNum)

    if (savedOperator == "-" || !savedOperator)
    {
        if (previous_operand.innerText != "")
        {
            difference = parseInt(previous_operand.innerText) - currentNum
            previous_operand.innerText = difference;
        }
        else
            previous_operand.innerText = currentNum

        SaveHistory();
    }
    else
        EqualOperator();
    
    current_operand.innerText = "0";
    currentNum = "0";
}