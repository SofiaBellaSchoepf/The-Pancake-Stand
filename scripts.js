$(document).ready(function(){
//first page
  $("#pancake").click(function(){
    window.location.href="secondpage.html";

  })

//second page
  let buttonClick =  0
  let screenClick = 0
  let weatherClick = 0
  let clickForecast = 0
  if($("#redcircle").is(':visible')){
    $("hideshow").animate({left: '100px'})
  }
  $("#back").click(function(){
    window.location.href="firstpage.html";

  })
  $("#next").click(function(){
    window.location.href="thirdpage.html";
  }
)
$('#rating').hide()
$("#pancakes").hide()
$("#money").hide()
$("#arrow").show()
$("#arrow1, #arrow2 , #arrow3, #arrow4 , #arrow5").hide()
$("#describe").show()
$("#redcircle").hide()
$('#forecast').hide()
$("#thunder").hide()
$("#rain").hide()
$("#sun").hide()
$("#hideshow").click(function() {
buttonClick++
console.log(buttonClick)
    if($("#directions").position().left == 40) {
  $("#directions").animate({left: '-650px'})
  if (screenClick == 0){
    $("#hideshow").animate({left: '100px'})
  }
  else
{
  $("#hideshow").animate({left: '6px'})
}
  $("#hideshow").text(">")
  $("#rating").show()
  $("#pancakes").show()
  $("#money").show()
  $("#arrow").hide()
  $("#describe").hide()
  $("#arrow1").hide()
  $("#describe").hide()
screenClick = screenClick + 0;


}
else {
    $("#directions").animate({left: '40px'})
        $("#hideshow").animate({left: '650px'})
      $("#hideshow").text("<")
        $("#rating").hide()
        $("#pancakes").hide()
        $("#money").hide()
        $("#arrow").hide()
        $("#arrow1").hide()
        $("#describe").hide()



}
if(buttonClick == 1) {
    let randomRating= Math.floor(Math.random() * 8) +1
  let ratingequal = $("#rating").text("Rating = " + randomRating + "/10")
if($("#directions").position().left = -650) {
  $('#weather').click(function(){
    weatherClick++
    if ($("#forecast").is(':hidden')){
  $("#describew").hide()
  $("#arrow2").hide()
if (weatherClick == 1){
  $("#arrow3").show()
  $("#describe").show()
}
  $('#forecast').show()
  }
  else {
    $('#forecast').hide()
    $("#arrow3").hide()
  }
  })
    $("#idk").hide()
    if(screenClick == 0){
    $("#click").text("Click the screen to begin the tutorial. If you click the button in the red circle, it will end the tutorial and go back to the letter written by your boss!")
    $("#redcircle").show()
    }

    if($("#forecast").is(':visible')){
    ('body').click(function(){
    screenClickforecast++
    )}
    }
$("body").click(function(){
screenClick++
if
console.log(screenClick)

if (screenClick == 2){
  $("#arrow1").show()
  $("#describe").show()
      $("#describe").text("This will show how many pancakes you have sold.")
      if(($("#redcircle").is(':visible'))){
      $("#hideshow").animate({left: '6px'})
    }
      $("#redcircle").hide()
        $("#click").hide()

}

if(screenClick == 3){
$("#describe").text("When you sell a pancake, it will add to the amount.")
}

if(screenClick == 4){
$('#arrow1').animate({top: '60px'})
$("#describe").text("This will show the amount of money you made from selling the pancakes.")
$("#describe").animate({top: '107px'})

}
if(screenClick == 5){
$("#describe").text("Like I said earlier, you will get 15% of the profits each day.")

}
if(screenClick == 6){
$('#arrow1').animate({top: '110px'})
$("#describe").animate({top: '110px'})
$("#describe").text("This is the rating of our food truck.")

}
if(screenClick == 7) {
  if (randomRating < 6) {
    $("#describe").text("It's not very good! Hopefully you will do good for this company...")

  }
  else{
    $("#describe").text("It's pretty good, but can you make it higher?")

  }

}
if(screenClick == 8) {
$("#arrow1").hide()
$("#describe").hide()
$("#arrow2").show()
$("#describew").text("This is the weather forecast button.")
$("#describe").text("This is the weather forecast for this week.")
$("#describe").animate({left:"890px", top:"540px"})


}
if(clickForecast == 3) {
$("#describew").text("Click on it to show or hide the forecast.")

}
if (clickForecast == 4) {
$("#describe").text("The weather will affect the amount of people walking outside,")
})
//thirdpage
ratingForthird = randomRating
$("#people").text(ratingForthird)
}
}
})
})
