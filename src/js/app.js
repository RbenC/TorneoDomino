const titles = document.querySelectorAll('.accordion-title');

titles.forEach(title => {
  title.addEventListener('click', () => {
    const content = title.nextElementSibling;
    content.classList.toggle('active');
  });
});
