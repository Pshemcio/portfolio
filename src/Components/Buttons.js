import styled, { css } from 'styled-components';
import Theme from '../Settings/theme';

let {
    secondaryColor,
    tertiaryColor,
    quaternaryColor
} = Theme.colors;

const Button = styled.button`
    padding: 10px 20px;
    background-color: transparent;
    border: 1px solid ${quaternaryColor};
    border-radius: ${(props) =>
        typeof props.rounded === 'number' ? props.rounded.toString() + 'px' : '5px'};

    ${props =>
        props.pink &&
        css`
        background-color: ${secondaryColor};
        color: ${tertiaryColor}
    `}
`

export default Button;