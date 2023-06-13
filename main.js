


// CONTAINER---> SECTION OF THE COURSE
let $courses = document.querySelector(".courses");

let $backpresentation = document.querySelector(".back_presentation");
let $details = document.querySelector(".details_presentation");

let $video = document.querySelector(".video");
let $price = document.querySelector(".price");

let $duration = document.querySelector(".duration__course");

//BTN selectd--btn
let $btnCourse = document.querySelector(".btn--linkCourse");
let $btnWalink = document.querySelector(".btn--walink");

//LINKS btn-of-buys
const walink = [
    "https://wa.link/8bmi5p",
    "https://wa.link/9r71yc",
    "https://wa.link/0jk11x"
]
const linkCourse = [
    "https://go.hotmart.com/V83043314B?ap=9d5e",
    "https://go.hotmart.com/V81687326R?ap=8378",
    "https://go.hotmart.com/D82354690N?ap=084e"
]


function activeClassChecking(e) {
    let clas_course = e.target.classList[0];
    switch (clas_course) {
        case "course-1":
            activeDetailsCourse("video-kike1", "poster-fotografia-desde-cero", "16,5 horas de contenido", "42.00", 0);
            break;
        case "course-2":
            activeDetailsCourse("fotografia-producto", "poster-fotografia-productos", "26 Clases", "49.99", 1);
            break;
        case "course-3":
            activeDetailsCourse("video-boda3", "img-fotografia-de-boda", "36 Clases", "69.99", 2);
            break;
    }
    console.log(clas_course);
}

function activeDetailsCourse(srcvideo, poster, duration, price, position) {
    $backpresentation.style.display = "flex";
    $details.style.display = "flex";

    $video.src = `videos/${srcvideo}.mp4`;
    $video.poster = `image/${poster}.jpg`;

    $duration.textContent = duration;

    $price.textContent = `${price} USD`;

    $btnWalink.href = walink[position];
    $btnCourse.href = linkCourse[position];

}
$courses.addEventListener("click", activeClassChecking);



// DESACTIVE PRESENTATIONOF THE COURSE
let $iconClose = document.querySelector(".close");
function desactiveDetailsCourse() {
    $details.style.display = "none";
    $backpresentation.style.display = "none";
}
$iconClose.addEventListener("click", desactiveDetailsCourse);
$backpresentation.addEventListener("click", desactiveDetailsCourse);