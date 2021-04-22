import styled, { css } from 'styled-components';

const Button = styled.button`
    padding: 10px 20px;
    background-color: transparent;
    border-radius: ${(props) =>
        typeof props.rounded === 'number' ? props.rounded.toString() + 'px' : '5px'};

    ${props =>
        props.pink &&
        css`
        background-color: pink;
    `}
`

export default Button;