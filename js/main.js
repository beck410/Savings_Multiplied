(function (){

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
})();

(function (){
  //create json function
    //create new xhr request
    //open request
    //create function to retrieve data - execute cb(what to do with data)
    //send request

  //execute json function -args: data url & create callback
    //callback fn  
      //create new array var to put data in
      //run a for each loop 
        //put append function into a local var
        //append local var to #product-list ul 
  
  //  createLi funtion 
    //create document frag var
    //create li tag 
    //create img tag
    //give img tag an src attribute(arg)
    //append img to li
    //append li to doc frag var 
})();













