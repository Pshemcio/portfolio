import {
    Heading2,
    SectionContainer,
    TextReveal
} from '../Components';
import { Github } from '@styled-icons/bootstrap/Github';
import { PhoneDesktop } from '@styled-icons/fluentui-system-regular/PhoneDesktop';

import {
    ReactLogo,
    Bootstrap
} from '@styled-icons/boxicons-logos';

import {
    Css3,
    Javascript,
    StyledComponents,
    Sass,
    Wordpress,
    Figma,
    Html5,
    Woo
} from '@styled-icons/simple-icons';

import {
    SkillsList,
    SkillsItem,
    SkillsInfo,
    SkillsSvgWrapper
} from "./";

const SkillsShort = () => {
    const skills = [
        { name: "html", icon: <Html5 />, color: "#e34c26" },
        { name: "css3", icon: <Css3 />, color: "#2965f1" },
        { name: "javascript", icon: <Javascript />, color: "#f0db4f" },
        { name: "sass", icon: <Sass />, color: "#c69" },
        { name: "bootstrap", icon: <Bootstrap />, color: "#563d7c" },
        { name: "rwd", icon: <PhoneDesktop />, color: "#e75a7c" },
        { name: "react", icon: <ReactLogo />, color: "#61dbfb" },
        { name: "styled components", icon: <StyledComponents />, color: "#fff" },
        { name: "wordpress", icon: <Wordpress />, color: "#21759b" },
        { name: "Woocommerce", icon: <Woo />, color: "#764abc" },
        { name: "git", icon: <Github />, color: "#fff" },
        { name: "figma", icon: <Figma />, color: "#dac9ba" }
    ];

    return (
        <SectionContainer id="skills" data-scroll-section>
            <Heading2>
                <TextReveal data-scroll>
                    Umiejętności
                </TextReveal>
            </Heading2>
            <SkillsList>
                {skills.map((link, index) => (
                    <SkillsItem className="cursor_hover" key={index}>
                        <SkillsSvgWrapper color={link.color} data-scroll>
                            {link.icon}
                        </SkillsSvgWrapper>
                        <SkillsInfo>
                            {link.name}
                        </SkillsInfo>
                    </SkillsItem>
                ))}
            </SkillsList>
        </SectionContainer>
    )
}

export default SkillsShort;
