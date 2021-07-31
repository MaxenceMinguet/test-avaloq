import React from 'react'
import styled from 'styled-components';

const ContainerStyle = styled.div<{ width: string }>`
    ${({ width }) =>
    `
    width: ${width};
  `}
  display: inline-block;
`;

export interface ContainerProps {
    width?: string;
    children?: JSX.Element
}

const Container: React.FC<ContainerProps> = ({ width = "20%", children }: ContainerProps) => {
	return (
        children ? 
        <ContainerStyle width={width}>
            {children}
        </ContainerStyle> :
        <ContainerStyle width={width} />
	)
}

export default Container