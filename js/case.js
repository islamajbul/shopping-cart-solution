// By Function
function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    let newCaseNumber;
    if(isIncrease){
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}
function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}

// step 01 for case button plus
document.getElementById('btn-case-plus').addEventListener('click',function(){
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();

    /* const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice; */

    /* const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    const newCaseNumber = previousCaseNumber + 1;
    caseNumberField.value = newCaseNumber; */
})

// step 02 for case button minus
document.getElementById('btn-case-minus').addEventListener('click',function(){
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();

    /* const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice; */

    /* const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    const newCaseNumber = previousCaseNumber - 1;
    caseNumberField.value = newCaseNumber; */
})
