import { useLocation } from "react-router";
import {
    Image,
    ImageWrapper,
    MainContainer,
    PageTransitioning,
    RevealImage,
    Heading2,
    Heading3,
    HeadingDesc,
    TextReveal,
    SectionContainer,
    BaseLink,
    Paragraph,
    MainLink
} from "../Components";

import { projects } from "../Settings";
import { Footer } from "../shared";

import {
    ProjectsInfoContainer,
    ProjectImageContainer,
    ProjectList,
    ProjectItem
} from "./Projects.styled";

import {
    Eye,
    Github
} from '@styled-icons/bootstrap';

const Project = (props) => {
    const { HandleMouseoverEffects, HandleLocomotiveScroll } = props;
    const location = useLocation();

    const project = projects.find(({ path }) => path === location.pathname);

    const currentSite = (projects.indexOf(project)) + 1;
    const nextSite = currentSite <= projects.length - 1 ? currentSite : 0;

    const {
        name,
        shortDescription,
        photos: {
            alt,
            thumb,
            overview,
            rwd
        },
        links: {
            live,
            github
        },
        date,
        text,
        stack
    } = project;

    HandleMouseoverEffects();
    HandleLocomotiveScroll();

    return (
        <>
            <PageTransitioning />
            <MainContainer className="smooth-scroll" data-scroll-container>
                <SectionContainer data-scroll-section>
                    <Heading2 project="true">
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
                                <Image src={thumb} alt={alt} />
                            </RevealImage>
                        </ImageWrapper>
                        <ProjectsInfoContainer projectIcons>
                            <BaseLink target="_BLANK" href={github} rel="noreferrer" className="cursor_hover" project="true">
                                <Github />
                            </BaseLink>
                            <BaseLink target="_BLANK" href={live} rel="noreferrer" className="cursor_hover" project="true">
                                <Eye />
                            </BaseLink>
                        </ProjectsInfoContainer>
                    </ProjectImageContainer>
                    <ProjectList>
                        {stack.map((stack, index) => {
                            return (
                                <ProjectItem project="true" key={index}>
                                    {stack}
                                </ProjectItem>
                            )
                        })}
                    </ProjectList>
                    {text.map((text, index) => {
                        return (
                            <TextReveal data-scroll transparent shift={.2} key={index}>
                                <Paragraph project="true" key={index}>
                                    {text}
                                </Paragraph>
                            </TextReveal>
                        )
                    })}
                    <ImageWrapper project>
                        <RevealImage data-scroll>
                            <Image src={overview} alt={alt} project />
                        </RevealImage>
                    </ImageWrapper>
                    <ImageWrapper project>
                        <RevealImage data-scroll>
                            <Image src={rwd} alt={alt} project />
                        </RevealImage>
                    </ImageWrapper >

                    <Heading3 project>
                        <TextReveal data-scroll>
                            Następny projekt
                        </TextReveal>
                    </Heading3>
                    <MainLink className="cursor_hover" to={projects[nextSite].path} project="true" main="true">
                        <TextReveal data-scroll transparent delay={.5}>
                            {projects[nextSite].name}
                        </TextReveal>
                    </MainLink>
                </SectionContainer>
                <Footer />
            </MainContainer>
        </>
    )
}

export default Project;