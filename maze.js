var started = false;
var fails = false;

window.onload = function(){
	main();
	
};


function main(){
	started=true;
	if(started){
		let wall = document.getElementById('boundary1');
		wall.onmouseover = function(){
			this.setAttribute('class', 'boundary youlose');
		};
	};
	



	
	
};



