
function startTijd(){
    var vandaag = new Date();
    var uur = vandaag.getHours();
    var min = vandaag.getMinutes();
    var sec = vandaag.getSeconds();
  
    min = checkTijd(min);
    sec = checkTijd(sec);
    document.getElementById("klok").innerHTML = uur + " : " + min + " : " + sec;
    var tijd = setTimeout(function(){ startTijd() }, 500);	
		
		if(uur >= 6 && uur < 12){
			document.body.style.backgroundColor = "#c2d7f0";
		}
			
		else if (uur >= 12 && uur < 18){
			document.body.style.backgroundColor = "#80B0E8";
		}
		
		else if (uur >= 18 && uur < 24 ){
			document.body.style.backgroundColor = "#5D82AE";
		}
				
		else{
			document.body.style.backgroundColor = "#09203A";
		}
};

function checkTijd(i){
	if (i < 10) {
		i = "0" + i;
	}
	return i;
};

window.onload = function(){
	startTijd();
};

