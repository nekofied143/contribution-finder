// script.js
const data = [
  {
    "name": "kaye",
    "heads": 2,
    "contribution": -₱6,800,
    "total_loan_balance": ₱7,800,
    "remarks": "IN DEBT OF -6800 PHP"
  },
  {
    "name": "mary cris",
    "heads": 2,
    "contribution": -₱2,450,
    "total_loan_balance": ₱4,450,
    "remarks": "IN DEBT OF -2450 PHP"
  },
  {
    "name": "lorna",
    "heads": 2,
    "contribution": ₱2,240,
    "total_loan_balance": ₱0,
    "remarks": ""IN-PROGRESS
AMOUNT TO RECEIVE: ₱2240""
  },
];

const searchInput = document.getElementById('searchInput');
const headsData = document.getElementById('headsData');
const contributionData = document.getElementById('contributionData');
const loanBalanceData = document.getElementById('loanBalanceData');
const remarksData = document.getElementById('remarksData');

function search() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const filteredData = data.find(item => item.name.toLowerCase().includes(searchTerm));
  if (filteredData) {
    displayData(filteredData);
  } else {
    clearData();
  }
}

function displayData(data) {
  headsData.textContent = data.heads;
  contributionData.textContent = data.contribution;
  loanBalanceData.textContent = data.total_loan_balance;
  remarksData.textContent = data.remarks;
}

function clearData() {
  headsData.textContent = '';
  contributionData.textContent = '';
  loanBalanceData.textContent = '';
  remarksData.textContent = '';
}
