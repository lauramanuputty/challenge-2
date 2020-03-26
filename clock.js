
	function startTijd(){
    var vandaag = new Date();
    var uur = vandaag.getHours();
    var min = vandaag.getMinutes();
    var sec = vandaag.getSeconds();
  
    min = checkTijd(min);
    sec = checkTijd(sec);
    document.getElementById("klok").innerHTML = uur + " : " + min + " : " + sec;
    var tijd = setTimeout(function(){ startTijd() }, 500);
	}

	function checkTijd(i){
		if (i < 10) {
			i = "0" + i;
		}
		return i;
	}

	window.onload = function(){
		startTijd();
	}