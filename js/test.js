const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
	e.preventDefault();
	
	// get user info
	const email = signupForm['signup-email'].value;
	const password = signupForm['signup-password'].value;
  
	// sign up the user
	auth.createUserWithEmailAndPassword(email, password).then(cred => {

	  signupForm.reset();
	});
});


// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log('user signed out');
  })
});
