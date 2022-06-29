import React from 'react';
import styled from 'styled-components';

const WrapperBlock = styled.div`
    background : #121212;
    width: 100%;
    height: 100%;
`;

interface WrapperProps {}

const Wrapper: React.FC<WrapperProps> = props => {
  return <WrapperBlock></WrapperBlock>;
};

export default Wrapper;
