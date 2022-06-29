import * as React from 'react';
import styled from 'styled-components';

const ErrorMessageBlock = styled.div`
    position : relative;
`;

const ErrorMessageWrapper = styled.div`
    position :absolute;
    color : red;
    font-size : 10px;
`;

interface ErrorMessageProps {
    errorMessage: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = props => {
  return <ErrorMessageBlock>
    <ErrorMessageWrapper>{props.errorMessage && props.errorMessage}</ErrorMessageWrapper>
  </ErrorMessageBlock>;
};

export default ErrorMessage;
