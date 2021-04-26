import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Theme from '../Settings/theme';

let {
    colors: {
        secondaryColor,
        tertiaryColor,
        // quaternaryColor    
    },
    typography: {
        secondaryFont
    }
} = Theme;

const linksBase = css`
    background-color: transparent;
    color: ${secondaryColor};
    text-decoration: none;
    text-align: center;
    padding: 2px 2px;
`;

export const BaseLink = styled.a`
    ${linksBase}

    ${props =>
        props.iconLink &&
        css`
        font-size: 1.5em;
        margin-left: 10px;
    `}

    ${props =>
        props.intro &&
        css`
        text-transform: uppercase;
        padding: 4px 5px;
        font-weight: 500;
        font-size: 16px;   

        &:nth-of-type(2) {
            &::before,
            &::after {
                content: '/';
                color: ${tertiaryColor};
                font-weight: 600;
            }

            &::before {
                margin-right: 10px;
            }

            &::after {
                margin-left: 10px;
            }
        }

    `}
`

export const StyledNavLink = styled(NavLink)`
    ${linksBase}
    text-transform: uppercase;
    font-size: .75rem;
    font-weight: 300;
    font-family: ${secondaryFont};
    letter-spacing: 3px;
    
    &.current {
    color: ${tertiaryColor};
  }
`;

// export const StyledNavLink = styled(NavLink)`
//     ${linksBase}
//     text-transform: uppercase;
//     font-size: .75rem;
//     font-weight: 300;
//     font-family: ${secondaryFont};
//     letter-spacing: 3px;

//     &.current {
//     color: ${tertiaryColor};
//   }
// `;