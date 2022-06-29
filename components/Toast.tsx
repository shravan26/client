import * as React from "react";
import styled from "styled-components";

const ToastBlock = styled.div`
    width: 400px;
    height: 80px;
    background: black;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 10px;
    -webkit-box-shadow: 6px 7px 4px -2px rgba(18, 18, 18, 0.69);
    -moz-box-shadow: 6px 7px 4px -2px rgba(18, 18, 18, 0.69);
    box-shadow: 6px 7px 4px -2px rgba(18, 18, 18, 0.69);
`;
const ToastStatus = styled.div`
    height: 30px;
    width: 30px;
    background: green;
    border-radius: 50%;
`;
const ToastMessage = styled.div`
    color: white;
`;
interface ToastProps {
    success: string;
}

const Toast: React.FC<ToastProps> = (props) => {
    return (
        <ToastBlock>
            <ToastStatus></ToastStatus>
            <ToastMessage>{props.success}</ToastMessage>
        </ToastBlock>
    );
};

export default Toast;
