//  Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function(){
    $("change-devoured").on("click", function(event){
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");

        var newDevourState = {
            isDevoured: newDevour
        };

        // Send the PUT request.
        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function(){
                console.log("changed isDevoured to", newDevour);
                // REload the pare to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDEfault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#bur").val().trim(),
        };

        // Send the POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function(){
                console.log("creaeted new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});