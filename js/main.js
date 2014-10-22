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
  //var 
  var $ul = document.querySelector('.product-items');

  //create json function
  function getJSON(url, cb){
    //create new xhr request
    xhr = new XMLHttpRequest();
    //open request
    xhr.open('GET', url);
    //create function to retrieve data - execute cb(what to do with data)
    xhr.onload = function(){
      cb(JSON.parse(xhr.responseText));
    };
    //send request
    xhr.send();
  }

  //execute json function -args: data url & create callback
  getJSON('https://savingsmultipliedssh.firebaseio.com/itemlist.json', function(data){
    //create new array var to put data in
    productArray = data;
    //run a for each loop
    productArray.forEach(appendListItem) 
      //put append function into a local var
      //append local var to #product-list ul 
  });

  // append li to ul 
  function appendListItem(product){
    var liDocFrag = createListItem(product);
    $ul.appendChild(liDocFrag); 
  }
  
  //create li funtion 
  function createListItem(product){
    //give img tag an src attribute(arg)
    var $li = document.createElement('li');
    var $img = document.createElement('img');
    var docFrag = document.createDocumentFragment();
    var pOneDocFrag = createPOneItem(product);

    $img.setAttribute('src', product.image);
    //append img to li
    $li.appendChild($img);
    //append first p to li
    $li.appendChild(pOneDocFrag)
    //append li to doc frag var
    docFrag.appendChild($li);

    return docFrag;
  }

  //create first paragraph with span items 
  function createPOneItem(product){
    var docFrag = document.createDocumentFragment();
    var $p = document.createElement('p');
    var $spanOne = document.createElement('span')    
    var $spanTwo = document.createElement('span')
    //add inner text to span1
    $spanOne.textContent = product.title + " " + product.price;
    //add inner text to span2
    $spanTwo.textContent = product.seller + " " + product.remaining;
    //append span1 to p1 tag
    $p.appendChild($spanOne);
    //append span2 to p1 tag
    $p.appendChild($spanTwo);
    //append p to doc frag var
    docFrag.appendChild($p);

    return docFrag;
  }
})();













