function goToSection(section){
  window.location.href = `${section}.html`;
}

// scrolls and stretch
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const image = document.getElementById('titleImage');

  const scaleY = 1 + scrollY * 0.003; 
  image.style.transform = `scaleY(${scaleY})`;
});
