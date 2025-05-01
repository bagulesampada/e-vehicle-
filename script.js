
const cars = [
  { id: 1, name: "Tesla Model 3", price: 40000, range: 350, image: "https://link-to-image.com" },
  { id: 2, name: "Nissan Leaf", price: 30000, range: 225, image: "https://link-to-image.com" },
  { id: 3, name: "Chevrolet Bolt", price: 35000, range: 259, image: "https://link-to-image.com" },
  { id: 4, name: "Ford Mustang Mach-E", price: 60000, range: 300, image: "https://link-to-image.com" }
];

document.getElementById('priceFilter').addEventListener('input', function(event) {
  const price = event.target.value;
  document.getElementById('priceValue').innerText = `$${price}`;

  const filteredCars = cars.filter(car => car.price <= price);
  displayCars(filteredCars);
});

function displayCars(carsToDisplay) {
  const carList = document.getElementById('evList');
  carList.innerHTML = ''; // Clear the existing list

  carsToDisplay.forEach(car => {
    const carCard = document.createElement('div');
    carCard.classList.add('ev-card');
    carCard.innerHTML = `
      <img src="${car.image}" alt="${car.name}">
      <h3>${car.name}</h3>
      <p>Range: ${car.range} miles</p>
      <p class="price">$${car.price}</p>
    `;
    carList.appendChild(carCard);
  });
}

// Initial display of all cars
displayCars(cars);
    
