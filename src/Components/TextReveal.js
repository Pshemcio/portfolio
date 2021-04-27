import styled, { } from 'styled-components';

export const TextReveal = styled.span`
    font-family: inherit;
    display: block;
    transform: translateY(100%);
    transition: transform 3s cubic-bezier(0.12, 1, 0.2, 1);
    transition-delay: ${(props) =>
        typeof props.delay === 'number' ? props.delay.toString() + 's' : '.5s'};

    &.is-inview {
        transform: translateY(0);
    }
`;

export default TextReveal;