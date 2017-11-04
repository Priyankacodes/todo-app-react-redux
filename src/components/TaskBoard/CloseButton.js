import styled from 'styled-components';

const CloseButton = styled.button`
    margin-left: 15px;
    color: ${props => props.color};
    font-weight: bold;
    float: right;
    font-size: 16px;
    background-color: transparent;
    border: transparent;
`;

export default CloseButton;