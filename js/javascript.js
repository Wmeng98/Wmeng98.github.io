
$(document).ready(
  function() {
    $('#q1').fadeIn(6000);
  });



$(document).ready(
  function() {
    $('#q2').fadeIn(8000);
  });



$(document).ready(
  function() {
    $('#q3').fadeIn(10000);
  });

$(document).ready(
  function() {
    $('#profile').fadeIn(3000);
  });

$(document).ready(
  function() {
    $('#slideshowpres').fadeIn(9000);
  });


// Js for automatic slide show on homepage

var slideIndex = 0;
showSlides();

function showSlides() {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display= "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}
	for (i = 0; i <dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
		slides[slideIndex-1].style.display = "block";
		dots[slideIndex-1].className += " active";
	setTimeout(showSlides, 6000); //3 second change
}