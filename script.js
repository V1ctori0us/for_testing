window.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger_wrapper');
    burger.classList.remove('burger_wrapper-active');   

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_wrapper-active');
    });
});