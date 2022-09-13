import {
    Heading2,
    SectionContainer,
    TextReveal
} from '../Components';
import { Github } from '@styled-icons/bootstrap/Github';
import { PhoneDesktop } from '@styled-icons/fluentui-system-regular/PhoneDesktop';

import {
    ReactLogo,
    Bootstrap,
    Redux,
    TailwindCss,
} from '@styled-icons/boxicons-logos';

import {
    Css3,
    Javascript,
    Styledcomponents,
    Sass,
    Wordpress,
    Figma,
    Html5,
    Woo,
    Nextdotjs,
    Mui,
} from '@styled-icons/simple-icons';

import {
    SkillsList,
    SkillsItem,
    SkillsInfo,
    SkillsSvgWrapper
} from "./";

const SkillsShort = () => {
    const skills = [
        { name: "javascript", icon: <Javascript />, color: "#f0db4f" },
        { name: "react", icon: <ReactLogo />, color: "#61dbfb" },
        { name: "next", icon: <Nextdotjs />, color: "#fff" },
        { name: "redux", icon: <Redux />, color: "#764abc" },
        { name: "html", icon: <Html5 />, color: "#e34c26" },
        { name: "css3", icon: <Css3 />, color: "#2965f1" },
        { name: "sass", icon: <Sass />, color: "#c69" },
        { name: "tailwind", icon: <TailwindCss />, color: "#38BDF7" },
        { name: "mui", icon: <Mui />, color: "#027FFF" },
        { name: "rwd", icon: <PhoneDesktop />, color: "#e75a7c" },
        { name: "bootstrap", icon: <Bootstrap />, color: "#563d7c" },
        { name: "styled components", icon: <Styledcomponents />, color: "#fff" },
        { name: "wordpress", icon: <Wordpress />, color: "#21759b" },
        { name: "Woocommerce", icon: <Woo />, color: "#764abc" },
        { name: "git", icon: <Github />, color: "#fff" },
        { name: "figma", icon: <Figma />, color: "#dac9ba" }
    ];

    return (
        <SectionContainer id="skills">
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
