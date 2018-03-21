$(document).ready(function() {
  $(".formOne").submit(function(event){
    event.preventDefault();
    var nameInput = $("#name").val();
    var addressInput = $("#address").val();
    var emailInput = $("#email").val();
    var phoneInput = $("#phone").val();
    debugger
    $("#output").append("<li class='result'>" + nameInput + "</li>" + "<h4>" + addressInput + emailInput + phoneInput + "</h4>");
    $("li.result").last().click(function() {
      $(this).next("h4").toggle("fast");
    });
  });
});
