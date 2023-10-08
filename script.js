searchInput = document.getElementById("searchInput"),
   legendsContainer = document.querySelector(".legends-container"),
   calculatorContainer = document.querySelector(".calculator-container"),
   loandebtContainer = document.querySelector(".loan-debt-container"),
   headsData = document.getElementById("headsData"),
   contributionData = document.getElementById("contributionData"),
   loanBalanceData = document.getElementById("loanBalanceData"),
   remarksData = document.getElementById("remarksData"),
   dataTable = document.getElementById("dataTable"),
   currentDateElement = document.getElementById("currentDate"),
   contributionCalculationElement = document.getElementById("contributionCalculation"),
   loanDebtCalculationElement = document.getElementById("loanDebtCalculation"),
   estimatedDateElement = document.getElementById("estimatedDate"),
   estimatedDate1Element = document.getElementById("estimatedDate1");

function toggleLegends() {
   const t = document.querySelector(".legends-text"),
      n = document.querySelector(".legends-content");
   n.style.display = "block" === n.style.display ? "none" : "block", t.textContent = "block" === n.style.display ? "Click me ⋎" : "Click me ≻"
}

function toggleCalculator() {
   const t = document.querySelector(".calculator-text"),
      n = document.querySelector(".calculator-content");
   n.style.display = "block" === n.style.display ? "none" : "block", t.textContent = "block" === n.style.display ? "CONTRIBUTION DATE CALCULATOR ⋎" : "CONTRIBUTION DATE CALCULATOR ≻"
}

function toggleLoanDebt() {
   const t = document.querySelector(".loan-debt-text"),
      n = document.querySelector(".loan-debt-content");
   n.style.display = "block" === n.style.display ? "none" : "block", t.textContent = "block" === n.style.display ? "LOAN/DEBT CALCULATOR ⋎" : "LOAN/DEBT CALCULATOR ≻"
}

function search() {
   const t = searchInput.value.trim().toLowerCase();
   if (!t) return void clearData();
   const n = data.find(n => n.name.toLowerCase() === t);
   n ? displayData(n) : displayError("No data exist!")
}

function displayData(t) {
   headsData.textContent = t.heads, contributionData.textContent = t.contribution, loanBalanceData.textContent = t.total_loan_balance;
   const n = t.contribution,
      e = t.heads,
      a = t.total_loan_balance,
      o = new Date;
   z = t.total_loan_balance !== 0 ? "Open Loan/Debt Calculator for more info" : "Data Updated as of October 8, 2023";
   remarksData.textContent = z;
   currentDateElement.textContent = o.toLocaleDateString();
   const r = n / (10 * e);
   contributionCalculationElement.textContent = `₱${n} / ₱10 / ${e} = ${r} days`;
   const l = new Date(o.getFullYear(), 0, 1 + r - 1);
   estimatedDateElement.textContent = l.toLocaleDateString();
   const c = new Date(o.getFullYear(), 0, 1 + r - 1);
   estimatedDate1Element.textContent = c.toLocaleDateString();
   const m = n - a;
   loanDebtCalculationElement.textContent = `₱${n} - ₱${a} = ₱${m}`
}

function clearData() {
   headsData.textContent = "", contributionData.textContent = "", loanBalanceData.textContent = "", remarksData.textContent = ""
}

function displayError(t) {
   headsData.textContent = t, contributionData.textContent = t, loanBalanceData.textContent = t, remarksData.textContent = t
}

legendsContainer.addEventListener("click", () => {
   toggleLegends()
}), calculatorContainer.addEventListener("click", () => {
   toggleCalculator()
}), loandebtContainer.addEventListener("click", () => {
   toggleLoanDebt()
}), searchInput.addEventListener("keyup", search);

document.addEventListener('DOMContentLoaded', function () {
   console.log(data);
});
