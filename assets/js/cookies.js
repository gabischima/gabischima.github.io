let closeCookiesButton = document.querySelector('.gsm-cookies__ok')
let cookies = document.querySelector('.gsm-cookies')
var cookieClick = localStorage.getItem('cookies');

if (cookies) {
  if (!cookieClick) {
    cookies.classList.add('_show');
  }
}

closeCookiesButton.addEventListener('click', function () {
  localStorage.setItem('cookies', 'true');
  cookies.classList.remove('_show');
});
