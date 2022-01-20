 let oldRCV = document.getElementById("oldRCV").value;
 let newRCV = document.getElementById("newRCV").value;
 let depreciation = document.getElementById("depreciation").value;
 let nDepreciation = document.getElementById("nDepreciation").value;
 let deductible = document.getElementById("deductible").value;
 let priorPayment = document.getElementById("payments").value;

 let showBottom = false;

let supplement = (newRCV - oldRCV).toFixed(2);
let ACV = newRCV - (depreciation - nDepreciation).toFixed(2);
let netPayment = (ACV - deductible - priorPayment).toFixed(2);
let reserve = (newRCV - deductible).toFixed(2);

//Order of operations
// console.log(oldRCV);
// console.log(supplement);
// console.log(newRCV);
// console.log(depreciation);
// console.log(nDepreciation);
// console.log(ACV);
// console.log(deductible);
// console.log(priorPayment);
// console.log(netPayment);
// console.log(reserve);
    


    
 function submitFunction() {

     oldRCV = document.getElementById("oldRCV").value;
     newRCV = document.getElementById("newRCV").value;
     depreciation = document.getElementById("depreciation").value;
     nDepreciation = document.getElementById("nDepreciation").value;
     deductible = document.getElementById("deductible").value;
     priorPayment = document.getElementById("payments").value;
      
    supplement = newRCV - oldRCV;
    ACV = newRCV - depreciation - nDepreciation
    netPayment = ACV - deductible - priorPayment
    reserve = newRCV - deductible
    


     showBottom = true;
     document.getElementById("lossAdjustment").style.display = '';
     document.getElementById("lossAdjustment").innerHTML = htmlLossAdjustment()
     return false;

 }



//Loss Adjustment Note to Copy and Paste:


function htmlLossAdjustment() {
    return `<h1>Supplement Loss Adjustment</h1>
    <ul>Old Replacement Cost Value $${oldRCV}</ul>
    <ul>Supplement Amount $${supplement}</ul>
    <ul>New Replacement Cost Value $${newRCV}</ul>
    <ul>Less Recoverable Depreciation ($${depreciation})</ul>
    <ul>Less Non-Recoverable Depreciation ($${nDepreciation})</ul>
    <ul>Supplement Actual Cash Value $${ACV}</ul>
    <ul>Less Deductible ($${deductible})</ul>
    <ul>Less Prior Payments ($${priorPayment})</ul>
    <ul>Net Supplement Payment Amount $${netPayment}
    <ul>Total Loss Less Deductible $${reserve}</ul>`
};



