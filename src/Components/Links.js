import styled, { css } from 'styled-components';
import Theme from '../Settings/theme';

let {
    secondaryColor,
    tertiaryColor,
    quaternaryColor
} = Theme.colors;

const Links = styled.a`
    padding: 10px 20px;
    background-color: transparent;
    color: white;
    text-decoration: none;
`

export default Links;