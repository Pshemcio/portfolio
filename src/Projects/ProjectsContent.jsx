import { Heading1 } from '../Components/';
import { ProjectsContainer, ProjectsWrapper } from './';

const Projects = () => {
    return (
        <ProjectsWrapper id="projects" data-scroll-section>
            <ProjectsContainer>
                <Heading1>Projects</Heading1>
            </ProjectsContainer>
            <ProjectsContainer white />
        </ProjectsWrapper>
    )
}

export default Projects;