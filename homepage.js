let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  // Grab every slide by class name and set display to none
  let slides = document.getElementsByClassName('mySlides');
  for (i = 0; i < slides.length; i++) {
    slides[i].getElementsByClassName.display = 'none';
  }
  slideIndex++;

  // Reset slide index to 1 if past 3
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = 'block';
  // Wait two seconds to change image
  setTimeout(showSlides, 2000);
}
