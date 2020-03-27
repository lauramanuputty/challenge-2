
function startTijd(){
    var vandaag = new Date();
    var uur = vandaag.getHours();
    var min = vandaag.getMinutes();
    var sec = vandaag.getSeconds();
  
    min = checkTijd(min);
    sec = checkTijd(sec);
    document.getElementById("klok").innerHTML = uur + " : " + min + " : " + sec;
    var tijd = setTimeout(function(){ startTijd() }, 500);	
		
		if(uur >= 6 && uur < 13){
			document.body.style.backgroundColor = "#F5B070";
		}
			
		else if (uur >= 18 && uur < 24){
			document.body.style.backgroundColor = "#80B0E8";
		}
				
		else{
			document.body.style.backgroundColor= "#09203A";
		}
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

