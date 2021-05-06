import {
    valorantMain,
    valorantOverview,
    valorantRwd,
    brunoMain,
    brunoOverview,
    brunoRwd,
    caroMain,
    caroOverview,
    caroRwd,
    weatherAppMain,
    weatherAppOverview,
    weatherAppRwd,
    twisterMain,
    twisterOverview,
    twisterRwd
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
    },
    {
        id: "weather-app",
        name: "Weather App",
        shortDescription: "Aplikacja pogodowa",
        path: "/projects/weather-app",
        photos: {
            alt: "application that shows weather forecast for given city",
            thumb: weatherAppMain,
            overview: weatherAppOverview,
            rwd: weatherAppRwd
        },
        links: {
            live: "https://pshemcio.github.io/weather-app/",
            github: "https://github.com/Pshemcio/weather-app/"
        },
        date: "11/2020",
        text: [
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum laboriosam facilis unde nulla corrupti corporis reiciendis neque, pariatur distinctio beatae.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum laboriosam facilis unde nulla corrupti corporis reiciendis neque, pariatur distinctio beatae.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum laboriosam facilis unde nulla corrupti corporis reiciendis neque, pariatur distinctio beatae."
        ],
        stack: [
            "React", "CSS3", "REST API"
        ]
    },
    {
        id: "twister-app",
        name: "Twister App",
        shortDescription: "Mini aplikacja do gry w Twistera",
        path: "/projects/twister",
        photos: {
            alt: "useful commands reading application in case you would like to play twister",
            thumb: twisterMain,
            overview: twisterOverview,
            rwd: twisterRwd
        },
        links: {
            live: "https://pshemcio.github.io/weather-app/",
            github: "https://github.com/Pshemcio/weather-app/"
        },
        date: "12/2020",
        text: [
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum laboriosam facilis unde nulla corrupti corporis reiciendis neque, pariatur distinctio beatae.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum laboriosam facilis unde nulla corrupti corporis reiciendis neque, pariatur distinctio beatae.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum laboriosam facilis unde nulla corrupti corporis reiciendis neque, pariatur distinctio beatae."
        ],
        stack: [
            "HTML5", "CSS3", "JavaScript", "SpeechSynthesis"
        ]
    },
    {
        id: "portfolio",
        name: "Portfolio",
        shortDescription: "Portfolio które właśnie oglądasz",
        path: "/projects/portfolio",
        photos: {
            alt: "personal portfolio website",
            thumb: twisterMain,
            overview: twisterOverview,
            rwd: twisterRwd
        },
        links: {
            live: "https://przemekmajka.pl",
            github: "https://github.com/Pshemcio/portfolio/"
        },
        date: "12/2020",
        text: [
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum laboriosam facilis unde nulla corrupti corporis reiciendis neque, pariatur distinctio beatae.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum laboriosam facilis unde nulla corrupti corporis reiciendis neque, pariatur distinctio beatae.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum laboriosam facilis unde nulla corrupti corporis reiciendis neque, pariatur distinctio beatae."
        ],
        stack: [
            "React", "React router", "Styled Components", "LocomotiveScroll"
        ]
    }
];

export default projects;