const container = document.getElementById('cards-container');

fetch('https://dummyjson.com/users')
  .then(response => response.json())
  .then(data => {
    data.users.forEach(user => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${user.image}" alt="${user.firstName}" />
        <p><strong>Name:</strong> ${user.firstName} ${user.lastName}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Company:</strong> ${user.company.name}</p>
        <p><strong>City:</strong> ${user.address.city}</p>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => {
    container.innerHTML = `<p style="color: red;">Failed to fetch user data.</p>`;
    console.error('Error:', error);
  });
