$(document).ready(function() {
  $('#formOne').submit(function() {
    var nameText = $("input#name").val();

    $(".name").text(nameText);

    $("#letter").slideDown("fast");

    event.preventDefault();
  });
});
