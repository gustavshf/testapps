function removeOtherButton(){
		document.getElementById("leakbutton").remove();
	}
(function () {
	var getData = function(){
		var posts=[];
		$.ajax({
		url: 'http:/localhost:3000/posts?_page=1&_limit=100000',
		async: false,
		success: function (response) {
			posts = response;
			
		}.bind(this),
		error: function () {
			console.log('ERROR');
		}
	});
	return posts;
	}
	document.getElementById('removeinterval').addEventListener("click", function () {
		clearInterval(window.testinterval);
		list.remove();
	});
	var leakExample=function(){
		var posts = getData();
		testinterval = setInterval(function() {
			var element = document.getElementById('leakbutton');
			//setInterval atstās atmiņā posts masīvu arī tad, kad izmantotais DOM elements ar id 'leakbutton' būs noņemts
			if(element) {
				element.innerHTML = posts[Math.floor(Math.random() * 10)].id;
			}
		}, 1000);
	}
	leakExample();
})();