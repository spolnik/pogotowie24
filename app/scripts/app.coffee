$(document).ready ->

  $('.more-info').click ->
    $('html, body').animate
      scrollTop: $($(this).attr('href')).offset().top
      500
    false

  $('#welcome').vegas
    slides: [
      {src: 'app/img/tool-384740_1280.jpg'},
      {src: 'app/img/light-bulb.jpg'},
      {src: 'app/img/tools-864983_1280.jpg'}
      {src: 'app/img/keys.jpg'},
    ]
    overlay: true

  $('#vegas-next').click ->
    $('#welcome').vegas('next')

  $('#vegas-prev').click ->
    $('#welcome').vegas('previous')

  $('.navbar').sticky
    topSpacing: 0

  $('#menu').onePageNav
    currentClass: "active"
    changeHash: false
    scrollThreshold: 0.5
    scrollSpeed: 750
    filter: ''
    easing: 'swing'