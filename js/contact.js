// Listen for form submit
document.getElementById('commentForm').addEventListener('cnt-btn', contactForm);

// Submit form
function contactForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('contact-name');
    //var email = getInputVal('email');
    var message = getInputVal('contact-message');

    // Save message
    saveMessage(name, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Clear form
    document.getElementById('commentForm').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        //company: company,
        //email: email,
        //phone: phone,
        message: message
    });
}