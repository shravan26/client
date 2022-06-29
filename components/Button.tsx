import React from "react";
import styled from "styled-components";
import { mobile } from "../styles/responsive";

const ButtonBlock = styled.div`
    display : flex;
    width : 13%;
    margin-top: 35px;
    ${mobile({
        width : '80%'
    })}
`;
const CustomButton = styled.button`
    background : rgba(255, 255, 255, 0.16);
    height : 52px;
    width : 100%;
    border : none;
    border-radius : 5px;
    color : white;
    &:hover{
        border : 1px solid #009688;
        cursor : pointer;
    }  
`;
interface ButtonProps {
    label: string;
    handleClick : React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <ButtonBlock>
            <CustomButton onClick={props.handleClick}>{props.label}</CustomButton>
        </ButtonBlock>
    );
};

export default Button;
