(function() {
    'use strict';
	var button = document.getElementById("renderbutton").addEventListener('click', function(e) {
        var books = document.querySelector('#books');

    /*books.addEventListener('click', function(e) {
        if (e.target.innerHTML==="10") {
            alert("10 clicked.");
        }
    }, false);*/

	
	for(var i=0; i<30000; i++){
		var listElement=document.createElement("li");
		listElement.innerHTML = Math.floor(Math.random()*10)+1;
		books.appendChild(listElement);
		listElement.addEventListener('click', function(e) {
        if (e.target.innerHTML==="10") {
            alert("10 clicked.");
        }
    });
	}
    });
	
	
    
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
    /*var book1 = document.querySelector('#book1');   
    var book2 = document.querySelector('#book2');   
    var book3 = document.querySelector('#book3');   
    var book4 = document.querySelector('#book4');   
    var book5 = document.querySelector('#book5');

    book1.addEventListener('click', function() {
        console.log(book1.innerText, 'was clicked');
    }, false);

    book2.addEventListener('click', function() {
        console.log(book2.innerText, 'was clicked');
    }, false);

    book3.addEventListener('click', function() {
        console.log(book3.innerText, 'was clicked');
    }, false);

    book4.addEventListener('click', function() {
        console.log(book4.innerText, 'was clicked');
    }, false);

    book5.addEventListener('click', function() {
        console.log(book5.innerText, 'was clicked');
    }, false);*/
})();