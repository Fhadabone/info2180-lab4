window.onload = function(){
	main();
};

function main(){
	//**************************************************************

	//part1
	let wall = document.getElementById('boundary1');
	wall.onmouseover = function(){
		this.setAttribute('class', 'boundary youlose');

	};

	//**************************************************************

	

	//part2 V1
	var fails=0;
	let walls = document.querySelectorAll('.boundary');
	walls.forEach(function(elem){
		elem.onmouseover = function(){
			fails++;
			this.setAttribute('class', 'boundary youlose');
		};

	});
	//****************************************************************

	//part3

	let end = document.getElementById('end');

	end.onmouseover=function(){
		if(fails==0){
			//document.getElementById('end').innerHTML = 'YOU WIN';
			alert('You Win!!')
		}else{
			alert('You Loose');
		};

	};

	//***************************************************************

	

	


	

	

	


		
};
