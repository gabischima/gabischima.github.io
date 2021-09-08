let appStoreBtn = document.querySelectorAll('.gsm-enne__img__appstore')
let imgDownload = document.querySelector('.gsm-enne__img__download')

for (var i = 0; i < appStoreBtn.length; i++) {
  appStoreBtn[i].addEventListener('click', function () {
    ga('send', 'event', 'APPSTORE')
  });
}

imgDownload.addEventListener('click', function () {
  ga('send', 'event', 'DOWNLOAD ENNE')
});