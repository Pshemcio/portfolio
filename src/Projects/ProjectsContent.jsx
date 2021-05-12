import {
    Heading2,
    SectionContainer,
    TextReveal,
    ImageWrapper,
    Image,
    RevealImage,
    Heading3,
    Heading4,
    MainLink
} from '../Components';
import { projects } from '../Settings';


import {
    ProjectsList,
    ProjectsItem,
    ProjectsInfoContainer,
    ProjectsItemContainer,
    ProjectsImageHoverContainer
} from './';

const ProjectsContent = (props) => {
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
                        project.hide === true && props.home === true ? "" :
                            <ProjectsItem key={project.id}>
                                <ProjectsItemContainer className="cursor_hover" to={project.path}>
                                    <Heading3 projectscontent>
                                        {project.name}
                                    </Heading3>
                                    <ImageWrapper projectscontent="true">
                                        <ProjectsImageHoverContainer>
                                            <RevealImage data-scroll>
                                                <Image src={project.photos.thumb.mobile} srcSet={`${project.photos.thumb.mobile} 300w, ${project.photos.thumb.desktop} 768w`} />
                                            </RevealImage>
                                        </ProjectsImageHoverContainer>
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

                <MainLink className="cursor_hover" to={"/projects"} arrow="true" hide={props.hidelink} projectscontent="true">
                    Więcej
                </MainLink>
            </SectionContainer>
        </>
    )
}

export default ProjectsContent;