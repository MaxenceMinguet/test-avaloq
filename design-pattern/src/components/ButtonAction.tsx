import React from 'react'
import styled from 'styled-components';
import ActionEnum from '../type/ActionEnum';

const Button = styled.button` 
    color: #fff;
    border: none;
    padding: 10px 18px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    border-radius: 3px;
    margin: 0px 1px;
    cursor: pointer;
`;

const ButtonSubtract = styled(Button)` 
    background: #a24653;
`;

const ButtonAdd = styled(Button)` 
    background: #377d6a;
`;

export interface ButtonActionProps {
    action: ActionEnum;
    onClick :  (action: ActionEnum) => void;
}

const ButtonAction: React.FC<ButtonActionProps> = ({ action, onClick }: ButtonActionProps) => {
	return (
        action === ActionEnum.Add ? 
        <ButtonAdd  onClick={() => onClick(ActionEnum.Add)}>+</ButtonAdd> :
        <ButtonSubtract  onClick={() => onClick(ActionEnum.Subtract)} >-</ButtonSubtract>
	);
}

export default ButtonAction