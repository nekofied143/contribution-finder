// script.js
const data = [
  {
    "name": "John Doe",
    "heads": 3,
    "contribution": 1500,
    "total_loan_balance": 500,
    "remarks": "Active"
  },
  {
    "name": "Jane Smith",
    "heads": 2,
    "contribution": 1200,
    "total_loan_balance": 200,
    "remarks": "Inactive"
  },
  // Add more data as needed
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