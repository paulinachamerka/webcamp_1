var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");

btn.onclick = function()
{
	if(document.getElementById("wybrozmiar").selectedIndex=="0")
	{
		modal.style.display = "block";
	}
	else modal2.style.display = "block";
}

span.onclick = function()
{
	if(document.getElementById("wybrozmiar").selectedIndex=="0")
	{
			modal.style.display = "none";
	}
}

span2.onclick = function()
{
	if(document.getElementById("wybrozmiar").selectedIndex=="1" || document.getElementById("wybrozmiar").selectedIndex=="2" || document.getElementById("wybrozmiar").selectedIndex=="3")
	{
			modal2.style.display = "none";
	}
}
window.onclick = function(event) 
{
	if(document.getElementById("wybrozmiar").selectedIndex=="0")
	{
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
	else 
	{
		if (event.target == modal2) {
			modal2.style.display = "none";
		}
	}
}

const hamburger = documen.querySelector('.hamburger');
const nav = documen.guerySelector('.navbar-menu');

const handleClick = ()
{
	hamburger.classlist.toggle('hamburger::active');
}

hamburger.addEventListener('click', handleClick);