const searchInput = document.getElementById("searchInput"),
   legendsContainer = document.querySelector(".legends-container"),
   calculatorContributionContainer = document.querySelector(".contribution-calculator-container"),
   calculatorContainer = document.querySelector(".calculator-container"),
   loandebtContainer = document.querySelector(".loan-debt-container"),
   headsData = document.getElementById("headsData"),
   headsData1 = document.getElementById("contributionHeads"),
   contributionData = document.getElementById("contributionData"),
   loanBalanceData = document.getElementById("loanBalanceData"),
   remarksData = document.getElementById("remarksData"),
   announcement = document.getElementById("announcement"),
   dataTable = document.getElementById("dataTable"),
   currentDateElement = document.getElementById("currentDate"),
   contributionCalculationElement = document.getElementById("contributionCalculation"),
   loanDebtCalculationElement = document.getElementById("loanDebtCalculation"),
   estimatedDateElement = document.getElementById("estimatedDate"),
   estimatedDate1Element = document.getElementById("estimatedDate1"),
   estimatedDate2Element = document.getElementById("contributionStartDate"); 

function toggleLegends() {
   const t = document.querySelector(".legends-text"),
      n = document.querySelector(".legends-content");
   n.style.display = "block" === n.style.display ? "none" : "block", t.textContent = "block" === n.style.display ? "Click me ⋎" : "Click me ≻"
}
legendsContainer.addEventListener("click", () => {
   toggleLegends()
});

function toggleContributionCalculator() {
   const t = document.querySelector(".contribution-calculator-text"),
      n = document.querySelector(".contribution-calculator-content");
   n.style.display = "block" === n.style.display ? "non" : "block", t.textContent = "block" === n.style.display ? "CONTRIBUTION CALCULATOR ⋎" : "CONTRIBUTION CALCULATOR ≻"
}
calculatorContributionContainer.addEventListener("click", () => {
   toggleContributionCalculator()
});

function toggleCalculator() {
   const t = document.querySelector(".calculator-text"),
      n = document.querySelector(".calculator-content");
   n.style.display = "block" === n.style.display ? "none" : "block", t.textContent = "block" === n.style.display ? "CONTRIBUTION DATE CALCULATOR ⋎" : "CONTRIBUTION DATE CALCULATOR ≻"
}
calculatorContainer.addEventListener("click", () => {
   toggleCalculator()
});

function toggleLoanDebt() {
   const t = document.querySelector(".loan-debt-text"),
      n = document.querySelector(".loan-debt-content");
   n.style.display = "block" === n.style.display ? "none" : "block", t.textContent = "block" === n.style.display ? "LOAN/DEBT CALCULATOR ⋎" : "LOAN/DEBT CALCULATOR ≻"
}
loandebtContainer.addEventListener("click", () => {
   toggleLoanDebt()
});

document.addEventListener('DOMContentLoaded', function () {
   flatpickr("#contributionEndDate", {
      dateFormat: "m/d/Y"
   });
});

function calculateContribution() {
   const contributionHeadsElement = document.getElementById("contributionHeads"),
      contributionStartDateElement = document.getElementById("contributionStartDate"),
      contributionEndDateElement = document.getElementById("contributionEndDate"),
      calculatedAmountElement = document.getElementById("calculatedAmount"),
      startDate = new Date(estimatedDate2Element.textContent),
      endDate = new Date(contributionEndDateElement.value);

   if (startDate > endDate) {
      calculatedAmountElement.textContent = "Error: START DATE is later than SELECT DATE!";
      calculatedAmountElement.style.color = "red";
      saveButton.style.display = "none";
   } else {
      const timeDiff = Math.abs(endDate.getTime() + 1 - startDate.getTime()),
         daysDifference = Math.ceil(timeDiff / (1000 * 3600 * 24));

      const heads = parseInt(headsData.textContent),
         calculatedAmount = daysDifference * heads * 10;

      const formattedAmount = calculatedAmount.toLocaleString();

      contributionHeadsElement.textContent = heads;
      contributionStartDateElement.textContent = startDate.toLocaleDateString();
      calculatedAmountElement.textContent = `₱${formattedAmount}`;
      calculatedAmountElement.style.color = "black";

      // Show save button after calculating contribution if SELECT DATE is filled
      if (contributionEndDateElement.value) {
         saveButton.style.display = "block";
      }
   }
}

// Function to get total days in the current year
function getTotalDaysInYear(year) {
   const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
   return isLeapYear ? 366 : 365;
}

const AK = 'AIzaSyBcrPHmNDUjjDMHe6XViIUpxZYFLhdBdCY';
const SI = '1we7yGfbRW9UxmX2r6sLKJk8meSTmVu4YVjrhmpimylc';
const R = 'FINDER!A2:E51';

// Function to fetch data from Google Sheets API based on search input
function fetchDataFromSheets(searchInput) {
   if (!searchInput) {
      console.log('Search input is empty.');
      return;
   }

   const url = `https://sheets.googleapis.com/v4/spreadsheets/${SI}/values/${R}?key=${AK}`;

   fetch(url)
      .then(response => response.json())
      .then(data => {

         // Convert search input to lowercase for case-insensitive comparison
         const searchValueLower = searchInput.toLowerCase();

         // Find the row where the searchInput value matches in column A
         const foundRow = data.values.findIndex(row => row[0].toLowerCase() === searchValueLower);

         // Assuming the data returned is an array of rows
         if (foundRow !== -1) {
            const [_, headsDataF, contributionDataF, loanBalanceDataF, nameF] = data.values[foundRow];
            headsData.textContent = headsDataF;
            contributionData.textContent = `₱${parseFloat(contributionDataF).toLocaleString()}`;
            loanBalanceData.textContent = `₱${parseFloat(loanBalanceDataF).toLocaleString()}`;
            userName = nameF; // Store the name

            const n = contributionDataF,
               e = headsDataF,
               a = loanBalanceDataF,
               o = new Date;
 
            z1 = "Not Started. ";
            z2 = "Understand that it will not be accurate every time you check your contribution data due to busy in work. Rest assured, we're updating it as soon as we have the time available. Thank you!";
            z3 = "Contribution In-progress. ";
            z4 = "Contribution complete. Congratulations! ";
            z5 = "Open Loan/Debt Calculator for more info. ";
            z6 = "Contribution balance to complete: ";

            const currentYear = new Date().getFullYear();
            const totalDaysInYear = getTotalDaysInYear(currentYear);
            const totalcontribution = totalDaysInYear * e * 10;
            const totalTargetContribution = (totalDaysInYear * e * 10 - n).toLocaleString();

            if (n == 0 && a != 0) {
               remarksData.textContent = z1 + z5 + z6 + `₱${totalTargetContribution}.`;
               announcement.textContent = z2;
            } else if (n == totalcontribution && a != 0) {
               remarksData.textContent = z4 + z5 + z6 + `₱${totalTargetContribution}.`;
               announcement.textContent = z2;
            } else if (n == totalcontribution) {
               remarksData.textContent = z4;
               announcement.textContent = z2;
            } else if (n != totalcontribution && a != 0) {
               remarksData.textContent = z5 + z6 + `₱${totalTargetContribution}.`;
               announcement.textContent = z2;
            } else if (n != 0 && a == 0) {
               remarksData.textContent = z6 + `₱${totalTargetContribution}.`;
               announcement.textContent = z2;
            } else {
               remarksData.textContent = z1 + z6 + `₱${totalTargetContribution}.`;
               announcement.textContent = z2;
            }

            currentDateElement.textContent = o.toLocaleDateString();

            const r = n / (10 * e);
            contributionCalculationElement.textContent = `₱${parseFloat(n).toLocaleString()} / ₱10 / ${e} = ${r} days`;

            const l = new Date(o.getFullYear(), 0, 1 + r - 1);
            estimatedDateElement.textContent = l.toLocaleDateString();

            const c = new Date(o.getFullYear(), 0, 1 + r - 1);
            estimatedDate1Element.textContent = c.toLocaleDateString();

            const d = new Date(o.getFullYear(), 0, 1 + r);
            estimatedDate2Element.textContent = d.toLocaleDateString();

            const m = n - a,
               fm = parseFloat(m).toLocaleString(),
               fn = parseFloat(n).toLocaleString(),
               fa = parseFloat(a).toLocaleString();
            loanDebtCalculationElement.textContent = `₱${fn} - ₱${fa} = ₱${fm}`
            if (m < 0) {
               loanDebtCalculationElement.style.color = "red";
            } else {
               loanDebtCalculationElement.style.color = "black";
            }

            const highlightnote1Element = document.getElementById("highlightnote1");
            const highlightnote2Element = document.getElementById("highlightnote2");
            const highlightnote3Element = document.getElementById("highlightnote3");
            const highlightnote4Element = document.getElementById("highlightnote4");
            const highlightnote5Element = document.getElementById("highlightnote5");

            // Reset all notes to black
            highlightnote1Element.style.color = "black";
            highlightnote2Element.style.color = "black";
            highlightnote3Element.style.color = "black";
            highlightnote4Element.style.color = "black";
            highlightnote5Element.style.color = "black";

            if (m < 0) {
               highlightnote5Element.style.color = "red";
            } else {
               if (m == totalcontribution) {
                  highlightnote1Element.style.color = "green";
               } else if (n != totalcontribution && m == n && m != 0) {
                  highlightnote2Element.style.color = "green";
               } else if (n != totalcontribution && m != 0) {
                  highlightnote3Element.style.color = "green";
               } else if (n == totalcontribution || a != 0) {
                  highlightnote4Element.style.color = "green";
               }
            }

            calculateContribution();

         } else {
            // Handle the case where no data is found
            headsData.textContent = 'No data exist!';
            contributionData.textContent = 'No data exist!';
            loanBalanceData.textContent = 'No data exist!';
            remarksData.textContent = 'No data exist!';
         }
      })
      .catch(error => {
         console.error('Error fetching data:', error);
      });
}

// Add event listener to search input for keyup event
document.getElementById("contributionEndDate").addEventListener("change", calculateContribution);
searchInput.addEventListener('keyup', function (event) {
   const searchText = event.target.value.trim(); // Trim whitespace from input

   if (searchText !== '') {
      fetchDataFromSheets(searchText); // Call function to fetch data when search input is not empty
   } else {
      // Clear the data displayed when search input is empty
      const dataElements = document.querySelectorAll('.data-container td');
      dataElements.forEach(element => {
         element.textContent = '';
      });
      const contributionEndDateInput = document.getElementById("contributionEndDate");
      contributionEndDateInput.value = '';
      document.getElementById("contributionHeads").textContent = '';
      document.getElementById("contributionStartDate").textContent = '';
      document.getElementById("calculatedAmount").textContent = '';
      document.getElementById("currentDate").textContent = '';
      document.getElementById("estimatedDate").textContent = '';
      document.getElementById("contributionCalculation").textContent = '';
      document.getElementById("announcement").textContent = '';
      document.getElementById("estimatedDate1").textContent = '';
      document.getElementById("loanDebtCalculation").textContent = '';
      document.getElementById("highlightnote1").style.color = 'black';
      document.getElementById("highlightnote2").style.color = 'black';
      document.getElementById("highlightnote3").style.color = 'black';
      document.getElementById("highlightnote4").style.color = 'black';
      document.getElementById("highlightnote5").style.color = 'black';
      document.getElementById("saveButton").style.display = "none";
   }
});

// Add a save IMAGE button
const saveButton = document.createElement("button");
saveButton.id = "saveButton";
saveButton.textContent = "IMAGE";
saveButton.style.display = "none";
document.querySelector(".contribution-calculator-container").appendChild(saveButton);

saveButton.addEventListener("click", () => {
   
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}${(currentDate.getMonth() + 1).toString().padStart(2, '0')}${currentDate.getDate().toString().padStart(2, '0')}`;
    const formattedTime = `${currentDate.getHours().toString().padStart(2, '0')}${currentDate.getMinutes().toString().padStart(2, '0')}${currentDate.getSeconds().toString().padStart(2, '0')}`;
    const fileName = `CONTRIBUTION_${userName}_${formattedDate}_${formattedTime}.jpeg`;

    const receiptContent = `
        <div class="receipt" id="receiptDiv" style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 366px; height: 366px; box-sizing: border-box;">
            <div style="width: 300px; border: 1px solid black; padding: 20px; box-sizing: border-box;">
                <h3 style="text-align: center;">SINKING FUND ${new Date().getFullYear()}</h3>
                <small><strong>DATE GENERATED:</strong> ${new Date().toLocaleDateString()}</small>
                <p><strong>NAME:</strong> ${userName}</p>
                <p><strong>NO. OF HEAD/S:</strong> ${headsData.textContent}</p>
                <p><strong>START DATE:</strong> ${estimatedDate2Element.textContent}</p>
                <p><strong>SELECTED DATE:</strong> ${document.getElementById("contributionEndDate").value}</p>
                <p><strong>AMOUNT TO PAY:</strong> ${document.getElementById("calculatedAmount").textContent}</p>
                <small>Present this to the handler to serve as your contribution receipt and please pay the exact amount based on the amount shown.</small>
            </div>
        </div>
    `;

    // Create a temporary div for the receipt content
    const receiptDiv = document.createElement('div');
    receiptDiv.innerHTML = receiptContent;
    document.body.appendChild(receiptDiv);

    // Use html2canvas to capture the receipt content
    html2canvas(receiptDiv.querySelector('div'), { width: 366, height: 366 }).then(canvas => {
        // Create a link element to download the canvas as an image
        const link = document.createElement('a');
        link.download = fileName;
        link.href = canvas.toDataURL('image/jpeg');
        link.click(); 

        // Remove the temporary div after the canvas has been captured
        document.body.removeChild(receiptDiv);
    }).catch(error => {
        console.error("Error generating JPEG:", error);
    });
});