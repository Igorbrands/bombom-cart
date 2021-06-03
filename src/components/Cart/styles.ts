import styled from 'styled-components/macro';

export const Container = styled.aside`
  width: 25rem;
  display: flex;
  flex-flow: column;
  height: 100%;

  @media (max-width: 800px) {
    width: 100vw;
  }
`;
export const CartHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-bottom: 1px solid #c2c2c2;
  padding: 1rem;
  flex: 0 1 auto;
  svg {
    cursor: pointer;
    position: fixed;
    top: 0.625rem;
    right: 0.625rem;
  }
`;

export const CartContent = styled.div`
  flex: 1 1 auto;
`;
export const ContainerBottom = styled.div`
  flex: 0 1 auto;
`;

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #c2c2c2;
  padding: 1.5rem;

  > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;
  }
  div + div {
    justify-content: center;
  }
`;
export const ContainerButton = styled.div`
  border-top: 1px solid #c2c2c2;
  padding: 1.5rem;
  button {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;

    background: #3b74f2;
    color: #fff;

    border-radius: 0.25rem;
    padding: 0.5rem;
    width: 100%;
    cursor: pointer;
    transition: all 0.2s;
    :hover {
      transform: scale(1.01);
      opacity: 0.9;
    }
    :active {
      transform: scale(0.99);
    }
  }
`;

export const FreeDeliver = styled.div`
  padding: 0.5rem;
  border-radius: 1.5rem;
  background: #c7ffa6;
  color: #508800;
  font-size: 0.875rem;
`;
