import styled, { css } from "styled-components"
import { useState } from 'react';
import { send } from 'emailjs-com';
import Theme from "../Settings/theme";
import { TextReveal } from "./ContentReveal";

let {
    colors: {
        secondaryColor,
        tertiaryColor,
        primaryColor,
        primaryColorLight
    },
    typography: {
        secondaryFont
    }
} = Theme;

const formBase = css`
    display: block;
    width: 100%;
    background-color: ${primaryColorLight};
    color: ${secondaryColor};
    border: none;
    padding: 15px;
    outline: none;
    margin: 4px 0 20px;
    font-size: 16px;
    opacity: 0;
    transition: opacity .6s .1s ease-in-out;

    &.is-inview {
        opacity: 1;
    }
`;

const FormContainer = styled.form`
    max-width: 600px;
    margin: 0 auto;
`

const StyledLabel = styled.label`
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 14px;
`

const StyledInput = styled.input`
    ${formBase};
`

const StyledTextarea = styled.textarea`
    ${formBase};
    min-height: 25vh;
`

const StyledSubmit = styled.button`
    ${formBase};
    background-color: ${tertiaryColor};
    color: ${primaryColor};
    text-transform: uppercase;
    font-weight: 600;
    margin-top: 35px;
`

export const FooterForm = () => {
    const SERVICE_KEY = process.env.REACT_APP_FORM_SERVICE_KEY;
    const TEMPLATE_KEY = process.env.REACT_APP_FORM_TEMPLATE_KEY;
    const USER_KEY = process.env.REACT_APP_FORM_USER_KEY;

    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
    });

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            SERVICE_KEY,
            TEMPLATE_KEY,
            toSend,
            USER_KEY
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };

    return (
        <FormContainer onSubmit={onSubmit}>
            <StyledLabel htmlFor="from_name">
                <TextReveal data-scroll delay={.2} transparent>
                    imię:
                </TextReveal>
            </StyledLabel>
            <StyledInput
                type='text'
                name='from_name'
                placeholder='Jak się do Ciebie zwracać?'
                value={toSend.from_name}
                onChange={handleChange}
                data-scroll
            />
            <StyledLabel htmlFor="reply_to">
                <TextReveal data-scroll delay={.3} transparent>
                    email:
                </TextReveal>
            </StyledLabel>
            <StyledInput
                type='email'
                name='reply_to'
                placeholder='Muszę jakoś odpowiedzieć!'
                value={toSend.reply_to}
                onChange={handleChange}
                data-scroll
            />
            <StyledLabel htmlFor="message">
                <TextReveal data-scroll delay={.4} transparent>
                    wiadomość:
                </TextReveal>
            </StyledLabel>
            <StyledTextarea
                type='text'
                name='message'
                placeholder='Tu może być cokolwiek ale będę bardzo szczęśliwy jeśli będzie to oferta pracy :)'
                value={toSend.message}
                onChange={handleChange}
                data-scroll
            />

            <StyledSubmit type='submit' data-scroll>
                Wyślij!
            </StyledSubmit>
        </FormContainer>
    )
};