const hamMenu = document.querySelector('.hamburger-menu');
const offscreenMenu = document.querySelector('.offscreen-menu');
const navbarList = document.querySelector('.navbar-list');
const navbarLinks = navbarList.querySelectorAll('li');

window.addEventListener('load', () => {
  $(document).ready(function () {
    $(this).scrollTop(0);
  });
  //Loading screen
  var div = $('#overlay');
  div.fadeOut(1300);
  //Navbar animation
  document.querySelector('.navbar-list li').classList.add('active');
});

//Hamburger menu transformation
hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offscreenMenu.classList.toggle('active');
});


navbarLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    // Remove the active class from all links
    navbarLinks.forEach((link) => link.classList.remove('active'));
    // Add the active class to the clicked link
    event.target.parentElement.classList.add('active');
  });
});


$('a[href^="#"]').on('click', function (event) {
  var href = $(this).attr('href');
  var target = $(href);
  if (target.length) {
    event.preventDefault();
    if (href === "#home") {
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 60
      }, 1000);
    } else {
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  }
});

$(document).ready(function () {
  // Cache selectors
  var topMenu = $(".navbar"),
    topMenuHeight = topMenu.outerHeight() + 15,
    // All list items
    menuItems = topMenu.find(".navbar-list li a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

  // Bind to scroll
  $(window).scroll(function () {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
      if ($(this).offset().top < fromTop)
        return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";
    // Set/remove active class
    menuItems.parent().removeClass("active")
      .end().filter("[href='#" + id + "']").parent().addClass("active");
  });
});


$(document).ready(function () {
  var elements = $(".hidden");
  var numElements = elements.length;
  var elementsToShow = 4;


  $("#view-more-button").click(function () {

      if (numElements < elementsToShow & numElements > 0) {
          elementsToShow = numElements;
      }

      elements.slice(0, elementsToShow).show();
      elements = elements.slice(elementsToShow);

      numElements -= elementsToShow;

      if (numElements <= 0) {
          $("#view-more-button").hide();
          $("#view-less-button").show();
          elements = $(".hidden");
          numElements = elements.length;
          elementsToShow = 4;
      }
  });

  $("#view-less-button").click(function () {
      elements.hide();
      $("#view-more-button").show();
      $("#view-less-button").hide();
  });
});