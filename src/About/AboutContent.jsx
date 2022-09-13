import {
    Heading2,
    Paragraph,
    SectionContainer,
    TextReveal,
    Heading3
} from '../Components';

const AboutContent = () => {
    return (
        <>
            <SectionContainer id="projects" aboutme>
                <Heading2>
                    <TextReveal data-scroll>
                        O mnie
                    </TextReveal>
                </Heading2>
                <Paragraph>
                    <TextReveal data-scroll transparent shift={.2}>
                        Nazywam się Przemysław Majka, mieszkam w Krakowie. Studiowałem Inżynierię Naftową i Gazowniczą na Akademii Górniczo Hutniczej w Krakowie.
                    </TextReveal>
                </Paragraph>
                <Paragraph>
                    <TextReveal data-scroll transparent shift={.1} delay={.5}>
                        Jako front-end developer pracuję od czerwca 2021. Uwielbiam minimalistyczny design oraz subtelne animacje. Ciągle dążę do poszerzania swoich kompetencji poprzez poznawanie najnowszych rozwiązań i technologii.
                    </TextReveal>
                </Paragraph>
                <Heading3 about="true">
                    <TextReveal data-scroll>
                        Proces nauczania.
                    </TextReveal>
                </Heading3>
                <Paragraph>
                    <TextReveal data-scroll transparent shift={.1} delay={.5}>
                        Web developmentem i programowaniem ogólnie zacząłem interesować się w lipcu 2019 roku. Ukończyłem kilka kursów na Udemy, dzięki którym nauczyłem się wielu podstaw pozwalających na tworzenie samodzielnych projektów. W sierpniu 2020 roku postanowiłem odbyć stacjonarne szkolenie w Akademia108, głównie w celu usystematyzowania wiedzy. To właśnie tam miałem pierwszą styczność z Reactem. Nauczyłem się tam również wielu dobrych praktyk programowania.
                    </TextReveal>
                </Paragraph>
                <Paragraph>
                    <TextReveal data-scroll transparent shift={.2}>
                        Szkolenie w Akademia108 ukończyłem z końcem listopada 2020 roku. Od tamtej pory każdego dnia kontynuuję samodzielną naukę. Nie tylko utrwalam zdobytą do tej pory wiedzę, ale również uczę się nowych rozwiązań i technologii.
                    </TextReveal>
                </Paragraph>
                <Heading3 about="true">
                    <TextReveal data-scroll>
                        Osobowość.
                    </TextReveal>
                </Heading3>
                <Paragraph>
                    <TextReveal data-scroll transparent shift={.2}>
                        Trochę o mnie - jestem osobą spokojną i ambitną. Uwielbiam pracę w zespole oraz naukę nowych rzeczy. Nie boję się wyzwań, wręcz przeciwnie - sam ciągle ich poszukuję. Samodzielne rozwiązywanie problemów jest, moim zdaniem, najlepszym sposobem nauki.
                    </TextReveal>
                </Paragraph>
                <Heading3 about="true">
                    <TextReveal data-scroll>
                        Doświadczenie.
                    </TextReveal>
                </Heading3>
                <Paragraph>
                    <TextReveal data-scroll transparent shift={.1}>
                        Pierwszą pracę jako web developer zdobyłem w czerwcu 2021, w firmie Kodefix. Tworzyłem w niej od zera motywy w wordpressie. W lutym 2022 przeszedłem do Devopsbay, w którym pracuję do dziś. Tworzymy platformę konsultingową w ReactJs. 
                        Zanim związałem się z front-endem pracowałem jako monter izolacji przemysłowych oraz elektryk na wielu zagranicznych projektach. Doświadczenie na zagranicznych projektach znacząco podniosło mój poziom języka angielskiego. Nie mam najmniejszych problemów z rozumieniem dokumentacji czy komunikacją.
                    </TextReveal>
                </Paragraph>
                <Heading3 about="true">
                    <TextReveal data-scroll>
                        Dziękuję!
                    </TextReveal>
                </Heading3>
                <Paragraph>
                    <TextReveal data-scroll transparent shift={.1}>
                        Jeżeli ktokolwiek dotarł do końca to serdecznie DZIĘKUJĘ / GRATULUJĘ! Mam tylko nadzieję że proces czytania był chociaż troszkę ciekawszy niż pisania... Taki żarcik. :)
                    </TextReveal>
                </Paragraph>
                <Paragraph nice aboutme="true">
                    {/* <TextReveal data-scroll transparent shift={.1}>
                        Serdecznie zapraszam do kontaktu, czy to w sprawie pracy czy luźnej rozmowy. Z chęcią odpiszę na każdą wiadomość jaką dostanę.
                    </TextReveal> */}
                </Paragraph>
                <Heading3 footer>
                    Pozdrawiam i życzę miłego dnia!
                </Heading3>
            </SectionContainer>
        </>
    )
}

export default AboutContent;