import React,{useState} from "react";
import styled from "styled-components";
import { mobile } from "../styles/responsive";

type CheckboxType = {
    truth : boolean;
}
const CheckboxBlock = styled.div`
    display: flex;
    width: 13%;
    justify-content: center;
    ${mobile({
        width : '80%',
        justifyContent : 'center',
    })}
`;
const CheckboxInput = styled.input`
    position: relative;
    display : none;
   
`;
const CustomCheckBox = styled.div<CheckboxType>`
    width : 15px;
    height :15px;
    background : ${props => props.truth ? '#00695C' : 'transparent' };
    transition : background ease-in-out 400ms;
    position: absolute;
    border-radius : 2px; 
    border : 1px solid lightgray;
    &::after {
        content: "REMEMBER ME";
        color: rgba(255, 255, 255, 0.6);
        font-size : 10px;
        line-height: 15px;
        text-align : center;
        position : absolute;
        width: max-content;
        left: 30px;
    }
    ${mobile({
        
    })}
`;
const CheckboxWrapper = styled.div`
    display :flex;
    width : 100%;
    margin-left: 30px;
    margin-top: 18px;
    position : relative; 
    ${mobile({
        marginLeft: '30%',
    })}
`;
interface CheckboxProps {}

const Checkbox: React.FC<CheckboxProps> = (props) => {
    const [checked,setChecked] = useState(false);
    const toggleCheckbox = () => {
        setChecked(!checked);
        console.log(checked);
    }

    return (
        <CheckboxBlock>
            <CheckboxWrapper>
                <CheckboxInput type="checkbox" checked={checked}/>
                <CustomCheckBox onClick={toggleCheckbox} truth={checked}>

                </CustomCheckBox>
            </CheckboxWrapper>
        </CheckboxBlock>
    );
};

export default Checkbox;
