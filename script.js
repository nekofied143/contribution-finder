// script.js
const data = [
  {
    "name": "2023-88812633",
    "heads": 2,
    "contribution": "-₱6,800",
    "total_loan_balance": "₱7,800",
    "remarks": "IN DEBT OF -6800 PHP"
  },
  {
    "name": "2023-82495168",
    "heads": 2,
    "contribution": "-₱2,450",
    "total_loan_balance": "₱4,450",
    "remarks": "IN DEBT OF -2450 PHP"
  },
  {
    "name": "2023-31247883",
    "heads": 2,
    "contribution": "₱2,240",
    "total_loan_balance": "₱0",
    "remarks": "IN-PROGRESS, AMOUNT TO RECEIVE: ₱2240"
  },
  {
    "name": "2023-26777211",
    "heads": 2,
    "contribution": "₱3,100",
    "total_loan_balance": "₱0",
    "remarks" : "IN-PROGRESS, AMOUNT TO RECEIVE: ₱3100"
  },
  {
    "name": "2023-22475295",
    "heads": 2,
    "contribution": "₱3,800",
    "total_loan_balance": "₱0",
    "remarks": "IN-PROGRESS, AMOUNT TO RECEIVE: ₱3800"
  },
  {
    "name": "2023-16849664",
    "heads": 3,
    "contribution": "₱5,430",
    "total_loan_balance": "₱0",
    "remarks": "IN-PROGRESS, AMOUNT TO RECEIVE: ₱5430"
  },
  {
    "name": "2023-69133791",
    "heads": 2,
    "contribution": "₱4,240",
    "total_loan_balance": "₱0",
    "remarks": "IN-PROGRESS, AMOUNT TO RECEIVE: ₱4240"
  },
  {
    "name": "2023-20390853",
    "heads": 2,
    "contribution": "₱4,240",
    "total_loan_balance": "₱0",
    "remarks": "IN-PROGRESS, AMOUNT TO RECEIVE: ₱4240"
  },
  {
    "name": "2023-14419159",
    "heads": 2,
    "contribution": "-₱5,610",
    "total_loan_balance": "₱7,600",
    "remarks": "IN DEBT OF -5610 PHP"
  },
  {
    "name": "2023-13716823",
    "heads": 3,
    "contribution": "₱5,000",
    "total_loan_balance": "₱0",
    "remarks": "IN-PROGRESS, AMOUNT TO RECEIVE: ₱5000"
  },
  {
    "name": "2023-72045449",
    "heads": 1,
    "contribution": "-₱3,910",
    "total_loan_balance": "₱4,500",
    "remarks": "IN DEBT OF -3910 PHP"
  },
  {
    "name": "2023-10231996",
    "heads": 2,
    "contribution": "₱4,240",
    "total_loan_balance": "₱0",
    "remarks": "IN-PROGRESS, AMOUNT TO RECEIVE: ₱4240"
  },
  {
    "name": "2023-09021996",
    "heads": 5,
    "contribution": "₱18,250",
    "total_loan_balance": "₱0",
    "remarks": "COMPLETE, AMOUNT TO RECEIVE: ₱52250"
  },
  {
    "name": "2023-82742042",
    "heads": 2,
    "contribution": "₱4,120",
    "total_loan_balance": "₱0",
    "remarks": "IN-PROGRESS, AMOUNT TO RECEIVE: ₱4120"
  },
  {
    "name": "2023-42380641",
    "heads": 2,
    "contribution": "₱650",
    "total_loan_balance": "₱0",
    "remarks": "IN-PROGRESS, AMOUNT TO RECEIVE: ₱650"
  },
  {
    "name": "2023-27373139",
    "heads": 2,
    "contribution": "₱3,020",
    "total_loan_balance": "₱0",
    "remarks": "IN-PROGRESS, AMOUNT TO RECEIVE: ₱3020"
  },
  {
    "name": "2023-78377119",
    "heads": 2,
    "contribution": "₱3,620",
    "total_loan_balance": "₱0",
    "remarks": "IN-PROGRESS, AMOUNT TO RECEIVE: ₱3620"
  },
  {
    "name": "2023-15914771",
    "heads": 5,
    "contribution": "₱10,600",
    "total_loan_balance": "₱0",
    "remarks": "IN-PROGRESS, AMOUNT TO RECEIVE: ₱10600"
  },
  {
    "name": "2023-46754777",
    "heads": 1,
    "contribution": "-₱4,110",
    "total_loan_balance": "₱4,700",
    "remarks": "IN DEBT OF -4110 PHP"
  },
  {
    "name": "2023-44664972",
    "heads": 2,
    "contribution": "₱620",
    "total_loan_balance": "₱0",
    "remarks": "IN-PROGRESS, AMOUNT TO RECEIVE: ₱620"
  },
  {
    "name": "2023-22746266",
    "heads": 5,
    "contribution": "₱10,150",
    "total_loan_balance": "₱0",
    "remarks": "IN-PROGRESS, AMOUNT TO RECEIVE: ₱10150"
  },
  {
    "name": "2023-84772048",
    "heads": 5,
    "contribution": "₱9,050",
    "total_loan_balance": "₱0",
    "remarks": "IN-PROGRESS, AMOUNT TO RECEIVE: ₱9050"
  },
  {
    "name": "2023-65004749",
    "heads": 2,
    "contribution": "-₱1,180",
    "total_loan_balance": "₱4,200",
    "remarks": "IN DEBT OF -1180 PHP"
  },
  {
    "name": "2023-52162295",
    "heads": 2,
    "contribution": "₱1,400",
    "total_loan_balance": "₱0",
    "remarks": "IN-PROGRESS, AMOUNT TO RECEIVE: ₱1400"
  },
  {
    "name": "2023-94301759",
    "heads": 2,
    "contribution": "₱2,120",
    "total_loan_balance": "₱1,200",
    "remarks": "LOAN BAL: 1200 PHP, AMOUNT TO RECEIVE: ₱2120"
  },
  {
    "name": "2023-44420688",
    "heads": 2,
    "contribution": "₱3,620",
    "total_loan_balance": "₱0",
    "remarks": "IN-PROGRESS, AMOUNT TO RECEIVE: ₱3620"
  },
  {
    "name": "2023-81589758",
    "heads": 5,
    "contribution": "₱4,550",
    "total_loan_balance": "₱0",
    "remarks": "IN-PROGRESS, AMOUNT TO RECEIVE: ₱4550"
  },
  {
    "name": "2023-19148758",
    "heads": 5,
    "contribution": "₱4,550",
    "total_loan_balance": "₱0",
    "remarks": "IN-PROGRESS, AMOUNT TO RECEIVE: ₱4550"
  },
  {
    "name": "2023-73780810",
    "heads": 5,
    "contribution": "₱10,650",
    "total_loan_balance": "₱0",
    "remarks": "IN-PROGRESS, AMOUNT TO RECEIVE: ₱10650"
  },
  {
    "name": "2023-45828884",
    "heads": 1,
    "contribution": "₱2,110",
    "total_loan_balance": "₱0",
    "remarks": "IN-PROGRESS, AMOUNT TO RECEIVE: ₱2110"
  },
  {
    "name": "2023-10694296",
    "heads": 1,
    "contribution": "₱2,110",
    "total_loan_balance": "₱0",
    "remarks": "IN-PROGRESS, AMOUNT TO RECEIVE: ₱2110"
  },
  {
    "name": "2023-34140960",
    "heads": 1,
    "contribution": "₱2,110",
    "total_loan_balance": "₱0",
    "remarks": "IN-PROGRESS, AMOUNT TO RECEIVE: ₱2110"
  },
  {
    "name": "2023-47529130",
    "heads": 2,
    "contribution": "₱4,640",
    "total_loan_balance": "₱0",
    "remarks": "IN-PROGRESS, AMOUNT TO RECEIVE: ₱4640"
  },
  {
    "name": "2023-66323649",
    "heads": 2,
    "contribution": "₱3,260",
    "total_loan_balance": "₱0",
    "remarks": "IN-PROGRESS, AMOUNT TO RECEIVE: ₱3260"
  },
  {
    "name": "2023-28033548",
    "heads": 3,
    "contribution": "₱2,300",
    "total_loan_balance": "₱1,300",
    "remarks": "LOAN BAL: 1300 PHP, AMOUNT TO RECEIVE: ₱2300"
  },
  {
    "name": "2023-46555468",
    "heads": 2,
    "contribution": "-₱5,940",
    "total_loan_balance": "₱8,200",
    "remarks": "IN DEBT OF -5940 PHP"
  },
  {
    "name": "2023-29124040",
    "heads": 2,
    "contribution": "-₱5,860",
    "total_loan_balance": "₱8,400",
    "remarks": "IN DEBT OF -5860 PHP"
  },
  {
    "name": "2023-37240217",
    "heads": 4,
    "contribution": "₱900",
    "total_loan_balance": "₱3,900",
    "remarks": "LOAN BAL: 3900 PHP, AMOUNT TO RECEIVE: ₱900"
  },
  {
    "name": "2023-17274476",
    "heads": 4,
    "contribution": "₱1,720",
    "total_loan_balance": "₱2,800",
    "remarks": "LOAN BAL: 2800 PHP, AMOUNT TO RECEIVE: ₱1720"
  },
  {
    "name": "2023-86749518",
    "heads": 1,
    "contribution": "₱1,200",
    "total_loan_balance": "₱0",
    "remarks": "IN-PROGRESS, AMOUNT TO RECEIVE: ₱1200"
  },
  {
    "name": "2023-72667050",
    "heads": 1,
    "contribution": "₱1,270",
    "total_loan_balance": "₱0",
    "remarks": "IN-PROGRESS, AMOUNT TO RECEIVE: ₱1270"
  },
  {
    "name": "2023-62274550",
    "heads": 2,
    "contribution": "-₱6,280",
    "total_loan_balance": "₱8,400",
    "remarks": "IN DEBT OF -6280 PHP"
  },
  {
    "name": "2023-50458125",
    "heads": 2,
    "contribution": "₱2,240",
    "total_loan_balance": "₱2,000",
    "remarks": "LOAN BAL: 2000 PHP, AMOUNT TO RECEIVE: ₱2240"
  },
  {
    "name": "2023-58087768",
    "heads": 1,
    "contribution": "₱610",
    "total_loan_balance": "₱1,200",
    "remarks": "LOAN BAL: 1200 PHP, AMOUNT TO RECEIVE: ₱610"
  },
  {
    "name": "2023-68227765",
    "heads": 2,
    "contribution": "₱3,920",
    "total_loan_balance": "₱0",
    "remarks": "IN-PROGRESS, AMOUNT TO RECEIVE: ₱3920"
  },
  {
    "name": "2023-29326660",
    "heads": 3,
    "contribution": "₱3,100",
    "total_loan_balance": "₱3,300",
    "remarks": "LOAN BAL: 3300 PHP, AMOUNT TO RECEIVE: ₱3100"
  },
  {
    "name": "2023-41482912",
    "heads": 1,
    "contribution": "-₱4,190",
    "total_loan_balance": "₱4,500",
    "remarks": "IN DEBT OF -4190 PHP"
  },
  {
    "name": "2023-89595150",
    "heads": 1,
    "contribution": "₱0",
    "total_loan_balance": "₱0",
    "remarks": "NOT STARTED"
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