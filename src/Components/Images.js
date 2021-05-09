import styled from 'styled-components';

export const ImageWrapper = styled.div`
    background-color: transparent;
    overflow: hidden;
    margin: ${(props) => (props.project ? "20px 0" : "7px 0")};
`;

export const RevealImage = styled.div`
    background-color: transparent;
    transform: translateX(-100%);
    overflow: hidden;
    transition: transform 1s .2s cubic-bezier(.87,.03,.12,1);
    &.is-inview {
        transform: translateX(0);

        img {
            transform: translateX(0) scale(1);
        }
    }
`;

export const Image = styled.img`
    width: 100%;
    transform: translateX(100%) scale(1.4);
    transform-origin: left;
    transition: transform 1s .2s cubic-bezier(.87,.03,.12,1);
`