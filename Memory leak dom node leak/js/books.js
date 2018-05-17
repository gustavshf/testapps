(function () {
	'use strict';
	$.ajax({
		url: 'http:/localhost:3000/posts?_page=1&_limit=100000',
		async: false,
		success: function (response) {
			var posts = response;
			for (var i = 0; i < posts.length; i++) {
				var newListItem = document.createElement("li");
				var ListValue = document.createTextNode(posts[i].text);
				newListItem.appendChild(ListValue);
				document.getElementById("posts").appendChild(newListItem);
			}
		}.bind(this),
		error: function () {
			console.log('ERROR');
		}
	});
	var list = document.getElementById("posts");//Ar šo variantu tiks izraisīta atmiņas noplūde.
	document.getElementById('leakbutton').addEventListener("click", function () {
		//var list = document.getElementById("posts");//Ar šo variantu netiks izraisīta atmiņas noplūde.
		list.remove();
	})
})();