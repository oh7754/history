

$(window).on('scroll', function() {
  if ($(window).scrollTop() > 500) {
    // $('#bg_2') .css('opacity','0');
    // $('#bg_3') .css('opacity','0');
    $('#bg_1').css('transform','translate(10%,-10%)').css('opacity','1').animate(500);
  } else {
    // $('#bg_2') .css('opacity','0');
    // $('#bg_3') .css('opacity','1');
      $('#bg_1').css('transform','translate(10%,51%)').animate(500); }
    });

    $(window).on('scroll', function() {
      if ($(window).scrollTop() > 1200) {
        // $('#bg_2') .css('opacity','0');
        // $('#bg_3') .css('opacity','0');
        $('#bg_1').css('opacity','0').animate(500);
      } else {
        // $('#bg_2') .css('opacity','0');
        // $('#bg_3') .css('opacity','1');
          $('#bg_1').css('opacity','1').animate(500); }
        });


      // $(window).on('scroll', function() {
      //   if ($(window).scrollTop() > 1700) {
      //     $('#bg_1') .css('opacity','0');
      //     $('#bg_2') .css('opacity','0');
      //     $('#bg_3').css('transform','translate(10%,-100%)').css('opacity','1').animate(500);
      //   } else {
      //     $('#bg_1') .css('opacity','1');
      //     $('#bg_2') .css('opacity','1');
      //       $('#bg_3').css('transform','translate(10%,-62%)').css('opacity','0').animate(500); }
      //     });
      //

  // $(window).on('scroll', function() {
  //   if ($(window).scrollTop() > 1500) {
  //     $('.background').css('transform','translate(10%,-100%)').animate(500);
  //   } else {
  //         $('.background').css('transform','translate(10%,-62%)').animate(500); }
  //     });
