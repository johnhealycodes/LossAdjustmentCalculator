let oldRCV = document.getElementById("oldRCV").value;
let newRCV = document.getElementById("newRCV").value;
let depreciation = document.getElementById("depreciation").value;
let nDepreciation = document.getElementById("nDepreciation").value;
let deductible = document.getElementById("deductible").value;
let priorPayment = document.getElementById("payments").value;

const supplement = newRCV - oldRCV;
const ACV = newRCV - depreciation - nDepreciation
const netPayment = ACV - deductible - priorPayment
const reserve = newRCV - deductible

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
    

    



//Loss Adjustment Note to Copy and Paste:

function htmlLossAdjustment() {
    return `<h1>Supplement Loss Adjustment</h1>
    <ul>Old Replacement Cost Value ${oldRCV}</ul>
    <ul>Supplement Amount ${supplement}</ul>
    <ul>New Replacement Cost Value ${newRCV}</ul>
    <ul>Less Recoverable Depreciation${depreciation}</ul>
    <ul>Less Non-Recoverable Depreciation ${nDepreciation}</ul>
    <ul>Supplement Actual Cash Value ${ACV}</ul>
    <ul>Less Deductible ${deductible}</ul>
    <ul>Less Prior Payments ${priorPayment}</ul>
    <ul>Net Supplement Payment Amount ${netPayment}
    <ul>Total Loss Less Deductible ${reserve}</ul>`
};

document.getElementById("lossAdjustment").innerHTML