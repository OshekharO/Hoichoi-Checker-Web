const form = document.getElementById('email-checker-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    fetch('https://prod-api.viewlift.com/identity/signin?site=hoichoitv&deviceId=browser-8dad7421-d550-76e6-193b-43da822a6038', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': 'PBSooUe91s7RNRKnXTmQG7z3gwD2aDTA6TlJp6ef'
        },
        body: JSON.stringify({ email, password })
    })
   .then(response => response.json())
   .then((data) => {
        if (data.error) {
            resultDiv.innerHTML = `<p class="error">${data.error}</p>`;
        } else {
            resultDiv.innerHTML = `<p>Name: ${data.name}</p><p>Email is valid!</p> <p>Subscribed: ${data.isSubscribed}</p>`;
        }
    })
   .catch((error) => {
        resultDiv.innerHTML = `<p class="error">Error: ${error.message}</p>`;
    });
});
