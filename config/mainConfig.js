function loadHomeSettings(){
  /*if(h <= 6 || h >= 18){
    homeLightTheme();
  }*/
  homeParallax();
}

function loadCattleSettings(){
  /*if(h <= 6 || h >= 18){
    cattleNightHeader();
    imageNightTheme();
  }*/
}

/* --------------------SET LIGHT THEME--------------------
var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
var elementAmount, counter;
if(h <= 6 || h >= 18)
{
  document.body.classList.add("nightMode");
  document.getElementById('navBar').classList.add("nightNav");
  document.getElementById('hiddenMenu').src = 'media/night/night-more.png';
}
function homeLightTheme(){
  document.getElementById('paraSky').src = 'media/night/nightSky.png';
  document.getElementById('paraField').src = 'media/night/nightField.png';
  document.getElementById('paraCloudsR').style="display: none;";
  document.getElementById('paraCloudsL').style="opacity: 0.7;";
  document.getElementById('shareUs').classList.toggle("nightTime");
  document.getElementById('Footer').classList.add("nightFooter");
  document.getElementById('followUs').classList.add("nightLinks")
  document.querySelector('#shareUs').classList.add("nightShare");
  document.getElementById('prllx').classList.add("nightSVRTitle");

  elementAmount = document.querySelectorAll(".spanIdent");
  for (counter = 0; counter < elementAmount.length; counter++) {
    elementAmount[counter].style.color = "white";
  }
}*/

function cattleNightHeader(){
  document.getElementById('headerClipPath').classList.add("nightHeader");
}

function imageNightTheme(){
  document.getElementById('popup').classList.add("nightPopUp");
  var imageBox, iCounter;
  imageBox = document.querySelectorAll(".imageContainer");
  for(iCounter = 0; iCounter < imageBox.length; iCounter++){
    imageBox[iCounter].style.background = "rgba(255, 255, 255, 0.5)";
  }
}

function homeParallax(){
  var field = document.getElementById("paraField");var SVR = document.getElementById("SVRTitle");window.addEventListener('scroll', function(){	var scrolledval = window.scrollY;field.style.top		 = scrolledval * 0.3 + 'px';SVR.style.top		 = scrolledval * 1 + 'px';
  })
}window.onscroll = function() {stickyFunction()};var navbar = document.getElementById("navBar");var sticky = navbar.offsetTop;function stickyFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function openNav() {
  document.getElementById("fullNav").style.width = "100%";}function closeNav() {
  document.getElementById("fullNav").style.width = "0%";
}function filter(category,  tab){var eAmount, cCounter, resultVal;
  eAmount = document.querySelectorAll(".imageContainer");if(category == "all"){
    for (cCounter = 0; cCounter < eAmount.length; cCounter++) {
      eAmount[cCounter].style.display = "inline";
    }resultVal = cCounter;
    document.getElementById("resultAmount").innerHTML = resultVal;
  }

  else{
    /*hides all*/
    for (cCounter = 0; cCounter < eAmount.length; cCounter++) {
      eAmount[cCounter].style.display = "none";
    }var selectedElem;selectedElem = document.querySelectorAll("."+category);for(cCounter = 0; cCounter < selectedElem.length; cCounter++)
    {
      selectedElem[cCounter].style.display = "inline";
    }resultVal = cCounter;document.getElementById("resultAmount").innerHTML = resultVal;
  }removeHighlightedButton();tab.classList.add("activebtn");
}

function removeHighlightedButton(){
  var prevSelected;
  prevSelected = document.querySelectorAll(".btn");
  for(cCounter = 0; cCounter < prevSelected.length; cCounter++)
  {
    prevSelected[cCounter].classList.remove("activebtn");
  }
}

function showNoBabies(butn){var waitDate = new Date("Jan 28, 2021 0:00:00").getTime();var autoUpdate = setInterval(function() {
      var currentTime = new Date().getTime();
      var dateDifference = waitDate - currentTime;
      var days = Math.floor (dateDifference / (24 * 60 * 60 * 1000));
      var hour = Math.floor((dateDifference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
      var mins = Math.floor((dateDifference % (     60 * 60 * 1000)) / (60 * 1000));
      var secs = Math.floor((dateDifference % (          60 * 1000)) / 1000);
      document.getElementById('cdDay').innerHTML = days;
      document.getElementById('cdHrs').innerHTML = hour;
      document.getElementById('cdMins').innerHTML = mins;
      document.getElementById('cdSecs').innerHTML = secs;
  }, 1000);
  
  
  removeHighlightedButton();butn.classList.add("activebtn");var containerLst= document.querySelectorAll(".imageContainer");
  for (var cntr = 0; cntr < containerLst.length; cntr++) {
    containerLst[cntr].style.display = "none";
  }document.getElementById('noNewBabiesBox').classList.add('showNoNewBabies');document.getElementById("resultAmount").innerHTML = "0";
}var currentImageIndex;function closePopup(frmPage){
  document.body.style.overflowY = "scroll";document.getElementById('popup').style.width="0";
  document.getElementById('cattleImage').src = "";if(frmPage == "gallery")
  {
    document.getElementById('prevBtn').style.display = "none";document.getElementById('nextBtn').style.display = "none";
  }if(frmPage == "cattles")
  {
    document.getElementById('funFactPara').innerHTML = "";document.getElementById('funFactTitle').innerHTML = "";
  }  
}function popupImg(locat, fromPage, orientaition){document.body.style.overflowY = "hidden";document.getElementById('popup').style.width="100vw";document.getElementById('cattleImage').src = locat.src;

  if(fromPage == "gallery")
  {var a = 0, allImageContainers;allImageContainers = document.querySelectorAll('.imageContainer');while(allImageContainers[a].src != locat.src)
    {
      a++;
    }
    currentImageIndex = a;if(orientaition == "landscape")
    {document.getElementById('cattleImage').classList.add("landscape");}
    else
    {document.getElementById('cattleImage').classList.add("portrait");}document.getElementById('prevBtn').style.display = "block";document.getElementById('nextBtn').style.display = "block";
  }if(fromPage == "cattles")
  {
    document.getElementById('funFactPara').innerHTML = locat.alt;
    document.getElementById('funFactTitle').innerHTML = "Fun Fact:";
  }  
}

function prevImg(){var ImageContainers = document.querySelectorAll('.imageContainer');if(currentImageIndex == 0)
  {
    currentImageIndex = ImageContainers.length;
  }currentImageIndex--;document.getElementById('cattleImage').src = ImageContainers[currentImageIndex].src;
}

function nextImg(){
  var ImageContainers = document.querySelectorAll('.imageContainer');if(currentImageIndex == --ImageContainers.length)
  {
    currentImageIndex = -1;
  }
  currentImageIndex++;document.getElementById('cattleImage').src = ImageContainers[currentImageIndex].src;
}

function animateBar(){
  var barVal = 0, intervalFunc1;
  var bar = document.getElementById('animatedProgress');
  var intervalFunc = setInterval(barUp, 5);
  function barUp(){
    if(barVal >= 80)
    { clearInterval(intervalFunc); }
    else
    {
      barVal++;
      bar.value = barVal;
    }
  }
  setTimeout(function(){ intervalFunc1 = setInterval(barDown, 8);}, 802);
  function barDown(){
    if(barVal <= 20)
    { clearInterval(intervalFunc1); }
    else
    {
      barVal--;
      bar.value = barVal;
    }
  }
}