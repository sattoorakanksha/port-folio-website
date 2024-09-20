document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    alert(`Thank you, ${name}! I will reach out to you via email (${email}) soon.`);
  
    // You can add functionality to send the form data to your email or server here
  });
