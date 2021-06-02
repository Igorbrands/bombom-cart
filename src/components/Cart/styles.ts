import styled from 'styled-components';

export const Container = styled.aside`
  width: 500px;
  padding: 20px;
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-top: 1px solid #c2c2c2;

  > div {
    display: flex;
    justify-content: space-between;
  }
`;
export const ContainerButton = styled.div`
  border-top: 1px solid #c2c2c2;
`;

export const FreeDeliver = styled.div`
  display: flex;
  align-self: center;
  padding: 8px;
  border-radius: 24px;
  background: #c7ffa6;
  color: #508800;
`;
