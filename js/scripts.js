
$(function(){
  
  // masonry 

  $('.posts').masonry({
    columnWidth: 273,
    gutter: 85,
    itemSelector: '.blogs'
  });

  $('.project-wrapper').masonry({
    columnWidth: 325,
    gutter: 12,
    itemSelector: '.project'
  });

  $('.image-container').masonry({
    columnWidth: 150,
    gutter: 20,
    itemSelector: '.photos'
  });

});



//flexslider

$(window).load(function(){
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 160, //itemWidth: 210,
    itemMargin: 5,
    asNavFor: '#slider'
  });

  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel",
  });
});


//gallery flexslider 
  $(window).load(function() {
    $('.flexslider').flexslider({
      animation: "slide"
    });
  });
  
