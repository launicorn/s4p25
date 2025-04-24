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
    const scrolledTo = scrollY + window.innerHeight;
    const docHeight  = document.documentElement.scrollHeight;
    if (scrolledTo >= docHeight - 5) {
      phrase.style.display = 'block';
    } else {
      phrase.style.display = 'none';
    }
  }
});
