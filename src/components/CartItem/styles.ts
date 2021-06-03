import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1.5rem;
  img {
    width: 5rem;
    height: 5rem;
    border: 2px solid #c3c3c3;
    background: #fff;
  }
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  font-weight: 700;

  margin-left: 1.5rem;

  p {
    color: #c3c3c3;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 6.25rem;
  }

  svg {
    cursor: pointer;
  }
`;
