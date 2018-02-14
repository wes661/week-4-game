//Empty arrays for data access
var planesWalkers = [];
var selectedChar = [];
var enemyArray = [];
//================================
var picked = false;
//Flag for character select
var Characters = 1;
//================================

//Pushed characters to array
planesWalkers.push($('#ajani, #jace, #gideon, #chandra'));
console.log(planesWalkers);

//================================


//Select character
	$('#ajani').on('click', function(){
		if(Characters === 1 ){
			$('#userCharTitle').text("Your Hero");
			$('#ajani').appendTo('.userCharSpot');
			selectedChar.push($('#ajani'));
			$('#selectEnemyTitle').text("Select Enemy");
			$('#jace, #gideon, #chandra').appendTo('.enemySelectSpot');
			$('#headDisplay').text("");
			enemyArray.push($('#jace, #gideon, #chandra'));
			Characters = 0;
			picked = true;
			console.log(selectedChar);
			console.log(enemyArray);
		}
	})

	$('#jace').on('click', function(){
		if(Characters === 1 ){
			$('#userCharTitle').text("Your Hero");
			$('#jace').appendTo('.userCharSpot');
			selectedChar.push($('#jace'));
			$('#selectEnemyTitle').text("Select Enemy");
			$('#ajani, #gideon, #chandra').appendTo('.enemySelectSpot');
			$('#headDisplay').text("");
			enemyArray.push($('#ajani, #gideon, #chandra'));
			Characters = 0;
			picked = true;
			console.log(selectedChar);
			console.log(enemyArray);
		}
	})

	$('#gideon').on('click', function(){
		if(Characters === 1 ){
			$('#userCharTitle').text("Your Hero");
			$('#gideon').appendTo('.userCharSpot');
			selectedChar.push($('#gideon'));
			$('#selectEnemyTitle').text("Select Enemy");
			$('#ajani, #jace, #chandra').appendTo('.enemySelectSpot');
			$('#headDisplay').text("");
			enemyArray.push($('#jace, #ajani, #chandra'));
			Characters = 0;
			picked = true;
			console.log(selectedChar);
			console.log(enemyArray);
		}	
	})



	$('#chandra').on('click', function(){
		if(Characters === 1 ){
			$('#userCharTitle').text("Your Hero");
			$('#chandra').appendTo('.userCharSpot');
			selectedChar.push($('#chandra'));
			$('#selectEnemyTitle').text("Select Enemy");
			$('#ajani, #gideon, #jace').appendTo('.enemySelectSpot');
			$('#headDisplay').text("");
			enemyArray.push($('#jace, #gideon, #ajani'))
			Characters = 0;
			picked = true;
			console.log(selectedChar);
			console.log(enemyArray);
		}	
	})

	console.log(Characters);
//=====================================================================
	
	