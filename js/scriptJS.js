$(document).ready(function () {

variable = new XMLHttpRequest();


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

/*model wybrane*/

const button = document.querySelectorAll(".show_wybrane");
const quickview= document.querySelector(".modal_wybrane");
const price = document.querySelector(".price");
const images = document.querySelector(".images");

button.forEach(o =>
	o.addEventListener('click', (e) => {
		
		

		var productid = o.getAttribute('data-product-id');


		
		$.ajax({
			url: 'js/data.json',
			dataType: 'json',
			success: function(data) {


				data.map(product => {
					if(product.id == productid)
					{
						console.log(product.price);
						price.innerHTML = product.price;
						let slide; 
						for(let i=0; i<=2; i++){
							slide ='<div class="items"><img src="'+product.images[i].url+'" class="img-fluid" alt="zdjecie produkt 1"></div>';
							$('.slider-for').slick('slickAdd',slide);
						}
						
					}
				});

			}

		});


	}));
/*button.addEventListener('click', function(e)
{
	var productid = button.getAttribute('data-product-id');



});*/



});