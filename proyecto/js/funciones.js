clickCounter();
		function clickCounter(){
		if(sessionStorage.contador){
			sessionStorage.contador=Number(sessionStorage.contador) + 1;
		}else{
			sessionStorage.setItem("contador", 1);
		}
		$("#mensaje").text(sessionStorage.contador);
	}