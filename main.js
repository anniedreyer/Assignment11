$(document).ready(function() {

$("button").click(function() {
    var inputItem = document.getElementById("addTask").value;
    
    var aT = document.createTextNode(inputItem);
    var newItem = document.createElement("li");
    newItem.append(aT);
    document.getElementById("checklist").append(newItem);
    
    alert("You have a new task on your list!");
  });


  $("ul").on("click", "li", function(){
      $(this).toggleClass("strike");
    });
    
});

