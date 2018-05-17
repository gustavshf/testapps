var arrToProcess = [];
$.getJSON( "smallvalues.json", function( data ) {
 arrToProcess=data;
});

function render() {
var sScenario = "";
    if (document.getElementById('s1').checked) {
        sScenario = document.getElementById('s1').value;
    } else if (document.getElementById('s2').checked) {
        sScenario = document.getElementById('s2').value;
    }
 var numberOfWorkers = parseInt(document.getElementById("numberOfWorkers").value);
 var intervals = arrToProcess.length / parseInt(numberOfWorkers);
 if (numberOfWorkers == 0 || ! numberOfWorkers) {
  var arr = [1,1,1,1,1,1,1,1,1,1];

  console.time("zeroWorkers");
  var encryptedSum = 0;
  for (var i = 0; i < arrToProcess.length; i++) {
   var elem = arrToProcess[i].value;
   for (var j = 0; j < arr.length; j++) {
			elem = elem * arr[j];
			elem = elem * 2;
			elem = elem /4;
			elem = elem *2;
			elem = elem * 2;
			elem = elem /4;
			elem = elem *2;
			elem = elem * 2;
			elem = elem /4;
			elem = elem *2;
			elem = elem * 2;
			elem = elem /4;
			elem = elem *2;
			elem = elem * 2;
			elem = elem /4;
			elem = elem *2;
			elem = elem * 2;
			elem = elem /4;
			elem = elem *2;
			elem = elem * 2;
			elem = elem /4;
			elem = elem *2;
   }
   encryptedSum = encryptedSum + elem;
  }
  console.timeEnd("zeroWorkers");
  console.log(encryptedSum);
 }
 else{
console.time("workerTest");
 worker = new Worker("render-task.js");
 if(sScenario==="stringify"){
 worker.postMessage({scenario: sScenario, arrToProcess: JSON.stringify(arrToProcess)});
 }
 else{
	 worker.postMessage({scenario: sScenario, arrToProcess: arrToProcess});
 }
 worker.onmessage = function(e) {
	 console.timeEnd("workerTest");
	 console.log(e.data);
 };

	 }
 
}