//The initial buttons on the page. Theme: Video Games.
var items = ["Mario Bros.", "Halo", "Angry Birds", "Minecraft", "Sonic the Hedgehog", "Skull Monkies"];

//making the buttons

function = (makeButton) {

    $("#buttons").empty();

    for (var i = 0; i < items.length; i++); {

    var a = $("<button>");
    a.addClass("vgButton");
    a.attr("game-data", games[i]);
    a.text(games[i])
    $("buttons").append(a);
    }
}

$("#add-game").on("click", function(event) {
    event.preventDeffault();
    var vgGame = $("game-input").val().trim();
    vgGame.push(vgGame);
    makeButton;
}); 


