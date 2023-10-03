document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1); // Отримуємо ідентифікатор цільового розділу

    // Знаходимо елемент цільового розділу
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      // Виконуємо плавний скрол до цільового розділу
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth' // Додаємо плавність
      });
    }
  });
});
