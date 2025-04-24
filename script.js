// Show alert on first visit
window.addEventListener('load', () => {
  if (!localStorage.getItem('hasVisited')) {
    alert(
      "Welcome to Indigenous Futurism!\n\n" +
      "• This is a webzine about Bolivian culture\n" +
      "• Click on the Ekeko to flip through the pages and more!\n\n" +
      "Enjoy your journey!"
    );
    localStorage.setItem('hasVisited', 'true');
  }
});

function goToSection(section){
  window.location.href = `${section}.html`;
}

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const image = document.getElementById('titleImage');

  if (image) {
    const scaleY = 1 + scrollY * 0.03;
    image.style.transform = `scaleY(${scaleY})`;
    image.style.transformOrigin = 'top center';
  }
   //Footer Phrase Show/Hide
  const phrase = document.getElementById('bottomPhrase');
  if (phrase) {
    const scrolledTo  = window.scrollY + window.innerHeight;
    const totalHeight = document.body.scrollHeight;
    // only show when we've scrolled all the way to (or past) the true bottom
    if (scrolledTo >= totalHeight) {
      phrase.style.display = 'block';
    } else {
      phrase.style.display = 'none';
    }
  }

});
