import {
    valorantMain,
    valorantOverview,
    valorantRwd,
    valorantMainMobile,
    valorantOverviewMobile,
    valorantRwdMobile,
    brunoMain,
    brunoOverview,
    brunoRwd,
    brunoMainMobile,
    brunoOverviewMobile,
    brunoRwdMobile,
    caroMain,
    caroOverview,
    caroRwd,
    caroMainMobile,
    caroOverviewMobile,
    caroRwdMobile,
    weatherAppMain,
    weatherAppOverview,
    weatherAppRwd,
    weatherAppMainMobile,
    weatherAppOverviewMobile,
    weatherAppRwdMobile,
    twisterMain,
    twisterOverview,
    twisterRwd,
    twisterMainMobile,
    twisterOverviewMobile,
    twisterRwdMobile,
    portfolioMain,
    portfolioMainMobile,
    portfolioOverview,
    portfolioOverviewMobile,
    portfolioRwd,
    portfolioRwdMobile,
    restaurantMain,
    restaurantMainMobile,
    restaurantOverview,
    restaurantOverviewMobile,
    restaurantRwd,
    restaurantRwdMobile
} from '../images/';

const projects = [
    {
        id: "brunobanani-store",
        name: "Bruno Banani",
        shortDescription: "Sklep internetowy",
        path: "/projects/brunobanani-store",
        photos: {
            alt: "fake brunobanani shop created withwoocommerce",
            thumb: {
                desktop: brunoMain,
                mobile: brunoMainMobile
            },
            overview: {
                desktop: brunoOverview,
                mobile: brunoOverviewMobile
            },
            rwd: {
                desktop: brunoRwd,
                mobile: brunoRwdMobile
            }
        },
        links: {
            live: "https://brunobanani-fake-store.pl/",
            github: "https://github.com/Pshemcio/fake-bruno-banani-shop"
        },
        date: "04/2021",
        text: [
            "Sklep internetowy wykorzystujący produkty marki Brunobanani.",
            "Wybrałem tą markę z dwóch powodów - mnogości fajnie prezentujących się produktów, oraz ciekawego layoutu strony głównej. Wydał mi się on jednak troszeczkę przestarzały więc postanowiłem troszeczkę go odświeżyć.",
            "Podczas tworzenia projektu przypomniałem sobie podstawy Wordpress'a. Nauczyłem się również obsługi WooCommerce i kilku wtyczek obsługujących go, takich jak Advanced Woo Search. Poznałem również narzędzie do sprawnego przenoszenia stron opartych na wordpress z serwera lokalnego na hosting - duplicator."
        ],
        stack: [
            "HTML5", "SCSS", "Javascript", "Wordpress", "Woocommerce"
        ],
        hide: false
    },
    {
        id: "caro-elektro",
        name: "Caro Elektro",
        shortDescription: "Strona firmy elektrycznej",
        path: "/projects/caro-elektro",
        photos: {
            alt: "electrician company website",
            thumb: {
                desktop: caroMain,
                mobile: caroMainMobile
            },
            overview: {
                desktop: caroOverview,
                mobile: caroOverviewMobile
            },
            rwd: {
                desktop: caroRwd,
                mobile: caroRwdMobile
            }
        },
        links: {
            live: "https://www.caro-elektro.pl/",
            github: "https://github.com/Pshemcio/caro-elektro"
        },
        date: "02/2021",
        text: [
            "Mój pierwszy projekt który można nazwać komercyjnym - strona internetowa znajomej firmy elektrycznej.",
            "Wstępny layout strony stworzyłem w Figmie, na podstawie wytycznych klienta. Była to moja pierwsza większa styczność z tym serwisem. Bardzo spodobała mi się jego przejżystość oraz łatwość obsługi.",
            'Do produkcji projektu postanowiłem wykorzystać "wielką trójcę" FrontEndu, stylowałem z użyciem SASSa. W czasie tworzenia projektu nauczyłem się również metodologii BEM. Dodatkowo zaimplementowałem dwie biblioteki do obsługi galerii i slidera. Formularz kontaktowy obsługiwany jest przez PHPMailer.'
        ],
        stack: [
            "HTML5", "SASS", "Javascript", "BEM", "SplideJS", "PhotoSwipe"
        ],
        hide: false
    },
    {
        id: "weather-app",
        name: "Weather App",
        shortDescription: "Aplikacja pogodowa",
        path: "/projects/weather-app",
        photos: {
            alt: "application that shows weather forecast for given city",
            thumb: {
                desktop: weatherAppMain,
                mobile: weatherAppMainMobile
            },
            overview: {
                desktop: weatherAppOverview,
                mobile: weatherAppOverviewMobile
            },
            rwd: {
                desktop: weatherAppRwd,
                mobile: weatherAppRwdMobile
            }
        },
        links: {
            live: "https://pshemcio.github.io/weather-app/",
            github: "https://github.com/Pshemcio/weather-app/"
        },
        date: "11/2020",
        text: [
            "Aplikacja pogodowa w której, po wpisaniu miasta, pojawia się prognoza pogody na najbliższy tydzień.",
            "Niewielki, ale całkiem ciekawy projekt, w którym nauczyłem się pobierania danych za pomocą Axios'a oraz późniejszej ich implementacji. Poszerzyłem również swoją wiedzę na temat React'a.",
            "Do stworzenia projektu wykorzystałem API z serwisu openweathermap.org."
        ],
        stack: [
            "React", "CSS3", "REST API"
        ],
        hide: false
    },
    {
        id: "portfolio",
        name: "Portfolio",
        shortDescription: "Portfolio które właśnie oglądasz",
        path: "/projects/portfolio",
        photos: {
            alt: "personal portfolio website",
            thumb: {
                desktop: portfolioMain,
                mobile: portfolioMainMobile
            },
            overview: {
                desktop: portfolioOverview,
                mobile: portfolioOverviewMobile
            },
            rwd: {
                desktop: portfolioRwd,
                mobile: portfolioRwdMobile
            }
        },
        links: {
            live: "https://przemekmajka.pl",
            github: "https://github.com/Pshemcio/portfolio/"
        },
        date: "05/2021",
        text: [
            "Strona na której aktualnie się znajdujesz. Jest to jak do tej pory jeden z bardziej rozbudowanych projektów jakie stworzyłem.",
            "Do stworzenia portfolio postanowiłem użyć ReactJS - głownie ze względu na możliwość wykorzystania routingu. Za jego pomocą udało mi się stworzyć animowane przejścia między podstronami.",
            "Strona wykorzystuje bibliotekę LocomotiveScroll, dzięki której scrollowanie na desktopach jest bardzo gładkie i przyjemne dla oka. Okrąg podążający za kursorem to już czysty JS."
        ],
        stack: [
            "React", "React router", "Styled Components", "LocomotiveScroll"
        ],
        hide: false
    },
    {
        id: "valorant-form",
        name: "Valorant Form",
        shortDescription: "Formularz rejestracyjny",
        path: "/projects/valorant-form",
        photos: {
            alt: "website with form similar to registration form from game Valorant",
            thumb: {
                desktop: valorantMain,
                mobile: valorantMainMobile
            },
            overview: {
                desktop: valorantOverview,
                mobile: valorantOverviewMobile
            },
            rwd: {
                desktop: valorantRwd,
                mobile: valorantRwdMobile
            }
        },
        links: {
            live: "https://pshemcio.github.io/valorant-form/",
            github: "https://github.com/Pshemcio/valorant-form"
        },
        date: "12/2020",
        text: [
            "Był to dla mnie bardzo ekscytujący projekt - strona wzorowana na formularzu rejestracyjnym mojej ulubionej gry. :)",
            'Oryginał stworzony został za pomocą ReactJS, ja postanowiłem jednak pozostać przy "klasyce".',
            "W formularzu zastosowałem zaaawansowaną walidację po stronie klienta. W trakcie jej tworzenia nauczyłem się podstaw wyrażeń regularnych (RegExp). Strona powstała w dwóch wersjach językowych - polskiej oraz angielskiej."
        ],
        stack: [
            "HTML5", "CSS3", "Javascript", "RegExp"
        ],
        hide: true
    },
    {
        id: "twister-app",
        name: "Twister App",
        shortDescription: "Mini aplikacja do gry w Twistera",
        path: "/projects/twister",
        photos: {
            alt: "useful commands reading application in case you would like to play twister",
            thumb: {
                desktop: twisterMain,
                mobile: twisterMainMobile
            },
            overview: {
                desktop: twisterOverview,
                mobile: twisterOverviewMobile
            },
            rwd: {
                desktop: twisterRwd,
                mobile: twisterRwdMobile
            }
        },
        links: {
            live: "https://pshemcio.github.io/twister-game-spinner/",
            github: "https://github.com/Pshemcio/twister-game-spinner/"
        },
        date: "12/2020",
        text: [
            'Na pomysł stworzenia tej aplikacji wpadłem w momencie, gdy chcieliśmy we dwoje z żoną zagrać w grę Twister. Problem polegał na tym że nie mieliśmy "sędziego" - osoby która losuje i mówi komendy.',
            "Po szybkim sprawdzeniu w google okazało się, że aplikacji tego typu jest sporo, ale w żadnej nie znalazłem syntezatora komend. Dlatego postanowiłem stworzyć ten projekt.",
            "Jest to całkiem prosta aplikacja wykorzystująca HTML, CSS oraz JavaScript. Do czytania komend wykorzystałem API SpeechSynthesis. Dodałem również możliwość zmiany języka czytania, bo uznałem, że może to być całkiem zabawne. Faktycznie czasem jest. :)"
        ],
        stack: [
            "HTML5", "CSS3", "JavaScript", "SpeechSynthesis"
        ],
        hide: true
    },
    {
        id: "cutie-pies",
        name: "CutiePies",
        shortDescription: "Strona internetowa dla restauracji",
        path: "/projects/cutie-pies",
        photos: {
            alt: "restaurant website, serves delicious pizza",
            thumb: {
                desktop: restaurantMain,
                mobile: restaurantMainMobile
            },
            overview: {
                desktop: restaurantOverview,
                mobile: restaurantOverviewMobile
            },
            rwd: {
                desktop: restaurantRwd,
                mobile: restaurantRwdMobile
            }
        },
        links: {
            live: "https://pshemcio.github.io/restaurant-site/",
            github: "https://github.com/Pshemcio/restaurant-site/"
        },
        date: "01/2021",
        text: [
            "Strona internetowa amerykańskiej restauracji.",
            "W poszukiwaniu inspiracji natrafiłem na stronę internetową restauracji z Dallas. Zrobiłem jej kopię chyba głównie ze względu na to jaka była paskudna. :)",
            "Pierwszy większy projekt na podstawie innej witryny który skończyłem w całości. Stworzony głównie w celu poćwiczenia SCSS, ale w międzyczasie napisałem też własną, prostą karuzelę w czystym JavaScript."
        ],
        stack: [
            "HTML5", "SCSS", "JavaScript"
        ],
        hide: true
    }
];

export default projects;