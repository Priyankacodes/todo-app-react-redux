import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 37px;
  left: 0;
  margin-left: auto;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.bodyColor};
  overflow-y: scroll; 
`;

export default Wrapper;