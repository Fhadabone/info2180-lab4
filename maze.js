var started = false;
var fails = false;

window.onload = function(){
	main();
	
};
function main(){
	started=true;
	/*if(started){
		let wall = document.getElementById('boundary1');
		wall.onmouseover = function(){
			this.setAttribute('class', 'boundary youlose');
		};
	};
	*/

	let wall = 0;
	let i = 0;
	let walls = document.querySelectorAll('.boundary');
	if(started){
		for(i = 0; i < walls.length; i++){
			walls[i].onmouseover = function(){
				fails=true;
				for(wall = 0; wall < walls.length-1; wall++){
					walls[wall].setAttribute('class','boundary youlose');
				};
			};
		};
	}

	/*

	let end = document.getElementById('end');
	if(started){
		end.onmouseover = function(){
			if(fails){
				alert('YOU LOSE!!!');
			}else{
				alert('YOU WIN!!!');
			}
		};
	};
	*/


	let start = document.getElementById('start');
	start.onclick = function(){
		fails=false;
		document.getElementById("status").innerHTML = 'Move your mouse over the \"S\" to begin.';
		for(wall = 0; wall < walls.length-1; wall++){
			walls[wall].setAttribute('class', 'boundary boundary');
		}
		
	};


	let end = document.getElementById('end');
	end.onmouseover = function(){
		if(fails){
			document.getElementById('status').innerHTML = "YOU LOSE!!";
		}else{
			document.getElementById('status').innerHTML = "YOU WIN!!";
		}
	};


	if(started){
		let maze=document.getElementById('maze');
		maze.addEventListener('mouseleave', function(){
			document.getElementById('status').innerHTML = "YOU LOSE!!";
			if(started){
				for(wall = 0; wall < walls.length-1; wall++){
					walls[wall].setAttribute('class','boundary youlose');
				}
			}
		});
	};
	






	
	
};



