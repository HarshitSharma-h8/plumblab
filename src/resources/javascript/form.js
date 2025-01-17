document.getElementById('contact-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        service: document.getElementById('service').value,
        contact: document.getElementById('contact').value,
    };

    const responseMessage = document.getElementById('responseMessage');

    try {
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        console.log(result);


        // Show success or error message
        responseMessage.innerText = result.message || 'An error occurred.';
        responseMessage.style.display = 'block';

        if (result.statusCode != 200) {
            responseMessage.classList.add('error')
        } else {
            responseMessage.classList.add('success'); // Add success styling
        }


        if (response.ok) {
            // Reset the form after a successful submission
            document.getElementById('contact-form').reset();
        }
    } catch (error) {
        responseMessage.innerText = 'An error occurred while sending the email.';
        responseMessage.style.display = 'block';
        responseMessage.classList.add('error'); // Add error styling
    }

    // Automatically hide the message after 5 seconds
    setTimeout(() => {
        responseMessage.style.display = 'none';
        responseMessage.classList.remove('success', 'error'); // Remove styling classes
    }, 5000);
});