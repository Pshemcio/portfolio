import {
    valorantMain,
    valorantOverview,
    valorantRwd,
    brunoMain,
    brunoOverview,
    brunoRwd,
    caroMain,
    caroOverview,
    caroRwd
} from '../images/';

const projects = [
    {
        id: "brunobanani-store",
        name: "BrunoBanani store",
        shortDescription: "Sklep internetowy",
        path: "/projects/brunobanani-store",
        photos: {
            alt: "fake brunobanani shop created withwoocommerce",
            thumb: brunoMain,
            overview: brunoOverview,
            rwd: brunoRwd
        },
        links: {
            live: "https://brunobanani-fake-store.pl/",
            github: "https://github.com/Pshemcio/fake-bruno-banani-shop"
        },
        date: "03/2021",
        text: [
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum laboriosam facilis unde nulla corrupti corporis reiciendis neque, pariatur distinctio beatae.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum laboriosam facilis unde nulla corrupti corporis reiciendis neque, pariatur distinctio beatae.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum laboriosam facilis unde nulla corrupti corporis reiciendis neque, pariatur distinctio beatae."
        ],
        stack: [
            "HTML5", "SCSS", "Javascript", "Wordpress", "Woocommerce"
        ]
    },
    {
        id: "caro-elektro",
        name: "Caro Elektro",
        shortDescription: "Strona firmy elektrycznej",
        path: "/projects/caro-elektro",
        photos: {
            alt: "electrician company website",
            thumb: caroMain,
            overview: caroOverview,
            rwd: caroRwd
        },
        links: {
            live: "https://www.caro-elektro.pl/",
            github: "https://github.com/Pshemcio/caro-elektro"
        },
        date: "02/2021",
        text: [
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum laboriosam facilis unde nulla corrupti corporis reiciendis neque, pariatur distinctio beatae.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum laboriosam facilis unde nulla corrupti corporis reiciendis neque, pariatur distinctio beatae.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum laboriosam facilis unde nulla corrupti corporis reiciendis neque, pariatur distinctio beatae."
        ],
        stack: [
            "HTML5", "SASS", "Javascript", "BEM", "SplideJS", "PhotoSwipe"
        ]
    },
    {
        id: "valorant-form",
        name: "Valorant Form",
        shortDescription: "Formularz rejestracyjny",
        path: "/projects/valorant-form",
        photos: {
            alt: "website with form similar to registration form from game Valorant",
            thumb: valorantMain,
            overview: valorantOverview,
            rwd: valorantRwd
        },
        links: {
            live: "https://pshemcio.github.io/valorant-form/",
            github: "https://github.com/Pshemcio/valorant-form"
        },
        date: "12/2020",
        text: [
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum laboriosam facilis unde nulla corrupti corporis reiciendis neque, pariatur distinctio beatae.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum laboriosam facilis unde nulla corrupti corporis reiciendis neque, pariatur distinctio beatae.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum laboriosam facilis unde nulla corrupti corporis reiciendis neque, pariatur distinctio beatae."
        ],
        stack: [
            "HTML5", "CSS3", "Javascript"
        ]
    }
];

export default projects;