document.addEventListener('DOMContentLoaded', function () {
    fetch('http://worldclockapi.com/api/json/utc/now')
        .then(response => response.json())
        .then(data => {
            let currentDate = data.currentDateTime;
            const timeDiv = document.getElementById("time");
            timeDiv.innerHTML = `${currentDate}`;
        })
        .catch(error => {
            console.error('Error fetching current date:', error);
        });
});