//Empty arrays and variables for data access
var selectedChar;
var enemyArray = [];
var deadOnes = [];
var selectedEnemy;
var attackCount = 0
//Flag for character/enemy select
var characterFlag = 1;
var enemyFlag = 0;
var kills = 0;





	
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
			// If the enemy that was clicked (this) is in the array of deadOnes then 
			// he is dead and this code should not run
			var enemyId = this.getAttribute('id');
			if(deadOnes.indexOf(enemyId) < 0){
				if(enemyFlag === 0){
					$('.btn-danger').show('slow');
					$('#defenderCharTitle').text("Defender");
					$('.defenderCharSpot').append(this);
					selectedEnemy = this;
					enemyFlag = 1;
					console.log(selectedEnemy);
					battle();
				}
			}
		}); 
	}
}
		
//Battle portion and winnig or losing
function battle(){
	var selectedCharHp = selectedChar.getAttribute('data-hp');
	var selectedCharAttack = selectedChar.getAttribute('data-ap');
	var enemyhp = selectedEnemy.getAttribute('data-hp');
	var enemyAttack = selectedEnemy.getAttribute('data-cp');
	$('.btn-danger').unbind('click').click(function(){
		attackCount++
		enemyhp -= attackCount* selectedCharAttack;
		selectedCharHp -= enemyAttack;
		$(selectedChar).find('.hpContainer').text(selectedCharHp);
		$(selectedEnemy).find('.hpContainer').text(enemyhp);
		if(enemyhp <= 0){
			kills++
			alert("You win!")
			alert("Select new enemy!")
			$('#defeatedEnemyTitle').text("Defeated Enemies");
			$(selectedEnemy).fadeOut('slow');
			$('.btn-danger').hide('slow');
			$(selectedEnemy).appendTo('.defeatedEnemySpot');
			$(selectedEnemy).fadeIn('slow');
			enemyFlag = 0;
			deadOnes.push(selectedEnemy.getAttribute('id'));
			selectEnemy();
		}
		if(kills === 3){
			alert("You are the champ!")
			console.log(kills)
		}
		console.log(selectedCharAttack);
		console.log(selectedChar);
		console.log(attackCount)
		console.log(enemyhp);
		console.log(selectedCharHp);
	})
}




	
