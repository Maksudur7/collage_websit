//Dark moode

let mood = document.getElementById("drackmood");
mood.onclick=function(){
    document.body.classList.toggle("drack-thim");
}

//nave change
let Item = document.querySelectorAll('a');
let currentLocation = location.href;
for(let i =0; i<Item.length; i++){
  if(Item[i].href===currentLocation){
    // Item[i].className=''
  }
}


//Image slaider

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

// ----------------------------------------------galary part-------------------------------------------------
// Get the elements with class="column"
