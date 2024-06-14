document.addEventListener('DOMContentLoaded', function() {
    const id = window.location.hash.replace('#', '');
    fetch('https://web-6nxbzmltd9q5.up-de-fra1-k8s-1.apps.run-on-seenode.com/api/property/post/' + id)
        .then(response => response.json())
        .then(property => {
            fetch('https://web-6nxbzmltd9q5.up-de-fra1-k8s-1.apps.run-on-seenode.com/api/image/' + id).then(response => response.json()).then((image) => {
                const propertyList = document.getElementById('propertyList');
                const propertyCard = document.createElement('div');
                propertyCard.className = 'col-md-12 mb-4';
                propertyCard.innerHTML = `
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <img src="https://web-6nxbzmltd9q5.up-de-fra1-k8s-1.apps.run-on-seenode.com/api/image/show?id=${image[0].id}" class="img-fluid property-image" alt="Property Image" >
                        </div>
                        <div class="col-md-6">
                             <h1 class="display-6 text-dark font-weight-bold">${property.name}</h1>
                            <h2 class="display-4 text-dark font-weight-bold">${property.housetype}</h2>
                            <p class="text-secondary h5">${property.street}, ${property.district}, ${property.state}</p>
                            <div class="mt-3 d-block">
                                <button class="badge badge-custom p-2"><span>I'm Interested</span></button>
                               
                            </div>
                            <div class="mt-3 h6 text-dark">
                                <i class='bx bx-bed me-3'><span> Bed Rooms: ${property.numberofbedroom}</span></i>
                                <i class='bx bx-bath'><span>Bath rooms: ${property.numberofbathroom}</span></i>
                            </div>
                            <div class="mt-3 h6"> 
                                <i class='bx bxs-school'><span> Schools: ${property.school} KM</span></i>
                                <i class='bx bxs-graduation' ><span> Collage: ${property.collage} KM</span></i>
                                <i class='bx bx-plus-medical' ><span> Hospital: ${property.hospital} KM</span></i>
                            </div>
                             <h2 class="text-primary font-weight-bold mt-3">₹${property.price}</h2>
                        </div>
                    </div>
                `;
                propertyList.appendChild(propertyCard);
            })
            
        })
        .catch(error => console.error('Error fetching property data:', error));


    fetch(`https://web-6nxbzmltd9q5.up-de-fra1-k8s-1.apps.run-on-seenode.com/api/property/?page=0&limit=4`)
        .then(response => response.json())
        .then(data => {
            const propertyContainer = document.getElementById('mycontainer');
            data.forEach(property => {
                const card = document.createElement('div');
                card.className = 'box';
                card.innerHTML = `
                <a class="text-decoration-none text-dark" href="viewpropertyimage.html#${property.id}" target="_blank">
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


