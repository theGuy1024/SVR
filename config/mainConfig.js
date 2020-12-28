/* --------------------SET LIGHT THEME--------------------*/
var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
var elementAmount, counter;
if(h <= 6 || h >= 18)/*|| h >= 18*/
{
    document.body.classList.add("nightMode");
    document.getElementById('paraSky').src = 'media/night/nightSky.png';
    document.getElementById('paraField').src = 'media/night/nightField.png';
    document.getElementById('hiddenMenu').src = 'media/night/night-more.png';
    document.getElementById('paraCloudsR').style="display: none;";
    document.getElementById('paraCloudsL').style="opacity: 0.7;";
    document.getElementById('shareUs').classList.toggle("nightTime");
    document.getElementById('Footer').classList.add("nightFooter");
    document.getElementById('followUs').classList.add("nightLinks")
    document.querySelector('#shareUs').classList.add("nightShare");
    document.getElementById('prllx').classList.add("nightSVRTitle");
    document.getElementById('navBar').classList.add("nightNav");
    
    elementAmount = document.querySelectorAll(".spanIdent");
    for (counter = 0; counter < elementAmount.length; counter++) {
      elementAmount[counter].style.color = "white";
    }
}

/* --------------------PARALLAX-------------------- */

var field = document.getElementById("paraField");
var SVR = document.getElementById("SVRTitle");
	
//be attentive when you scroll
window.addEventListener('scroll', function(){	
	//value to keep value scrolled
	var scrolledval = window.scrollY;
	//when scrolled selected id move
    field.style.top		 = scrolledval * 0.3 + 'px';
    SVR.style.top		 = scrolledval * 1 + 'px';
})

/* --------------------STICKY-------------------- */
window.onscroll = function() {stickyFunction()};
var navbar = document.getElementById("navBar");
var sticky = navbar.offsetTop;


function stickyFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

/* --------------------MOBILE NAV BAR-------------------- */
function openNav() {
    document.getElementById("fullNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("fullNav").style.width = "0%";
  }
