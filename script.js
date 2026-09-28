/* =====================================================
   AARTHIKA.DEV JAVASCRIPT
   ===================================================== */


/* =====================================================
   TYPING EFFECT
   ===================================================== */

const typingElement =
    document.getElementById("typing");


const words = [

    "digital experiences.",
    "web applications.",
    "backend solutions.",
    "creative ideas."

];


let wordIndex = 0;

let letterIndex = 0;

let deleting = false;


function typeEffect() {

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                letterIndex + 1
            );

        letterIndex++;


        if (
            letterIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                letterIndex - 1
            );

        letterIndex--;


        if (letterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (
                wordIndex ===
                words.length
            ) {

                wordIndex = 0;

            }

        }

    }


    const speed =
        deleting ? 50 : 90;


    setTimeout(
        typeEffect,
        speed
    );

}


typeEffect();



/* =====================================================
   MOBILE MENU
   ===================================================== */

const menuBtn =
    document.getElementById("menuBtn");


const navMenu =
    document.getElementById("navMenu");


menuBtn.addEventListener(
    "click",
    function () {

        navMenu.classList.toggle(
            "active"
        );

    }
);



/* CLOSE MENU AFTER CLICK */

const navLinks =
    document.querySelectorAll(
        ".nav-menu a"
    );


navLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                navMenu.classList.remove(
                    "active"
                );

            }
        );

    }
);



/* =====================================================
   SCROLL REVEAL ANIMATION
   ===================================================== */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "show"
                        );

                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(
    function (element) {

        revealObserver.observe(
            element
        );

    }
);



/* =====================================================
   PROJECT FILTER
   ===================================================== */

const filterButtons =
    document.querySelectorAll(
        ".filter"
    );


const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


filterButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {


                /* Remove active */

                filterButtons.forEach(
                    function (btn) {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );


                /* Add active */

                button.classList.add(
                    "active"
                );


                const selected =
                    button.dataset.filter;


                projectCards.forEach(
                    function (card) {

                        const category =
                            card.dataset.category;


                        if (
                            selected === "all" ||
                            category === selected
                        ) {

                            card.style.display =
                                "block";

                        } else {

                            card.style.display =
                                "none";

                        }

                    }
                );

            }
        );

    }
);



/* =====================================================
   CURRENT YEAR
   ===================================================== */

const year =
    document.getElementById("year");


year.textContent =
    new Date().getFullYear();



/* =====================================================
   PREVENT DISABLED PROJECT LINKS
   ===================================================== */

const disabledLinks =
    document.querySelectorAll(
        ".disabled"
    );


disabledLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

            }
        );

    }
);