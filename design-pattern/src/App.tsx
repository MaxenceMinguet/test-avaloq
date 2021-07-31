import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import ButtonAction from './components/ButtonAction';
import Container from './components/container';
import Input from './components/Input';
import ActionEnum from './type/ActionEnum';

const H1 = styled.h1`
	text-align: center;
`;

const Paragraph = styled.p`
	text-align: center;
	margin-top: 100px;
`;

const Link = styled.a`
	text-align: center;
	display: block;
`;

const App: React.FC = () => {
    const [isInvalid, setIsInvalid] = useState<boolean>(true);
    const [balance, setBalance] = useState<number>(100000);
    const [amount, setAmount] = useState<number>(100);

	const onClickButton = (action: ActionEnum) => {
				if (action === ActionEnum.Add) {
				setBalance(balance + Number(amount));
		} else {
			setBalance(balance - Number(amount));			
		}
	} 

	const onChangeAmount = (e: any) => {
		if (e.target.value) {
			setAmount(Number(e.target.value));
		}
	} 

	useEffect(() => {
		setIsInvalid(Number(balance) >= 0);
	  }, [balance]);

	return (
		<>
			<Container width="100%" >
				<H1>Demonstration of state pattern</H1>
			</Container>
			<Container width="50%" >
				<>
					<Input type="number" value={amount as any} onChange={(e: any) => onChangeAmount(e)}/>
					<Container width="10%">
						<>
							<ButtonAction action={ActionEnum.Add} onClick={onClickButton} />
							<ButtonAction action={ActionEnum.Subtract} onClick={onClickButton} />
						</>
					</Container>
				</>
			</Container>
			<Container width="50%">
				<Input type="number" value={balance as any} isValid={isInvalid} readonly/>
			</Container>
			<Container width="100%" >
				<>
					<Paragraph>Depending on whether the balance is negative or positive, the state changes</Paragraph>
					<Link href="https://en.wikipedia.org/wiki/State_pattern" target="_blank">https://en.wikipedia.org/wiki/State_pattern</Link>
				</>
			</Container>
		</>
	)
}

export default App
