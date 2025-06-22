const dataContainer = document.getElementById('app');

async function fetchAndDisplayData() {
 try {
    dataContainer.textContent = 'Loading data...';
    const response = await fetch('http://localhost:5557/api/data');
     if (!response.ok) {
            console.log(`response not okay`)
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    const data = await response.json();
    console.log(data)

    // Display the data
    if (data.length === 0) {
    dataContainer.textContent = 'No data found';
    return;
    }

    // Create HTML for the data
    const html = `
        <ul>
            ${data.map(item => `
                <li>
                    <h2>${item.name}</h2>
                    <strong>Role: </strong>${item.role}<br>
                    <strong>Email: </strong>${item.email}<br>
                </li>`
            ).join('')}
        </ul>
    `
    dataContainer.innerHTML = html;

    } catch (error) {
        console.error('Error:', error);
 	    dataContainer.textContent = 'Failed to load data. Check console for details.';
    }
}

// Fetch and display data when the page loads
document.addEventListener('DOMContentLoaded', fetchAndDisplayData);