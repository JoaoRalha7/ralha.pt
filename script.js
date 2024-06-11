let showBtn = document.querySelector(".showMore");
let closeBtn = document.querySelector(".closeMore");
let breakLine = document.querySelector(".breakLine");
let information = document.querySelector(".moreInformation");
let casino = document.querySelector(".casino");

function slideDown(element, duration) {
    element.style.display = "block";
    element.style.height = "0px";
    element.style.overflow = "hidden";
    let height = element.scrollHeight;
    let startTime = null;

    function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        let progress = currentTime - startTime;
        let percent = Math.min(progress / duration, 1);
        element.style.height = percent * height + "px";
        if (percent < 1) {
            requestAnimationFrame(animation);
        } else {
            element.style.height = null; // remove the height restriction
        }
    }
    requestAnimationFrame(animation);
}

function slideUp(element, duration) {
    let height = element.scrollHeight;
    element.style.height = height + "px";
    element.style.overflow = "hidden";
    let startTime = null;

    function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        let progress = currentTime - startTime;
        let percent = Math.min(progress / duration, 1);
        element.style.height = height - (percent * height) + "px";
        if (percent < 1) {
            requestAnimationFrame(animation);
        } else {
            element.style.display = "none";
            element.style.height = null; // remove the height restriction
        }
    }
    requestAnimationFrame(animation);
}

function showMore() {
    slideDown(breakLine, 500);
    slideDown(information, 500);
    showBtn.style.display = "none";
    closeBtn.style.display = "inline";
}

function closeMore() {
    slideUp(breakLine, 500);
    slideUp(information, 500);
    showBtn.style.display = "inline";
    closeBtn.style.display = "none";
}

showBtn.addEventListener('click', showMore);
closeBtn.addEventListener('click', closeMore);
