import styled from 'styled-components';

export const ImageWrapper = styled.div`
    background-color: transparent;
    overflow: hidden;
    margin: ${(props) => (props.project ? "20px 0" : "7px 0")};
    height: ${(props) => (props.project ? "auto" : "50vh")};
`;

export const RevealImage = styled.div`
    background-color: transparent;
    transform: translateX(-100%);
    overflow: hidden;
    height: 100%;
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
    height: 100%;
    object-fit: ${(props) => (props.project ? "contain" : "cover")};
    transform: translateX(100%) scale(1.4);
    transform-origin: left;
    transition: transform 1s .2s cubic-bezier(.87,.03,.12,1);
`