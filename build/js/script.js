document.addEventListener('DOMContentLoaded', function(){
	var firstSlide = document.getElementsByClassName ('first-btn');
	var slide1 = document.getElementsByClassName ('first-slide')[0];
	var slide2 = document.getElementsByClassName ('second-slide')[0];
	var slide3 = document.getElementsByClassName ('third-slide')[0];


	[].forEach.call(firstSlide, function(a) {
	    a.addEventListener('click', function(event) {
	      event.preventDefault()
	      slide1.classList.remove("hidden")
	      slide2.classList.add("hidden")
	      slide3.classList.add("hidden")
	    });

  });

})

document.addEventListener('DOMContentLoaded', function(){
	var secondSlide = document.getElementsByClassName ('second-btn');
	var slide2 = document.getElementsByClassName ('second-slide')[0];
	var slide1 = document.getElementsByClassName ('first-slide')[0];
	var slide3 = document.getElementsByClassName ('third-slide')[0];

	[].forEach.call(secondSlide, function(a) {
	    a.addEventListener('click', function(event) {
	      event.preventDefault()
	      slide2.classList.remove("hidden")
	      slide1.classList.add("hidden")
	      slide3.classList.add("hidden")
	    });

  });

})
document.addEventListener('DOMContentLoaded', function(){
	var thirdSlide = document.getElementsByClassName ('third-btn');
	var slide2 = document.getElementsByClassName ('second-slide')[0];
	var slide1 = document.getElementsByClassName ('first-slide')[0];
	var slide3 = document.getElementsByClassName ('third-slide')[0];

	[].forEach.call(thirdSlide, function(a) {
	    a.addEventListener('click', function(event) {
	      event.preventDefault()
	      slide2.classList.add("hidden")
	      slide1.classList.add("hidden")
	      slide3.classList.remove("hidden")
	    });

  });

})