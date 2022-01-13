let randomNumber = 0;
randomNumber = Math.random() *3;
$(".play").click(function() {
     let choice = $(".input").val();
  $(".userChoice").text(`${choice}`);
});
