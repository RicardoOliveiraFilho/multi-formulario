import styled from 'styled-components';

export const Container = styled.div`
  background-color: #02044A;
  color: #FFFFFF;
  min-height: 100vh;
`;

export const Content = styled.div`
  margin: auto;
  max-width: 980px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.div`
  flex: 1;
  display: flex;
`;

export const SideBarArea = styled.div`
  width: 250px;
  border-right: 1px solid #16195C;
`;

export const PageStepArea = styled.div`
  flex: 1;
  padding-left: 40px;
  padding-top: 40px;
`;