import { Heading2, SectionContainer, TextReveal } from '../Components';
import styled from 'styled-components';
import { Linkedin } from '@styled-icons/bootstrap/Linkedin';
import { Github } from '@styled-icons/bootstrap/Github';

const SvgWrapper = styled.div`
  width: 50px;
`

const SkillsShort = () => {
    const skills = [
        { name: "Github", path: "https://github.com/Pshemcio", icon: <Github /> },
        { name: "Linkedin", path: "https://www.linkedin.com/in/przemys%C5%82aw-majka-9540b01b7/", icon: <Linkedin /> },
    ];

    return (
        <SectionContainer id="about" data-scroll-section data-scroll-target >
            <Heading2 smaller>
                <TextReveal data-scroll>
                    Technologie
                </TextReveal>
            </Heading2>
            {skills.map((link, index) => (
                <div className="cursor_hover" key={index}>
                    <SvgWrapper>
                        {link.icon}
                    </SvgWrapper>
                    {link.name}
                </div>
            ))}
        </SectionContainer>
    )
}

export default SkillsShort;
