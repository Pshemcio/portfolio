import styled, { css, keyframes } from "styled-components"
import { useEffect, useState } from 'react';
import { send } from 'emailjs-com';
import Theme from "../Settings/theme";
import { TextReveal } from "./ContentReveal";
import { Loader } from "@styled-icons/remix-line";

let {
    colors: {
        secondaryColor,
        tertiaryColor,
        primaryColor,
        primaryColorLight
    },
    breakpoints
} = Theme;

const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`

const formBase = css`
    display: block;
    width: 100%;
    background-color: ${primaryColorLight};
    color: ${secondaryColor};
    border: none;
    padding: 15px;
    outline: none;
    margin: 4px 0 24px;
    font-size: 16px;
    opacity: 0;
    transition: opacity .6s .1s ease-in-out;

    &.is-inview {
        opacity: 1;
    }
`;

const FormContainer = styled.form`
    position: relative;
    max-width: 600px;
    margin: 0 auto;
`

const InputGroup = styled.div`
    position: relative;
`

const ErrorMessage = styled.span`
    position: absolute;
    top: 100%;
    width: 100%;
    font-size: 14px;
    color: ${tertiaryColor};
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

    @media ${breakpoints.xs} {
        min-height: 40vh;
    }
`

const StyledSubmit = styled.button`
    ${formBase};
    background-color: ${secondaryColor};
    color: ${primaryColor};
    text-transform: uppercase;
    font-weight: 600;
    margin: 45px 0;
    cursor: pointer;
    border: 1px solid ${secondaryColor};
    transition: background-color .4s, opacity .4s, color .4s;

    @media ${breakpoints.md} {
        font-size: clamp(16px, 2vw, 22px);
    }

    &:focus,
    &:hover {
        background-color: transparent;
        color: ${secondaryColor};
    }

    ${props =>
        props.isSubmitted &&
        css`
            background-color: transparent;
            color: ${secondaryColor};
            opacity: .2;
            pointer-events: none;
        `
    }
`

const SubmitInfo = styled.p`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: clamp(12px, 3.5vw, 20px);
    color: ${tertiaryColor};
    transition: opacity .4s;
    opacity: ${(props) => (props.isSubmitted ? "1" : "0")};
    overflow: hidden;
`

const LoaderContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    z-index: 1;
    pointer-events: ${(props) => (props.isReadyToSubmit ? "all" : "none")};
    opacity: ${(props) => (props.isReadyToSubmit ? "1" : "0")};
    transition: opacity .5s;
`

const LoaderStyled = styled(Loader)`
    color: ${secondaryColor};
    width: 80px;
    animation: ${rotate} 3s linear infinite both;
`

export const FooterForm = () => {
    const SERVICE_KEY = process.env.REACT_APP_FORM_SERVICE_KEY;
    const TEMPLATE_KEY = process.env.REACT_APP_FORM_TEMPLATE_KEY;
    const USER_KEY = process.env.REACT_APP_FORM_USER_KEY;

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);
    const [submitInfoMessage, setSubmitInfoMessage] = useState("");

    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    const textValidation = (fieldName, fieldValue) => {
        if (fieldValue.trim() === '') {
            return `Proszę wpisać ${fieldName}`;
        }
        if (fieldValue.trim().length < 3) {
            return `${fieldName} musi mieć conajmniej trzy znaki`;
        }
        return null;
    };

    const emailValidation = email => {
        if (
            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                email,
            )
        ) {
            return null;
        }
        if (email.trim() === '') {
            return 'Proszę wpisać email';
        }
        return 'Proszę wpisać POPRAWNY email';
    };

    const handleErrors = (name, email, message) => {
        setErrors({
            name: textValidation("imię", name),
            email: emailValidation(email),
            message: textValidation("wiadomość", message)
        });
    };

    useEffect(() => {
        const validation = () => {
            for (const error in errors) {
                if (Object.hasOwnProperty.call(errors, error)) {
                    const element = errors[error];
                    if (element === null) {
                        console.log("okie!");
                    } else return;
                };
            };

            setIsReadyToSubmit(true);

            send(
                SERVICE_KEY,
                TEMPLATE_KEY,
                toSend,
                USER_KEY
            )
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setSubmitInfoMessage("Poszło! Odezwę się najszybciej jak to możliwe!");
                    setIsSubmitted(true);
                    setIsReadyToSubmit(false);
                    resetFields();
                })
                .catch((err) => {
                    console.log('FAILED...', err);
                    setSubmitInfoMessage("Coś poszło nie tak, użyj maila poniżej. :(");
                    setIsReadyToSubmit(false);
                });
        };

        validation();
    }, [errors]); //eslint-disable-line react-hooks/exhaustive-deps

    const resetFields = () => {
        setToSend({
            from_name: '',
            message: '',
            reply_to: '',
        });

        setErrors({
            name: "",
            email: "",
            message: ""
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (isSubmitted) {
            return;
        };

        handleErrors(toSend.from_name, toSend.reply_to, toSend.message);
    };

    return (
        <FormContainer id="footer-form" onSubmit={onSubmit} noValidate>
            <LoaderContainer isReadyToSubmit={isReadyToSubmit}>
                <LoaderStyled />
            </LoaderContainer>
            <InputGroup>
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
                <ErrorMessage>{errors.name}</ErrorMessage>
            </InputGroup>
            <InputGroup>
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
                <ErrorMessage>{errors.email}</ErrorMessage>
            </InputGroup>
            <InputGroup>
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
                <ErrorMessage>{errors.message}</ErrorMessage>
            </InputGroup>
            <StyledSubmit
                className="cursor_hover"
                type='submit'
                data-scroll
                isSubmitted={isSubmitted}
            >
                Wyślij!
            </StyledSubmit>
            <SubmitInfo isSubmitted={isSubmitted}>
                {submitInfoMessage}
            </SubmitInfo>
        </FormContainer>
    )
};