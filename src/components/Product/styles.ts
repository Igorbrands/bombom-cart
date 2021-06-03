import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* flex: 0 1 auto; */

  width: 12.5rem;
  height: 12.5rem;
  margin: 1.5rem;
  img {
    width: 6.25rem;
    height: 6.25rem;
    border: 1px solid #4b46cd;
    background: #fff;
  }
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: pre-wrap;
  font-size: 0.875rem;
  font-weight: 700;
  text-align: center;
`;

export const Button = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #3b74f2;
  color: #fff;

  border-radius: 0.25rem;
  padding: 0.5rem;
  width: 12.5rem;
  cursor: pointer;
  transition: opacity 0.25s;
  :hover {
    transform: scale(1.01);
  }
  :active {
    transform: scale(0.99);
  }
`;
