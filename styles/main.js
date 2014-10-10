//Header Authentication Buttons   
var loginModal = document.querySelector('.login-modal');
var lightbox = document.querySelector('.lightbox');
var cancelButton = document.querySelector("#cancel");
var signIn = document.querySelector('#sign-in');
	
function hide(element) {
	element.style.display="none";
}
	
function show(element) {
	element.style.display="block";
}
	
lightbox.addEventListener( 'click', function(){
	hide(loginModal);
})
	
cancelButton.addEventListener( 'click', function(){ 
	hide(loginModal);
})
	
signIn.addEventListener('click', function(){
	show(loginModal);
})

