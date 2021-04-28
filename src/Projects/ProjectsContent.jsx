import {
    Heading2,
    SectionContainer,
    MainLink,
    TextReveal
} from '../Components';

import {
    ProjectsWrapper
} from './'

const ProjectsContent = () => {
    return (
        <SectionContainer id="projects" data-scroll-section>
            <Heading2>
                <TextReveal data-scroll>
                    Projekty
                </TextReveal>
            </Heading2>
            <ProjectsWrapper>

            </ProjectsWrapper>
            <MainLink className="cursor_hover" to={"/projects"} arrow="true">
                Więcej
            </MainLink>
        </SectionContainer>
    )
}

export default ProjectsContent;