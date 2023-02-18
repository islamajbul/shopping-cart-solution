// Calculate Total
function getTextValueByID(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}
function setTextElementValueById(elementId,value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

// Calculate Subtotal
function calculateSubTotal(){
    const currentPhoneTotal = getTextValueByID('phone-total');
    const currentCaseTotal = getTextValueByID('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal ;
    setTextElementValueById('sub-total',currentSubTotal);
   

    // Calculate tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);

    setTextElementValueById('tax-amount',taxAmount);
    
    const finalAmount = currentSubTotal + taxAmount;

    setTextElementValueById('final-total',finalAmount);

}