document.addEventListener('DOMContentLoaded', function () {
    const showBtn = document.querySelector(".showMore");
    const closeBtn = document.querySelector(".closeMore");
    const breakLine = document.querySelector(".breakLine");
    const information = document.querySelector(".moreInformation");

    function slideDown(element, duration) {
        element.style.display = "block";
        element.style.height = "0px";
        element.style.overflow = "hidden";
        const height = element.scrollHeight;
        let startTime = null;

        function animation(currentTime) {
            if (!startTime) startTime = currentTime;
            const progress = currentTime - startTime;
            const percent = Math.min(progress / duration, 1);
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
        const height = element.scrollHeight;
        element.style.height = height + "px";
        element.style.overflow = "hidden";
        let startTime = null;

        function animation(currentTime) {
            if (!startTime) startTime = currentTime;
            const progress = currentTime - startTime;
            const percent = Math.min(progress / duration, 1);
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

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            event.target.click();
        }
    }

    showBtn.addEventListener('click', showMore);
    closeBtn.addEventListener('click', closeMore);
    showBtn.addEventListener('keypress', handleKeyPress);
    closeBtn.addEventListener('keypress', handleKeyPress);
});
