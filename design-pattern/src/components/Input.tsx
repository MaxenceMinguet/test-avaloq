import React from 'react'
import styled from 'styled-components';

const InputDefault = styled.input`
    display: inline-block;
    width: 215px;
    padding: 10px 45px 10px 100px;
    font-family: "Open Sans", sans;
    font-weight: 400;
    border: 0;
    border-radius: 3px;
    outline: 0;
    text-indent: 70px;
    transition: all 0.3s ease-in-out;
    border: 1px solid;
    color: #4f9cda;
`;

const InputValid = styled(InputDefault)`
    color: #377d6a;
`;

const InputError = styled(InputDefault)` 
    color: #a24653;
`;

const LabelDefault = styled.label` 
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 15px;
    text-shadow: 0 1px 0 rgb(19 74 70 / 40%);
    transition: all 0.3s ease-in-out;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    color: #fff;
    background: #4f9cda;
`;

const LabelValid = styled(LabelDefault)`
    background: #377d6a;
`;

const LabelError = styled(LabelDefault)` 
    background: #a24653;
`;

const Container = styled.span`
    position: relative;
    display: inline-block;
    margin: 30px 10px;    
    margin-left: 20%;
}
`;

const SuffixDefault = styled.span`
    position: absolute;    
    font-family: "Open Sans", sans;
    font-weight: 800;
    top: 10px;
    right: 6px;
    color: #4f9cda;
}
`;

const SuffixValid = styled(SuffixDefault)`
    color: #377d6a;
`;

const SuffixError = styled(SuffixDefault)` 
    color: #a24653;
`;

export interface InputProps {
    value?: string;
    onChange?: any;
    type?: string;
    isValid?: boolean;
    readonly?: boolean;
  }

const InputAmount: React.FC<InputProps> = ({ value, onChange, type = "text" }: InputProps) => {
	return (
        <Container>
            <LabelDefault>Add an amount</LabelDefault>
            <InputDefault type={type} value={value} onChange={onChange} id="amount" placeholder="Enter an amount"/>
            <SuffixDefault>CHF</SuffixDefault>
        </Container>
	)
}

const InputLock: React.FC<InputProps> = ({ value, onChange, type = "text", isValid }: InputProps) => {
	return (
        <>
        { isValid ?
            (<Container>
                <LabelValid>Positive balance</LabelValid>
                <InputValid type={type} value={value} onChange={onChange} id="amount" disabled />
                <SuffixValid>CHF</SuffixValid>
            </Container>) :
            (<Container>
                <LabelError>Negative balance</LabelError>
                <InputError type={type} value={value} onChange={onChange} id="amount" disabled />
                <SuffixError>CHF</SuffixError>
            </Container>)
        }
        </>
	)
}

const Input: React.FC<InputProps> = (props: InputProps) => {
	return (
        <>
        { props.readonly ?
            <InputLock {...props} /> : <InputAmount  {...props} />
        }
        </>
	)
}

export default Input
