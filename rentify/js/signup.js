document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const firstname = document.getElementById('firstName').value;
    const lastname = document.getElementById('lastName').value;
    const phonenumber = document.getElementById('phoneNumber').value;
    const type = document.getElementById('type') == 'buyer';

    const data = {
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname,
        phonenumber: phonenumber,
        type: type
    };

    fetch('https://web-6nxbzmltd9q5.up-de-fra1-k8s-1.apps.run-on-seenode.com/api/users/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.email) {
            window.location.href = "login.html";
        } else {
            document.getElementById('registerResponse').textContent = 'Registration failed: ' + (data.message || 'Unknown error');
        }
    })
    .catch((error) => {
        document.getElementById('registerResponse').textContent = 'Error: ' + error.message;
    });
});