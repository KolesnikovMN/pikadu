let menuTogle = document.querySelector('#menu-toggle');
let menu = document.querySelector('.sidebar');

//Отслеживаем клик по кнопке меню
menuTogle.addEventListener ('click', function(event){
    //Отменяем стандартное поведение ссылки
    event.preventDefault();
    //вешаем сайдбару класс visible
    menu.classList.toggle('visible')
});