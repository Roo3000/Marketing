const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const jpg = document.querySelector("#img")
const themeToggler = document.querySelector(".theme-toggler");

// show sidebar and remove image logo
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
    jpg.style.position = 'absolute'
    jpg.style.display = 'none'
})
// close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none'
})

// change theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})
