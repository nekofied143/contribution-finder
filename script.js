// script.js
const data = [
  {
    "name": "2023-88812633",
    "heads": 2,
    "contribution": "₱1,000",
    "total_loan_balance": "₱7,800",
    "remarks": "Current month: February. In debt of ₱6,800."
  },
  {
    "name": "2023-82495168",
    "heads": 2,
    "contribution": "₱2,000",
    "total_loan_balance": "₱4,450",
    "remarks": "Current month: April. In debt of ₱2,450."
  },
  {
    "name": "2023-31247883",
    "heads": 2,
    "contribution": "₱2,240",
    "total_loan_balance": "₱0",
    "remarks": "Current month: April."
  },
  {
    "name": "2023-26777211",
    "heads": 2,
    "contribution": "₱3,100",
    "total_loan_balance": "₱0",
    "remarks" : "Current month: June."
  },
  {
    "name": "2023-22475295",
    "heads": 2,
    "contribution": "₱3,800",
    "total_loan_balance": "₱0",
    "remarks": "Current month: July."
  },
  {
    "name": "2023-16849664",
    "heads": 3,
    "contribution": "₱5,430",
    "total_loan_balance": "₱0",
    "remarks": "Current month: June."
  },
  {
    "name": "2023-69133791",
    "heads": 2,
    "contribution": "₱4,240",
    "total_loan_balance": "₱0",
    "remarks": "Current month: July."
  },
  {
    "name": "2023-20390853",
    "heads": 2,
    "contribution": "₱4,240",
    "total_loan_balance": "₱0",
    "remarks": "Current month: July."
  },
  {
    "name": "2023-14419159",
    "heads": 2,
    "contribution": "₱1,990",
    "total_loan_balance": "₱7,600",
    "remarks": "Current month: April. In debt of ₱5,610"
  },
  {
    "name": "2023-13716823",
    "heads": 3,
    "contribution": "₱5,000",
    "total_loan_balance": "₱0",
    "remarks": "Current month: June."
  },
  {
    "name": "2023-72045449",
    "heads": 1,
    "contribution": "₱590",
    "total_loan_balance": "₱4,500",
    "remarks": "Current month: February. In debt of ₱3,910"
  },
  {
    "name": "2023-10231996",
    "heads": 2,
    "contribution": "₱4,240",
    "total_loan_balance": "₱0",
    "remarks": "Current month: July."
  },
  {
    "name": "2023-09021996",
    "heads": 5,
    "contribution": "₱18,250",
    "total_loan_balance": "₱0",
    "remarks": "Completed the contribution."
  },
  {
    "name": "2023-82742042",
    "heads": 2,
    "contribution": "₱4,120",
    "total_loan_balance": "₱0",
    "remarks": "Current month: July"
  },
  {
    "name": "2023-42380641",
    "heads": 2,
    "contribution": "₱650",
    "total_loan_balance": "₱0",
    "remarks": "Current month: February."
  },
  {
    "name": "2023-27373139",
    "heads": 2,
    "contribution": "₱3,020",
    "total_loan_balance": "₱0",
    "remarks": "Current month: May."
  },
  {
    "name": "2023-78377119",
    "heads": 2,
    "contribution": "₱3,620",
    "total_loan_balance": "₱0",
    "remarks": "Current month: June."
  },
  {
    "name": "2023-15914771",
    "heads": 5,
    "contribution": "₱10,600",
    "total_loan_balance": "₱0",
    "remarks": "Current month: July."
  },
  {
    "name": "2023-46754777",
    "heads": 1,
    "contribution": "₱590",
    "total_loan_balance": "₱4,700",
    "remarks": "Current month: February. In debt of ₱4,110"
  },
  {
    "name": "2023-44664972",
    "heads": 2,
    "contribution": "₱620",
    "total_loan_balance": "₱0",
    "remarks": "Current month: January."
  },
  {
    "name": "2023-22746266",
    "heads": 5,
    "contribution": "₱10,150",
    "total_loan_balance": "₱0",
    "remarks": "Current month: July."
  },
  {
    "name": "2023-84772048",
    "heads": 5,
    "contribution": "₱9,050",
    "total_loan_balance": "₱0",
    "remarks": "Current month: June."
  },
  {
    "name": "2023-65004749",
    "heads": 2,
    "contribution": "₱3,020",
    "total_loan_balance": "₱4,200",
    "remarks": "Current month: May. In debt of ₱1,180"
  },
  {
    "name": "2023-52162295",
    "heads": 2,
    "contribution": "₱1,400",
    "total_loan_balance": "₱0",
    "remarks": "Current month: March."
  },
  {
    "name": "2023-94301759",
    "heads": 2,
    "contribution": "₱3,320",
    "total_loan_balance": "₱1,200",
    "remarks": "Current month: June."
  },
  {
    "name": "2023-44420688",
    "heads": 2,
    "contribution": "₱3,620",
    "total_loan_balance": "₱0",
    "remarks": "Current month: June."
  },
  {
    "name": "2023-81589758",
    "heads": 5,
    "contribution": "₱4,550",
    "total_loan_balance": "₱0",
    "remarks": "Current month: April."
  },
  {
    "name": "2023-19148758",
    "heads": 5,
    "contribution": "₱4,550",
    "total_loan_balance": "₱0",
    "remarks": "Current month: April."
  },
  {
    "name": "2023-73780810",
    "heads": 5,
    "contribution": "₱10,650",
    "total_loan_balance": "₱0",
    "remarks": "Current month: August."
  },
  {
    "name": "2023-45828884",
    "heads": 1,
    "contribution": "₱2,110",
    "total_loan_balance": "₱0",
    "remarks": "Current month: July."
  },
  {
    "name": "2023-10694296",
    "heads": 1,
    "contribution": "₱2,110",
    "total_loan_balance": "₱0",
    "remarks": "Current month: July."
  },
  {
    "name": "2023-34140960",
    "heads": 1,
    "contribution": "₱2,110",
    "total_loan_balance": "₱0",
    "remarks": "Current month: July."
  },
  {
    "name": "2023-47529130",
    "heads": 2,
    "contribution": "₱4,640",
    "total_loan_balance": "₱0",
    "remarks": "Current month: August."
  },
  {
    "name": "2023-66323649",
    "heads": 2,
    "contribution": "₱3,260",
    "total_loan_balance": "₱0",
    "remarks": "Current month: June."
  },
  {
    "name": "2023-28033548",
    "heads": 3,
    "contribution": "₱3,600",
    "total_loan_balance": "₱1,300",
    "remarks": "Current month: April."
  },
  {
    "name": "2023-46555468",
    "heads": 2,
    "contribution": "₱2,260",
    "total_loan_balance": "₱8,200",
    "remarks": "Current month: April. In debt of ₱5,940."
  },
  {
    "name": "2023-29124040",
    "heads": 2,
    "contribution": "₱2,540",
    "total_loan_balance": "₱8,400",
    "remarks": "Current month: May. In debt of ₱5,860."
  },
  {
    "name": "2023-37240217",
    "heads": 4,
    "contribution": "₱4,800",
    "total_loan_balance": "₱3,900",
    "remarks": "Current month: April."
  },
  {
    "name": "2023-17274476",
    "heads": 4,
    "contribution": "₱4,520",
    "total_loan_balance": "₱2,800",
    "remarks": "Current month: April."
  },
  {
    "name": "2023-86749518",
    "heads": 1,
    "contribution": "₱1,200",
    "total_loan_balance": "₱0",
    "remarks": "Current month: April."
  },
  {
    "name": "2023-72667050",
    "heads": 1,
    "contribution": "₱1,270",
    "total_loan_balance": "₱0",
    "remarks": "Current month: May."
  },
  {
    "name": "2023-62274550",
    "heads": 2,
    "contribution": "₱2,120",
    "total_loan_balance": "₱8,400",
    "remarks": "Current month: April. In debt of ₱6,280."
  },
  {
    "name": "2023-50458125",
    "heads": 2,
    "contribution": "₱4,240",
    "total_loan_balance": "₱2,000",
    "remarks": "Current month: July."
  },
  {
    "name": "2023-58087768",
    "heads": 1,
    "contribution": "₱1,810",
    "total_loan_balance": "₱1,200",
    "remarks": "Current month: June."
  },
  {
    "name": "2023-68227765",
    "heads": 2,
    "contribution": "₱3,920",
    "total_loan_balance": "₱0",
    "remarks": "Current month: July."
  },
  {
    "name": "2023-29326660",
    "heads": 3,
    "contribution": "₱6,400",
    "total_loan_balance": "₱3,300",
    "remarks": "Current month: August."
  },
  {
    "name": "2023-41482912",
    "heads": 1,
    "contribution": "₱310",
    "total_loan_balance": "₱4,500",
    "remarks": "Current month: January. In debt of ₱4,190"
  },
  {
    "name": "2023-89595150",
    "heads": 1,
    "contribution": "₱0",
    "total_loan_balance": "₱0",
    "remarks": "Current month: None."
  },
];

const searchInput = document.getElementById('searchInput');
const legendsContainer = document.querySelector('.legends-container');
const headsData = document.getElementById('headsData');
const contributionData = document.getElementById('contributionData');
const loanBalanceData = document.getElementById('loanBalanceData');
const remarksData = document.getElementById('remarksData');

// Add an event listener to the "Legends:" text to toggle the display of legends
legendsContainer.addEventListener('click', () => {
  toggleLegends();
});

// Add a separate event listener for the search bar to stop event propagation
searchInput.addEventListener('click', (event) => {
  event.stopPropagation(); // Stop the click event from propagating to parent elements
});

function toggleLegends() {
  const legendsText = document.querySelector('.legends-text');
  const legendsContent = document.querySelector('.legends-content');

  legendsContent.style.display = legendsContent.style.display === 'block' ? 'none' : 'block';
  legendsText.textContent = legendsContent.style.display === 'block' ? 'Click me ⋎' : 'Click me ≻';
}

function search() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  if (!searchTerm) {
    clearData();
    return;
  }

  const filteredData = data.find(item => item.name.toLowerCase() === searchTerm);

  if (filteredData) {
    displayData(filteredData);
  } else {
    displayError("No data exist!");
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

function displayError(message) {
  headsData.textContent = message;
  contributionData.textContent = message;
  loanBalanceData.textContent = message;
  remarksData.textContent = message;
}