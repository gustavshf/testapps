
onmessage = function(event) {
	var sScenario = event.data.scenario;
	if(sScenario === "plainRequest"){
	var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        postMessage(xhr.responseText);
    }
}
xhr.open('GET', 'http://localhost:3000/posts?_page=1&_limit=100000', true);
xhr.send(null);
	}
	else if(sScenario === "requestWithComputations"){
		
	}
};