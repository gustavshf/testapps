(function () {
	'use strict';
	$.ajax({
		url: 'http:/localhost:3000/posts?_page=1&_limit=10000',
		async: false,
		success: function (response) {
			var posts = response;
			for (var i = 0; i < posts.length; i++) {
				var newListItem = document.createElement("li");
				//newListItem.innerHTML='<div class="row input-wrap"><div class="media"><a class="profile-picture" href="#"><img class="media-object" width="75" height="75" src='+ posts[i].image+'></img></a><div class="body-container"><div class="row"><div class="media-body"><h4 class="post-heading">'+posts[i].firstName +' '+ posts[i].lastName+'<a>@'+posts[i].firstName+'</a><span class="timeAgo">  4 minutes ago</span></h4><p class = "post-body">'+posts[i].text+'</p><p class = "post-rating">Rating: '+posts[i].favorites+'</p></div></div><div class="row"><div class="bottom-links"><a class="post-property" href="#">Expand</a><a class="post-property" href="#">Reply</a><a class="post-property" href="#">Repost ('+posts[i].reposts+')</a><a class="post-property" href="#">Star ('+posts[i].favorites+')</a><a class="post-property" href="#">More</a></div></div></div></div></div>';
				
				/*var wrapDiv = document.createElement("div");
				var pText = document.createElement("p");
				var sText = document.createTextNode(posts[i].text);
				pText.appendChild(sText);
				var pText1 = document.createElement("p");
				var sText1 = document.createTextNode(posts[i].id);
				pText1.appendChild(sText1);
				var pText2 = document.createElement("p");
				var sText2 = document.createTextNode(posts[i].firstName);
				pText2.appendChild(sText2);*/
				var pText3 = document.createElement("p");
				var sText3 = document.createTextNode(posts[i].lastName);
				pText3.appendChild(sText3);
				newListItem.appendChild(pText3);
				document.getElementById("posts").appendChild(newListItem);
			}
		}.bind(this),
		error: function () {
			console.log('ERROR');
		}
	});
	//var list = document.getElementById("posts");//Ar šo variantu tiks izraisīta atmiņas noplūde.
	document.getElementById('leakbutton').addEventListener("click", function () {
		var list = document.getElementById("posts");//Ar šo variantu netiks izraisīta atmiņas noplūde.
		list.remove();
	})
})();