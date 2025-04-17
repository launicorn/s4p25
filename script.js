function goToSection(section){
  window.location.href = `${section}.html`;
}

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const image = document.getElementById('titleImage');

  if (image) {
    const scaleY = 1 + scrollY * 0.002;
    image.style.transform = `scaleY(${scaleY})`;
    image.style.transformOrigin = 'top center';
  }
});
