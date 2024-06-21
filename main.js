import './style.scss'

const progressCircle = document.querySelector('.progress-ring__circle');
const radius = progressCircle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
progressCircle.style.strokeDashoffset = circumference;


const valueInput = document.getElementById('valueInput');

const animateSwitch = document.getElementById('animateSwitch');

const hideSwitch = document.getElementById('hideSwitch');

const circle = document.querySelector('.progress-ring');

function setProgress(value) {
  const offset = circumference - (value / 100) * circumference;
  progressCircle.style.strokeDashoffset = offset;
}

valueInput.addEventListener('input', (e) => {
  const value = e.target.value;
  if (value >= 0 && value <= 100) {
      setProgress(value);
  } else if (value > 100) {
    setProgress(100);
  }
});

animateSwitch.addEventListener('change', (e) => {
  if (e.target.checked) {
    progressCircle.classList.add('animated');
  } else {
    progressCircle.classList.remove('animated');
  }
});

hideSwitch.addEventListener('change', (e) => {
  if (e.target.checked) {
    circle.classList.add('hidden');
  } else {
    circle.classList.remove('hidden');
  }
});