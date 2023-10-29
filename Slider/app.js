// Sélecteurs
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const bottom = document.querySelector('.bottom');

// Variables
let slideNumber  = 1;
const slideWidth = 800;
const length = images.length;

// Passer à la diapositive suivante
const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * slideWidth}px)`;
    slideNumber++;
}

// Passer à la diapositive précédente
const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber - 2) * slideWidth}px)`;
    slideNumber--;
}

// Aller à la première diapositive
const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
}

// Aller à la dernière diapositive
const getLastSlide = () => {
    slider.style.transform = `translateX(-${(length - 1) * slideWidth}px)`;
    slideNumber = length;
}

// Réinitialiser la couleur d'arrière-plan des boutons
const resetBg = () => {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.style.backgroundColor = 'transparent';
    });
}

// Changer la couleur d'arrière-plan du bouton actif
const changeColor = () => {
    resetBg();
    const buttons = document.querySelectorAll('.button');
    buttons[slideNumber - 1].style.backgroundColor = 'white';
}

// Ajouter des événements pour les flèches
right.addEventListener('click', () => {
    slideNumber < length ? nextSlide() : getFirstSlide();
    changeColor();
});

left.addEventListener('click', () => {
    slideNumber > 1 ? prevSlide() : getLastSlide();
    changeColor();
});

// Créer et ajouter des boutons pour chaque diapositive
for (let i = 0; i < length; i++) {
    const div = document.createElement('div');
    div.classList.add('button');
    bottom.appendChild(div);
}

// Ajouter des événements pour les boutons
const buttons = document.querySelectorAll('.button');
buttons[0].style.backgroundColor = 'white';

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        slider.style.transform = `translateX(-${index * slideWidth}px)`;
        slideNumber = index + 1;
        changeColor();
    });
});
