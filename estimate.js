let oldRCV = document.getElementById("RCV").value;
let depreciation = document.getElementById("depreciation").value;
let nDepreciation = document.getElementById("nDepreciation").value;
let deductible = document.getElementById("deductible").value;

let showBottom = false;

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
// console.log(netTotal);

function submitFunction() {
  RCV = document.getElementById("RCV").value;
  depreciation = document.getElementById("depreciation").value;
  nDepreciation = document.getElementById("nDepreciation").value;
  deductible = document.getElementById("deductible").value;

  ACV = (RCV - depreciation - nDepreciation).toFixed(2);
  netPayment = (ACV - deductible).toFixed(2);
  reserve = Math.ceil(netPayment);

  showBottom = true;
  document.getElementById("lossAdjustment").style.display = "";
  document.getElementById("lossAdjustment").innerHTML = htmlLossAdjustment();
  return false;
}

//Loss Adjustment Note to Copy and Paste:

function htmlLossAdjustment() {
  return `<h1>Supplement Loss Adjustment</h1>
    <ul>Replacement Cost Value $${RCV}</ul>
    <ul>Less Recoverable Depreciation (${depreciation})</ul>
    <ul>Less Non-Recoverable Depreciation <${nDepreciation}></ul>
    <ul>Actual Cash Value $${ACV}</ul>
    <ul>Less Deductible (${deductible})</ul>
    <ul>Net Payment Amount $${netPayment}</ul>
    <ul>Setting Loss Reserves at $${reserve}</ul>`;
}
