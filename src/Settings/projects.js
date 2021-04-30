import { valorantMain, brunoMain } from '../images/';

const projects = [
    {
        id: "valorant-form",
        name: "Valorant Form",
        shortDescription: "Formularz rejestracyjny",
        path: "/projects/valorant-form",
        photos: {
            main: valorantMain
        },
        links: {
            live: "https://pshemcio.github.io/valorant-form/",
            github: "https://github.com/Pshemcio/valorant-form"
        },
        date: "12/2020"
    },
    {
        id: "brunobanani-store",
        name: "BrunoBanani store",
        shortDescription: "Sklep internetowy",
        path: "/projects/brunobanani-store",
        photos: {
            main: brunoMain
        },
        links: {
            live: "https://brunobanani-fake-store.pl/",
            github: "https://github.com/Pshemcio/fake-bruno-banani-shop"
        },
        date: "03/2021"
    }
];

export default projects;