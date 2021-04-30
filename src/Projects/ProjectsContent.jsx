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
import { projects } from '../Settings';


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
                    {projects.map((project) => (
                        <ProjectsItem key={project.id}>
                            <ProjectsItemContainer className="cursor_hover" to={project.path}>
                                <Heading3>
                                    {project.name}
                                </Heading3>
                                <ImageWrapper>
                                    <RevealImage data-scroll>
                                        <Image src={project.photos.thumb} alt="my face" />
                                    </RevealImage>
                                </ImageWrapper>
                                <ProjectsInfoContainer arrow>
                                    <Heading4>
                                        {project.shortDescription}
                                    </Heading4>
                                </ProjectsInfoContainer>
                            </ProjectsItemContainer>
                        </ProjectsItem>
                    ))}
                </ProjectsList>
            </SectionContainer>
        </>
    )
}

export default ProjectsContent;