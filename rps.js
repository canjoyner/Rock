
var move;
var move2;

var recordMove;
var recordMove2;

var win =0;
var win2 =0;
var win2 =0;
var tie=0;

var loss=0;
var loss2=0;

// record player 1's move
  $(".gameMove").on("click", function(event) {
  event.preventDefault();
   recordMove = $(this).val();
   console.log(recordMove)
     database.ref().push({
		// move2:recordMove2,
		move:recordMove,
		dateAdded: firebase.database.ServerValue.TIMESTAMP})
	});
// record player 2's move
  $(".gameMove2").on("click", function(event) {
  event.preventDefault();
   recordMove2 = $(this).val();
   console.log(recordMove2)
     database.ref().push({
		move2:recordMove2,
		dateAdded: firebase.database.ServerValue.TIMESTAMP,
		// move:recordMove,
	})
	});

  database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {

  	console.log(snapshot.val().move)
  	// console.log(recordMove)
$("#printSomething").text("somethingTyped")
  	if (recordMove= "rock")
  		{ tie ++;
  		$("#loss").append(recordMove);
  		$("#printSomething").text(recordMove);
  		console.log(tie)
  	}
  })

  // function picWInner(){
  // 	database.ref().set({
		// move2:recordMove2,
		// move:recordMove})
  // }