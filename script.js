document.addEventListener('DOMContentLoaded', function () {
    const showBtns = document.querySelectorAll(".showMore");
    const closeBtns = document.querySelectorAll(".closeMore");

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

    function showMore(button) {
        const parent = button.closest('.casino');
        const breakLine = parent.querySelector(".breakLine");
        const information = parent.querySelector(".moreInformation");

        slideDown(breakLine, 500);
        slideDown(information, 500);
        button.style.display = "none";
        parent.querySelector(".closeMore").style.display = "inline";
    }

    function closeMore(button) {
        const parent = button.closest('.casino');
        const breakLine = parent.querySelector(".breakLine");
        const information = parent.querySelector(".moreInformation");

        slideUp(breakLine, 500);
        slideUp(information, 500);
        button.style.display = "none";
        parent.querySelector(".showMore").style.display = "inline";
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            event.target.click();
        }
    }

    showBtns.forEach(button => {
        button.addEventListener('click', function() { showMore(button); });
        button.addEventListener('keypress', handleKeyPress);
    });

    closeBtns.forEach(button => {
        button.addEventListener('click', function() { closeMore(button); });
        button.addEventListener('keypress', handleKeyPress);
    });
});
