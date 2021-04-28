import {
    Heading2,
    SectionContainer,
    TextReveal,
    ImageWrapper,
    Image,
    RevealImage,
    Heading3,
    Heading4
} from '../Components';
import test from '../images/test.jpg';
import test2 from '../images/test2.jpg';


import {
    ProjectsList,
    ProjectsItem,
    ProjectsInfoContainer,
    ProjectsItemContainer
} from './';

const ProjectsContent = () => {
    return (
        <>
            <SectionContainer id="projects" data-scroll-section>
                <Heading2>
                    <TextReveal data-scroll>
                        Projekty
                </TextReveal>
                </Heading2>
                <ProjectsList>
                    <ProjectsItem>
                        <ProjectsItemContainer className="cursor_hover" to={`/projects/project`} arrow="true">
                            <Heading3>
                                Valorant Form
                        </Heading3>
                            <ImageWrapper>
                                <RevealImage data-scroll>
                                    <Image src={test} alt="my face" />
                                </RevealImage>
                            </ImageWrapper>
                            <ProjectsInfoContainer arrow>
                                <Heading4>
                                    Formularz rejestracyjny
                        </Heading4>
                            </ProjectsInfoContainer>
                        </ProjectsItemContainer>
                    </ProjectsItem>
                    <ImageWrapper>
                        <RevealImage data-scroll>
                            <Image src={test2} alt="my face" />
                        </RevealImage>
                    </ImageWrapper>
                    <ImageWrapper>
                        <RevealImage data-scroll>
                            <Image src={test} alt="my face" />
                        </RevealImage>
                    </ImageWrapper>
                    <ImageWrapper>
                        <RevealImage data-scroll>
                            <Image src={test2} alt="my face" />
                        </RevealImage>
                    </ImageWrapper>
                </ProjectsList>
            </SectionContainer>
        </>
    )
}

export default ProjectsContent;