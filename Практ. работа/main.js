var images = [
    "url('https://celes.club/uploads/posts/2022-01/1641823376_68-celes-club-p-ozero-kaindi-priroda-krasivo-foto-77.jpg')",
    "url('https://gtravel.kz/wp-content/uploads/2019/07/kanyeny_2_1.jpg')",
    "url('https://kokshetau.online/wp-content/uploads/2018/08/Progulka-po-Golubomu-zalivu-Borovoe-P1250381.jpg')"
];
var currentImageIndex = 0;
var imageContainer = document.querySelector('.image-container');

function changeImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    imageContainer.style.backgroundImage = images[currentImageIndex];
}
