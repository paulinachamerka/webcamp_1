function buttonfunction()
{
		if(document.getElementById("wybrozmiar").selectedIndex=="0")
	{
	 alert("wybierz rozmiar");
	}
	 else alert("dodano do koszyka");
}

window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar-menu");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}