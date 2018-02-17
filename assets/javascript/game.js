//Empty arrays and variables for data access
var selectedChar;
var enemyArray = [];
var deadOnes = [];
var selectedEnemy;
var attackCount = 0
var characterFlag = 1;
var enemyFlag = 0;
var kills = 0;


//reset not working
function reset(){
	selectedChar;
	enemyArray = [];
	deadOnes = [];
	selectedEnemy;
	attackCount = 0
	characterFlag = 1;
	enemyFlag = 0;
	kills = 0;

	$('#ajani').appendTo('.char1');
	$('#jace').appendTo('.char2');
	$('#gideon').appendTo('.char3');
	$('#chandra').appendTo('.char4');
	$('#defeatedEnemyTitle').hide('fast');
	$('#defenderCharTitle').hide('fast');
	$('#selectEnemyTitle').hide('fast');
	$('#userCharTitle').hide('fast');
}


	


	
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
	$('.text1').hide('slow');
	$('.btn-danger').unbind('click').click(function(){
		attackCount++
		enemyhp -= attackCount* selectedCharAttack;
		selectedCharHp -= enemyAttack;
		selectedChar.setAttribute('data-hp', selectedCharHp);	
		$(selectedChar).find('.hpContainer').text(selectedCharHp);
		$(selectedEnemy).find('.hpContainer').text(enemyhp);
	    $('.text2').show('fast')
		$('.text2').text("You hit for " + attackCount* selectedCharAttack + " damage");
		$('.text3').show('fast')
		$('.text3').text("Enemy hit you for " + enemyAttack + " damage");
		if(enemyhp <= 0){
			kills++
			$('.text1').html("Enemy Defeated! " + "<br>" + " Select New Enemy!");
			$('.text1').fadeIn('slow');
			$('#defeatedEnemyTitle').text("Graveyard");
			$(selectedEnemy).fadeOut('slow');
			$('.btn-danger').hide('slow');
			$('.text2').hide('fast');
			$('.text3').hide('fast');
			$(selectedEnemy).appendTo('.defeatedEnemySpot');
			$(selectedEnemy).fadeIn('slow');
			enemyFlag = 0;
			deadOnes.push(selectedEnemy.getAttribute('id'));
			selectEnemy();
		}
		if(kills === 3){
			$('.text1').html("You are the champ!");
			$('.text1').fadeIn('slow');
			//reset();
		}
		if(selectedCharHp <= 0){
			$('.text2').hide('fast');
			$('.text3').hide('fast');
			$('.text4').html("You have been defeated!")
			$('.text4').fadeIn('slow');
			$('.btn-danger').hide('slow');
			$(selectedChar).fadeOut('slow');
		}
	})
}




	
