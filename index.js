function openSlideMenu(){
	document.getElementById('menu').style.width = '250px';
	document.getElementById('content').style.marginLeft = '250px';
}
function closeSlideMenu(){
	document.getElementById('menu').style.width = '0';
	document.getElementById('content').style.marginLeft = '0';
}

function poP(){
	document.getElementById('popup').style.display = 'block';
}

function validateform(){     
var email=document.myform.email.value;

if(email.indexOf("@") == -1 || email.length <5){
      alert("Please enter valid email id");
      return false;
      }
  }