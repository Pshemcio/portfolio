import {
    valorantMain,
    valorantOverview,
    brunoMain,
    brunoOverview
} from '../images/';

const projects = [
    {
        id: "valorant-form",
        name: "Valorant Form",
        shortDescription: "Formularz rejestracyjny",
        path: "/projects/valorant-form",
        photos: {
            alt: "photo of valorant form website",
            thumb: valorantMain,
            overview: valorantOverview
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
        id: "brunobanani-store",
        name: "BrunoBanani store",
        shortDescription: "Sklep internetowy",
        path: "/projects/brunobanani-store",
        photos: {
            alt: "photo of my woocommerce store website",
            thumb: brunoMain,
            overview: brunoOverview
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
            "HTML5", "CSS3", "Javascript", "Wordpress", "Woocommerce"
        ]
    }
];

export default projects;