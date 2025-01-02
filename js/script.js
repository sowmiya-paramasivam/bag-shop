// header section
document.addEventListener("DOMContentLoaded", () => {
    const searchIcon = document.querySelector('#search-icon');
    const searchBox = document.querySelector('.search-box');

    searchIcon.addEventListener('click', () => {
        searchBox.classList.toggle('active');
    });

    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
    window.onscroll = () => {
        searchBox.classList.remove('active');
        navbar.classList.remove('active');
    }
});

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.scrollY > 0)
})

// products section

const cartCount = document.querySelector('.header-icon span');
let count = 0;

const updateCartCount = () => {
    cartCount.textContent = count;
};

document.querySelector('.products-container').addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('bxs-cart-add')) {
        count += 1;
        updateCartCount();
    } else if (target.classList.contains('bxs-cart-remove')) {
        if (count > 0) {
            count -= 1;
        }
        updateCartCount();
    }
});
//  email section
document.getElementById('newsletterForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const emailInput = document.getElementById('emailInput').value;

    if (emailInput) {
        const responseMessage = document.getElementById('responseMessage');
        responseMessage.classList.remove('hidden');
        responseMessage.textContent = `Thank you for subscribing with ${emailInput}!`;


        document.getElementById('emailInput').value = '';
    }
});




