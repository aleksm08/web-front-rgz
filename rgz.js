// СКРИПТ ДЛЯ МЕНЮ
const navToggle = document.querySelector('.nav-toggle-mobile');
const navPanel = document.querySelector('.nav-panel');
const navLinks = document.querySelectorAll('.nav-panel ul li a');

// Установка класса 'active' для текущей страницы
const currentPage = window.location.pathname.split('/').pop();
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

// Обработчик клика для переключения состояния меню
navToggle.addEventListener('click', function() {
    navPanel.classList.toggle('open');
    navToggle.classList.toggle('open');
});

// Обработчик клика для закрытия меню при нажатии на ссылку
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navPanel.classList.remove('open');
        navToggle.classList.remove('open');
    });
});