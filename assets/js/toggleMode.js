var mode = localStorage.getItem('mode');
const modeInput = document.querySelector('.gsm-mode-switcher__input');

if (modeInput) {
  if (mode == 'dark') {
    modeInput.checked = false;
    onchageMode(modeInput);
  }
}

function onchageMode(element) {
  ga('send', 'event', 'MODE', 'changeTo', element.checked ? 'light' : 'dark')
  if (element.checked) {
    document.body.classList.add('_mode_light');
    document.body.classList.remove('_mode_dark');
    localStorage.setItem('mode', 'light');
  } else {
    document.body.classList.add('_mode_dark');
    document.body.classList.remove('_mode_light');
    localStorage.setItem('mode', 'dark');
  }
}

modeInput.addEventListener('change', function () {
  onchageMode(this)
});
