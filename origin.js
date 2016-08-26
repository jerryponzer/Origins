var model = {
    names: [];
    origins: [];
}

var api = {
    //todo google maps key
    root: "https://api.themoviedb.org/3",
    token: "8662d91c4ba7fbe3cd46183982c00f21", 
}

function loadCoffee(callback){
    //todo ajax
}

function render() {
  $("#button-menu1 ul").empty();

  model.origins.forEach(function(coffee) {
    var title = $("<h6></h6>").text(movie.original_title);
  
    var watchedButton = $("<button></button>")
      .text("I watched it")
      .click(function() {
        var index = model.watchlistItems.indexOf(movie);
          model.watchlistItems.splice(index,1);
          render();
      });


    // TODO 2g
    // re-implement the li as a bootstrap panel with a heading and a body
    var itemView = $("<li></li>")
      .append(title)
      .append(watchedButton)
      .attr("class", "item-watchlist");

    $("#section-watchlist ul").append(itemView);
  });

  // insert browse items
  model.browseItems.forEach(function(movie) {
    var title = $("<h4></h4>").text(movie.original_title);

    var button = $("<button></button>")
      .text("Add to Watchlist")
      .click(function() {
        model.watchlistItems.push(movie);
        render();
      })
      .prop("disabled", model.watchlistItems.indexOf(movie) !== -1);

    var overview = $("<p></p>").text(movie.overview);

    // append everything to itemView, along with an <hr/>
    var itemView = $("<li></li>")
      .append(title)
      .append(overview)
      .append(button);
      
    // append the itemView to the list
    $("#section-browse ul").append(itemView);
  });
     
}