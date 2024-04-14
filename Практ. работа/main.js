var images = [
    "url('https://gtravel.kz/wp-content/uploads/2019/07/kanyeny_2_1.jpg')",
    "url('https://kokshetau.online/wp-content/uploads/2018/08/Progulka-po-Golubomu-zalivu-Borovoe-P1250381.jpg')",
    "url('https://img.goodfon.ru/original/1920x1080/4/a9/ozero-kaindy-utonuvshiy-les.jpg')"
];
var currentImageIndex = 0;
var imageContainer = document.querySelector('.image-container');

function changeImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    imageContainer.style.backgroundImage = images[currentImageIndex];
    imageContainer.style.filter = "brightness(0.7)";
}

document.addEventListener("DOMContentLoaded", function() {
    changeImage();
});

var button = document.querySelector('.button');
button.addEventListener('click', function() {
    changeImage();
});

document.addEventListener("DOMContentLoaded", function() {
    var listElement = document.querySelector('.list');
    var miniWindow = document.querySelector('.mini-window');
    
    listElement.addEventListener('click', function() {
        miniWindow.classList.toggle('show');
    });
});