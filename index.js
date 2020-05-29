



const buttons = document.querySelectorAll('.subnavBtn');
const divs = document.querySelectorAll('.subnavDiv');

const handleClick = e => {
  e.preventDefault();
  
  // Buttons
  buttons.forEach(node => node.classList.remove('active-btn'));
  e.currentTarget.classList.add('active-btn');
  
  // Divs (tabs)
  divs.forEach(node => node.classList.remove('active'));
  [...divs].filter(div => div.dataset.tab === e.currentTarget.dataset.tab)[0].classList.add('active');
}

buttons.forEach(node => node.addEventListener('click', handleClick));