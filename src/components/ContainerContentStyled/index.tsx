import styled from 'styled-components';


export const ContainerContentStyled = styled.div`
  font-family: ${props => props.theme.fontFamily.first};
  color: ${props => props.theme.color.first};
  background-color: rgba(255, 255, 255, 0.6);
  padding: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
  @media (min-width: 768px) {
    padding: 20px;
  }
`;