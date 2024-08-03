document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch announcements from Google Sheets
    function fetchAnnouncement() {
        const sheetId = '1we7yGfbRW9UxmX2r6sLKJk8meSTmVu4YVjrhmpimylc'; // Replace with your Sheet ID
        const range = 'FINDER!F2:F51'; // Replace with your range
        const apiKey = 'AIzaSyBcrPHmNDUjjDMHe6XViIUpxZYFLhdBdCY'; // Replace with your API key

        const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const announcements = data.values.map(row => `<li>${row[0]}</li>`).join('');
                document.getElementById('announcementList').innerHTML = announcements;
                showAnnouncementModal();
            })
            .catch(error => {
                console.error('Error fetching announcement data:', error);
            });
    }

    // Function to show the announcement modal
    function showAnnouncementModal() {
        const modal = document.getElementById('announcementModal');
        const closeBtn = document.getElementById('closeAnnouncement');

        modal.classList.add('fade-in');
        modal.classList.remove('fade-out');
        modal.style.display = 'block';

        // When the user clicks on <span> (x), close the modal
        closeBtn.onclick = function() {
            modal.classList.add('fade-out');
            modal.classList.remove('fade-in');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 500); // Match the fade-out duration
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target === modal) {
                closeBtn.click(); // Trigger the close button click
            }
        }
    }

    // Fetch announcement data and show the modal on each visit
    fetchAnnouncement();
});
