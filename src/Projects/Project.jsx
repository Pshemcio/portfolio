import { useLocation } from "react-router";
import { Image, ImageWrapper, MainContainer, PageTransitioning, RevealImage, Heading2, HeadingDesc, TextReveal, SectionContainer, BaseLink } from "../Components";
import { projects } from "../Settings";
import { Footer } from "../shared";
import { ProjectsInfoContainer, ProjectImageContainer } from "./Projects.styled";
import { Eye, Github } from '@styled-icons/bootstrap';

const Project = (props) => {
    const { HandleMouseoverEffects, HandleLocomotiveScroll } = props;
    const location = useLocation();

    const project = projects.find(({ path }) => path === location.pathname);

    const {
        name,
        shortDescription,
        photos: {
            main
        },
        links: {
            live,
            github
        },
        date
    } = project;

    HandleMouseoverEffects();
    HandleLocomotiveScroll();
    return (
        <>
            <PageTransitioning />
            <MainContainer className="smooth-scroll" data-scroll-container>
                <SectionContainer data-scroll-section>
                    <Heading2 project>
                        <TextReveal data-scroll>
                            {name}
                        </TextReveal>
                    </Heading2>
                    <ProjectsInfoContainer>
                        <HeadingDesc small>{shortDescription}</HeadingDesc>
                        <HeadingDesc small>{date}</HeadingDesc>
                    </ProjectsInfoContainer>
                    <ProjectImageContainer>
                        <ImageWrapper>
                            <RevealImage data-scroll>
                                <Image src={main} alt="my face" />
                            </RevealImage>
                        </ImageWrapper>
                        <ProjectsInfoContainer projectIcons>
                            <BaseLink target="_BLANK" href={github} rel="noreferrer" className="cursor_hover" project>
                                <Github />
                            </BaseLink>
                            <BaseLink target="_BLANK" href={live} rel="noreferrer" className="cursor_hover" project>
                                <Eye />
                            </BaseLink>
                        </ProjectsInfoContainer>
                    </ProjectImageContainer>
                    <Footer />
                </SectionContainer>

            </MainContainer>
        </>
    )
}

export default Project;