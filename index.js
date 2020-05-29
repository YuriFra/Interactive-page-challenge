let slideIndex = 1;

const prev = document.getElementById('prev');
const next = document.getElementById('next');

slideIndex = 1;
showDivs(slideIndex);

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide)

function prevSlide() {
	slideIndex -= 1
	showDivs(slideIndex);
}

function nextSlide() {
	slideIndex += 1
	showDivs(slideIndex);
}

function showDivs(n) {
  let i;
  let x = document.querySelectorAll(".picture");

  if (slideIndex > x.length) {
  	slideIndex = 1
  }
  if (slideIndex < 1) {
  	slideIndex = x.length
  };
  for (i = 0; i < x.length; i++) {
    x[i].classList.add('d-none');
    x[i].classList.remove('d-block');
  }

  x[slideIndex - 1].classList.add('d-block');
  x[slideIndex - 1].classList.remove('d-none');


  console.log(slideIndex);
}

const buttons = document.querySelectorAll('.subnavBtn');
const divs = document.querySelectorAll('.subnavDiv');

const handleClick = e => {
  e.preventDefault();

  // Buttons
  buttons.forEach(node => node.classList.remove('active-btn', 'btn-success'));
  e.currentTarget.classList.add('active-btn', 'btn-success');
  console.log(buttons)
  
  // Divs (tabs)
  divs.forEach(node => node.classList.remove('active'));
  [...divs].filter(div => div.dataset.tab === e.currentTarget.dataset.tab)[0].classList.add('active');
}

buttons.forEach(node => node.addEventListener('click', handleClick));

input = document.querySelectorAll('input');
console.log(input)
textarea = document.querySelectorAll('textarea');

/*nr1 nr2 nr3*/

function animateValue(id) {
	let start = 1;
    let current = start;
    const obj = document.getElementById(id);
    end = 100;
    const timer = setInterval(function() {
        obj.innerHTML = current++;
        if (current == end) {
            clearInterval(timer);
        }
    }, 5);
}

animateValue("nr1");
animateValue("nr2");
animateValue("nr3");