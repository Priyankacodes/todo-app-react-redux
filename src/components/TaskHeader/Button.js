import styled from 'styled-components';

const Button = styled.button`
    height: 40px;
    font-size: 12px;
    padding: 10px;
    color: white;
    background-color: ${props => props.color};
`;

export default Button;