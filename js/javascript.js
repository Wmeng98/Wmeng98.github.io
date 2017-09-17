
$(document).ready(
  function() {
    $('#q1').fadeIn(6000);
  });



$(document).ready(
  function() {
    $('#q2').fadeIn(7000);
  });



$(document).ready(
  function() {
    $('#q3').fadeIn(8000);
  });

$(document).ready(
  function() {
    $('#profile').fadeIn(3000);
  });

$(document).ready(
  function() {
    $('#slideshowpres').fadeIn(9000);
  });

//  Fade in about button choices ...
$(document).ready(
  function() {
    $('#a1').fadeIn(2000);
  });

$(document).ready(
  function() {
    $('#a2').delay(100).fadeIn(2000);
  });
$(document).ready(
  function() {
    $('#a3').delay(100).fadeIn(3000);
  });

$(document).ready(
  function() {
    $('#port1').fadeIn(10000);
  });

$(document).ready(
  function() {
    $('#port2').fadeIn(12500);
  });


// Contact/About panel Jquery code
$(document).ready(function() {
  $('#clickit').click(function() {
    $('#panel').slideToggle('slow');
  });
});


$(document).ready(function() {
  $('#clickit2').click(function() {
    $('#panel2').slideToggle('slow');
  });
});

$(document).ready(function() {
  $('#clickit3').click(function() {
    $('#panel3').slideToggle('slow');
  });
});


// fade in for contact slide toggle buttons
$(document).ready(
  function() {
    $('#clickit').fadeIn(5000);
  });

  $(document).ready(
  function() {
    $('#clickit2').delay(1000).fadeIn(5000);
  });

  $(document).ready(
  function() {
    $('#clickit3').delay(2000).fadeIn(5000);
  });
// ____________________



// __________________________________



$(document).ready(
  function() {
    $('ul li').removeClass('selected');
  });




// js for about content

  $(document).ready(function() {



  $('ul li').click(function(){
    //this relates to actua ldot that was clicked on wanna get value of attribute of city that was the actual dot
    
    //alert($(this).attr('city') );

    //selected was css rule that shifts dots to green
    $('ul li').removeClass('selected');
    // first remove selected dots from all the class then add selected dots to whatever we click on
    $(this).addClass('selected');

    //set up string to target the city detail with an ID of whatever city name value matches the ID inside of the city detail, amd this relates to all of the IDs in the hidden HTML that matches the city attributes

    var list = '.list_detail#' + $(this).attr('list');
    var htmlCode = $(list).html();
    // ^^^ use to target hidden div in hidden html and pull out into new variable called html code
    
    //first fade out then run callback function
    $('.detail_container').fadeOut(300, function(){
      $('.detail_container .list_detail').html(htmlCode);
      $('.detail_container').fadeIn(0);
      //idea is click on dot, html fade out, change html text, and fade back in
    });


  });

});







// Js for automatic slide show on homepage, let it go as last on js code page or put in internal script in index.html

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


// // Toggle button active perm color change for about page
// $( "#about1" ).click(function() {
//   $(this).toggleClass("selected");
// });


