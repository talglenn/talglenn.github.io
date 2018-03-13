/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction1() 
{
    var x = document.getElementById("myNavMenu");
    if (x.className === "nav-menu") {
        x.className += " responsive";
    } else {
        x.className = "nav-menu";
    }
}


//Sticky nav code
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("myNavMenu");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//Piechart
$(document).ready(function(){
  var ctx = $("#mycanvas").get(0).getContext("2d");

  //pie chart data
  //sum of values = 360
  var data = [
    {
      value: 150,
      color: "blue",
      highlight: "royalblue",
      label: "HTML"
    },
    {
      value: 120,
      color: "lightgreen",
      highlight: "yellowgreen",
      label: "CSS"
    },
    {
      value: 90,
      color: "orange",
      highlight: "darkorange",
      label: "Javascript"
    }
  ];

  var piechart = new Chart(ctx).Pie(data);
});