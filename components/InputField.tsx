import React from "react";
import styled from "styled-components";
import { mobile } from "../styles/responsive";
import ErrorMessage from "./ErrorMessage";

type InputFieldTypes = {
    width?: string;
};

const InputFieldBlock = styled.div<InputFieldTypes>`
    width: ${(props) => (props.width ? props.width : "60%")};
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    ${mobile({
        margin: "10px 0",
        width:"80%",
    })}
`;

const InputLabel = styled.label`
    padding: 4px;
    font-size: 12px;
    font-weight: 500;
    color: white;
    line-height: 17px;
    ${mobile({
        fontSize : '12px',
    })}
`;
const Input = styled.input`
    background: rgba(255, 255, 255, 0.08);
    border: none;
    border-radius: 5px;
    width: 100%;
    height: 46px;
    color: white;
    font-size: 14px;
    padding-left : 10px;
    &:hover {
        border: 1px solid #009688;
    }
    &:focus {
        outline: none;
        border: 1px solid #009688;
    }
`;

interface InputFieldProps {
    label: string;
    width?: string;
    handleChange : React.ChangeEventHandler<HTMLInputElement>;
    value: string;
    error : string;
    type? : string;
}

const InputField: React.FC<InputFieldProps> = (props) => {
    return (
        <InputFieldBlock width={props.width}>
            <InputLabel>{props.label}</InputLabel>
            <Input onChange={props.handleChange} value={props.value} type={props.type}/>
            <ErrorMessage errorMessage={props.error}/>
        </InputFieldBlock>
    );
};

export default InputField;
