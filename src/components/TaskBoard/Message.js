import styled from 'styled-components';

const Message = styled.div`
    position: fixed;
    width: 400px;
    height: 22px;
    top: 300;
    right: 0;
    margin: 1em;    
    padding: 0.5em 0.5em;
    border-radius: 6px;
    background-color: ${props => props.bcolor};
    color: ${props => props.color};
    opacity: 1;
    border: 2px solid ${props => props.color};
    font-size: 15px;
`;

export default Message;