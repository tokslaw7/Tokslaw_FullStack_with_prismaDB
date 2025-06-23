import './styles.css';


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
        <ul class="item-list">
            ${data.map(item => `
        <li class="item-card">
            <div class="avatar-container">
               <strong>Avatar</strong><img src="${item.avatar}" alt="Avatar of ${item.name}" class="avatar">
               <div class="avatar-name">${item.username}</div>
            </div>
            <h2>${item.name}</h2>
            <p><strong>Role:</strong> ${item.role}</p>
            <p><strong>Email:</strong> ${item.email}</p>
            <p><strong>Username:</strong> ${item.username}</p>
            <p><strong>UUID:</strong> ${item.userId}</p>
            <p><strong>Initial Password:</strong> ${item.password}</p>
            <p><strong>Birthdate:</strong> ${new Date(item.birthdate).toDateString()}</p>
            <p><strong>Registered:</strong> ${new Date(item.registeredAt).toDateString()}</p>
            <p><strong>Created On:</strong> ${new Date(item.createdAt).toDateString()}</p>
            <p><strong>Updated On:</strong> ${new Date(item.updatedAt).toDateString()}</p> 
            <p><strong>Profile Bio:</strong> ${item.profile?.bio || 'N/A'}</p><br>
            <ul>
            </ul>
        </li>
    `).join('')}
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

//change theme
 document.getElementById('toggle').addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });