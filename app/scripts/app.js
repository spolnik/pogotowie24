// Generated by CoffeeScript 1.9.3
(function() {
  $(document).ready(function() {
    var init_map;
    $('.more-info').click(function() {
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 500);
      return false;
    });
    $('#welcome').vegas({
      slides: [
        {
          src: 'app/img/tool-384740_1280.jpg'
        }, {
          src: 'app/img/light-bulb.jpg'
        }, {
          src: 'app/img/tools-864983_1280.jpg'
        }, {
          src: 'app/img/keys.jpg'
        }
      ],
      overlay: true
    });
    $('#vegas-next').click(function() {
      return $('#welcome').vegas('next');
    });
    $('#vegas-prev').click(function() {
      return $('#welcome').vegas('previous');
    });
    $('.navbar').sticky({
      topSpacing: 0
    });
    $('#menu').onePageNav({
      currentClass: "active",
      changeHash: false,
      scrollThreshold: 0.5,
      scrollSpeed: 750,
      filter: '',
      easing: 'swing'
    });
    $('#contactForm').validate({
      rules: {
        name: {
          minlength: 2,
          required: true
        },
        email: {
          required: true,
          email: true
        },
        body: {
          minlength: 2,
          required: true
        }
      },
      highlight: function(element) {
        return $(element).closest('.control-group').removeClass('success').addClass('error');
      },
      success: function(element) {
        element.addClass('valid').text("Ok");
        return $(element).closest('.control-group').removeClass('error').addClass('success');
      },
      messages: {
        name: {
          required: "To pole jest wymagane",
          minlength: "Proszę wpisać co najmniej dwa znaki"
        },
        email: {
          required: "To pole jest wymagane",
          email: "Proszę wpisać poprawny adres email"
        },
        body: {
          required: "To pole jest wymagane",
          minlength: "Proszę wpisać co najmniej dwa znaki"
        }
      }
    });
    init_map = function() {
      var location, map, mapoptions, marker;
      location = new google.maps.LatLng(50.0646501, 19.9449799);
      mapoptions = {
        center: location,
        zoom: 10
      };
      marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Venice"
      });
      map = new google.maps.Map(document.getElementById("map-container"), mapoptions);
      return marker.setMap(map);
    };
    return google.maps.event.addDomListener(window, 'load', init_map);
  });

}).call(this);

//# sourceMappingURL=app.js.map