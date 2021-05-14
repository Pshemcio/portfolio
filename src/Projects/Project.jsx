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
    SectionContainerInner,
    SectionContainerFluid,
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
import { useEffect } from "react";

const Project = (props) => {
    const { HandleMouseoverEffects, HandleLocomotiveScroll, title } = props;
    const location = useLocation();

    const project = projects.find(({ path }) => path === location.pathname);

    const currentSite = (projects.indexOf(project)) + 1;
    const nextSite = currentSite <= projects.length - 1 ? currentSite : 0;

    const {
        name,
        shortDescription,
        photos: {
            alt,
            thumb: {
                desktop: desktopThumb,
                mobile: mobileThumb
            },
            overview: {
                desktop: desktopOverview,
                mobile: mobileOverview
            },
            rwd: {
                desktop: desktopRwd,
                mobile: mobileRwd
            }
        },
        links: {
            live,
            github
        },
        date,
        text,
        stack
    } = project;

    useEffect(() => {
        document.title = title || "";
    }, [title]);

    HandleMouseoverEffects();
    HandleLocomotiveScroll();

    return (
        <>
            <PageTransitioning />
            <MainContainer className="smooth-scroll" data-scroll-section>
                <SectionContainer project>
                    <SectionContainerFluid>
                        <Heading2 project="true">
                            <TextReveal data-scroll>
                                {name}
                            </TextReveal>
                        </Heading2>
                    </SectionContainerFluid>
                    <SectionContainerInner>
                        <ProjectsInfoContainer>
                            <HeadingDesc small>{shortDescription}</HeadingDesc>
                            <HeadingDesc small>{date}</HeadingDesc>
                        </ProjectsInfoContainer>
                        <ProjectImageContainer>
                            <ImageWrapper projectmain>
                                <RevealImage data-scroll>
                                    <Image src={mobileThumb} srcSet={`${mobileThumb} 300w, ${desktopThumb} 768w`} alt={alt} />
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
                    </SectionContainerInner>
                    <SectionContainerFluid>
                        <ImageWrapper projectoverview>
                            <RevealImage data-scroll>
                                <Image className="cursor_hover" src={mobileOverview} srcSet={`${mobileOverview} 300w, ${desktopOverview} 768w`} alt={alt} />
                            </RevealImage>
                        </ImageWrapper>
                        <ImageWrapper projectrwd>
                            <RevealImage data-scroll>
                                <Image className="cursor_hover" src={mobileRwd} srcSet={`${mobileRwd} 300w, ${desktopRwd} 768w`} alt={alt} />
                            </RevealImage>
                        </ImageWrapper >
                    </SectionContainerFluid>
                    <SectionContainerFluid nextProject="true">
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
                    </SectionContainerFluid>
                </SectionContainer>
                <Footer />
            </MainContainer>
        </>
    )
}

export default Project;