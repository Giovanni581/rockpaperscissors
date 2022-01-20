let randomNumber = 0;
$(".play").click(function() {
  randomNumber = Math.ceil(Math.random() *3);
     let choice = $(".input").val();
  $(".userChoice").text(`${choice}`);
   $(".computerChoice").text(`${randomNumber}`);
});