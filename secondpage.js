$(document).ready(function(){
//second page
$('#rating').hide()
$("#pancakes").hide()
$("#describeforecast").hide()
$("#money").hide()
$("#arrow").show()
$("#clicknow").hide()
$("#redcirclesunday").hide()
$("#arrow1, #arrow2 , #arrow3, #arrow4 , #arrow5").hide()
$("#describe").show()
$("#redcircle").hide()
$('#forecast').hide()
$("#todaysweathersun").hide()
$("#todaysweatherrain").hide()
$("#todaysweathercloudy").hide()
$("#todaysweatherthunder").hide()
$("#cloudyp").hide()
$("#sunnyp").hide()
$("#showersp").hide()
$("#stormyp").hide()
$("#cloudyp1").hide()
$("#sunnyp1").hide()
$("#showersp1").hide()
$("#stormyp1").hide()
$("#cloudyp2").hide()
$("#sunnyp2").hide()
$("#showersp2").hide()
$("#stormyp2").hide()
$("#cloudyp3").hide()
$("#sunnyp3").hide()
$("#showersp3").hide()
$("#stormyp3").hide()
$("#showersp4").hide()
$("#stormyp4").hide()
$("#cloudyp5").hide()
$("#sunnyp5").hide()
$("#showersp5").hide()
$("#stormyp5").hide()
$("#cloudyp6").hide()
$("#sunnyp6").hide()
$("#showersp6").hide()
$("#stormyp6").hide()
$("#click").hide()
$("#pancaketruck").hide()

  let screenclickForecast = 0
  let yelpClick = 0
  let buttonClick =  0
  let screenClick = 0
  let weatherClick = 0
$("#sunsun, #sunrain, #sunthunder, #monrain, #monsun, #monthunder, #tuesrain, #tuessun, #tuesthunder, #wedrain, #wedsun, #wedthunder, #thursrain, #thurssun, #thursthunder, #frirain, #frisun, #frithunder, #satrain, #satsun, #satthunder, #suncloud, #moncloud, #tuescloud, #wedcloud, #thurscloud, #fricloud, #satcloud").hide()
let tuesarray = ["tuesrain", "tuessun", "tuesthunder", "tuescloud"]
let wedarray = ["wedrain", "wedsun", "wedthunder", "wedcloud"]
let thursarray = ["thursrain", "thursthunder"]
let friarray = ["frirain", "frisun", "frithunder", "fricloud"]
let satarray = ["satrain", "satsun", "satthunder", "satcloud"]
let sunarray = ["sunrain", "sunsun", "sunthunder", "suncloud"]
let randomsun = Math.floor(sunarray.length * Math.random())
let randomtues = Math.floor(tuesarray.length * Math.random())
let randomwed = Math.floor(wedarray.length * Math.random())
let randomthurs = Math.floor(thursarray.length * Math.random())
let randomfri = Math.floor(friarray.length * Math.random())
let randomsat= Math.floor(satarray.length * Math.random())
let tempsun=  Math.floor(Math.random() * (80 - 60 + 1) + 60)
let tempmon=  Math.floor(Math.random() * (80 - 60 + 1) + 60)
let temptues=   Math.floor(Math.random() * (80 - 60 + 1) + 60)
let tempwed=   Math.floor(Math.random() * (80 - 60 + 1) + 60)
let tempthurs=   Math.floor(Math.random() * (80 - 60 + 1) + 60)
let tempfri=   Math.floor(Math.random() * (80 - 60 + 1) + 60)
let tempsat=  Math.floor(Math.random() * (80 - 60 + 1) + 60)
let degreeyay = $("#degree").text()
$("#tempsunp").text(tempsun + degreeyay)
$("#tempmonp").text(tempmon + degreeyay)
$("#temptuesp").text(temptues + degreeyay)
$("#tempwedp").text(tempwed + degreeyay)
$("#tempthursp").text(tempthurs + degreeyay)
$("#tempfrip").text(tempfri + degreeyay)
$("#tempsatp").text(tempsat + degreeyay)
$("#yelp").click(function(){


})
if(randomsun == [0]){
  $("#todaysweatherrain").show()
}
if(randomsun == [1]){
  $("#todaysweathersun").show()
}
if(randomsun == [2]){
  $("#todaysweatherthunder").show()
}
if(randomsun == [3]){
    $("#todaysweathercloudy").show()
  }


  if($("#redcircle").is(':visible')){
    $("hideshow").animate({left: '100px'})
  }
$("#yelp").click(function(){
  yelpClick++
    window.location.href="fourth.html";
})

  $("#back").click(function(){
    window.location.href="firstpage.html";

  })
  $("#next").click(function(){
    window.location.href="thirdpage.html";
  }
)
$("#hideshow").click(function() {
buttonClick++
console.log(buttonClick)
    if($("#directions").position().left == 40) {
  $("#directions").animate({left: '-650px'})
  if (screenClick == 0){
    $("#hideshow").animate({left: '100px'})
  }
  else{
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
  $("#pancaketruck").show()
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
        $("#pancaketruck").hide()
        $("#describe").hide()
        $("#click").hide()
        $("#idk").hide()




}
if(buttonClick == 1) {
  $("#click").show()
  $("#idk").hide()
    let randomRating= Math.floor(Math.random() * (4 - 1 + 1) + 1)
  let ratingequal = $("#rating").text("Rating = " + randomRating + "/5")
  function toggleForecast(){
    if(randomsun == [0]){
      $("#sunrain").show()
      $("#showersp").show()
      $("#todaysweatherrain").show()
      console.log('sunrain')
    }

    if(randomsun == [1]){
      $("#sunsun").show()
      $("#sunnyp").show()
      $("#todaysweathersun").show()
      console.log('sunsun')
    }
    if(randomsun == [2]){
      $("#sunthunder").show()
      $("#stormyp").show()
      $("#todaysweatherstormy").show()
      console.log('sunthunder')
    }
    if(randomsun == [3]){
      $("#suncloud").show()
      $("#cloudyp").show()
      $("#todaysweathercloudy").show()
      console.log('suncloud')
    }

      $("#monsun").show()
$("#sunnyp1").show()

    if(randomtues == [0]){
      $("#tuesrain").show()
      $("#showersp2").show()
      console.log('tuesrain')
    }
    if(randomtues == [1]){
      $("#tuessun").show()
      $("#sunnyp2").show()
      console.log('tuessun')
    }
    if(randomtues == [2]){
      $("#tuesthunder").show()
      $("#stormyp2").show()
      console.log('tuesthunder')
    }
    if(randomtues == [3]){
      $("#cloudyp2").show()
      $("#tuescloud").show()
      console.log('tuescloud')
    }


    if(randomwed == [0]){
      $("#showersp3").show()
      $("#wedrain").show()
      console.log('wedcloud')
    }
    if(randomwed == [1]){
      $("#wedsun").show()
      $("#sunnyp3").show()
      console.log('wedsund')
    }
    if(randomwed == [2]){
      $("#wedthunder").show()
      $("#stormyp3").show()
      console.log('wedthunder')
    }
    if(randomwed == [3]){
      $("#wedcloud").show()
      $("#cloudyp3").show()
      console.log('wedcloud')
    }


    if(randomthurs == [0]){
      $("#thursrain").show()
      $("#showersp4").show()
      console.log('thursrain')

    }
    if(randomthurs == [1]){
      $("#thursthunder").show()
      $("#stormyp4").show()
      console.log('thursthunder')

    }
    if(randomfri == [0]){
      $("#frirain").show()
      $("#showersp5").show()
      console.log('frirain')
    }
    if(randomfri == [1]){
      $("#frisun").show()
      $("#sunnyp5").show()
        console.log('frisun')
    }
    if(randomfri == [2]){
      $("#stormyp5").show()
      $("#frithunder").show()
        console.log('frithunder')
    }
    if(randomfri == [3]){
      $("#cloudyp5").show()
      $("#fricloud").show()
        console.log('fricloud')
    }

    if(randomsat == [0]){
      $("#satrain").show()
      $("#showersp6").show()
        console.log('satrain')
    }
    if(randomsat == [1]){
      $("#satsun").show()
      $("#sunnyp6").show()
      console.log('satsun')
    }
    if(randomsat == [2]){
      $("#satthunder").show()
      $("#stormyp6").show()
      console.log('satthunder')
    }
    if(randomsat == [3]){
      $("#satcloud").show()
      $("#cloudyp6").show()
      console.log('satcloud')
    }
  }

if($("#directions").position().left = -650) {
  $('#weather').click(function(){
    $("directions").hide()
    weatherClick++
    toggleForecast()
    if ($("#forecast").is(':hidden')){
  $("#describeforecast").hide()
  $("#describew").hide()
  $("#arrow2").hide()
  if (screenclickForecast == 1){
    console.log(screenclickForecast)
    $("#describeforecast").hide()
    $("#arrow2").show()
    console.log("why")
}
if (weatherClick == 1){
$("body").click(function(){
  screenclickForecast++
  console.log(screenclickForecast)
})
  $("#describeforecast").show()

}
  $('#forecast').show()

  }
  else {

    $("#idk").hide()
    $('#forecast').hide()
    $("#arrow3").hide()
    $("#describe").hide()
    $("#sunsun, #sunrain, #sunthunder, #monrain, #monsun, #monthunder, #tuesrain, #tuessun, #tuesthunder, #wedrain, #wedsun, #wedthunder, #thursrain, #thurssun, #thursthunder, #frirain, #frisun, #frithunder, #satrain, #satsun, #satthunder, #suncloud, #moncloud, #tuescloud, #wedcloud, #thurscloud, #fricloud, #satcloud").hide()
  }
  })



    if(screenClick == 0){
    $("#redcircle").show()
    }
$("body").click(function(){
screenClick++

if (screenClick == 2){
  $("#arrow1").show()
  $("#describe").show()
      $("#describe").text("This will show how many pancakes you have sold.")
      if(($("#redcircle").is(':visible'))){
      $("#hideshow").animate({left: '6px'})
    }
      $("#redcircle").hide()
        $("#click").hide()
        $("#clicknow").show()

}

if(screenClick == 3){
$("#describe").text("When you sell a pancake, it will add to the amount.")
$("#clicknow").hide()
}

if(screenClick == 4){
$('#arrow1').animate({top: '60px'})
$("#describe").text("This will show the amount of money you made from selling the pancakes.")
$("#describe").animate({top: '107px'})

}
if(screenClick == 5){
$("#describe").text("Like I said earlier, you will get 7% of the profits each day!")

}
if(screenClick == 6){
$('#arrow1').animate({top: '110px'})
$("#describe").animate({top: '110px'})
$("#describe").text("This is the rating of our food truck.")

}
if(screenClick == 7) {
  if (randomRating < 3) {
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


}
if (screenClick== 9){
  $("#describew").text("(That is the day's current weather status.)")
  $("#redcirclesunday").show()
  $("#arrow2").animate({left:"1180"})

}
if(screenClick == 10) {
  $("#describew").text("Click 'Weather'. You'll see the forecast for the week.")
  $("#arrow2").animate({left:"981"})
    $('#describew').animate({left:"900"})
  $("#redcirclesunday").hide()

}
if(screenclickForecast == 0)
$("#describeforecast").text("The weather will effect your sales, because it will effect the amount of people who would stop and eat!")
})
if(screenclickForecast == 1){
$("#describeforecast").hide()
}
}

}})
})
