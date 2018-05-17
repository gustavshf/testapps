function setMacbooks(){
	var iMacbooks = parseInt(document.getElementById("numberinput").value);
	var html = "";
	for(var i=0; i<iMacbooks; i++){
		html += "<div id='animate' class=macbook></div>";
	}
	document.getElementById("container").innerHTML=html;
}