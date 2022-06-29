import React from "react";
import styled from "styled-components";
import Link from "next/link";

const LinkTextBlock = styled.div``;
const Text = styled.div`
    color: rgba(255, 255, 255, 0.6);
    font-size: 10px;
    line-height: 17px;
    text-decoration : underline;
`;
interface LinkTextProps {
    href: string;
    text : string;
}

const LinkText: React.FC<LinkTextProps> = (props) => {
    return (
        <LinkTextBlock>
            <Link href={props.href}>
                <Text>{props.text}</Text>
            </Link>
        </LinkTextBlock>
    );
};

export default LinkText;
