window.onload = () => {
  const modal = document.querySelector('.gsm-modal');
  // const content = document.getElementById('modalContent');
  // const left = document.querySelector('.gsm-modal__content__arrow._left');
  // const right = document.querySelector('.gsm-modal__content__arrow._right');
  const img = document.getElementById('modalImg');
  const modalTrigger = document.querySelectorAll("[gsm-modal-trigger]");
  const modalClose = document.querySelector(".gsm-modal__close");

  modalTrigger.forEach(function (el, id) {
    el.addEventListener('click', function (event) {
      event.preventDefault();
      img.src = el.src
      modal.classList.add('_open');
    });
  })

  modalClose.addEventListener('click', function (event) {
    event.preventDefault();
    modal.classList.remove('_open');
  });
}
