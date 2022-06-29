import React from 'react';
import styled from 'styled-components';
import { mobile } from '../styles/responsive';

const LogoBlock = styled.div`
    
    display: flex;
    font-size : 40px;
    letter-spacing : 0.8rem;
    line-height : 40px;
    color : white;
    margin-bottom : 60px;
    ${mobile({
      fontSize : '20px',
      textAlign : 'center',
      marginBottom : '30px'
    })}
`;

interface LogoProps {}

const Logo: React.FC<LogoProps> = props => {
  return <LogoBlock>
    NEOS HEALTHTECH
  </LogoBlock>;
};

export default Logo;
