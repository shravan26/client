import axios, { AxiosError } from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import InputField from "../components/InputField";
import LinkText from "../components/LinkText";
import Logo from "../components/Logo";
const HomeBlock = styled.div`
    background-image: url("background-logo.png");
    background-repeat: no-repeat;
    background-position: right;
    background-size: auto 100%;
    background-attachment: fixed;
    width: 100vw;
    height: 100vh;
    position: relative;
`;
const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;
const LinkWrapper = styled.div`
    margin-top: 48px;
`;
const DroppingEffect = keyframes`
    0% {
        top : -100px;
    }
    100% {
        top : 20px;
    }
`;
const ToastWrapper = styled.div`
    position: absolute;
    top : 20px;
    animation: ${DroppingEffect} 1s ease-in-out ;
`;

const Home: NextPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setErrorMessage("");
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setErrorMessage("");
        setPassword(e.target.value);
    };
    const handleSubmit = async (): Promise<void> => {
        try {
            const response = await axios.post(
                "https://neos.care:8888/api/login",
                {
                    email,
                    password,
                }
            );
            setMessage(await response.data.message);
        } catch (error) {
            let message = error as AxiosError | any;
            setErrorMessage(message.response.data.message);
        }
    };
    return (
        <HomeBlock>
            <Head>
                <title>Neos Healthtech</title>
            </Head>
            {/* <ToastWrapper>
                <Toast success={message} />
            </ToastWrapper> */}
            <InputWrapper>
                <Logo />
                <InputField
                    label="EMAIL"
                    handleChange={handleEmailChange}
                    value={email}
                    error={errorMessage}
                />
                <InputField
                    label="PASSWORD"
                    handleChange={handlePasswordChange}
                    value={password}
                    error={errorMessage}
                    type="password"
                />
                <Button label="LOGIN" handleClick={handleSubmit} />
                <Checkbox />
                <LinkWrapper>
                    <LinkText text="FORGOT PASSWORD?" href="/ForgotPassword" />
                </LinkWrapper>
            </InputWrapper>
        </HomeBlock>
    );
};

export default Home;
