// stiky navegation
$(document).ready(function () {
    $(".features").waypoint(function (direction) {
      if (direction == "down") {
        $(".nav").addClass("stky");
      } else {
        $(".nav").removeClass("stky");
      }
    });
  });
// Page loading animation
	 $(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

	});
// nav-active
$('#nav').onePageNav({
	currentClass: 'active',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing',
});

// tab
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// tab
