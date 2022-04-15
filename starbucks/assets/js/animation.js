const effectName = 'fadeIn';

        const fadeIn = {
            easing: "ease",
            opacity: [
                0,
                1
            ]
        };
        const timing1 = {
            duration: 2000,
            fill: "forwards",
            iterations: 1,
            delay: 0,
            endDelay: 0
        };

        const timing2 = {
            duration: 2000,
            fill: "backwards",
            iterations: 1,
            delay: 600,
            endDelay: 0
        };

        const timing3 = {
            duration: 2000,
            fill: "backwards",
            iterations: 1,
            delay: 1200,
            endDelay: 0
        };
        const timing4 = {
            duration: 2000,
            fill: "backwards",
            iterations: 1,
            delay: 1800,
            endDelay: 0
        };
        const timing5 = {
            duration: 2000,
            fill: "backwards",
            iterations: 1,
            delay: 2400,
            endDelay: 0
        };

        document.querySelector('.taste_img').animate(fadeIn, timing1);
        document.querySelector('.cold').animate(fadeIn, timing2);
        document.querySelector('.punch').animate(fadeIn, timing3);
        document.querySelector('.tea').animate(fadeIn, timing4);
        document.querySelector('.taste_btn').animate(fadeIn, timing5);

        document.querySelector('.indo_wrap .bg_left').animate(fadeIn, timing1);
        document.querySelector('.indo_wrap .bg_right').animate(fadeIn, timing1);
        document.querySelector('.indo_wrap .right').animate(fadeIn, timing1);

        document.querySelector('.favorite_btn').animate(fadeIn, timing1);

        document.querySelector('.magazine_inner .img').animate(fadeIn, timing1);

        document.querySelector('.big_img').animate(fadeIn, timing1);
        document.querySelector('.small_img').animate(fadeIn, timing1);
        