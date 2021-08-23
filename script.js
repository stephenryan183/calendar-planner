var nineAM = document.querySelector("#nine-AM");
var tenAM = document.querySelector("#ten-AM");
var elevenAM = document.querySelector("#eleven-AM");
var twelvePM = document.querySelector("#twelve-PM");
var onePM = document.querySelector("#one-PM");
var twoPM = document.querySelector("#two-PM");
var threePM = document.querySelector("#three-PM");
var fourPM = document.querySelector("#four-PM");
var fivePM = document.querySelector("#five-PM");


$(".saveBtn").on("click", function () {
  
    var taskInput = $(this).siblings(".tasks").val();

    var hour = $(this).parent().attr("id");
  
    localStorage.setItem(hour, taskInput);

});

$("#nine-AM .tasks").val(localStorage.getItem("nine-AM"));
$("#ten-AM .tasks").val(localStorage.getItem("ten-AM"));
$("#eleven-AM .tasks").val(localStorage.getItem("eleven-AM"));
$("#twelve-PM .tasks").val(localStorage.getItem("twelve-PM"));
$("#one-PM .tasks").val(localStorage.getItem("one-PM"));
$("#two-PM .tasks").val(localStorage.getItem("two-PM"));
$("#three-PM .tasks").val(localStorage.getItem("three-PM"));
$("#four-PM .tasks").val(localStorage.getItem("four-PM"));
$("#five-PM .tasks").val(localStorage.getItem("five-PM"));



function displayTime (){var currentTime = moment()
    $("#currentTime").text(currentTime.format('MMMM Do YYYY, h:mm a'));}
    setInterval(displayTime, 1000)

var time = moment().format("H");
console.log(time);

var timeVariable = ["nineAM", tenAM, elevenAM, twelvePM, onePM, twoPM, threePM, fourPM, fivePM];
var colors = ["black","red","blue"] 
let i=0
while(i < timeVariable) {
 console.log(i);
}








