import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: ${props => props.theme.navbarcolor};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 6%;
`;

export default Wrapper;