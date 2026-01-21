async function initHomeHighlights() {
    try {
        const response = await fetch('resource/resources.json');
        const data = await response.json();
        const container = document.getElementById('event-container');
        
        // Show the first 3 resources as "Highlights"
        data.slice(0, 3).forEach(item => {
            const card = `
                <div class="filtered-event">
                    <img src="${item.image}" class="filev-img" alt="${item.name}">
                    <div class="caption">
                        <h4>${item.name}</h4>
                        <p>${item.tags.join(' | ')}</p>
                        <a href="resource/index.html?id=${item.id}" class="cta-primary" style="display:inline-block; margin-top:10px; font-size:12px;">View Details</a>
                    </div>
                </div>
            `;
            container.innerHTML += card;
        });
    } catch (e) {
        console.error("Could not load resources", e);
    }
}

initHomeHighlights();