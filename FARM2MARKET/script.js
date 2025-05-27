document.addEventListener('DOMContentLoaded', () => {
  const farmerForm = document.getElementById('farmerForm');
  const searchInput = document.getElementById('searchInput');
  const cropResults = document.getElementById('cropResults');

  // Placeholder: Store crop info (can be updated with Supabase insert)
  if (farmerForm) {
    farmerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const crop = {
        name: document.getElementById('cropName').value,
        quantity: document.getElementById('quantity').value,
        location: document.getElementById('location').value,
        farmer: document.getElementById('farmerName').value,
        contact: document.getElementById('contact').value,
      };
      console.log('Crop submitted:', crop); // Replace with Supabase insert
      alert('Submitted crop info successfully!');
      farmerForm.reset();
    });
  }

  // Placeholder: Static crop data
  const cropData = [
    { name: 'Tomatoes', quantity: '100kg', farmer: 'Anna', location: 'Lusaka', contact: 'anna@example.com' },
    { name: 'Onions', quantity: '50kg', farmer: 'John', location: 'Ndola', contact: 'john@example.com' },
    { name: 'Maize', quantity: '200kg', farmer: 'Chipo', location: 'Kitwe', contact: 'chipo@example.com' }
  ];

  // Search logic
  if (searchInput && cropResults) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      cropResults.innerHTML = '';
      const filtered = cropData.filter(crop => crop.name.toLowerCase().includes(query));
      filtered.forEach(crop => {
        const card = document.createElement('div');
        card.className = 'crop-card';
        card.innerHTML = `
          <h4>${crop.name}</h4>
          <p><strong>Quantity:</strong> ${crop.quantity}</p>
          <p><strong>Farmer:</strong> ${crop.farmer}</p>
          <p><strong>Location:</strong> ${crop.location}</p>
          <p><strong>Contact:</strong> ${crop.contact}</p>
        `;
        cropResults.appendChild(card);
      });
    });
  }
});
