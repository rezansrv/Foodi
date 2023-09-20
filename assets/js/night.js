const toggleButton = document.querySelector('.switch');

toggleButton.addEventListener('click', function() {
const root = document.querySelector(':root');
const currentBackgroundColor = getComputedStyle(root).getPropertyValue('--background-color');
const currentTextColor = getComputedStyle(root).getPropertyValue('--text-color');

if (currentBackgroundColor === '#FCFCFC') {
root.style.setProperty('--background-color', '#343434');
root.style.setProperty('--background2-color', '#272727');
root.style.setProperty('--text-color', '#FCFCFC');
root.style.setProperty('--text2-color', '#FCFCFC');
root.style.setProperty('--text3-color', '#FCFCFC');
root.style.setProperty('--text4-color', '#FCFCFC');


} else {
root.style.setProperty('--background-color','#FCFCFC' );
root.style.setProperty('--background2-color', '#fff');
root.style.setProperty('--text-color', '#000');
root.style.setProperty('--text2-color', '#272727');
root.style.setProperty('--text3-color', '#4A4A4A');
root.style.setProperty('--text4-color', '#555');


}
});
const themeSwitch = document.getElementById("theme-switch");
const body = document.body;

themeSwitch.addEventListener("change", () => {
body.classList.toggle("dark-mode");
});
// وقتی کاربر از 20px یا بیشتر اسکرول کند، دکمه نمایش داده می‌شود
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
document.getElementById("myBtn").style.display = "block";
} else {
document.getElementById("myBtn").style.display = "none";
}
}

// وقتی کاربر روی دکمه کلیک کند، به بالای صفحه بر می‌گردد
function topFunction() {
document.body.scrollTop = 0; // برای سافاری
document.documentElement.scrollTop = 0; // برای کروم، فایرفاکس، IE و اپرا
}
