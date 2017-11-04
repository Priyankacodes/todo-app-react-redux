import styled from 'styled-components';

const Button = styled.button`
    margin: 1em 0.25em;
    font-size: 14px;
    padding: 0.5em;
    color: white;
    border-radius: 4px;
    border: 1px solid ${props => props.color};
    background-color: ${props => props.color};
`;

export default Button;