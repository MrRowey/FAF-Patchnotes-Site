function setBackground(x){
    const htmlElement = document.documentElement;

    if (x.matches) {
        htmlElement.style.backgroundColor = "var(--Background)";
    } else {
        const imgs = [
            '../assets/images/backgrounds/1.jpg',
            '../assets/images/backgrounds/2.jpg',
            '../assets/images/backgrounds/3.jpg',
            '../assets/images/backgrounds/4.jpg',
            '../assets/images/backgrounds/5.jpg',
            '../assets/images/backgrounds/6.jpg',
        ];
        const randomImg = imgs[Math.floor(Math.random() * imgs.length)];
        htmlElement.style.backgroundImage = `url(${randomImg})`;
    }
}

const mediaQuery = window.matchMedia("(max-width: 420px)");
setBackground(mediaQuery);
mediaQuery.addEventListener(`change`,setBackground);