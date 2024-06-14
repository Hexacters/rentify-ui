document.getElementById('propertyForm').addEventListener('submit', function(event) {
    event.preventDefault();
	const userData = JSON.parse(localStorage.getItem('user'));
    if (!userData.id) {
        return;
    }
    const formData = new FormData();
    formData.append('userid', userData.id);
    formData.append('name', document.getElementById('name').value);
    formData.append('street', document.getElementById('street').value);
    formData.append('district', document.getElementById('district').value);
    formData.append('state', document.getElementById('state').value);
    formData.append('housetype', document.getElementById('housetype').value);
    formData.append('floor', document.getElementById('floor').value);
    formData.append('numberofbedroom', document.getElementById('numberofbedroom').value);
    formData.append('numberofbathroom', document.getElementById('numberofbathroom').value);
    formData.append('hospital', document.getElementById('hospital').value);
    formData.append('school', document.getElementById('school').value);
    formData.append('college', document.getElementById('college').value);
    formData.append('price', document.getElementById('price').value);
    formData.append('file', document.getElementById('file').files[0]);
    console.log(formData)

    fetch('https://web-6nxbzmltd9q5.up-de-fra1-k8s-1.apps.run-on-seenode.com/api/property/', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
          window.location.href = "myproperty.html";
        document.getElementById('response').textContent = 'Property added successfully!';
    })
    .catch(error => {
        document.getElementById('response').textContent = 'Error adding property: ' + error.message;
    });
});
