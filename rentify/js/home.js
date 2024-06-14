
document.addEventListener('DOMContentLoaded', function () {
    const userData = JSON.parse(localStorage.getItem('user'));

    fetch(`https://web-6nxbzmltd9q5.up-de-fra1-k8s-1.apps.run-on-seenode.com/api/property/?page=0&limit=8`)
        .then(response => response.json())
        .then(data => {
            const propertyContainer = document.getElementById('propertyContainer');
            data.forEach(property => {
                const card = document.createElement('div');
                card.className = 'box';
                card.innerHTML = `
                <a class="text-decoration-none text-dark" href="viewpropertyimage.html#${property.id}">
                    <img src="https://web-6nxbzmltd9q5.up-de-fra1-k8s-1.apps.run-on-seenode.com/api/image/show?id=${property.image[0].id}" alt="Property Image">
                    <h3>₹${property.price} P/m</h3>
                    <div class="content">
                        <div class="text">
                            <h3>${property.name}</h3>
                            <p>${property.district}, ${property.street}</p>
                        </div>
                        <div class="icon">
                            <i class='bx bx-bed'><span>${property.numberofbedroom}</span></i>
                            <i class='bx bx-bath'><span>${property.numberofbathroom}</span></i>
                        </div>
                    </div>
                </a>
                `;
                propertyContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching property data:', error));
});
