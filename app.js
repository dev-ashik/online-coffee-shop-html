// menu button 
const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector("#menu-btn");

menuBtn.onclick = () => {
    navbar.classList.toggle('active');
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
}

// shoping cart
const cartItem = document.querySelector(".cart-item-container");
const cartBtn = document.querySelector("#cart-btn");

cartBtn.onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}


// search
const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector("#search-btn");

searchBtn.onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}


// remove all
window.onscroll = () => {
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
}