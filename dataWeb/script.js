document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('file-input');
    const jsonEditor = document.getElementById('json-editor');
    const saveButton = document.getElementById('save-button');
    const downloadButton = document.getElementById('download-button');
    const clearButton = document.getElementById('clear-button');
    const cardsContainer = document.getElementById('cards-container');
    const vehicleDetailsContainer = document.getElementById('vehicle-details');
  
    // Load data from localStorage if available
    const storedData = localStorage.getItem('vehicles');
    if (storedData) {
      jsonEditor.value = storedData;
      displayVehicleCards(JSON.parse(storedData));
    }
  
    // Handle file upload
    fileInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const content = e.target.result;
          jsonEditor.value = content;
          localStorage.setItem('vehicles', content);
          displayVehicleCards(JSON.parse(content));
        };
        reader.readAsText(file);
      }
    });
  
    // Handle save button click
    saveButton.addEventListener('click', () => {
      const content = jsonEditor.value;
      localStorage.setItem('vehicles', content);
      displayVehicleCards(JSON.parse(content));
    });
  
    // Handle download button click
    downloadButton.addEventListener('click', () => {
      const content = jsonEditor.value;
      const blob = new Blob([content], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'vehicles.json';
      a.click();
      URL.revokeObjectURL(url);
    });
  
    // Handle clear button click
    clearButton.addEventListener('click', () => {
      localStorage.removeItem('vehicles');
      jsonEditor.value = '';
      cardsContainer.innerHTML = '';
      vehicleDetailsContainer.innerHTML = '';
    });
  
    // Function to display vehicle cards
    function displayVehicleCards(vehicles) {
      cardsContainer.innerHTML = '';
      vehicles.forEach((vehicle) => {
        const card = document.createElement('div');
        card.className = 'card';
  
        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';
  
        const image = document.createElement('img');
        image.className = 'image';
        image.src = vehicle.image;
        image.alt = vehicle.name;
        imageContainer.appendChild(image);
  
        const title = document.createElement('h2');
        title.className = 'title';
        title.textContent = vehicle.name;
  
        const description = document.createElement('p');
        description.className = 'description';
        description.textContent = vehicle.description;
  
        const moreLink = document.createElement('a');
        moreLink.className = 'more-link';
        moreLink.href = '#';
        moreLink.textContent = 'Learn More';
        moreLink.addEventListener('click', () => displayVehicleDetails(vehicle));
  
        card.appendChild(imageContainer);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(moreLink);
        cardsContainer.appendChild(card);
      });
    }
  
    // Function to display vehicle details
    function displayVehicleDetails(vehicle) {
      vehicleDetailsContainer.innerHTML = `
        <img src="${vehicle.image}" alt="${vehicle.name}">
        <h2>${vehicle.name}</h2>
        <p><strong>Developer:</strong> ${vehicle.developer}</p>
        <p><strong>Description:</strong> ${vehicle.description}</p>
        <h3>Specifications</h3>
        <div class="specifications">
          ${vehicle.specifications ? Object.entries(vehicle.specifications).map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`).join('') : '<p>None</p>'}
        </div>
        <h3>Armament</h3>
        <div class="armament">
          ${vehicle.armament ? Object.entries(vehicle.armament).map(([key, value]) => {
            if (Array.isArray(value)) {
              return `<p><strong>${key}:</strong> ${value.join(', ')}</p>`;
            }
            return `<p><strong>${key}:</strong> ${value}</p>`;
          }).join('') : '<p>None</p>'}
        </div>
        <h3>Avionics</h3>
        <div class="avionics">
          ${vehicle.avionics ? Object.entries(vehicle.avionics).map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`).join('') : '<p>None</p>'}
        </div>
        <h3>Stealth Features</h3>
        <div class="stealth">
          ${vehicle.stealth ? Object.entries(vehicle.stealth).map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`).join('') : '<p>None</p>'}
        </div>
        <h3>Maneuverability</h3>
        <div class="maneuverability">
          ${vehicle.maneuverability ? Object.entries(vehicle.maneuverability).map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`).join('') : '<p>None</p>'}
        </div>
        <h3>Role</h3>
        <p>${vehicle.role}</p>
        <h3>Development History</h3>
        <div class="development">
          ${vehicle.development ? Object.entries(vehicle.development).map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`).join('') : '<p>None</p>'}
        </div>
        <h3>Deployment</h3>
        <div class="deployment">
          ${vehicle.deployment ? Object.entries(vehicle.deployment).map(([key, value]) => {
            if (Array.isArray(value)) {
              return `<p><strong>${key}:</strong> ${value.join(', ')}</p>`;
            }
            return `<p><strong>${key}:</strong> ${value}</p>`;
          }).join('') : '<p>None</p>'}
        </div>
        <h3>Additional Info</h3>
        <p>${vehicle.additionalInfo}</p>
      `;
    }
  });
  