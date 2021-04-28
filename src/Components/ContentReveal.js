import styled, { } from 'styled-components';

export const TextReveal = styled.span`
    font-family: inherit;
    display: block;
    opacity: ${(props) => (props.transparent ? 0 : 1)};
    transform: translateY(${(props) =>
        typeof props.shift === 'number' ? (props.shift * 100).toString() + '%' : '100%'});
    transition: transform 2s ${(props) =>
        typeof props.delay === 'number' ? props.delay.toString() + 's' : '.2s'} cubic-bezier(0.12, 1, 0.2, 1), opacity 2s ${(props) =>
            typeof props.delay === 'number' ? (props.delay + 0.2).toString() + 's' : '.1s'} cubic-bezier(0.12, .4, 0.2, 1);
    line-height: inherit;


    /* transition: opacity 3s cubic-bezier(0.12, .4, 0.2, 1); */
    /* transition-delay: ${(props) =>
        typeof props.delay === 'number' ? props.delay.toString() + 's' : '.5s'}; */

    &.is-inview {
        transform: translateY(0);
        opacity: 1;
    }
`;