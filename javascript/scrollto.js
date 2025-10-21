// smooth scrolling for buttons

// Add smooth scrolling to scroll down button
$(document).ready(function(){
  
  $("#to-main").on('click', function(event) {

    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store Id of where to scroll to
      var id = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // number speficies the number of milliseconds it takes to scroll to the specified id
      $('html, body').animate({
        scrollTop: $(id).offset().top
      }, 1000, function(){});
    } 
  });
});

//same function as above but for the back to top button
$(document).ready(function(){
  
  $("#to-top").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var id = this.hash;

      //Faster scrolling for this button
      $('html, body').animate({
        scrollTop: $(id).offset().top
      }, 800, function(){});
    } 
  });
});

//adapted code from w3schools