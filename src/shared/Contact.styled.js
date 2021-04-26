import styled, { css } from 'styled-components';
import { Theme } from '../Settings';

const {
    tertiaryColor,
} = Theme.colors;

export const ContactWrapper = styled.div`
    min-height: 200vh;
    background-color: ${tertiaryColor};
`