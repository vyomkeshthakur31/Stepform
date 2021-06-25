
var form1 = document.getElementById("first");
var form2 = document.getElementById("second");
var form3 = document.getElementById("third");
var next1 = document.getElementById("Next1");
var next2 = document.getElementById("Next2");
var back1 = document.getElementById("Back1");
var back2 = document.getElementById("Back2");
var submit = document.getElementById("submit");
var progress = document.getElementById("progress");
 

next1.onclick = function() {
  var verifyEmail = document.getElementById("email").value;
  var verifyPass = document.getElementById("password").value;
  var verifyConPass = document.getElementById("confirmPassword").value;
   if(verifyEmail == ""){
       document.getElementById("valEmail").innerHTML = "*please fill";
   }
   else if(verifyPass == ""){
     document.getElementById("valPass").innerHTML = " *please fill";
   }
   else if(verifyConPass == ""){
     document.getElementById("valConPass").innerHTML = " *please fill";
   }
   else if(verifyConPass != verifyPass){
     document.getElementById("valConPass").innerHTML = " *password does not match";
   }else{
     console.log(verifyEmail);
  form1.style.left = "-450px";
  form2.style.left = "40px";
  progress.style.width = "240px";
 }

 
}
back1.onclick = function() {
  form1.style.left = "40px";
  form2.style.left = "450px";
  progress.style.width = "120px";
}
next2.onclick = function() {
   var username = document.getElementById("username").value;
   var fname = document.getElementById("fname").value;
   if(username == ""){
     document.getElementById("valUser").innerHTML = " *please fill";
   }
   else if(fname == "") {
     document.getElementById("valFname").innerHTML = " *please fill";
   }else{
    form2.style.left = "-450px";
  form3.style.left = "40px";
  progress.style.width = "360px";
 }
}

back2.onclick = function() {
  form2.style.left = "40px";
  form3.style.left = "450px";
  progress.style.width = "240px";
}

submit.onclick = function() {
  var district = document.getElementById("district");
  var state = document.getElementById("state");
  var phone = document.getElementById("phone");

  if(district == ""){
    document.getElementById("valDistrict").innerHTML = " *please fill";
  }
  else if(state == ""){
    document.getElementById("valState").innerHTML = " *please fill";
  }
  else if(phone == ""){
    document.getElementById("valPhone").innerHTML = " *please fill";
  }else{
    
  }
}

$("#Submit").click(function () {
  var email =  $("#email").val();
  var  fname =  $("#fname").val();
  var lname = $("#lname").val();
  var username = $("#username").val();
  var district = $("#district").val();
  var  state = $("#state").val();
  var display = "FIRST NAME:" + fname +" <br> LAST NAME:" + lname + " <br>EMAIL:" + email + "<br>USERNAME:" + username + "<br>District : " + district + "<br>State :" + state ;
  $("#modal_body").html(display);
});



