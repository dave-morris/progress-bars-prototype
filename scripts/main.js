$(document).ready(function() {

  // Give focus to something ANYTHING!
  $('.series-pagination').addClass('active');
  $('.series-pagination .pagination-button').eq(0).addClass('focus');

  var pageToDisplay = 1;
  var initialMove = 420;

  function focusShiftHorizontal() {
    total = $('.active .selectable').length;
    current = $('.active .selectable.focus').index() + 1;
  }

  function displayCorrectPage() {

    var pageToDisplay = $('.active .selectable.focus').index() + 1;

    $('.grid').hide();

    if (pageToDisplay == 1) {$('#page1').show();}
    if (pageToDisplay == 2) {$('#page2').show();}
    if (pageToDisplay == 3) {$('#page3').show();}
    if (pageToDisplay == 4) {$('#page4').show();}
    if (pageToDisplay == 5) {$('#page5').show();}

  }

  function returnFocus() {

    //Logic of returning focus to item below
    if ($('.active .selectable').hasClass('lastFocus')) {
      $('.active .selectable.lastFocus').addClass('focus').removeClass('lastFocus');
    } else {
      $('.active .selectable:eq(0)').addClass('focus');
    }

  }

  function moveLeft() {

    focusShiftHorizontal();

    if (current > 1) {
        if ($('.series-pagination').hasClass('active')) {

          $('.focus').removeClass('focus').prev().addClass('focus');
          displayCorrectPage();

        } else if ($('.grid').hasClass('active')) {

            $('.focus').removeClass('focus').prev().addClass('focus');

        }
      }
    }

  function moveRight() {

    focusShiftHorizontal();

    if (total > current) {
      if ($('.series-pagination').hasClass('active')) {
        $('.focus').removeClass('focus').next().addClass('focus');
        displayCorrectPage();
      } else if ($('.grid').hasClass('active')) {

          $('.focus').removeClass('focus').next().addClass('focus');

      }


    }
  }

  function moveUp() {

    if ($('.grid').hasClass('active')) {

      current = $('.active .selectable.focus').index() + 1;

      if (current <= 4) {

        $('.grid').removeClass('active');
        $('.series-pagination').addClass('active');
        $('.focus').removeClass('focus').addClass('lastFocus');

        $('.vertical-wrapper').css('transform', 'translateY(0px)');
        returnFocus();

      } else if ($('.grid').hasClass('active')) {

        focusShiftHorizontal();

        if (current > 4) {

          $('.focus').removeClass('focus').prev().prev().prev().prev().addClass('focus');

        }

      }

    }

  }

  function moveDown() {

    if ($('.series-pagination').hasClass('active')) {

      var whichSeries = $('.active .selectable.focus').index() + 1;

      if (whichSeries == 1) {
        $('.active').removeClass('active');
        $('.focus').removeClass('focus').addClass('lastFocus');
        $('#page1').addClass('active');
      }

      if (whichSeries == 2) {
        $('.active').removeClass('active');
        $('.focus').removeClass('focus').addClass('lastFocus');
        $('#page2').addClass('active');
      }

      if (whichSeries == 3) {
        $('.active').removeClass('active');
        $('.focus').removeClass('focus').addClass('lastFocus');
        $('#page3').addClass('active');
      }

      if (whichSeries == 4) {
        $('.active').removeClass('active');
        $('.focus').removeClass('focus').addClass('lastFocus');
        $('#page4').addClass('active');
      }

      if (whichSeries == 5) {
        $('.active').removeClass('active');
        $('.focus').removeClass('focus').addClass('lastFocus');
        $('#page5').addClass('active');
      }

        $('.vertical-wrapper').css('transform', 'translateY(' + (-initialMove) + 'px)');

        returnFocus();

    } else if ($('.grid').hasClass('active')) {

      focusShiftHorizontal();

      if (current < (total - 3)) {

        $('.focus').removeClass('focus').next().next().next().next().addClass('focus');

      }

    }
  }

  function pressEnter() {
    console.log("Enter");
  }

  function goBack() {
    console.log("Going back");
  }

  // On *any* keydown event
  $(document).keyup(function(e) {

    if (e.keyCode == 37) {
      moveLeft();
    }

    if (e.keyCode == 38) {
      moveUp();
    }

    if (e.keyCode == 39) {
      moveRight();
    }

    if (e.keyCode == 40) {
      moveDown();
    }

    if (e.keyCode == 13) {
      pressEnter();
    }

    if (e.keyCode == 27 || e.keyCode == 8) {
      goBack();
    }

  });

});
