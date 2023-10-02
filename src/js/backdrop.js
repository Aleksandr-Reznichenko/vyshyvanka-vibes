// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     document.body.classList.toggle('modal-open');
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();





(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    mobileMenuLinks: document.querySelectorAll(".anchor-link"), // Додали посилання в навігаційному меню
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle("is-hidden");
  }

  // Додали обробник кліку для посилань в навігаційному меню
  refs.mobileMenuLinks.forEach(link => {
    link.addEventListener("click", scrollToSection);
  });
  

  // Функція для прокручування до цільової секції та закриття модального вікна
  function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1); // Витягаємо ідентифікатор з атрибуту href
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
      refs.modal.classList.add("is-hidden");
      document.body.classList.remove('modal-open');
      
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
})();






