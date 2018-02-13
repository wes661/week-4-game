//Select character and move enemies to one column

var userChar = 1;

if(userChar === 1 ){
	$('#ajani').on('click', function(){
		$('#userCharTitle').text("Your Hero");
		$('#ajani').appendTo('.userCharSpot');
		$('#selectEnemyTitle').text("Select Enemy");
		$('#jace, #gideon, #chandra').appendTo('.enemySelectSpot');
		$('#headDisplay').text("");
		userChar = 0;
		console.log(userChar);
	})
}
		console.log(userChar)
if(userChar === 1 ){
	$('#jace').on('click', function(){
		$('#jace').appendTo('.userCharSpot');
		$('#selectEnemyTitle').text("Select Enemy");
		$('#ajani, #gideon, #chandra').appendTo('.enemySelectSpot');
		$('#headDisplay').text("");
		userChar = 0;
	})
}

if(userChar === 1 ){
	$('#gideon').on('click', function(){
		$('#gideon').appendTo('.userCharSpot');
		$('#selectEnemyTitle').text("Select Enemy");
		$('#ajani, #jace, #chandra').appendTo('.enemySelectSpot');
		$('#headDisplay').text("");
		userChar = 0;
	})
}

if(userChar === 1 ){
	$('#chandra').on('click', function(){
		$('#chandra').appendTo('.userCharSpot');
		$('#selectEnemyTitle').text("Select Enemy");
		$('#ajani, #gideon, #jace').appendTo('.enemySelectSpot');
		$('#headDisplay').text("");
		userChar = 0;
	})
}	