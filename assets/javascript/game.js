//Empty arrays for data access
var selectedChar;
var enemyArray = [];
var selectedEnemy;

//Flag for character/enemy select
var characterFlag = 1;
var enemyFlag = 0;


	$('.btn-danger').css("visibility", "hidden")
//Select character

	$('#ajani').hover(function(){
		if(characterFlag === 1){
			$(this).css('transform', 'scale(1.1)');
		}
	},
		function(){
		$(this).css('transform', 'scale(1)');
	});
	$('#jace').hover(function(){
		if(characterFlag === 1){
			$(this).css('transform', 'scale(1.1)');
		}
	},
		function(){
		$(this).css('transform', 'scale(1)');
	});
	$('#gideon').hover(function(){
		if(characterFlag === 1){
			$(this).css('transform', 'scale(1.1)');
		}
	},
		function(){
		$(this).css('transform', 'scale(1)');
	});
	$('#chandra').hover(function(){
		if(characterFlag === 1){
			$(this).css('transform', 'scale(1.1)');
		}
	},
		function(){
		$(this).css('transform', 'scale(1)');
	});

	

	$('#ajani').on('click', function(){
		if(characterFlag === 1 ){
			$('#userCharTitle').text("Your Hero");
			$('#ajani').appendTo('.userCharSpot');
			selectedChar = this;
			$('#selectEnemyTitle').text("Select Enemy");
			$('#jace, #gideon, #chandra').appendTo('.enemySelectSpot');
			$('#headDisplay').text("");
			enemyArray.push($('#jace'), $('#chandra'), $('#gideon'));
			characterFlag = 0;
			selectEnemy();
		}
	})

	$('#jace').on('click', function(){
		if(characterFlag === 1 ){
			$('#userCharTitle').text("Your Hero");
			$('#jace').appendTo('.userCharSpot');
			selectedChar = this;
			$('#selectEnemyTitle').text("Select Enemy");
			$('#ajani, #gideon, #chandra').appendTo('.enemySelectSpot');
			$('#headDisplay').text("");
			enemyArray.push($('#gideon'), $('#chandra'), $('#ajani'));
			characterFlag = 0;
			selectEnemy();
		}
	})

	$('#gideon').on('click', function(){
		if(characterFlag === 1 ){
			$('.btn-danger').toggle();
			$('#userCharTitle').text("Your Hero");
			$('#gideon').appendTo('.userCharSpot');
			selectedChar = this;
			$('#selectEnemyTitle').text("Select Enemy");
			$('#ajani, #jace, #chandra').appendTo('.enemySelectSpot');
			$('#headDisplay').text("");
			enemyArray.push($('#jace'), $('#chandra'), $('#ajani'));
			characterFlag = 0;
			selectEnemy();
		}	
	})



	$('#chandra').on('click', function(){
		if(characterFlag === 1 ){
			$('#userCharTitle').text("Your Hero");
			$('#chandra').appendTo('.userCharSpot');
			selectedChar = this;
			$('#selectEnemyTitle').text("Select Enemy");
			$('#ajani, #gideon, #jace').appendTo('.enemySelectSpot');
			$('#headDisplay').text("");
			enemyArray.push($('#jace'), $('#gideon'), $('#ajani'));
			characterFlag = 0;
			selectEnemy();
		}	
	})
//Select Enemy function
function selectEnemy(){
	for(var i = 0; i < enemyArray.length; i++ ){
		enemyArray[i].click(function(){
			if(enemyFlag === 0){
				$('.btn-danger').css('visibility','visible')
				$('#defenderCharTitle').text("Defender");
				$('.defenderCharSpot').append(this);
				selectedEnemy = this;
				enemyFlag = 1;
				console.log(selectedEnemy);
				battle();
			}
		})		 
	}
}
		

function battle(){
	var selectedCharHp = selectedChar.getAttribute('data-hp');
	var selectedCharAttack = selectedChar.getAttribute('data-ap');
	var enemyhp = selectedEnemy.getAttribute('data-hp');
	var enemyAttack = selectedEnemy.getAttribute('data-cp');
	$('.btn-danger').click(function(){
		enemyhp -= selectedCharAttack;
		selectedCharHp -= enemyAttack;
		console.log(enemyhp);
		console.log(selectedCharHp);
	})
}




	
