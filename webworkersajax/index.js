function render() {
    var sScenario = "";
    if (document.getElementById('s1').checked) {
        sScenario = document.getElementById('s1').value;
    } else if (document.getElementById('s2').checked) {
        sScenario = document.getElementById('s2').value;
    }
	var numberOfWorkers = document.getElementById('numberOfWorkers');
    if (numberOfWorkers == 0 || !numberOfWorkers) {
        if (sScenario === "plainRequest") {
			console.time("zeroWorkerTest");
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState == XMLHttpRequest.DONE) {
					console.log(xhr.response);
                    console.timeEnd("zeroWorkerTest");
                }
            }
            xhr.open('GET', 'http://localhost:3000/posts?_page=1&_limit=100000', true);
            xhr.send(null);
        } else if (sScenario === "requestWithComputations") {

        }
    } else {
        var self = this;
        console.time("workerTest");
        for (var i = 0; i < numberOfWorkers; i++) {


            worker = new Worker("render-task.js");
            worker.postMessage({
                scenario: sScenario
            });
            worker.onmessage = function(e) {
                console.log(e.data);
                console.timeEnd("workerTest");
            };
        }


    }

}