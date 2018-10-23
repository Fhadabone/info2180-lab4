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
	//part2 V2
	let walls = document.querySelectorAll('.boundary');
	let i =0;
	let wall = 0;

	for(i=0; i < walls.length; i++)
	{
		walls[i].onmouseover = function(){
			for(wall = 0; wall < walls.length-1; wall++){
				fails++
				walls[wall].setAttribute('class','boundary youlose');
			};	
		};
	};
	
	
	//****************************************************************

	//part3
	/*
	let end = document.getElementById('end');

	end.onmouseover=function(){
		if(fails==0){
			
			alert('You Win!!')
		}else{
			alert('You Loose');
		};

	};
	*/
	//***************************************************************

	//part4

	let start = document.getElementById('start');

	start.onclick = function(game=true){
		let walls = document.querySelectorAll('.boundary');
		walls.forEach(function(elem){
			document.getElementById("status").innerHTML = 'Move your mouse over the \"S\" to begin.';
			fails=0;
			elem.setAttribute('class', 'boundary boundary');
	});

	};

	//***************************************************************

	//part5

	let end = document.getElementById('end');
	end.onmouseover=function(){
		if(fails==0){
			document.getElementById('status').innerHTML = 'YOU WIN!!!';
			
		}else{
			document.getElementById('status').innerHTML = 'YOU LOSE!!!';
		};
	};
	//***************************************************************

	//part6

	let maze = document.getElementById('maze');

	maze.addEventListener('mouseleave',function(){
		for(wall = 0; wall < walls.length-1; wall++){
			fails++
			walls[wall].setAttribute('class','boundary youlose');
			};	
	});

	


		
};
