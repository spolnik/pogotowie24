$(document).ready ->

  $('.more-info').click ->
    $('.main').moveDown()
    false

  $('.contact').click ->
    $('.main').moveTo(6)
    false

  $('.main').onepage_scroll
    keyboard: true
    loop: true

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

  $('#contactForm').validate
    rules:
      name:
        minlength: 2
        required: true
      email:
        required: true
        email: true
      body:
        minlength: 2
        required: true
    highlight: (element) ->
      $(element).closest('.control-group').removeClass('success').addClass 'error'
    success: (element) ->
      element.addClass('valid').text "Ok"
      $(element).closest('.control-group').removeClass('error').addClass 'success'
    messages:
      name:
        required: "To pole jest wymagane"
        minlength: "Proszę wpisać co najmniej dwa znaki"
      email:
        required: "To pole jest wymagane"
        email: "Proszę wpisać poprawny adres email"
      body:
        required: "To pole jest wymagane"
        minlength: "Proszę wpisać co najmniej dwa znaki"
