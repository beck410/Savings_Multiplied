//VARIABLES
//Header Authentication Buttons   
var loginModal = document.querySelector('.login-modal');
var lightbox = document.querySelector('.lightbox');
var cancelButton = document.querySelector("#cancel");
var signIn = document.querySelector('#sign-in');
	
var loginModalToggleAreas = document.querySelectorAll('.lightbox, #sign-in, #cancel');

//EVENT LISTENERS

for (var i=0; i < loginModalToggleAreas.length; i++) {
	
		loginModalToggleAreas[i].addEventListener('click', function() {
		toggle(loginModal);
	});
}
function toggle(element){
			
	if (element.classList) {
  	element.classList.toggle('hidden');
	} 
	
	else {
    	var classes = element.className.split(' ');
    	var classIndex;

    	for (var i = 0; i<classes.length; i++) {
      	if (classes[i] === className)
       	 classIndex = i;
    	}

			if ( classIndex ) {
      	classes.splice(existingIndex, 1);
			}
    	else {
      	classes.push(className);
			}

  	element.className = classes.join(' ');
	}
}



//lightbox.addEventListener( 'click', function(){
//	toggle(loginModal);
//})
//	
//cancelButton.addEventListener( 'click', function(){ 
//	toggle(loginModal);
//})
//	
//signIn.addEventListener('click', function(){
//	toggle(loginModal);
//});

//FUNCTIONS

//toggle class hidden

