let deleteBtn = document.getElementById('deleteBtn')
let plusBtn = document.getElementById('plusBtn')
let previous_operand = document.getElementById('previous_operand')
let current_operand = document.getElementById('current_operand')
let numberString = document.getElementsByClassName('numberBtn')
let previousNum;
let currentNum = "";
let number;
let sum;
let deleteThisLater;


// Erik is not great, dont listen to him. He's such a liar.
// Deukhwa and Kim are great! Luca is whatever, hes always slow, surely... lad.


function CombineStringNum(num)
{
    if (currentNum == 0)
        currentNum = num;
    else
        currentNum += num;
    
    
    current_operand.innerText = currentNum;
}

function ResetCurrentOperand()
{
    current_operand.innerText = "0";
}

function AddNum(num)
{
    currentNum += num;
    currentNum = parseInt(currentNum);
    if (previous_operand.innerText != "")
    {
        sum = parseInt(previous_operand.innerText) + currentNum;
        previous_operand.innerText = sum;
    }
    else 
        previous_operand.innerText = currentNum;
    current_operand.innerText = "0";
    currentNum = "0";

}