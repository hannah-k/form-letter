$(document).ready(function () {
  $('#submit').click(function(e) {
    var toInput = $("input#to").val();
    var fromInput = $("input#from").val();

    $(".to").text(toInput);
    $(".from").text(fromInput);

    e.preventDefault();
  });


});
