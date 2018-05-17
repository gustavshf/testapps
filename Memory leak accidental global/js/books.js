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
	var leakExample=function(){
			var posts = getData();//Šis kods izveido nevis lokālu mainīgo, bet window.posts
			var element = document.getElementById('leakbutton');
			if(element) {
				element.innerHTML = posts[Math.floor(Math.random() * 10)].id;
			}
	}
	leakExample();
})();