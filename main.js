// Surprise Me Button Logic
function surpriseMe() {
    // Relative path to find the database
    fetch('resource/resources.json')
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);
            // Redirects to the resource page with the random ID
            window.location.href = `resource/index.html?id=${randomIndex}`;
        })
        .catch(err => console.error("Error fetching resources:", err));
}