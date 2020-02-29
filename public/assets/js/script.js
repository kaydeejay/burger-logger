$(document).ready(function(){
  $(".change-devoured").on("click", function(event){
    let id = $(this).data("id");
    let newDevoured = !($(this).data("eaten"));
    const newEatenState = {
      devoured: newDevoured
    };

    console.log(newEatenState);

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatenState
    }).then(function(){
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event){
    event.preventDefault();
    const newBurger = {
      name: $("#burg").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    $.ajax('/api/burgers', {
      type: "POST",
      data: newBurger
    }).then(function(){
      location.reload();
    });
  });

  $(".delete-burger").on("click", function(event){
    let id = $(this).data("id");
    
    $.ajax('/api/burgers/' + id, {
      type: "DELETE"
    }).then(function(){
      location.reload();
    });
  });
});